import React from 'react';
import Navbar from '../components/Navbar'; // Adjust the path as needed
import '../css/ListenandLearn.css';
import CourseBlock from '../components/ListeningSkillsset';

const ListenandLearnPage = () => {
  return (
    <div>
      <Navbar />
      <div className="listen-and-learn-page">
        <h1>Learn English</h1>
        <div className="courses-container">
          <CourseBlock 
            title="Alphabets" 
            description="Let's Learn and practice Alphabets."
            path="/learneng"
          />
          <CourseBlock 
            title="Vowels" 
            description="Let's Learn and practice Vowels."
            path="/learnvowels"
          />
          <CourseBlock 
            title="Consonants" 
            description="Let's Learn and practice Consonants."
            path="/learnconsonants"
          />
          <CourseBlock 
            title="Shapes" 
            description="Learn and practice Shapes."
            path="/learnshapes"
          />
          <CourseBlock 
            title="Colours" 
            description="Let's Explore and learn Colours."
            path="/learncolours"
          />
          <CourseBlock 
            title="Objects" 
            description="Let's get familier with everyday objects."
            path="/threeletterwords"
          />
          <CourseBlock 
            title="Stories" 
            description="Engage with short stories to enhance listening skills."
            path="/SmallStories"
          />
          <CourseBlock 
            title="Everyday Phrases" 
            description="Dive into larger stories for advanced understanding."
            path="/Everydaysentences"
          />
        </div>

        {/* Adding a class to create space */}
        <div className="section-spacer" />

        <h1>Learn Maths</h1>
        <div className="courses-container">
          <CourseBlock 
            title="Numbers 1-10" 
            description="Let's Learn and practice Numbers."
            path="/learnmaths"
          />
          <CourseBlock 
            title="Even Numbers" 
            description="Let's Learn and practice Even Numbers"
            path="/learneven"
          />
          <CourseBlock 
            title="Odd Numbers" 
            description="Let's Learn and practice Odd Numbers."
            path="/learnodd"
          />
          <CourseBlock 
            title="Addition" 
            description="Explore addition through interactive examples."
            path="/learnadd"
          />
          <CourseBlock 
            title="Subtraction" 
            description="Explore subtraction through examples."
            path="/learnsub"
          />
        </div>
      </div>
    </div>
  );
};

export default ListenandLearnPage;
