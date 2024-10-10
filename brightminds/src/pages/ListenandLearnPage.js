import React from 'react';
import Navbar from '../components/Navbar'; // Adjust the path as needed
import '../css/ListenandLearn.css';
import CourseBlock from '../components/ListeningSkillsset';

const ListenandLearnPage = () => {
  const studentName = "Aayush Shah"; // Replace with dynamic data
  const studentAge = 10; // Replace with dynamic data
  // const profilePhoto = "/path/to/profile-photo.jpg"; // Commented out

  return (
    <div>
      {/* Remove profilePhoto prop from Navbar */}
      <Navbar studentName={studentName} studentAge={studentAge} /* profilePhoto={profilePhoto} */ />
      <div className="listen-and-learn-page">
        <h1>Listen and Repeat</h1>
        <div className="courses-container">
          <CourseBlock 
            title="Vowels" 
            description="Let's Learn and practice Vowels."
            path="/vowels"
          />
          <CourseBlock 
            title="3 Letter Words" 
            description="Learn and practice 3-Letter Words."
            path="/threeletterwords"
          />
          <CourseBlock 
            title="Every Day Phrases" 
            description="Explore small sentences for basic comprehension."
            path="/Everydaysentences"
          />
          <CourseBlock 
            title="Small Stories" 
            description="Engage with short stories to enhance listening skills."
          />
          <CourseBlock 
            title="Large Stories" 
            description="Dive into larger stories for advanced understanding."
          />
          {/* Add other CourseBlocks here */}
        </div>
      </div>
    </div>
  );
};

export default ListenandLearnPage;
