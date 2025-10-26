// const express = require("express");
// const Router = express.Router; OR
//Router is a function
console.log("user");
const { Router } = require("express");
const { userModel } = require("../db");
const { z } = require("zod");
const userRouter = Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { JWT_USER_PASSWORD } = require("../config")

userRouter.post("/signup", async (req, res) => {
    const requiredBody = z.object({
        email:z.string().min(3).max(100).email(),
        password:z.string().min(5),
        firstName:z.string(),
        lastName: z.string()
    })

    const parseDataWithSuccess = requiredBody.safeParse(req.body);

    if(!parseDataWithSuccess.success){
        res.status(400).json({
            message:"invalid data",
            error:parseDataWithSuccess.error.errors
        });
        return;
    }
    const { email, password, firstName, lastName } = parseDataWithSuccess.data; 

    let errorThrown = false;
    try{

        const hashedPassword = await bcrypt.hash(password, 5);

        await userModel.create({
        email,
        password: hashedPassword, 
        firstName,
        lastName
        });
    }
    catch(e){
        res.status(409).json({
            message: "user already exist"
        });
        errorThrown = true;
        console.log("error while putting in the database")
    }

    if(!errorThrown){
        res.status(201).json({
        message: "User created succesfully"
    });
    }
    
});

userRouter.post("/signin", async (req, res) => {

    const { email, password } = req.body;

    const user = await userModel.findOne({
        email
    });

    if(!user){
        res.status(403).json({
            message:"user does not exist in our database"
        });
        return;
    }

    const passwordMatch = await bcrypt.compare(password, user.password);

    if(passwordMatch){
        const token = jwt.sign({
            id: user._id
        }, JWT_USER_PASSWORD);

        res.json({
            token: token
        });
    }
    else{
        res.status(403).json({
            message:"incorrect password"
        });
    }

});

userRouter.get("/purchases", (req, res) => {

});
module.exports = {
    userRouter: userRouter
}