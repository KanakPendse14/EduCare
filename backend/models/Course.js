// const mongoose = require('mongoose');

// const slideSchema = new mongoose.Schema({
//   slideId: {
//     type: String,
//     unique: true,
//   },
//   title: {
//     type: String,
//     required: true,
//   },
//   order: {
//     type: Number,
//     required: true,
//   }
// });

// const courseSchema = new mongoose.Schema({
//   courseId: {
//     type: String,
//     unique: true,
//     required: true,
//   },
//   courseTitle: {
//     type: String,
//     required: true,
//   },
//   description: {
//     type: String,
//     required: true,
//   },
//   slides: [slideSchema]
// });

// // Function to generate course ID
// courseSchema.pre('save', async function(next) {
//   if (!this.courseId) {
//     const count = await this.model('Course').countDocuments();
//     this.courseId = `cu${String(count + 1).padStart(4, '0')}`;
//   }
//   next();
// });

// // Function to generate slide ID
// courseSchema.methods.generateSlideId = function(order) {
//   return `sli${String(order).padStart(4, '0')}`;
// };

// const Course = mongoose.model('Course', courseSchema);
// module.exports = Course;



// const mongoose = require('mongoose');

// const slideSchema = new mongoose.Schema({
//   slideId: {
//     type: String,
//     unique: true,
//   },
//   title: {
//     type: String,
//     required: true,
//   },
//   order: {
//     type: Number,
//     required: true,
//   }
// });

// const courseSchema = new mongoose.Schema({
//   courseId: {
//     type: String,
//     unique: true,
//     required: true,
//   },
//   courseTitle: {
//     type: String,
//     required: true,
//   },
//   description: {
//     type: String,
//     required: true,
//   },
//   slides: [slideSchema]
// });

// // Function to generate course ID
// courseSchema.pre('save', async function(next) {
//   // Generate courseId if not provided
//   if (!this.courseId) {
//     const count = await this.model('Course').countDocuments();
//     this.courseId = `cu${String(count + 1).padStart(4, '0')}`;
//   }

//   // Validate slide order uniqueness and generate slideId
//   const orderSet = new Set();
//   for (const slide of this.slides) {
//     // Check for duplicate order values
//     if (orderSet.has(slide.order)) {
//       return next(new Error(`Duplicate order found: ${slide.order}`));
//     }
//     orderSet.add(slide.order);

//     // Generate slideId based on order
//     slide.slideId = `sli${String(slide.order).padStart(4, '0')}`;
//   }

//   next();
// });

// // Create the Course model
// const Course = mongoose.model('Course', courseSchema);
// module.exports = Course;



const mongoose = require('mongoose');

const slideSchema = new mongoose.Schema({
  slideId: {
    type: String,
    unique: true,
  },
  title: {
    type: String,
    required: true,
  },
  order: {
    type: Number,
    required: true,
  }
});

const courseSchema = new mongoose.Schema({
  courseId: {
    type: String,
    unique: true,
    required: true,
  },
  courseTitle: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  slides: [slideSchema]
});

// Create the Course model
const Course = mongoose.model('Course', courseSchema);
module.exports = Course;
