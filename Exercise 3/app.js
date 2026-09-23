const mongoose = require("mongoose");
require("dotenv").config();


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


async function performCRUD() {

    try {

        // Connect to MongoDB
        await mongoose.connect(process.env.MONGO_URI);

        console.log("MongoDB connected successfully");


        // =========================
        // CREATE - INSERT
        // =========================

        const student = await Student.create({
            id: 102,
            name: "Vijay",
            department: "DCS",
            email: "vijay@gmail.com",
            marks: 90
        });

        console.log("\nStudent inserted:");
        console.log(student);


        // =========================
        // READ
        // =========================

        const students = await Student.find();

        console.log("\nAll Students:");
        console.log(students);


        // =========================
        // UPDATE
        // =========================

        const updatedStudent = await Student.findOneAndUpdate(
            { id: 102 },
            { marks: 95 },
            { new: true }
        );

        console.log("\nUpdated Student:");
        console.log(updatedStudent);


        // =========================
        // DELETE
        // =========================

        const deletedStudent = await Student.findOneAndDelete({
            id: 102
        });

        console.log("\nDeleted Student:");
        console.log(deletedStudent);


    } catch (error) {

        console.log("Error:", error.message);

    } finally {

        await mongoose.connection.close();

        console.log("\nMongoDB connection closed.");

    }
}


performCRUD();