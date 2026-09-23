const express = require("express");

const app = express();

const PORT = 3000;


// Home Route
app.get("/", (req, res) => {
    res.send("Welcome to the Home Page");
});


// About Route
app.get("/about", (req, res) => {
    res.send("This is the About Page");
});


// Students Route
app.get("/students", (req, res) => {
    res.send("This is the Students Page");
});


// Contact Route
app.get("/contact", (req, res) => {
    res.send("This is the Contact Page");
});


// Start Server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});