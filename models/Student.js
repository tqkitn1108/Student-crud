const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const StudentSchema = new Schema({
    studentID: Number,
    name: String,
    roll: Number,
    birthday: Date,
    address: String
});

module.exports = mongoose.model("student", StudentSchema, "students");