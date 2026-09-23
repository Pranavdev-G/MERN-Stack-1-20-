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
    .then(() => {

        console.log("MongoDB connected successfully");

    })
    .catch((error) => {

        console.log("MongoDB connection failed");
        console.log(error.message);

    });


// GET API
app.get("/api/students", async (req, res) => {

    try {

        const students = await Student.find();

        res.status(200).json(students);

    } catch (error) {

        res.status(500).json({
            message: "Error retrieving students",
            error: error.message
        });

    }

});


// Start Server
app.listen(PORT, () => {

    console.log(`Server running at http://localhost:${PORT}`);

});