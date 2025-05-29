const express = require("express");
const router = express.Router();
const TestProgress = require("../models/TestProgress");

// Save Test Progress Route
router.post("/submit", async (req, res) => {
  try {
    const data = req.body;
    console.log("Received Data:", data);

    // Handle student_name parsing if it's a stringified object
    let parsedStudent;
    try {
      parsedStudent = typeof data.student_name === "string"
        ? JSON.parse(data.student_name)
        : data.student_name;
    } catch (err) {
      console.error("Failed to parse student_name:", err);
      return res.status(400).json({ error: "Invalid student_name format" });
    }


    // Validate numeric fields (fallback to 0 or send error if needed)
    const testDuration = Number(data.test_duration);
    const avgTime = Number(data.average_time_per_question);
    if (isNaN(testDuration) || isNaN(avgTime)) {
      return res.status(400).json({ error: "Invalid number fields in request body" });
    }

    const newProgress = new TestProgress({
      test_name: data.test_name,
      student_name: parsedStudent.Name,
      student_id: parsedStudent._id,
      test_duration: testDuration,
      total_questions: data.total_questions,
      correct_answers: data.correct_answers,
      wrong_answers: data.wrong_answers,
      accuracy: data.accuracy,
      average_time_per_question: avgTime,
      time_per_question: data.time_per_question,
      mistakes_summary: data.mistakes_summary,
      difficulty_level: data.difficulty_level,
      test_status: data.test_status,
      test_date: data.test_date,
    });

    await newProgress.save();
    console.log("Test Progress saved:", newProgress);
    res.status(201).json({ message: "Test progress saved successfully", data: newProgress });

  } catch (error) {
    console.error("Error saving test progress:", error);
    res.status(500).json({ error: "Error saving test progress", details: error.message });
  }
});


// ✅ GET: Fetch Test Progress by Student Name
router.get("/student/:studentName", async (req, res) => {
  try {
    const studentName = decodeURIComponent(req.params.studentName);
    console.log("Fetching test results for:", studentName);

    const results = await TestProgress.find({ student_name: studentName });

    if (!results || results.length === 0) {
      return res.status(404).json({ message: "No test progress found for this student" });
    }

    res.status(200).json(results);
  } catch (error) {
    console.error("Error fetching test progress:", error);
    res.status(500).json({ error: "Failed to fetch test progress", details: error.message });
  }
});

module.exports = router;
