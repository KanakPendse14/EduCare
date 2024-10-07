// Sidebar.js
import React, { useState } from "react";
import "../css/Sidebar.css";

const Sidebar = ({ studentName, studentProfilePic }) => {
  const [isLearningOpen, setIsLearningOpen] = useState(false);
  const [isAssessmentOpen, setIsAssessmentOpen] = useState(false);

  const toggleLearningDropdown = () => {
    setIsLearningOpen(!isLearningOpen);
  };

  const toggleAssessmentDropdown = () => {
    setIsAssessmentOpen(!isAssessmentOpen);
  };

  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <h2>EduCare</h2>
      </div>
      <div className="profile-section">
        <img src={studentProfilePic} alt="Profile" className="profile-pic" />
        <h3>{studentName}</h3>
      </div>
      <div className="sidebar-buttons">
        <div className="dropdown">
          <button className="sidebar-button" onClick={toggleLearningDropdown}>
            Learning
          </button>
          {isLearningOpen && (
            <div className="dropdown-content">
              <p>English</p>
              <p>Maths</p>
              <p>Listen & Repeat</p>
            </div>
          )}
        </div>

        <div className="dropdown">
          <button className="sidebar-button" onClick={toggleAssessmentDropdown}>
            Assessment
          </button>
          {isAssessmentOpen && (
            <div className="dropdown-content">
              <p>English</p>
              <p>Maths</p>
              <p>Listen & Repeat</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;