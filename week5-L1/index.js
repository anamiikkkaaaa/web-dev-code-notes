const express = require("express");

const app = express();

app.get("/sum/:a/:b", (req, res) => {
    const a = parseInt(req.params.a);
    const b = parseInt(req.params.b);

    res.json({
        answer: a+b
    })
});

app.get("/difference", (req, res) => {
    const a = req.query.a;
    const b = req.query.b;

    res.json({
        answer: a-b
    })
});

app.get("/multiply", (req, res) => {
    const a = req.query.a;
    const b = req.query.b;

    res.json({
        answer: a*b
    })
});

app.get("/division", (req, res) => {
    const a = req.query.a;
    const b = req.query.b;

    res.json({
        answer: a/b
    })
});

app.listen(3000);