import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for redirection
import Navbar from '../components/Navbar'; // Import the Navbar component
import '../css/shape_identifying.css'; // Use the newly created CSS file

const shapes = [
  { name: 'Circle', image: '/images/circle.png' },
  { name: 'Triangle', image: '/images/triangle.png' },
  { name: 'Square', image: '/images/square.png' },
  { name: 'Rectangle', image: '/images/rectangle.png' },
  { name: 'Pentagon', image: '/images/pentagon.png' },
  { name: 'Hexagon', image: '/images/hexagon.png' },
];

const ShapeIdentifyingTest = () => {
  const [selectedShape, setSelectedShape] = useState('');
  const [shapesToDisplay, setShapesToDisplay] = useState([]);
  const [isCorrect, setIsCorrect] = useState(null);
  const [correctShape, setCorrectShape] = useState('');
  const [correctCount, setCorrectCount] = useState(0); // Track correct answers
  const [wrongCount, setWrongCount] = useState(0); // Track wrong answers

  const navigate = useNavigate(); // Initialize useNavigate for navigation

  const getRandomShapes = () => {
    const randomShapes = new Set(); // Use a Set to ensure uniqueness
    const correctShapeIndex = Math.floor(Math.random() * shapes.length);
    
    // Add the correct shape
    randomShapes.add(shapes[correctShapeIndex]);

    // Keep adding random unique shapes until we have 3
    while (randomShapes.size < 3) {
      const shape = shapes[Math.floor(Math.random() * shapes.length)];
      randomShapes.add(shape);
    }

    // Convert the Set back to an array
    setShapesToDisplay(Array.from(randomShapes));
    setCorrectShape(shapes[correctShapeIndex].name);
    setSelectedShape('');
    setIsCorrect(null);
  };

  const checkAnswer = () => {
    if (selectedShape === correctShape) {
      setIsCorrect(true);
      setCorrectCount(correctCount + 1); // Increment correct count
    } else {
      setIsCorrect(false);
      setWrongCount(wrongCount + 1); // Increment wrong count
    }
  };

  const handleShapeClick = (shape) => {
    setSelectedShape(shape.name);
  };

  const handleNext = () => {
    getRandomShapes();
  };

  // Generate initial shapes
  useEffect(() => {
    getRandomShapes();
  }, []);

  // Handle exit button click
  const handleExit = () => {
    navigate('/assessment'); // Navigate to assessment.js
  };

  return (
    <>
      <Navbar /> {/* Navbar is now outside the shape test container */}

      <div className="shape-test-container">
        <h1>Select {correctShape}</h1> {/* Updated to dynamically show correct shape */}
        
        {/* Score display */}
        <div className="score-display" style={{ position: 'absolute', top: '10px', right: '10px' }}>
          <p>Correct: {correctCount}</p>
          <p>Wrong: {wrongCount}</p>
        </div>

        <div className="shape-display">
          {shapesToDisplay.map((shape, index) => (
            <div
              key={index}
              className={`shape ${selectedShape === shape.name ? 'selected' : ''}`}
              onClick={() => handleShapeClick(shape)}
            >
              <img src={shape.image} alt={shape.name} className="shape-img" />
            </div>
          ))}
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

export default ShapeIdentifyingTest;
