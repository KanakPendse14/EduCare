const mongoose = require('mongoose');

// Create a schema for the student model
const StudentSchema = new mongoose.Schema({
    STD_ID: { 
        type: Number, 
        unique: true, 
        required: true, 
        default: () => Math.floor(1000 + Math.random() * 9000) // Generates a random 4-digit student ID
    },
    Name: { type: String, required: true },
    PASS: { type: String, required: true },
    AGE: { type: Number, required: true },
    TEACHERNAME: { type: String, required: true },
    GARDIANNAME: { type: String, required: true },
    GARDIANCONTACT: { type: String, required: true },
    ADDRESS: { type: String, required: true }
});

// Create and export the Student model
const Student = mongoose.model('Student', StudentSchema);

module.exports = Student;
