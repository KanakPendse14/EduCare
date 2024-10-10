import React, { useState } from 'react';
import '../css/number_test.css'; // Import the styles

// Correctly reference the assets from the public folder
const BuzzerSound = process.env.PUBLIC_URL + '/sounds/buzzer.wav'; // Reference the buzzer sound
const ballImage = process.env.PUBLIC_URL + '/images/ball.png'; // Reference the ball image

// Reference individual images for numbers
const numberImages = [
  process.env.PUBLIC_URL + '/images/number1.png',
  process.env.PUBLIC_URL + '/images/number2.png',
  process.env.PUBLIC_URL + '/images/number3.png',
  process.env.PUBLIC_URL + '/images/number4.png',
  process.env.PUBLIC_URL + '/images/number5.png',
  process.env.PUBLIC_URL + '/images/number6.png',
  process.env.PUBLIC_URL + '/images/number7.png',
  process.env.PUBLIC_URL + '/images/number8.png',
  process.env.PUBLIC_URL + '/images/number9.png',
  process.env.PUBLIC_URL + '/images/number10.png',
];

const getRandomNumber = () => Math.floor(Math.random() * 10) + 1;

const NumberTest = () => {
  const [currentNumber, setCurrentNumber] = useState(getRandomNumber());
  const [options, setOptions] = useState(generateOptions(currentNumber));
  const [feedback, setFeedback] = useState(''); // To store feedback

  function generateOptions(correctNumber) {
    const optionsSet = new Set();
    optionsSet.add(correctNumber);

    while (optionsSet.size < 3) {
      const randomNum = getRandomNumber();
      if (randomNum !== correctNumber) {
        optionsSet.add(randomNum);
      }
    }

    return Array.from(optionsSet).sort(() => Math.random() - 0.5); // Shuffle options
  }

  const playBuzzer = () => {
    const buzzer = new Audio(BuzzerSound);
    buzzer.volume = 0.25; // Set volume
    buzzer.play();
  };

  const handleImageClick = (selectedNumber) => {
    if (selectedNumber === currentNumber) {
      setFeedback('Correct!'); // Show "Correct!" feedback
      setTimeout(() => {
        setFeedback(''); // Clear feedback after 1 second
        const newNumber = getRandomNumber();
        setCurrentNumber(newNumber); // Load a new number
        setOptions(generateOptions(newNumber)); // Reset options with new number
      }, 1000); // Adjust delay time if needed
    } else {
      playBuzzer();
      setFeedback('Incorrect. Try again!'); // Show "Incorrect" feedback
    }
  };

  return (
    <div className="container">
      <h1>Count the Items</h1>

      <div className="number-images">
        {/* Display random number of ball images for the current number */}
        {Array.from({ length: currentNumber }).map((_, index) => (
          <img key={index} src={ballImage} alt={`Ball`} />
        ))}
      </div>

      <h2>How many items are here?</h2>
      <div className="options">
        {options.map((number, index) => (
          <img
            key={index}
            src={numberImages[number - 1]} // Display the corresponding image for each number
            alt={`Number ${number}`}
            className="number-option"
            onClick={() => handleImageClick(number)}
          />
        ))}
      </div>

      {/* Only display the feedback if there's a message */}
      {feedback && (
        <div className="feedback">{feedback}</div>
      )}
    </div>
  );
};

export default NumberTest;
