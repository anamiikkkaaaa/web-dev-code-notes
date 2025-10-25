// const express = require("express");
// const Router = express.Router; OR
//Router is a function
console.log("user");
const { Router } = require("express");

const userRouter = Router();

userRouter.post("/signup", (req, res) => {

});

userRouter.post("/login", (req, res) => {

});

userRouter.get("/purchases", (req, res) => {

});
module.exports = {
    userRouter: userRouter
}