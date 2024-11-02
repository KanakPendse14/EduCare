import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for redirection
import Navbar from '../components/Navbar'; // Import the Navbar component
import '../css/color_identifying.css'; // Create a new CSS file for styling

const colors = [
  { name: 'Red', image: '/images/c-red.png' },
  { name: 'Yellow', image: '/images/c-yellow.png' },
  { name: 'Orange', image: '/images/c-orange.png' },
  { name: 'Green', image: '/images/c-green.png' },
  { name: 'Blue', image: '/images/c-blue.png' },
  { name: 'Purple', image: '/images/c-purple.png' },
  { name: 'Pink', image: '/images/c-pink.png' },
  { name: 'Grey', image: '/images/c-grey.png' },
  { name: 'Brown', image: '/images/c-brown.png' },
  { name: 'Black', image: '/images/c-black.png' },
  { name: 'White' }, // No image for white
];

const colorOptions = {
  Red: ['Orange', 'Red', 'Brown'],
  Yellow: ['Yellow', 'Orange', 'Brown'],
  Orange: ['Orange', 'Red', 'Brown'],
  Green: ['Purple', 'Green', 'Blue'],
  Blue: ['Green', 'Purple', 'Blue'],
  Purple: ['Purple', 'Blue', 'Green'],
  Pink: ['Red', 'Pink', 'Brown'],
  Brown: ['Pink', 'Red', 'Brown'],
  Black: ['White', 'Brown', 'Black'],
  White: ['Black', 'White', 'Pink'],
  Grey: ['Grey', 'Black', 'White'],
};

const ColorIdentifyingTest = () => {
  const [selectedColor, setSelectedColor] = useState('');
  const [optionsToDisplay, setOptionsToDisplay] = useState([]);
  const [isCorrect, setIsCorrect] = useState(null);
  const [correctColor, setCorrectColor] = useState('');
  const [correctCount, setCorrectCount] = useState(0); // Track correct answers
  const [wrongCount, setWrongCount] = useState(0); // Track wrong answers

  const navigate = useNavigate(); // Initialize useNavigate for navigation

  const getRandomColor = () => {
    const randomIndex = Math.floor(Math.random() * colors.length);
    const color = colors[randomIndex].name;
    setCorrectColor(color);
    setOptionsToDisplay(colorOptions[color]);
    setSelectedColor('');
    setIsCorrect(null);
  };

  const checkAnswer = () => {
    if (selectedColor === correctColor) {
      setIsCorrect(true);
      setCorrectCount(correctCount + 1); // Increment correct count
    } else {
      setIsCorrect(false);
      setWrongCount(wrongCount + 1); // Increment wrong count
    }
  };

  const handleColorClick = (color) => {
    setSelectedColor(color);
  };

  const handleNext = () => {
    getRandomColor();
  };

  // Generate initial color
  useEffect(() => {
    getRandomColor();
  }, []);

  // Handle exit button click
  const handleExit = () => {
    navigate('/assessment'); // Navigate to assessment.js
  };

  return (
    <>
      <Navbar /> {/* Navbar is now outside the color test container */}

      <div className="color-test-container">
        <h1>Select {correctColor}</h1> {/* Updated to dynamically show correct color */}
        
        {/* Score display */}
        <div className="score-display" style={{ position: 'absolute', top: '10px', right: '10px' }}>
          <p>Correct: {correctCount}</p>
          <p>Wrong: {wrongCount}</p>
        </div>

        <div className="color-display">
          {optionsToDisplay.map((color, index) => {
            const colorInfo = colors.find(c => c.name === color);
            const colorImage = colorInfo?.image; // Get the corresponding image

            return (
              <div
                key={index}
                className={`color ${selectedColor === color ? 'selected' : ''}`}
                onClick={() => handleColorClick(color)}
                style={{
                  backgroundColor: color === 'White' ? 'white' : 'transparent', // Set background color for white
                  backgroundImage: color !== 'White' ? `url(${colorImage})` : 'none', // Use image for other colors
                  backgroundSize: 'cover',
                  borderRadius: '50%',
                }}
              >
                {/* Removed the text display */}
              </div>
            );
          })}
        </div>

        <button className="check-button" onClick={checkAnswer}>Check</button>

        {/* Show result */}
        {isCorrect !== null && (
          <div className="result">
            {isCorrect ? (
              <span className="correct">Correct!</span>
            ) : (
              <span className="incorrect">Incorrect. Try again!</span>
            )}
          </div>
        )}

        <button className="next-button" onClick={handleNext}>Next</button>
        
        {/* Exit Button */}
        <button className="exit-button" onClick={handleExit}>Exit</button>
      </div>
    </>
  );
};

export default ColorIdentifyingTest;
