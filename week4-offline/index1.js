console.log("server is starting");
const express = require('express');

const app = express();

function isOldEnough(age){
    if(age >= 18)
        return true;
    else
        return false;
}

app.get('/ride1', (req, res) => {
    if(isOldEnough(req.query.age)){
        res.json({
            msg: "you have successfully riden the ride 1"
        })
    }
    else{
        res.status(411).json({
            msg:"sorry you're not of age yet"
        })
    }
})
app.listen(3000);
console.log("server started");