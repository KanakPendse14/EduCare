import React from 'react';
import Navbar from '../components/Navbar'; // Adjust the path as needed
import '../css/home.css'; // Ensure the path to your CSS file is correct

const HomePage = () => {
  const studentName = "Aayush Shah"; // Replace with dynamic data
  const studentAge = 10; // Replace with dynamic data

  return (
    <div>
      <Navbar studentName={studentName} studentAge={studentAge} />
      <div className="home-page">
        <div className="left-content">
          <h1>Welcome to EduCare</h1>
          <p>
            EduCare is Assistive technology for children with learning disabilities includes tools and devices designed to support and enhance their learning experiences.
          </p>
        </div>
        <div className="right-content">
        
          <blockquote className="quote">
            <h1>Quote-of -the-day</h1>
               "Education is the most powerful weapon which you can use to change the world." 
          </blockquote>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
