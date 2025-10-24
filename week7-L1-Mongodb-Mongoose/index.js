const express = require("express");
const {UserModel, TodoModel} = require("./db");
const {auth, JWT_SECRET} = require("./auth");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://anamiikkkaaaa:<password>.420@cluster0.nqvlen2.mongodb.net/todo-app-database");

mongoose.connection.on("connected", () => {
  console.log("MongoDB connected ✅");
});

mongoose.connection.on("error", (err) => {
  console.error("MongoDB connection error ❌", err);
});

const app = express();
app.use(express.json());
//CRUD
app.post("/signup", async (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    const name = req.body.name;

    await UserModel.create({      //.insert returns a promise so we should await it(good practice)
        email:email,
        password: password,   //we're using bcrypt library for hash and salt
        salt: salt,
        name: name
    });
    res.json({
        message: "you have signed up"
    });
}); // Create

app.post("/signin", async (req, res) => {
    const email = req.body.email;
    const password = req.body.password;

    const user = await UserModel.findOne({
        email: email,
        password: password
    });

    console.log(user);

    if(user){
        const token = jwt.sign({
            id: user._id.toString()
        }, JWT_SECRET);
        res.json({
            token: token
        })
    }
    else{
        res.status(403).json({
            message:"incorrect credentials"
        });
    }
}); //Read

app.post("/todo", auth, async (req, res) => {
    const userId = req.userId;
    const title = req.body.title;
    const done = req.body.done;

    await TodoModel.create({
        userId,
        title,
        done
    })
    res.json({
        userId: userId
    });
});

app.get("/todos", auth, async (req, res) => {
    const userId = req.userId;
    const todos = await TodoModel.find({
        userId:userId
    })
    res.json({
        todos
    });
});

app.listen(3000);
