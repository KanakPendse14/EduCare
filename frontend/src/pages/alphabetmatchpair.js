import React, { useState, useRef, useEffect } from 'react';
import '../css/alphabetmatchpair.css'; // Import the styles
import { useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom
import Navbar from '../components/Navbar';
import SubmitButton from '../components/SubmitButton';

function AlphabetMatchPair() {
  const [selectedPair, setSelectedPair] = useState(null);
  const [message, setMessage] = useState(''); // State for feedback message
  const [smileyVisible, setSmileyVisible] = useState(null); // State for smiley/sad visibility
  const [currentSlide, setCurrentSlide] = useState(0); // Track current slide
  const [correctMatches, setCorrectMatches] = useState(0); // Track correct matches
  const [wrongMatches, setWrongMatches] = useState(0); // Track wrong matches
  const [startTime, setStartTime] = useState(null); // Track start time
  const [endTime, setEndTime] = useState(null); // Track end time
  const [quizFinished, setQuizFinished] = useState(false); // To check if quiz is finished

  const navigate = useNavigate(); // Initialize useNavigate

  // Refs for audio elements
  const correctSound = useRef(new Audio('../sounds/correct.mp3'));
  const wrongSound = useRef(new Audio('../sounds/buzzer.wav'));

  // Image data for left and right columns (26 slides for A-Z)
  const slides = [
    {
      leftImages: [
        { id: 1, src: '../images/A.png', name: 'A' },
        { id: 2, src: '../images/B.png', name: 'B' },
        { id: 3, src: '../images/C.png', name: 'C' },
        { id: 4, src: '../images/D.png', name: 'D' },
      ],
      rightImages: [
        { id: 5, src: '../images/C.png', name: 'C' },
        { id: 6, src: '../images/A.png', name: 'A' },
        { id: 7, src: '../images/D.png', name: 'D' },
        { id: 8, src: '../images/B.png', name: 'B' },
      ],
      correctPairs: {
        'A': 6, 'B': 8, 'C': 5, 'D': 7
      }
    },
    {
      leftImages: [
        { id: 9, src: '../images/E.png', name: 'E' },
        { id: 10, src: '../images/F.png', name: 'F' },
        { id: 11, src: '../images/G.png', name: 'G' },
        { id: 12, src: '../images/H.png', name: 'H' },
      ],
      rightImages: [
        { id: 13, src: '../images/G.png', name: 'G' },
        { id: 14, src: '../images/E.png', name: 'E' },
        { id: 15, src: '../images/H.png', name: 'H' },
        { id: 16, src: '../images/F.png', name: 'F' },
      ],
      correctPairs: {
        'E': 14, 'F': 16, 'G': 13, 'H': 15
      }
    },
    {
      leftImages: [
        { id: 17, src: '../images/I.png', name: 'I' },
        { id: 18, src: '../images/J.png', name: 'J' },
        { id: 19, src: '../images/K.png', name: 'K' },
        { id: 20, src: '../images/L.png', name: 'L' },
      ],
      rightImages: [
        { id: 21, src: '../images/L.png', name: 'L' },
        { id: 22, src: '../images/J.png', name: 'J' },
        { id: 23, src: '../images/I.png', name: 'I' },
        { id: 24, src: '../images/K.png', name: 'K' },
      ],
      correctPairs: {
        'I': 23, 'J': 22, 'K': 24, 'L': 21
      }
    },
    {
      leftImages: [
        { id: 25, src: '../images/M.png', name: 'M' },
        { id: 26, src: '../images/N.png', name: 'N' },
        { id: 27, src: '../images/O.png', name: 'O' },
        { id: 28, src: '../images/P.png', name: 'P' },
      ],
      rightImages: [
        { id: 29, src: '../images/O.png', name: 'O' },
        { id: 30, src: '../images/M.png', name: 'M' },
        { id: 31, src: '../images/P.png', name: 'P' },
        { id: 32, src: '../images/N.png', name: 'N' },
      ],
      correctPairs: {
        'M': 30, 'N': 32, 'O': 29, 'P': 31
      }
    },
    {
      leftImages: [
        { id: 33, src: '../images/Q.png', name: 'Q' },
        { id: 34, src: '../images/R.png', name: 'R' },
        { id: 35, src: '../images/S.png', name: 'S' },
        { id: 36, src: '../images/T.png', name: 'T' },
      ],
      rightImages: [
        { id: 37, src: '../images/R.png', name: 'R' },
        { id: 38, src: '../images/S.png', name: 'S' },
        { id: 39, src: '../images/T.png', name: 'T' },
        { id: 40, src: '../images/Q.png', name: 'Q' },
      ],
      correctPairs: {
        'Q': 40, 'R': 37, 'S': 38, 'T': 39
      }
    },
    {
      leftImages: [
        { id: 41, src: '../images/U.png', name: 'U' },
        { id: 42, src: '../images/V.png', name: 'V' },
        { id: 43, src: '../images/W.png', name: 'W' },
        { id: 44, src: '../images/X.png', name: 'X' },
      ],
      rightImages: [
        { id: 45, src: '../images/X.png', name: 'X' },
        { id: 46, src: '../images/W.png', name: 'W' },
        { id: 47, src: '../images/V.png', name: 'V' },
        { id: 48, src: '../images/U.png', name: 'U' },
      ],
      correctPairs: {
        'U': 48, 'V': 47, 'W': 46, 'X': 45
      }
    },
    {
      leftImages: [
        { id: 49, src: '../images/Y.png', name: 'Y' },
        { id: 50, src: '../images/Z.png', name: 'Z' },
      ],
      rightImages: [
        { id: 51, src: '../images/Z.png', name: 'Z' },
        { id: 52, src: '../images/Y.png', name: 'Y' },
      ],
      correctPairs: {
        'Y': 52, 'Z': 51
      }
    }
  ];


  // Initialize start time when the component loads
  useEffect(() => {
    setStartTime(Date.now());
  }, []);

  // Handle clicking on images to create pairs
  const handleImageClick = (image, column) => {
    if (!selectedPair) {
      setSelectedPair({ image, column });
      setMessage(''); // Clear message when a new selection is made
      setSmileyVisible(null); // Hide both smiley and sad face when a new selection is made
    } else {
      if (selectedPair.column !== column) {
        const correctId = slides[currentSlide].correctPairs[selectedPair.image.name];
        const isCorrectPair = (selectedPair.column === 'left' && correctId === image.id)
          || (selectedPair.column === 'right' && correctId === selectedPair.image.id);

        if (isCorrectPair) {
          correctSound.current.play(); // Play celebration sound
          setMessage('Correct match! 😊'); // Set correct message with smiley
          setSmileyVisible('smiley'); // Show smiley face
          setCorrectMatches(correctMatches + 1); // Increment correct matches count
        } else {
          wrongSound.current.play(); // Play warning sound
          setMessage('Wrong pair, try again! 😞'); // Set wrong message with sad face
          setSmileyVisible('sad'); // Show sad face
          setWrongMatches(wrongMatches + 1); // Increment wrong matches count
        }
      }
      setSelectedPair(null); // Reset the selected pair
    }
  };

  // Handle slide navigation
  const nextSlide = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
      resetFeedback(); // Reset feedback for new slide
    } else {
      // If it's the last slide, end the quiz and record the end time
      setQuizFinished(true);
      setEndTime(Date.now());
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
      resetFeedback(); // Reset feedback for new slide
    }
  };

  // Reset feedback states
  const resetFeedback = () => {
    setMessage('');
    setSmileyVisible(null);
    setSelectedPair(null);
  };

  // Handle exit button click
  const handleExit = () => {
    navigate('/assessment'); // Use navigate to go to Home.js
  };

  // Calculate total time taken
  const getElapsedTime = () => {
    if (startTime && endTime) {
      const totalTime = (endTime - startTime) / 1000; // Convert to seconds
      const minutes = Math.floor(totalTime / 60);
      const seconds = Math.floor(totalTime % 60);
      return `${minutes}m ${seconds}s`;
    }
    return null;
  };

  return (
    <div>
    <Navbar/>
    <div>
    <div className='absolute top-10 left-14'>
    
          <button
            onClick={handleExit}
            className="exit-button"
          >
            Exit
          </button>
        </div>
    <div className="quiz-container">
      <h1>Match the Objects</h1>
      
      <div className="pairs-container">
        {/* Left Column */}
        <div className="left-column">
          {slides[currentSlide].leftImages.map((image) => (
            <div
              key={image.id}
              className="pair-box"
              onClick={() => handleImageClick(image, "left")}
            >
              <img src={image.src} alt={image.name} />
            </div>
          ))}
        </div>

        {/* Right Column */}
        <div className="right-column">
          {slides[currentSlide].rightImages.map((image) => (
            <div
              key={image.id}
              className="pair-box"
              onClick={() => handleImageClick(image, "right")}
            >
              <img src={image.src} alt={image.name} />
            </div>
          ))}
        </div>
      </div>

      {/* Feedback Message */}
      {message && (
        <p className={`feedback-message ${message.includes('Wrong') ? 'wrong' : ''}`}>
          {message}
        </p>
      )}

      {/* Smiley or Sad Face */}
      {smileyVisible === 'smiley' && <div className="smiley">😊</div>}
      {smileyVisible === 'sad' && <div className="sad">😞</div>}

      <audio ref={correctSound} src='../sounds/correct.mp3' />
      <audio ref={wrongSound} src='../sounds/buzzer.wav' />

      {/* Slide Navigation Buttons */}
      <div className="navigation-buttons">
        {currentSlide > 0 && (
          <button className="prev-slide-btn" onClick={prevSlide}>
            Previous
          </button>
        )}
        {currentSlide < slides.length - 1 && (
          <button className="next-slide-btn" onClick={nextSlide}>
            Next
          </button>
        )}
        <SubmitButton/>
          
        </div>
      </div>

      {/* Display Score and Time Taken */}
      <div className="score-display">
        <p>Correct Matches: {correctMatches}</p>
        <p>Wrong Matches: {wrongMatches}</p>
        
        {quizFinished && (
          <div className="time-display">
            <p>Time Taken: {getElapsedTime()}</p>
          </div>
        )}
      </div>
    </div>
    </div>
  
  );
}

export default AlphabetMatchPair;
