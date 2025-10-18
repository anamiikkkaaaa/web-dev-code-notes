const express = require("express");

const app = express();

app.get('/ride1', (req, res) => {
    res.json({
        msg: "you have successfully riden the ride 1"
    })
})

app.listen(3000, () => console.log("server started")
);