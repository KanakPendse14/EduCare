import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import '../css/eng_test.css'; // Import the styles
import SubmitButton from '../components/SubmitButton';

// Use relative paths for assets in the public folder
const BuzzerSound = process.env.PUBLIC_URL + '/sounds/buzzer.wav'; // Buzzer sound from public folder

// Use relative URLs for background images
const backgroundImages = {
  green: process.env.PUBLIC_URL + '/images/green.png',
  blue: process.env.PUBLIC_URL + '/images/blue.png',
  darkBlue: process.env.PUBLIC_URL + '/images/darkBlue.png',
  darkOrange: process.env.PUBLIC_URL + '/images/darkOrange.png',
  coral: process.env.PUBLIC_URL + '/images/coral.png',
  olive: process.env.PUBLIC_URL + '/images/olive.png',
  orange: process.env.PUBLIC_URL + '/images/orange.png',
  pink: process.env.PUBLIC_URL + '/images/pink.png',
  purple: process.env.PUBLIC_URL + '/images/purple.png',
  purple2: process.env.PUBLIC_URL + '/images/purple2.png',
};

// Use relative URLs for alphabet images
const alphabetImages = {
  a: process.env.PUBLIC_URL + '/images/a.png',
  b: process.env.PUBLIC_URL + '/images/b.png',
  c: process.env.PUBLIC_URL + '/images/c.png',
  d: process.env.PUBLIC_URL + '/images/d.png',
  e: process.env.PUBLIC_URL + '/images/e.png',
  f: process.env.PUBLIC_URL + '/images/f.png',
  g: process.env.PUBLIC_URL + '/images/g.png',
  h: process.env.PUBLIC_URL + '/images/h.png',
  i: process.env.PUBLIC_URL + '/images/i.png',
  j: process.env.PUBLIC_URL + '/images/j.png',
  k: process.env.PUBLIC_URL + '/images/k.png',
  l: process.env.PUBLIC_URL + '/images/l.png',
  m: process.env.PUBLIC_URL + '/images/m.png',
  n: process.env.PUBLIC_URL + '/images/n.png',
  o: process.env.PUBLIC_URL + '/images/o.png',
  p: process.env.PUBLIC_URL + '/images/p.png',
  q: process.env.PUBLIC_URL + '/images/q.png',
  r: process.env.PUBLIC_URL + '/images/r.png',
  s: process.env.PUBLIC_URL + '/images/s.png',
  t: process.env.PUBLIC_URL + '/images/t.png',
  u: process.env.PUBLIC_URL + '/images/u.png',
  v: process.env.PUBLIC_URL + '/images/v.png',
  w: process.env.PUBLIC_URL + '/images/w.png',
  x: process.env.PUBLIC_URL + '/images/x.png',
  y: process.env.PUBLIC_URL + '/images/y.png',
  z: process.env.PUBLIC_URL + '/images/z.png',
};

// Data structure for the alphabet test
const alphabetData = [
  {
    letter: 'H',
    question: 'Which image corresponds to the letter H?',
    backgroundImage: backgroundImages.purple,
    options: [
      { imgSrc: alphabetImages.h, letter: 'H', isCorrect: true },
      { imgSrc: alphabetImages.u, letter: 'U', isCorrect: false },
      { imgSrc: alphabetImages.i, letter: 'I', isCorrect: false },
    ],
  },
  {
    letter: 'C',
    question: 'Which image corresponds to the letter C?',
    backgroundImage: backgroundImages.blue,
    options: [
      { imgSrc: alphabetImages.o, letter: 'O', isCorrect: false },
      { imgSrc: alphabetImages.c, letter: 'C', isCorrect: true },
      { imgSrc: alphabetImages.u, letter: 'U', isCorrect: false },
    ],
  },
  {
    letter: 'F',
    question: 'Which image corresponds to the letter F?',
    backgroundImage: backgroundImages.pink,
    options: [
      { imgSrc: alphabetImages.f, letter: 'F', isCorrect: true },
      { imgSrc: alphabetImages.k, letter: 'K', isCorrect: false },
      { imgSrc: alphabetImages.l, letter: 'L', isCorrect: false },
    ],
  },
  {
    letter: 'A',
    question: 'Which image corresponds to the letter A?',
    backgroundImage: backgroundImages.green,
    options: [
      { imgSrc: alphabetImages.a, letter: 'A', isCorrect: true },
      { imgSrc: alphabetImages.b, letter: 'B', isCorrect: false },
      { imgSrc: alphabetImages.h, letter: 'H', isCorrect: false },
    ],
  },
  {
    letter: 'J',
    question: 'Which image corresponds to the letter J?',
    backgroundImage: backgroundImages.cyan,
    options: [
      { imgSrc: alphabetImages.j, letter: 'J', isCorrect: true },
      { imgSrc: alphabetImages.p, letter: 'P', isCorrect: false },
      { imgSrc: alphabetImages.y, letter: 'Y', isCorrect: false },
    ],
  },
  {
    letter: 'B',
    question: 'Which image corresponds to the letter B?',
    backgroundImage: backgroundImages.coral,
    options: [
      { imgSrc: alphabetImages.h, letter: 'H', isCorrect: false },
      { imgSrc: alphabetImages.r, letter: 'R', isCorrect: false },
      { imgSrc: alphabetImages.b, letter: 'B', isCorrect: true },
    ],
  },
  {
    letter: 'I',
    question: 'Which image corresponds to the letter I?',
    backgroundImage: backgroundImages.lime,
    options: [
      { imgSrc: alphabetImages.i, letter: 'I', isCorrect: true },
      { imgSrc: alphabetImages.w, letter: 'W', isCorrect: false },
      { imgSrc: alphabetImages.x, letter: 'X', isCorrect: false },
    ],
  },
  {
    letter: 'D',
    question: 'Which image corresponds to the letter D?',
    backgroundImage: backgroundImages.yellow,
    options: [
      { imgSrc: alphabetImages.d, letter: 'D', isCorrect: true },
      { imgSrc: alphabetImages.g, letter: 'G', isCorrect: false },
      { imgSrc: alphabetImages.m, letter: 'M', isCorrect: false },
    ],
  },
  {
    letter: 'G',
    question: 'Which image corresponds to the letter G?',
    backgroundImage: backgroundImages.teal,
    options: [
      { imgSrc: alphabetImages.g, letter: 'G', isCorrect: true },
      { imgSrc: alphabetImages.t, letter: 'T', isCorrect: false },
      { imgSrc: alphabetImages.a, letter: 'A', isCorrect: false },
    ],
  },
  {
    letter: 'E',
    question: 'Which image corresponds to the letter E?',
    backgroundImage: backgroundImages.orange,
    options: [
      { imgSrc: alphabetImages.e, letter: 'E', isCorrect: true },
      { imgSrc: alphabetImages.s, letter: 'S', isCorrect: false },
      { imgSrc: alphabetImages.f, letter: 'F', isCorrect: false },
    ],
  },
];

