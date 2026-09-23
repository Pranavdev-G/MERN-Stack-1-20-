const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();

const PORT = 3000;


// Student Schema
const studentSchema = new mongoose.Schema({
    id: Number,
    name: String,
    department: String,
    email: String,
    marks: Number
});


// Student Model
const Student = mongoose.model("Student", studentSchema);


// MongoDB Connection
mongoose.connect(process.env.MONGO_URI)
    .then(async () => {

        console.log("MongoDB connected successfully");

        // Check whether student already exists
        const existingStudent = await Student.findOne({
            id: 101
        });

        if (!existingStudent) {

            const student = new Student({
                id: 101,
                name: "Pranav",
                department: "DCS",
                email: "pranav@gmail.com",
                marks: 85
            });

            await student.save();

            console.log("Student inserted successfully");

        } else {

            console.log("Student already exists");

        }

    })
    .catch((error) => {

        console.log("MongoDB connection failed");
        console.log(error.message);

    });


// Home Route
app.get("/", (req, res) => {
    res.send("Node.js and MongoDB Application");
});


// Start Server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});