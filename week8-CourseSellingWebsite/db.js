const mongoose = require("mongoose");
const { Schema } = mongoose;
const  ObjectId  = Schema.Types.ObjectId;
console.log("database connected");
//schema is a class and we're creating an object of that class hence new
const userSchema = new Schema({
    email: {type: String, unique: true},
    password: String,
    firstName: String,
    lastName: String,
});

const adminSchema = new Schema({
    email: {type: String, unique: true},
    password: String,
    firstName: String,
    lastName: String,
});

const courseSchema = new Schema({
    title: String, 
    description: String,
    price: Number,
    imageUrl: String,
    creatorId: ObjectId
});

const purchaseSchema = new Schema({
    userId: ObjectId,
    courseId: ObjectId
});

const userModel = mongoose.model("user", userSchema);
const adminModel = mongoose.model("admin", adminSchema);
const courseModel = mongoose.model("course", courseSchema);
const purchaseModel = mongoose.model("purchase", purchaseSchema);

module.exports = {
    userModel,
    adminModel,
    courseModel,
    purchaseModel
};