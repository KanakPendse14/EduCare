const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors'); 
const studentRoutes = require('./routes/student'); // Import student routes
const courseRoutes = require('./routes/courseRoutes');
const testProgress = require('./routes/testProgress');

const app = express();
app.use(cors()); 
app.use(express.json()); // Middleware to parse JSON request body

// Connect to MongoDB (use your own MongoDB URI)
const MONGO_URI = 'mongodb+srv://kanakpendse14:AuozChajuj9pLrqv@littleheartschoolcluste.ao5wr.mongodb.net/LittleHeartDBSchool?retryWrites=true&w=majority&appName=LittleHeartSchoolCluster1';
mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.error('MongoDB connection error:', err));

// Use the student routes
app.use('/api/student', studentRoutes);  // Setup /api/student route
app.use('/api/courseRoutes', courseRoutes);
app.use('/api/test-progress', testProgress);

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
