const express = require("express");
const cors = require("cors");

const app = express();

app.use(express.json());//otherwise req.body will be undefined.
app.use(cors(
    //can add specific domains here if we want to
    //domains: [" ", " "]
    //hosts: 
));
/*
instead of using cors we can also host the front end and backend on the same domain
app.get("/", (req, res){
res.sendFile(__dirname + "./public/index.html");
})
*/
app.post("/sum", function(req, res){
    const a = parseInt(req.body.a);
    const b = parseInt(req.body.b);

    res.json({
        answer: a+b
    })
});

app.listen(3000);