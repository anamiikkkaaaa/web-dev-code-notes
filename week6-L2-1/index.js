const express = require("express");
const jwt = require("jsonwebtoken");

const JWT_SECRET = "analovesbroccoli";
const app = express();

app.use(express.json());

let users = [];
app.post("/signup", (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    users.push({
        username: username,
        password: password
    });

    res.json({
        message: "you have signed up"
    })

});

app.post("/signin", (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    let foundUser = null;

    for(let i=0; i<users.length; i++){
        if(users[i].username == username && users[i].password == password){
            foundUser = users[i];
        }
    }

    if(foundUser){
        const token = jwt.sign({
            username
        }, JWT_SECRET);
        foundUser.token = token;
        res.json({
            token: token
        });
    }
    else{
        res.json({
            message: "invalid credentials"
        }
    )};

    console.log(users);
});

app.get("/me", (req, res) => {
    const token = req.headers.token;
    const decodedData = jwt.verify(token, JWT_SECRET);
    const username = decodedData.username;

    if(decodedData.username){
        let foundUser = null;

        for(let i=0; i<users.length; i++){
            if(users[i].username == username){
                foundUser = users[i]
            }
        }

        res.json({
            username: foundUser.username,
            password: foundUser.password
        })
    }
});

app.listen(3000);