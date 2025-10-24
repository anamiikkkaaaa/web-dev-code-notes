const express = require("express");
const {UserModel, TodoModel} = require("./db");
const {auth, JWT_SECRET} = require("./auth");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const { z } = require("zod");

mongoose.connect("mongodb+srv://anamiikkkaaaa:<password>@cluster0.nqvlen2.mongodb.net/todo-app-database-2");

mongoose.connection.on("connected", () => {
  console.log("MongoDB connected ✅");
});

mongoose.connection.on("error", (err) => {
  console.error("MongoDB connection error ❌", err);
});

const app = express();
app.use(express.json());

//CRUD
//on a single request you can only send back the response once

app.post("/signup", async (req, res) => {
    
    //we need to add input validation
    //Zod library does runtime checks: for schema validation, object validation etc
    //check is pass has 1 lowercase 1 uppercase etc
    const requiredBody = z.object({
        email: z.string().min(3).max(100).email(),
        name: z.string(),
        password: z.string()
    });
    
    //const parseData = requiredBody.parse(req.body);
    const parseDataWithSuccess = requiredBody.safeParse(req.body);

    if(!parseDataWithSuccess.success){
        res.json({
            message: "incorrect forms",
            error: parseDataWithSuccess.error
        })
        return
    }
    const email = req.body.email;
    const password = req.body.password;
    const name = req.body.name;

    let errorThrown = false;

    try {
        const hashedPassword = await bcrypt.hash(password, 5); //promise based function
        console.log(hashedPassword);                           // three dots under await means await is not needed

        await UserModel.create({      //.insert returns a promise so we should await it(good practice)
            email:email,
            password: hashedPassword,   //we're using bcrypt library for hash and salt
            name: name
        });
    } 
    catch(e){
        res.json({
            message:"user already exist"
        });
        errorThrown = true;
        console.log("error while putting in the db");
    };

    if(!errorThrown){
        res.json({
            message:"you are signed up"
        })
    }
}); // Create

app.post("/signin", async (req, res) => {
    const email = req.body.email;
    const password = req.body.password;

    const response = await UserModel.findOne({
        email: email
    });

    if(!response){
        res.status(403).json({
            message:"user does not exist in our db"
        })
        return 
    }

    const passwordMatch = await bcrypt.compare(password, response.password);
    console.log(response);

    if(passwordMatch){
        const token = jwt.sign({
            id: response._id.toString()
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
//we have to understand which is a callback based function
//and which is a promise based function
