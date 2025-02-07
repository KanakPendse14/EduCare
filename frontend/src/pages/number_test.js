import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useHistory for navigation
import '../css/number_test.css'; // Import the styles
import SubmitButton from '../components/SubmitButton';

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
  const [currentIndex, setCurrentIndex] = useState(0); // State to track the current letter
  const navigate = useNavigate(); // Hook to navigate to other routes
  const [currentNumber, setCurrentNumber] = useState(getRandomNumber());
  const [options, setOptions] = useState(generateOptions(currentNumber));
  const [feedback, setFeedback] = useState(''); // To store feedback
  const [correctCount, setCorrectCount] = useState(0); // Count of correct answers
  const [incorrectCount, setIncorrectCount] = useState(0); // Count of incorrect answers

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

  const handleExit = () => {
    navigate('/assessment');
  };

  const handleImageClick = (selectedNumber) => {
    if (selectedNumber === currentNumber) {
      setFeedback('Correct!'); // Show "Correct!" feedback
      setCorrectCount(correctCount + 1); // Increment correct count
      setTimeout(() => {
        setFeedback(''); // Clear feedback after 1 second
        const newNumber = getRandomNumber();
        setCurrentNumber(newNumber); // Load a new number
        setOptions(generateOptions(newNumber)); // Reset options with new number
      }, 1000); // Adjust delay time if needed
    } else {
      playBuzzer();
      setFeedback('Incorrect. Try again!'); // Show "Incorrect" feedback
      setIncorrectCount(incorrectCount + 1); // Increment incorrect count
    }
  };

  

  return (
    <div className="container">
      <h1>Count the Items</h1>

      {/* Display scores in the top right corner */}
      <div className="scoreboard">
        <span>Correct: {correctCount}</span>
        <span>Incorrect: {incorrectCount}</span>
        </div>

        {/* Display random number of ball images for the current number */}

      
      {/* <div className="number-images">
        {Array.from({ length: currentNumber }).map((_, index) => (
          <img key={index} src={ballImage} alt={`Ball`} />
        ))}
      </div> */}


      <div className="number-images">
  {/* Display random number of ball images for the current number */}
  {Array.from({ length: currentNumber }).map((_, index) => (
    <div key={index} className="image-container">
      <img
        src={ballImage}
        alt={`Ball`}
        className="hover-count"
        data-label={`Ball ${index + 1}`}
      />
    </div>
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
      <SubmitButton />
      {/* Only display the feedback if there's a message */}
      {feedback && (
        <div className="feedback">{feedback}</div>
      )}

      {/* Exit Button */}
      <div className='absolute top-7 left-8'>
        <button
          onClick={handleExit}
          className='bg-black/20 text-white px-7 py-3 rounded-full shadow-lg hover:bg-black/30 transition duration-300'
        >
          Exit
        </button>
      </div>
    </div>
  );
};

export default NumberTest;


// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import '../css/number_test.css';

// const BuzzerSound = process.env.PUBLIC_URL + '/sounds/buzzer.wav';
// const ballImage = process.env.PUBLIC_URL + '/images/ball.png';

// const numberImages = [
//   process.env.PUBLIC_URL + '/images/number1.png',
//   process.env.PUBLIC_URL + '/images/number2.png',
//   process.env.PUBLIC_URL + '/images/number3.png',
//   process.env.PUBLIC_URL + '/images/number4.png',
//   process.env.PUBLIC_URL + '/images/number5.png',
//   process.env.PUBLIC_URL + '/images/number6.png',
//   process.env.PUBLIC_URL + '/images/number7.png',
//   process.env.PUBLIC_URL + '/images/number8.png',
//   process.env.PUBLIC_URL + '/images/number9.png',
//   process.env.PUBLIC_URL + '/images/number10.png',
// ];

// const getRandomNumber = () => Math.floor(Math.random() * 10) + 1;

// const NumberTest = () => {
//   const [currentNumber, setCurrentNumber] = useState(getRandomNumber());
//   const [options, setOptions] = useState(generateOptions(currentNumber));
//   const [hoverCount, setHoverCount] = useState(null); // For counting images on hover
//   const [feedback, setFeedback] = useState('');
//   const [correctCount, setCorrectCount] = useState(0);
//   const [incorrectCount, setIncorrectCount] = useState(0);
//   const navigate = useNavigate();

//   function generateOptions(correctNumber) {
//     const optionsSet = new Set();
//     optionsSet.add(correctNumber);

//     while (optionsSet.size < 3) {
//       const randomNum = getRandomNumber();
//       if (randomNum !== correctNumber) {
//         optionsSet.add(randomNum);
//       }
//     }

//     return Array.from(optionsSet).sort(() => Math.random() - 0.5);
//   }

//   const playBuzzer = () => {
//     const buzzer = new Audio(BuzzerSound);
//     buzzer.volume = 0.25;
//     buzzer.play()
//     .then(() => console.log('Buzzer sound played successfully.'))
//     .catch((error) => {
//       console.error('Error playing audio:', error);
//       alert('There was an error playing the sound.');
//     });
//   };

//   const handleImageClick = (selectedNumber) => {
//     if (selectedNumber === currentNumber) {
//       setFeedback('Correct!');
//       setCorrectCount(correctCount + 1);
//       setTimeout(() => {
//         setFeedback('');
//         const newNumber = getRandomNumber();
//         setCurrentNumber(newNumber);
//         setOptions(generateOptions(newNumber));
//       }, 1000);
//     } else {
//       playBuzzer();
//       setFeedback('Incorrect. Try again!');
//       setIncorrectCount(incorrectCount + 1);
//     }
//   };

//   const handleHover = (index) => {
//     setHoverCount(index + 1); // Increment count based on index
//   };

//   const handleExit = () => {
//     navigate('/assessment');
//   };

//   return (
//     <div className="container">
//       <h1>Count the Items</h1>

//       <div className="scoreboard">
//         <span>Correct: {correctCount}</span>
//         <span>Incorrect: {incorrectCount}</span>
//       </div>

//       <div className="number-images">
//         {Array.from({ length: currentNumber }).map((_, index) => (
//           <img
//             key={index}
//             src={ballImage}
//             alt={`Ball`}
//             className="hoverable-ball"
//             onMouseEnter={() => handleHover(index)} // Track hover position
//           />
//         ))}
//       </div>

//       {hoverCount && (
//         <div className="hover-count">You are hovering on: {hoverCount}</div>
//       )}

//       <h2>How many items are here?</h2>
//       <div className="options">
//         {options.map((number, index) => (
//           <img
//             key={index}
//             src={numberImages[number - 1]}
//             alt={`Number ${number}`}
//             className="number-option"
//             onClick={() => handleImageClick(number)}
//           />
//         ))}
//       </div>

//       {feedback && <div className="feedback">{feedback}</div>}

//       <div className="absolute top-7 left-8">
//         <button
//           onClick={handleExit}
//           className="bg-black/20 text-white px-7 py-3 rounded-full shadow-lg hover:bg-black/30 transition duration-300"
//         >
//           Exit
//         </button>
//       </div>
//     </div>
//   );
// };

// export default NumberTest;
