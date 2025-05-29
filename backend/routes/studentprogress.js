const express = require('express');
const router = express.Router();
const TestProgress = require('../models/TestProgress');

// Route: GET /api/student-progress?name=Sanika%20Marahe
router.get('/student-progress', async (req, res) => {
  const studentName = req.query.name;

  if (!studentName) {
    return res.status(400).json({ error: 'Student name is required' });
  }

  try {
    const results = await TestResult.find({ student_name: studentName });
    res.json(results);
  } catch (err) {
    console.error('Error fetching student results:', err);
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;
