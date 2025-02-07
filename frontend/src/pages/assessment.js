import React from 'react';
import Navbar from '../components/Navbar'; // Adjust the path as needed
import '../css/assessment.css';
import CourseBlock from '../components/ListeningSkillsset';

const Assessment = () => {
  const studentName = "Aayush Shah"; // Replace with dynamic data
  const studentAge = 10; // Replace with dynamic data

  return (
    <div>
      <Navbar studentName={studentName} studentAge={studentAge} />
      <div className="listen-and-learn-page">
        <h2>ENGLISH TEST</h2>
        <div className="courses-container">
          <CourseBlock 
            title="Alphabets" 
            description="Test your knowledge of Alphabets."
            path="/engtest"
          />
          <CourseBlock 
            title="Match Alphabets" 
            description="Match the right pair of Alphabets."
            path="/alphabetmatchpair"
          />
          <CourseBlock 
            title="Speak Vowels" 
            description="Let's Speak and test Vowels."
            path="/vowels"
          />
          <CourseBlock 
            title="Guess Shapes" 
            description="Learn and practice Shapes."
            path="/shapetest"
          />
          <CourseBlock 
            title="Guess Colours" 
            description="Let's Explore and learn Colours."
            path="/colourtest"
          />
          
        </div>

        {/* Adding a class to create space */}
        <div className="section-spacer" />

        <h2>MATHS TEST</h2>
        <div className="courses-container">
          <CourseBlock 
            title="Numbers 1-10" 
            description="Let's Learn and practice Numbers."
            path="/numbertest"
          />
          
          <CourseBlock 
            title="Addition" 
            description="Test your mathematical skills."
            path="/addtest"
          />
          <CourseBlock 
            title="Subtraction" 
            description="Test your mathematical skills."
            path="/subtest"
          />
        </div>
      </div>
    </div>
  );
};

export default Assessment;
