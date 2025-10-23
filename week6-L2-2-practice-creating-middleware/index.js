const express = require("express");

const app = express();

app.use(express.json());

let users = [];

function auth(req, res, next){
    const username = req.body.username;
    let loggedin = null;

    for(let i=0; i<users.length; i++){
        if(users[i].username==username){
            loggedin =users[i];
        }
    }
    
    if(loggedin){
        next();
    }
    else{
        res.send("you are not logged in");
    }
}
app.post("/login", (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    users.push({
        username: username,
        password: password
    })
    console.log(users);

    res.json({
        message: "you are logged in"
    })
});
app.post("/loggedinornot", auth, (req, res) => {
    res.send("you are logged in");
});
app.listen(3000);