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
        <img src="https://i.im.ge/2024/10/11/kmwwTK.99e50934e515314d14abaa8cb3e2a511.jpeg " alt="EduCare Logo" className="navbar-logo" />
        <span className="navbar-appname">EduCare</span>
      </div>
      <div className="navbar-menu-container">
        <ul className="navbar-menu">
          <li>
            <a href="/home">Home</a>
          </li>
          <li>
            <a href="/listenandlearn">Learn</a> {/* Added next to Assessment */}
          </li>
          <li>
          <li>
            <a href="/assessment">Test</a> {/* Added next to Assessment */}
          </li>
          </li>
          
          <li><a href="/results">Results</a></li>
          <li><a href="/logout">LogOut</a></li>
        </ul>
      </div>
      <div className="navbar-right">
        <div className="student-info">
          <span className="student-name">{studentName}</span>
          <img src=' https://i.im.ge/2024/10/11/kmw6U9.e87ab0a15b2b65662020e614f7e05ef1.jpeg' alt="Profile" className="profile-photo" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
