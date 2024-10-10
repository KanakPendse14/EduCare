import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook
import '../css/navbar.css'; // Ensure your CSS is linked

const Navbar = ({ studentName, profilePhoto }) => {
  const [showLearnDropdown, setShowLearnDropdown] = useState(false);
  const [showAssessmentDropdown, setShowAssessmentDropdown] = useState(false);

  const navigate = useNavigate(); // Initialize useNavigate hook

  const toggleLearnDropdown = () => {
    setShowLearnDropdown((prev) => !prev);
    setShowAssessmentDropdown(false); // Close assessment dropdown if opened
  };

  const toggleAssessmentDropdown = () => {
    setShowAssessmentDropdown((prev) => !prev);
    setShowLearnDropdown(false); // Close learn dropdown if opened
  };

  // Redirects to specific routes based on assessment option clicked
  const handleAssessmentNavigation = (route) => {
    navigate(route); // Use navigate function to redirect
  };

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img src=" " alt="EduCare Logo" className="navbar-logo" />
        <span className="navbar-appname">EduCare</span>
      </div>
      <div className="navbar-menu-container">
        <ul className="navbar-menu">
          <li>
            <a href="/home">Home</a>
          </li>
          <li>
            <a href="#" onClick={toggleLearnDropdown}>Learn</a>
            {showLearnDropdown && (
              <ul className="dropdown">
                <li><a href="/learneng">English</a></li>
                <li><a href="/learnmaths">Maths</a></li>
              </ul>
            )}
          </li>
          <li>
            <a href="#" onClick={toggleAssessmentDropdown}>Assessment</a>
            {showAssessmentDropdown && (
              <ul className="dropdown">
                {/* Clicking on English redirects to eng_test */}
                <li><a onClick={() => handleAssessmentNavigation('/engtest')}>English</a></li>
                {/* Clicking on Maths redirects to number_test */}
                <li><a onClick={() => handleAssessmentNavigation('/numbertest')}>Maths</a></li>
              </ul>
            )}
          </li>
          <li>
            <a href="/listenandlearn">Listen & Learn</a> {/* Added next to Assessment */}
          </li>
          <li><a href="/results">Results</a></li>
          <li><a href="/logout">LogOut</a></li>
        </ul>
      </div>
      <div className="navbar-right">
        <div className="student-info">
          <span className="student-name">{studentName}</span>
          <img src={profilePhoto} alt="Profile" className="profile-photo" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