const EngTest = () => {
  const [currentIndex, setCurrentIndex] = useState(0); // State to track the current letter
  const [correctCount, setCorrectCount] = useState(0); // State to track correct answers
  const [incorrectCount, setIncorrectCount] = useState(0); // State to track incorrect answers
  const navigate = useNavigate(); // Hook to navigate to other routes

  const currentTest = alphabetData[currentIndex]; // Get the current test data

  // Function to pronounce "Select" and the correct letter
  const readFullAnswer = () => {
    const text = `Select ${currentTest.letter}`; // Concatenate "Select" with the current letter
    const speech = new SpeechSynthesisUtterance(text);
    speech.rate = 0.75; // Set speech rate to 0.75x
    speech.volume = 1;  // Set volume to maximum (1.0)
    speechSynthesis.speak(speech);
  };

  // Function to pronounce only the letter
  const readLetter = (letter) => {
    const speech = new SpeechSynthesisUtterance(letter);
    speech.rate = 0.75; // Set speech rate to 0.75x
    speech.volume = 1;  // Set volume to maximum (1.0)
    speechSynthesis.speak(speech);
  };

  // Function to play the buzzer sound for wrong answers
  const playBuzzer = () => {
    const buzzer = new Audio(BuzzerSound);
    buzzer.volume = 0.25;  // Set volume to 25%
    buzzer.play();

    // Stop the sound after 1 second (cutting it from 2 seconds to 1 second)
    setTimeout(() => {
      buzzer.pause();
      buzzer.currentTime = 0; // Reset to start
    }, 1000); // 1000 milliseconds = 1 second
  };

  const handleExit = () => {
    navigate('/assessment');
  };

  // Function to handle image click
  const handleImageClick = (letter, isCorrect) => {
    if (isCorrect) {
      readLetter(letter); // Read only the letter for the correct image
      setCorrectCount(correctCount + 1); // Increment correct answers
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % alphabetData.length); // Move to next letter
      }, 500); // Short delay before switching to the next letter
    } else {
      playBuzzer();
      setIncorrectCount(incorrectCount + 1); // Increment incorrect answers
    }
  };

  return (
    <div
      className="container"
      style={{
        backgroundImage: `url(${currentTest.backgroundImage})`, // Dynamically set background image
        backgroundSize: 'cover',
      }}
    >
      {/* Display the scores at the top right corner */}
      <div className="scoreboard" style={{ position: 'absolute', top: '10px', right: '10px', color: 'white' }}>
        <div>Correct: {correctCount}</div>
        <div>Incorrect: {incorrectCount}</div>
      </div>

      <div className="left-text">
        <h1>Select {currentTest.letter}</h1>
      </div>

      <button className="audio-btn" onClick={readFullAnswer}>
        🔊 Read Aloud
      </button>

      {/* Centered container for the three alphabet images */}
      <div className="alphabet-images">
        {currentTest.options.map((option, index) => (
          <img
            key={index}
            src={option.imgSrc}
            alt={option.letter}
            className="alphabet"
            onClick={() => handleImageClick(option.letter, option.isCorrect)}
          />
        ))}
      </div>

      {/* Previous letter button */}
      <button
        className="prev-btn"
        style={{ position: 'absolute', bottom: '10px', left: '10px' }}
        onClick={() => setCurrentIndex((prevIndex) => (prevIndex === 0 ? alphabetData.length - 1 : prevIndex - 1))}
      >
        Previous Letter
      </button>
      

      <div className='absolute top-10 left-2'>
          <button
            onClick={handleExit}
            className='bg-black/20 text-white px-9 py-3 rounded-full shadow-lg hover:bg-black/30 transition duration-300'
          >
            Exit
          </button>
        </div>

      {/* Next letter button */}
      <SubmitButton/>
      <button
        className="next-btn"
        style={{ position: 'absolute', bottom: '10px', right: '10px' }}
        onClick={() => setCurrentIndex((prevIndex) => (prevIndex + 1) % alphabetData.length)}
      >
        Next Letter
      </button>
    </div>
  );
};

export default EngTest;
