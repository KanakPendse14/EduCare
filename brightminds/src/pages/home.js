import React from 'react';
import Navbar from '../components/Navbar'; // Adjust the path as needed
import '../css/home.css'; // Make sure to create this CSS file

const HomePage = () => {
  const studentName = "Aayush Shah"; // Replace with dynamic data
  const studentAge = 10; // Replace with dynamic data

  return (
    <div>
      <Navbar studentName={studentName} studentAge={studentAge} />
      <div className="home-page">
        <h1>Welcome to EduCare</h1>
        <div className="sections-container">
          <div className="section-block">
            <h2>Learn</h2>
            <p>Explore learning materials for various subjects like English, Maths, and more.</p>
            <a href="/learn">Start Learning</a>
          </div>
          <div className="section-block">
            <h2>Assessment</h2>
            <p>Test your skills with assessments in subjects like English and Maths.</p>
            <a href="/assessment">Take Assessment</a>
          </div>
          <div className="section-block">
            <h2>Results</h2>
            <p>Check your progress and review your assessment results.</p>
            <a href="/results">View Results</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
