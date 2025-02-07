const express = require('express');
const router = express.Router();
const Course = require('../models/Course');

// Create a new course
router.post('/add', async (req, res) => {
  try {
    const { courseId, courseTitle, description, slides } = req.body;

    // Create a new course with the provided courseId
    const newCourse = new Course({
      courseId,  
      courseTitle,
      description,
      slides: slides.map((slide, index) => ({
        slideId: `sli${String(index + 1).padStart(4, '0')}`, // Generate slideId
        title: slide.title,
        order: index + 1,
      })),
    });

    await newCourse.save();
    res.status(201).json({ message: 'Course created successfully', course: newCourse });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Get a specific course by courseId
router.get('/:courseId', async (req, res) => {
  try {
    const course = await Course.findOne({ courseId: req.params.courseId });
    if (!course) {
      return res.status(404).json({ message: 'Course not found' });
    }
    res.json(course);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get('/:courseId/slides', async (req, res) => {
  try {
    const courseId = req.params.courseId;
    console.log('Received request to fetch slides for courseId:', courseId);

    // Fetch course by courseId
    const course = await Course.findOne({ courseId: courseId });

    if (!course) {
      console.log(`Course with courseId ${courseId} not found`);
      return res.status(404).json({ message: 'Course not found' });
    }

    console.log('Course found:', course);
    // Send only the slides
    res.json({ slides: course.slides });
  } catch (error) {
    console.error('Error fetching course slides:', error);
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
