import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook
import '../css/navbar.css'; // Ensure your CSS is linked

const Navbar = () => {
  const [studentName, setStudentName] = useState(''); // State to hold the student's name
  const navigate = useNavigate(); // Initialize useNavigate hook

  useEffect(() => {
    // Retrieve student data from localStorage on component mount
    const storedStudent = localStorage.getItem('student');
    if (storedStudent) {
      const { Name } = JSON.parse(storedStudent); // Extract the Name property from the stored object
      setStudentName(Name);
    } else {
      // Redirect to login if no student data is found
      navigate('/login');
    }
  }, [navigate]);

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img
          src="https://i.im.ge/2024/10/11/kmwwTK.99e50934e515314d14abaa8cb3e2a511.jpeg"
          alt="EduCare Logo"
          className="navbar-logo"
        />
        <span className="navbar-appname">EduCare</span>
      </div>
      <div className="navbar-menu-container">
        <ul className="navbar-menu">
          <li>
            <a href="/home">Home</a>
          </li>
          <li>
            <a href="/listenandlearn">Learn</a>
          </li>
          <li>
            <a href="/assessment">Test</a>
          </li>
          <li>
            <a href="/results">Results</a>
          </li>
          <li>
            <a href="/" onClick={() => localStorage.removeItem('student')}>
              LogOut
            </a>
          </li>
        </ul>
      </div>
      <div className="navbar-right">
        <div className="student-info">
          <span className="student-name">{studentName}</span>
          <img
            src="https://i.im.ge/2024/10/11/kmw6U9.e87ab0a15b2b65662020e614f7e05ef1.jpeg"
            alt="Profile"
            className="profile-photo"
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
