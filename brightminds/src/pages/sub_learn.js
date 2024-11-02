import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import Navbar from '../components/Navbar'; // Import the Navbar component
import '../css/add_learn.css'; // Import the CSS file for styling

const SubLearn = () => {
  const navigate = useNavigate(); // Initialize useNavigate for redirection
  const [history, setHistory] = useState([[Math.floor(Math.random() * 11) + 1, Math.floor(Math.random() * 11)]]);
  const [currentIndex, setCurrentIndex] = useState(0); // Track the current index in the history
  const [result, setResult] = useState(null); // Result is initially hidden

  const num1 = history[currentIndex][0];
  const num2 = history[currentIndex][1];

  // Function to handle the subtraction
  const handleSubtract = () => {
    setResult(num1 - num2); // Calculate and set the result
  };

  const generateNewNumbers = () => {
    if (currentIndex === history.length - 1 || result !== null) {
      const newNum1 = Math.floor(Math.random() * 10) + 2; // First number should be between 2 and 11
      const newNum2 = Math.floor(Math.random() * (newNum1 - 1)) + 1; // Second number should be between 1 and newNum1 - 1
  
      const newHistory = [...history, [newNum1, newNum2]]; // Append new numbers to history
      setHistory(newHistory);
      setCurrentIndex(newHistory.length - 1); // Move to the newly generated pair
    } else {
      setCurrentIndex(currentIndex + 1);
    }
    setResult(null); // Reset the result when new numbers are generated or navigated
  };

  const goToPrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1); // Move back to the previous number pair
      setResult(null); // Reset the result
    }
  };

  const renderBeeImages = (number) => {
    return Array.from({ length: number }, (_, index) => (
      <img key={index} src="/images/duck.png" alt="duck" className="bee-img" />
    ));
  };

  // Function to handle exit button click
  const handleExit = () => {
    navigate('/listenandlearn'); // Redirect to the ListenandLearn page
  };

  return (
    <div>
      <Navbar /> {/* Navbar is now outside of the content container */}

      <div className="add-learn-container">
        <div className="content">
          <h1>Let's Learn Subtraction!</h1>
          
          <div className="numbers">
            <div className="number-box">
              <span className="number">{num1}</span>
              <div className="bee-images">{renderBeeImages(num1)}</div>
            </div>

            <span className="plus-sign">-</span>

            <div className="number-box">
              <span className="number">{num2}</span>
              <div className="bee-images">{renderBeeImages(num2)}</div>
            </div>
          </div>

          <button className="add-button" onClick={handleSubtract}>Subtract</button>

          {result !== null && (
            <div className="result">
              <span className="result-number">{result}</span>
              <div className="bee-images">{renderBeeImages(Math.abs(result))}</div>
            </div>
          )}

          <div className="navigation-buttons">
            <button 
              className="prev-button" 
              onClick={goToPrevious}
              disabled={currentIndex === 0} 
            >
              Previous
            </button>
            <button 
              className="next-button" 
              onClick={generateNewNumbers}
            >
              Next
            </button>
          </div>

          {/* Exit Button */}
          <button className="exit-button" onClick={handleExit}>Exit</button>
        </div>
      </div>
    </div>
  );
};

export default SubLearn;
