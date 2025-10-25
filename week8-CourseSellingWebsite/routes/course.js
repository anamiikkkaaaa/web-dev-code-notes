const { Router } = require("express");
const courseRouter = Router();
console.log("course");
courseRouter.get("/preview", (req, res) => {

});

courseRouter.post("/purchase", (req, res) => {

});

module.exports = {
    courseRouter: courseRouter
}