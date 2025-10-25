const express = require("express");
const { userRouter } = require("./routes/user");
const { courseRouter } = require("./routes/course");
const { adminRouter } = require("./routes/admin");
const mongoose = require("mongoose");

const app = express();
console.log("index");
app.use(express.json());

app.use("/api/v1/user", userRouter); //all the prefixes of routes happens here
app.use("/api/v1/course", courseRouter);
app.use("/api/v1/admin", adminRouter);


async function main(){
    //figure out dotenv
    await mongoose.connect("mongodb+srv://anamiikkkaaaa:fortheloveofgod@cluster0.nqvlen2.mongodb.net/course-selling-app");

    app.listen(3000, () => {
    console.log("listening on port 3000");
    });
}
main();
