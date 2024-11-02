// const express = require('express');
// const router = express.Router();
// const Course = require('../models/Course');

// // Create a new course
// router.post('/courses', async (req, res) => {
//   try {
//     const { courseTitle, description, slides } = req.body;
//     const newCourse = new Course({
//       courseTitle,
//       description,
//       slides: slides.map((slide, index) => ({
//         slideId: `sli${String(index + 1).padStart(4, '0')}`,
//         title: slide.title,
//         order: index + 1,
//       })),
//     });
//     await newCourse.save();
//     res.status(201).json(newCourse);
//   } catch (error) {
//     res.status(400).json({ error: error.message });
//   }
// });

// // Get a specific course by courseId
// router.get('/courses/:courseId', async (req, res) => {
//   try {
//     const course = await Course.findOne({ courseId: req.params.courseId });
//     if (!course) {
//       return res.status(404).json({ message: 'Course not found' });
//     }
//     res.json(course);
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// });

// module.exports = router;


// const express = require('express');
// const router = express.Router();
// const Course = require('../models/Course');

// // Create a new course
// router.post('/add', async (req, res) => {  // Changed to '/add'
//   try {
//     const { courseTitle, description, slides } = req.body;

//     // Create a new course without specifying courseId, it will be generated in the model
//     const newCourse = new Course({
//       courseTitle,
//       description,
//       slides: slides.map((slide, index) => ({
//         title: slide.title,
//         order: index + 1,  // Assuming you want order to start from 1
//       })),
//     });

//     // Save the new course to the database
//     await newCourse.save();
//     res.status(201).json({ message: 'Course created successfully', course: newCourse });
//   } catch (error) {
//     res.status(400).json({ error: error.message });
//   }
// });

// // Get a specific course by ID
// router.get('/:courseId', async (req, res) => {  // Changed to '/:courseId'
//   try {
//     const course = await Course.findOne({ courseId: req.params.courseId }); // Use findOne for courseId
//     if (!course) {
//       return res.status(404).json({ message: 'Course not found' });
//     }
//     res.json(course);
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// });

// module.exports = router;



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

module.exports = router;
