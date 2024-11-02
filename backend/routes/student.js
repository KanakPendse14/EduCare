const express = require('express');
const router = express.Router();
const Student = require('../models/Student');

// Route to add a new student
router.post('/add', async (req, res) => {
    const { Name, PASS, AGE, TEACHERNAME, GARDIANNAME, GARDIANCONTACT, ADDRESS } = req.body;

    try {
        // Create a new student with the provided data
        const newStudent = new Student({
            Name,
            PASS,
            AGE,
            TEACHERNAME,
            GARDIANNAME,
            GARDIANCONTACT,
            ADDRESS
        });

        // Save the student to the database
        await newStudent.save();
        res.status(201).json({ message: 'Student created successfully', student: newStudent });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
});

// Route to login a student
router.post('/login', async (req, res) => {
    const { Name, PASS } = req.body;

    try {
        const student = await Student.findOne({ Name, PASS });
        if (!student) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }

        res.status(200).json({ message: 'Login successful', student });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
});


// Example route to get the logged-in student's data
router.get('/api/students/me',  async (req, res) => {
    try {
      const student = await Student.findById(req.user.id); // req.user.id should contain the logged-in student's ID
      if (!student) {
        return res.status(404).json({ message: 'Student not found' });
      }
      res.json(student);
    } catch (error) {
      res.status(500).json({ message: 'Server error' });
    }
  });
  

module.exports = router;

