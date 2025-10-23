const express = require("express");
const jwt = require("jsonwebtoken");

const JWT_SECRET = "anailovebroccoli"

const app = express();

app.use(express.json());

const users = [];

app.post("/signup",  (req, res) => {
    
    const username = req.body.username;
    const password = req.body.password;

    users.push({
        username: username,
        password: password
    })

    res.json({
        message:"you are signed in"
    }); 
    console.log(users);
});
app.post("/signin", (req, res) => {
    
    const username = req.body.username;
    const password = req.body.password;
    
    let foundUser = null;

    for(let i=0; i<users.length; i++){
        if(users[i].username == username && users[i].password == password){
            foundUser = users[i]; //by reference
        }
    }
   if(foundUser){
    const token = jwt.sign({
        username: username
    }, JWT_SECRET);
    foundUser.token = token;
    res.json({
        message:token
    })
   }
   console.log(users);
});

app.get("/me", (req, res) => {
    const token = req.headers.token; //jwt
    const decodedInformation = jwt.verify(token, JWT_SECRET); //json object
    const username = decodedInformation.username;

    let foundUser = null;

    for(let i =0; i<users.length; i++){
        if (users[i].token == username){
            foundUser = users[i];
        }
    }

    if(foundUser){
        res.json({
            username:foundUser.username,
            password: foundUser.password
        })
    }
    else{
        res.json({
            message:"token invalid"
        })
    }
})
app.listen(3000); 