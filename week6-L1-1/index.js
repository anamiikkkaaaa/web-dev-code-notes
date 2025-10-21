const express = require("express");

const app = express();
app.use(express.json());

const users = [];

//should return a random long string (token)
function generateToken(){
    let options = ['a','b','c','d','e','f','g','h','i','j','k','l','m',
        'n','o','p','q','r','s','t','u','v','w','x','y','z', 'A',
        'B','C','D','E','F','G','H','I','J','K','L','M',
        'N','O','P','Q','R','S','T','U','V','W','X','Y','Z'
    ];

    let token = "";
    for(let i=0; i<32; i++){
        token = token + options[Math.floor(Math.random()*options.length)]; //0=>42
    }
    return token;
}

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
    /** const user = users.find(function(u){
        if(u.username == username){
            return true;
        }
        else{
            return false;
        }
    }) **/
   if(foundUser){
    const token = generateToken();
    foundUser.token = token;
    res.json({
        message:token
    })
   }
   console.log(users);
});

app.listen(3000); // that the http server is listening on port 3000