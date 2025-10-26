const { Router } = require("express");
const adminRouter = Router();
console.log("admin");
const { adminModel, courseModel } = require("../db");
const bcrypt = require("bcrypt");
const { z } = require("zod");
const jwt = require("jsonwebtoken");
const { JWT_ADMIN_PASSWORD } = require("../config");
const { adminMiddleware } = require("../middleware/admin");

adminRouter.post("/signup", async (req, res) => {
    const requiredBody = z.object({
        email: z.string() , 
        password: z.string(),
        firstName: z.string(),
        lastName: z.string()
    });

    const parseDataWithSuccess = requiredBody.safeParse(req.body);

    if(!parseDataWithSuccess.success){
        res.status(400).json({
            message:"invalid credentials",
            error:parseDataWithSuccess.error.errors
        });
        return;
    }

    const { email, password, firstName, lastName } = parseDataWithSuccess.data;

    let errorThrown = false;

    try{
        const hashedPassword = await bcrypt.hash(password, 5);
        await adminModel.create({
            email,
            password: hashedPassword,
            firstName,
            lastName
        });
    }
    catch(e){
        res.status(409).json({
            message: "admin already exist"
        });
        errorThrown = true;
        console.log("error while putting in the database")
    }
    if(!errorThrown){
        res.status(201).json({
        message: "admin created succesfully"
    });
}
});

adminRouter.post("/signin", async (req, res) => {

    const { email, password } = req.body;

    const admin = await adminModel.findOne({
        email
    });

    if(!admin){
        res.status(403).json({
            message:"admin does not exist in our database"
        });
        return;
    }

    const passwordMatch = await bcrypt.compare(password, admin.password);

    if(passwordMatch){
        const token = jwt.sign({
            id: admin._id
        }, JWT_ADMIN_PASSWORD);

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

adminRouter.post("/course", adminMiddleware, async (req, res) => {
    const adminId =  req.adminId;

    const { title, description, imageUrl, price } = req.body;

    const course = await courseModel.create({
        //watch creating a web3 saas in 6 hours by harkirat
        title,
        description,
        imageUrl,
        price,
        adminId
    })

    res.json({
        message: "course created",
        courseId: course._id
    })
});

adminRouter.put("/course", async(req, res) => {
    const adminId = req.adminId;

    const {title, description, imageURL, price, courseId } = req.body;



    const course = await courseModel.findOneAndUpdate({ 
        _id: courseId,
        creatorId: adminId
    },
    {
        title,
        description,
        imageURL,
        price,
    },{
        new:true
    });


    if (!course) {
        return res.status(404).json({ message: "Course not found" });
    }

    res.json({
        message: "course updated",
        courseId: course._id
    });

});

adminRouter.get("/course/bulk", adminMiddleware, async (req, res) => {
    const adminId = req.adminId;

    const courses = await courseModel.find({ 
        creatorId: adminId
    });
    
    res.json({
        message: "course updated",
        courses
    });
});



module.exports = {
    adminRouter: adminRouter
}