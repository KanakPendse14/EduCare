import React, { useState } from 'react';
import '../css/eng_test.css'; // Import the styles

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
    letter: 'A',
    backgroundImage: backgroundImages.green,
    options: [
      { imgSrc: alphabetImages.a, letter: 'A', isCorrect: true },
      { imgSrc: alphabetImages.b, letter: 'B', isCorrect: false },
      { imgSrc: alphabetImages.h, letter: 'H', isCorrect: false },
    ],
  },
  {
    letter: 'B',
    backgroundImage: backgroundImages.coral,
    options: [
      { imgSrc: alphabetImages.h, letter: 'H', isCorrect: false },
      { imgSrc: alphabetImages.r, letter: 'R', isCorrect: false },
      { imgSrc: alphabetImages.b, letter: 'B', isCorrect: true },
    ],
  },
  {
    letter: 'C',
    backgroundImage: backgroundImages.blue,
    options: [
      { imgSrc: alphabetImages.o, letter: 'O', isCorrect: false },
      { imgSrc: alphabetImages.c, letter: 'C', isCorrect: true },
      { imgSrc: alphabetImages.u, letter: 'U', isCorrect: false },
    ],
  },
  {
    letter: 'D',
    backgroundImage: backgroundImages.orange,
    options: [
      { imgSrc: alphabetImages.o, letter: 'O', isCorrect: false },
      { imgSrc: alphabetImages.d, letter: 'D', isCorrect: true },
      { imgSrc: alphabetImages.q, letter: 'Q', isCorrect: false }
    ]
  },
  {
    letter: 'E',
    backgroundImage: backgroundImages.purple,
    options: [
      { imgSrc: alphabetImages.e, letter: 'E', isCorrect: true },
      { imgSrc: alphabetImages.b, letter: 'B', isCorrect: false },
      { imgSrc: alphabetImages.k, letter: 'K', isCorrect: false }
    ]
  },
  {
    letter: 'F',
    backgroundImage: backgroundImages.pink,
    options: [
      { imgSrc: alphabetImages.p, letter: 'P', isCorrect: false },
      { imgSrc: alphabetImages.r, letter: 'R', isCorrect: true },
      { imgSrc: alphabetImages.f, letter: 'F', isCorrect: false }
    ]
  },
  {
    letter: 'G',
    backgroundImage: backgroundImages.olive,
    options: [
      { imgSrc: alphabetImages.o, letter: 'O', isCorrect: false },
      { imgSrc: alphabetImages.d, letter: 'D', isCorrect: false },
      { imgSrc: alphabetImages.g, letter: 'G', isCorrect: true }
    ]
  },
  {
    letter: 'H',
    backgroundImage: backgroundImages.purple2,
    options: [
      { imgSrc: alphabetImages.o, letter: 'O', isCorrect: false },
      { imgSrc: alphabetImages.h, letter: 'H', isCorrect: true },
      { imgSrc: alphabetImages.q, letter: 'Q', isCorrect: false }
    ]
  },
  {
    letter: 'I',
    backgroundImage: backgroundImages.darkOrange,
    options: [
      { imgSrc: alphabetImages.i, letter: 'I', isCorrect: true },
      { imgSrc: alphabetImages.d, letter: 'D', isCorrect: false },
      { imgSrc: alphabetImages.q, letter: 'T', isCorrect: false }
    ]
  },
  {
    letter: 'J',
    backgroundImage: backgroundImages.darkBlue,
    options: [
      { imgSrc: alphabetImages.o, letter: 'T', isCorrect: false },
      { imgSrc: alphabetImages.d, letter: 'I', isCorrect: false },
      { imgSrc: alphabetImages.j, letter: 'J', isCorrect: true }
    ]
  },

  // Continue with other letters...
];

const EngTest = () => {
  const [currentIndex, setCurrentIndex] = useState(0); // State to track the current letter
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

  // Function to handle image click
  const handleImageClick = (letter, isCorrect) => {
    if (isCorrect) {
      readLetter(letter); // Read only the letter for the correct image
    } else {
      playBuzzer();
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

      <button
        className="next-btn"
        onClick={() => setCurrentIndex((prevIndex) => (prevIndex + 1) % alphabetData.length)}
      >
        Next Letter
      </button>
    </div>
  );
};

export default EngTest;
