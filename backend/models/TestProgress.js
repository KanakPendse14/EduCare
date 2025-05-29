// const mongoose = require('mongoose');

// const TestProgressSchema = new mongoose.Schema({
//   test_name: { type: String, required: true }, // Hardcoded test names in frontend
//   test_date: { type: Date, default: Date.now },
//   test_duration: { type: Number, required: true }, // In seconds
//   total_questions: { type: Number, required: true },
//   correct_answers: { type: Number, required: true },
//   wrong_answers: { type: Number, required: true },
//   accuracy: { type: Number, required: true }, // Calculated in frontend
//   average_time_per_question: { type: Number, required: true }, // In seconds
//   time_per_question: { type: [Number], required: true }, // List of time per question
//   mistakes_summary: { type: [String], default: [] }, // Example: ["Q1: 5+2 → Given: 6, Expected: 7"]
//   difficulty_level: { type: String, enum: ['Easy', 'Medium', 'Hard'], required: true },
//   test_status: { type: String, enum: ['Completed', 'In Progress'], default: 'Completed' },
//   student_name: { type: String, required: true }  
// });

// module.exports = mongoose.model('TestProgress', TestProgressSchema);


// const mongoose = require('mongoose');

// const TestProgressSchema = new mongoose.Schema({
//   test_name: { type: String, required: true },
//   test_date: { type: Date, default: Date.now },
//   test_duration: { type: Number, required: true }, // in seconds
//   total_questions: { type: Number, required: true },
//   correct_answers: { type: Number, required: true },
//   wrong_answers: { type: Number, required: true },
//   accuracy: { type: Number, required: true },
//   average_time_per_question: { type: Number, required: true },
//   time_per_question: { type: [Number], required: true },
//   mistakes_summary: { type: [String], default: [] },
//   difficulty_level: { type: String, enum: ['Easy', 'Medium', 'Hard'], required: true },
//   test_status: { type: String, enum: ['Completed', 'In Progress'], default: 'Completed' },
//   student_name: { type: String, required: true }
// });

// module.exports = mongoose.model('TestProgress', TestProgressSchema);


// const mongoose = require("mongoose");

// const TestProgressSchema = new mongoose.Schema({
//   test_name: { type: String, required: true },
//   student_name: { type: String, required: true }, // or ObjectId if referencing another collection
//   test_duration: { type: Number, required: true },
//   total_questions: { type: Number, required: true },
//   correct_answers: { type: Number, required: true },
//   wrong_answers: { type: Number, required: true },
//   accuracy: Number,
//   average_time_per_question: Number,
//   time_per_question: [Number],
//   mistakes_summary: [String],
//   difficulty_level: { type: String, required: true },
//   test_status: String,
//   test_date: Date,
// });

// module.exports = mongoose.model("TestProgress", TestProgressSchema);


const mongoose = require("mongoose");

const TestProgressSchema = new mongoose.Schema({
  test_name: { type: String, required: true },
  student_name: { type: String, required: true },
  student_id: { type: String, required: true },
  test_duration: { type: Number, required: true },
  total_questions: { type: Number, required: true },
  correct_answers: { type: Number, required: true },
  wrong_answers: { type: Number, required: true },
  accuracy: { type: Number },
  average_time_per_question: { type: Number },
  time_per_question: [Number],
  mistakes_summary: [String],
  difficulty_level: { type: String },
  test_status: { type: String },
  test_date: { type: Date, default: Date.now },
});

module.exports = mongoose.model("TestProgress", TestProgressSchema);
