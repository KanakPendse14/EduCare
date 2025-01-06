// import React, { useState } from 'react';
// import threeLetterWordsData from '../data/threeLetterWordsData'; // Adjust the path if needed
// import "../css/LearnThreeLetterWordsPage.css";
// import Navbar from '../components/Navbar'; // Import the Navbar component
// import { useNavigate } from 'react-router-dom'; // Import useNavigate for redirection

// const LearnThreeLetterWordsPage = ({ studentName, studentAge }) => {
//     const [currentWordIndex, setCurrentWordIndex] = useState(0);
//     const [highlights, setHighlights] = useState([false, false, false]);
//     const [completedWords, setCompletedWords] = useState(0); // Track completed words
//     const [recognitionResult, setRecognitionResult] = useState(''); // Track speech recognition result
//     const [accuracyPercentage, setAccuracyPercentage] = useState(0); // Track pronunciation accuracy
//     const navigate = useNavigate(); // Initialize the useNavigate hook

//     const totalWords = threeLetterWordsData.length;

//     // Function to speak the current word and highlight letters
//     const speakWord = (word) => {
//         const utterance = new SpeechSynthesisUtterance(word);
//         speechSynthesis.speak(utterance);

//         // Highlight letters one by one
//         setHighlights([true, false, false]); // Start highlighting
//         const letters = word.split('');
//         letters.forEach((_, index) => {
//             setTimeout(() => {
//                 setHighlights((prev) => prev.map((val, i) => i === index));
//             }, index * 600); // Adjust timing as needed
//         });
//     };

//     // Navigate to the next word
//     const nextWord = () => {
//         if (currentWordIndex < totalWords - 1) {
//             setCurrentWordIndex((prev) => prev + 1);
//             setHighlights([false, false, false]); // Reset highlights
//             setCompletedWords((prev) => Math.min(prev + 1, totalWords)); // Increment completed words
//             setRecognitionResult(''); // Clear the previous recognition result
//             setAccuracyPercentage(0); // Reset accuracy percentage
//         } else {
//             alert('You have completed the course!');
//         }
//     };

//     // Navigate to the previous word
//     const previousWord = () => {
//         if (currentWordIndex > 0) {
//             setCurrentWordIndex((prev) => prev - 1);
//             setHighlights([false, false, false]); // Reset highlights
//             setCompletedWords((prev) => Math.max(prev - 1, 0)); // Decrement completed words
//             setRecognitionResult(''); // Clear the previous recognition result
//             setAccuracyPercentage(0); // Reset accuracy percentage
//         }
//     };

//     // Start speech recognition for pronunciation analysis
//     const startRecognition = () => {
//         const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
//         const recognition = new SpeechRecognition();

//         recognition.onstart = () => {
//             console.log('Speech recognition started');
//         };

//         recognition.onresult = (event) => {
//             const spokenWord = event.results[0][0].transcript.toLowerCase();
//             setRecognitionResult(spokenWord);

//             const correctWord = threeLetterWordsData[currentWordIndex].word.toLowerCase();
//             if (spokenWord === correctWord) {
//                 alert('Correct pronunciation!');
//                 setAccuracyPercentage(100); // Set accuracy to 100% if correct
//             } else {
//                 alert(`Incorrect. You said: ${spokenWord}`);
//                 calculateAccuracy(spokenWord, correctWord);
//             }
//         };

//         recognition.onerror = (event) => {
//             alert('Error occurred in recognition: ' + event.error);
//         };

//         recognition.start();
//     };

//     // Calculate pronunciation accuracy
//     const calculateAccuracy = (spokenWord, correctWord) => {
//         const totalChars = correctWord.length;
//         const matchedChars = [...spokenWord].reduce((count, char, index) => {
//             return char === correctWord[index] ? count + 1 : count;
//         }, 0);
//         const accuracy = (matchedChars / totalChars) * 100; // Calculate accuracy percentage
//         setAccuracyPercentage(accuracy);
//     };

//     // Calculate progress percentage
//     const progressPercentage = (completedWords / totalWords) * 100;

//     // Function to handle the exit button
//     const handleExit = () => {
//         // Redirect to ListenAndLearn.js route
//         navigate('/listenandlearn'); // Change this to the appropriate path
//     };

//     return (
//         <div className="three-letter-words-page">
//             {/* Add the Navbar here */}
//             <Navbar studentName={studentName} studentAge={studentAge} />

//             <h1>Learning Three-Letter Words</h1>
//             <div className="word-slide">
//                 <h2 style={{ fontSize: '80px' }}>
//                     {threeLetterWordsData[currentWordIndex].word.split('').map((letter, index) => (
//                         <span key={index} style={{ color: highlights[index] ? 'red' : 'black' }}>
//                             {letter}
//                         </span>
//                     ))}
//                 </h2>
//                 <img 
//                     src={threeLetterWordsData[currentWordIndex].image} 
//                     alt={`Word ${threeLetterWordsData[currentWordIndex].word}`} 
//                     style={{ width: '300px', height: '300px' }} 
//                 />
//                 <button onClick={() => speakWord(threeLetterWordsData[currentWordIndex].word)}>Play Sound</button>
//                 <button onClick={previousWord}>Previous</button> {/* Previous Button */}
//                 <button onClick={nextWord}>Next</button>
//                 <button onClick={startRecognition}>Pronunciation Analyzer</button> {/* Pronunciation Analyzer */}

//                 {recognitionResult && (
//                     <p>Recognized: {recognitionResult}</p> // Display recognized word
//                 )}
//                 {accuracyPercentage > 0 && (
//                     <p>Pronunciation Accuracy: {Math.round(accuracyPercentage)}%</p> // Display accuracy
//                 )}
//             </div>

//             {/* Progress Bar */}
//             <div className="progress-container">
//                 <div className="progress-bar" style={{ width: `${progressPercentage}%` }}></div>
//             </div>
//             <p>{Math.round(progressPercentage)}% completed</p>

//             {/* Exit Button */}
//             <button onClick={handleExit} className="exit-button">
//                 Exit
//             </button>
//         </div>
//     );
// };

// export default LearnThreeLetterWordsPage;

// import React, { useState, useEffect } from 'react';
// import threeLetterWordsData from '../data/threeLetterWordsData'; // Adjust the path if needed
// import "../css/LearnThreeLetterWordsPage.css";
// import Navbar from '../components/Navbar'; // Import the Navbar component
// import { useNavigate } from 'react-router-dom'; // Import useNavigate for redirection

// const LearnThreeLetterWordsPage = ({ studentName, studentAge }) => {
//     const [currentWordIndex, setCurrentWordIndex] = useState(0);
//     const [highlights, setHighlights] = useState([false, false, false]);
//     const [completedWords, setCompletedWords] = useState(0); // Track completed words
//     const [recognitionResult, setRecognitionResult] = useState(''); // Track speech recognition result
//     const [accuracyPercentage, setAccuracyPercentage] = useState(0); // Track pronunciation accuracy
//     const navigate = useNavigate(); // Initialize the useNavigate hook

//     const totalWords = threeLetterWordsData.length;

//     useEffect(() => {
//         // Check for SpeechRecognition API support
//         const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
//         if (!SpeechRecognition) {
//             alert("Speech Recognition API is not supported in this browser.");
//         }
//     }, []);

//     // Function to speak the current word and highlight letters
//     const speakWord = (word) => {
//         const utterance = new SpeechSynthesisUtterance(word);
//         speechSynthesis.speak(utterance);

//         // Highlight letters one by one
//         setHighlights([true, false, false]); // Start highlighting
//         const letters = word.split('');
//         letters.forEach((_, index) => {
//             setTimeout(() => {
//                 setHighlights((prev) => prev.map((val, i) => i === index));
//             }, index * 600); // Adjust timing as needed
//         });
//     };

//     // Navigate to the next word
//     const nextWord = () => {
//         if (currentWordIndex < totalWords - 1) {
//             setCurrentWordIndex((prev) => prev + 1);
//             setHighlights([false, false, false]); // Reset highlights
//             setCompletedWords((prev) => Math.min(prev + 1, totalWords)); // Increment completed words
//             setRecognitionResult(''); // Clear the previous recognition result
//             setAccuracyPercentage(0); // Reset accuracy percentage
//         } else {
//             alert('You have completed the course!');
//         }
//     };

//     // Navigate to the previous word
//     const previousWord = () => {
//         if (currentWordIndex > 0) {
//             setCurrentWordIndex((prev) => prev - 1);
//             setHighlights([false, false, false]); // Reset highlights
//             setCompletedWords((prev) => Math.max(prev - 1, 0)); // Decrement completed words
//             setRecognitionResult(''); // Clear the previous recognition result
//             setAccuracyPercentage(0); // Reset accuracy percentage
//         }
//     };

//     // Start speech recognition for pronunciation analysis
//     const startRecognition = () => {
//         const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

//         if (!SpeechRecognition) {
//             alert("Your browser doesn't support Speech Recognition.");
//             return;
//         }

//         const recognition = new SpeechRecognition();
//         recognition.continuous = false; // Set to false for one-time recognition
//         recognition.interimResults = false; // Set to true if you want to get intermediate results
//         recognition.lang = 'en-US'; // Set the language for recognition

//         recognition.onstart = () => {
//             console.log('Speech recognition started');
//         };

//         recognition.onresult = (event) => {
//             const spokenWord = event.results[0][0].transcript.toLowerCase();
//             console.log(`Recognized word: ${spokenWord}`);
//             setRecognitionResult(spokenWord);

//             const correctWord = threeLetterWordsData[currentWordIndex].word.toLowerCase();
//             if (spokenWord === correctWord) {
//                 alert('Correct pronunciation!');
//                 setAccuracyPercentage(100); // Set accuracy to 100% if correct
//             } else {
//                 alert(`Incorrect. You said: ${spokenWord}`);
//                 calculateAccuracy(spokenWord, correctWord);
//             }
//         };

//         recognition.onerror = (event) => {
//             alert('Error occurred in recognition: ' + event.error);
//         };

//         recognition.onend = () => {
//             console.log('Speech recognition ended');
//         };

//         recognition.start();
//     };

//     // Calculate pronunciation accuracy
//     const calculateAccuracy = (spokenWord, correctWord) => {
//         const totalChars = correctWord.length;
//         const matchedChars = [...spokenWord].reduce((count, char, index) => {
//             return char === correctWord[index] ? count + 1 : count;
//         }, 0);
//         const accuracy = (matchedChars / totalChars) * 100; // Calculate accuracy percentage
//         setAccuracyPercentage(accuracy);
//     };

//     // Calculate progress percentage
//     const progressPercentage = (completedWords / totalWords) * 100;

//     // Function to handle the exit button
//     const handleExit = () => {
//         // Redirect to ListenAndLearn.js route
//         navigate('/listenandlearn'); // Change this to the appropriate path
//     };

//     return (
//         <div className="three-letter-words-page">
//             {/* Add the Navbar here */}
//             <Navbar studentName={studentName} studentAge={studentAge} />

//             <h1>Learning Three-Letter Words</h1>
//             <div className="word-slide">
//                 <h2 style={{ fontSize: '80px' }}>
//                     {threeLetterWordsData[currentWordIndex].word.split('').map((letter, index) => (
//                         <span key={index} style={{ color: highlights[index] ? 'red' : 'black' }}>
//                             {letter}
//                         </span>
//                     ))}
//                 </h2>
//                 <img 
//                     src={threeLetterWordsData[currentWordIndex].image} 
//                     alt={`Word ${threeLetterWordsData[currentWordIndex].word}`} 
//                     style={{ width: '300px', height: '300px' }} 
//                 />
//                 <button onClick={() => speakWord(threeLetterWordsData[currentWordIndex].word)}>Play Sound</button>
//                 <button onClick={previousWord}>Previous</button> {/* Previous Button */}
//                 <button onClick={nextWord}>Next</button>
//                 <button onClick={startRecognition}>Pronunciation Analyzer</button> {/* Pronunciation Analyzer */}

//                 {recognitionResult && (
//                     <p>Recognized: {recognitionResult}</p> // Display recognized word
//                 )}
//                 {accuracyPercentage > 0 && (
//                     <p>Pronunciation Accuracy: {Math.round(accuracyPercentage)}%</p> // Display accuracy
//                 )}
//             </div>

//             {/* Progress Bar */}
//             <div className="progress-container">
//                 <div className="progress-bar" style={{ width: `${progressPercentage}%` }}></div>
//             </div>
//             <p>{Math.round(progressPercentage)}% completed</p>

//             {/* Exit Button */}
//             <button onClick={handleExit} className="exit-button">
//                 Exit
//             </button>
//         </div>
//     );
// };

// export default LearnThreeLetterWordsPage;

import React, { useState, useEffect } from 'react';
import threeLetterWordsData from '../data/threeLetterWordsData'; // Adjust the path if needed
import "../css/LearnThreeLetterWordsPage.css";
import Navbar from '../components/Navbar'; // Import the Navbar component
import { useNavigate } from 'react-router-dom'; // Import useNavigate for redirection

const LearnThreeLetterWordsPage = ({ studentName, studentAge }) => {
    const [currentWordIndex, setCurrentWordIndex] = useState(0);
    const [highlights, setHighlights] = useState([false, false, false]);
    const [completedWords, setCompletedWords] = useState(0); // Track completed words
    const [recognitionResult, setRecognitionResult] = useState(''); // Track speech recognition result
    const [accuracyPercentage, setAccuracyPercentage] = useState(0); // Track pronunciation accuracy
    const navigate = useNavigate(); // Initialize the useNavigate hook

    const totalWords = threeLetterWordsData.length;

    useEffect(() => {
        // Check for SpeechRecognition API support
        const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
        if (!SpeechRecognition) {
            alert("Speech Recognition API is not supported in this browser.");
        }
    }, []);

    // Function to speak the current word and highlight letters
    const speakWord = (word) => {
        const utterance = new SpeechSynthesisUtterance(word);
        speechSynthesis.speak(utterance);

        // Highlight letters one by one
        setHighlights([true, false, false]); // Start highlighting
        const letters = word.split('');
        letters.forEach((_, index) => {
            setTimeout(() => {
                setHighlights((prev) => prev.map((val, i) => i === index));
            }, index * 600); // Adjust timing as needed
        });
    };

    // Navigate to the next word
    const nextWord = () => {
        if (currentWordIndex < totalWords - 1) {
            setCurrentWordIndex((prev) => prev + 1);
            setHighlights([false, false, false]); // Reset highlights
            setCompletedWords((prev) => Math.min(prev + 1, totalWords)); // Increment completed words
            setRecognitionResult(''); // Clear the previous recognition result
            setAccuracyPercentage(0); // Reset accuracy percentage
        } else {
            alert('You have completed the course!');
        }
    };

    // Navigate to the previous word
    const previousWord = () => {
        if (currentWordIndex > 0) {
            setCurrentWordIndex((prev) => prev - 1);
            setHighlights([false, false, false]); // Reset highlights
            setCompletedWords((prev) => Math.max(prev - 1, 0)); // Decrement completed words
            setRecognitionResult(''); // Clear the previous recognition result
            setAccuracyPercentage(0); // Reset accuracy percentage
        }
    };

    // Start speech recognition for pronunciation analysis
    const startRecognition = () => {
        const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

        if (!SpeechRecognition) {
            alert("Your browser doesn't support Speech Recognition.");
            return;
        }

        const recognition = new SpeechRecognition();
        recognition.continuous = false; // Set to false for one-time recognition
        recognition.interimResults = false; // Set to true if you want to get intermediate results
        recognition.lang = 'en-US'; // Set the language for recognition

        recognition.onstart = () => {
            console.log('Speech recognition started');
        };

        recognition.onresult = (event) => {
            const spokenWord = event.results[0][0].transcript.toLowerCase();
            console.log(`Recognized word: ${spokenWord}`);
            setRecognitionResult(spokenWord);

            const correctWord = threeLetterWordsData[currentWordIndex].word.toLowerCase();
            if (spokenWord === correctWord) {
                setAccuracyPercentage(100); // Set accuracy to 100% if correct
                alert('Correct pronunciation!');
            } else {
                calculateAccuracy(spokenWord, correctWord);
                alert(`Incorrect. You said: ${spokenWord}`);
            }
        };

        recognition.onerror = (event) => {
            alert('Error occurred in recognition: ' + event.error);
        };

        recognition.onend = () => {
            console.log('Speech recognition ended');
        };

        recognition.start();
    };

    // Calculate pronunciation accuracy
    const calculateAccuracy = (spokenWord, correctWord) => {
        const totalChars = correctWord.length;
        const matchedChars = [...spokenWord].reduce((count, char, index) => {
            return char === correctWord[index] ? count + 1 : count;
        }, 0);
        const accuracy = (matchedChars / totalChars) * 100; // Calculate accuracy percentage
        setAccuracyPercentage(accuracy);
    };

    // Calculate progress percentage
    const progressPercentage = (completedWords / totalWords) * 100;

    // Function to handle the exit button
    const handleExit = () => {
        // Redirect to ListenAndLearn.js route
        navigate('/listenandlearn'); // Change this to the appropriate path
    };

    return (
        <div className="three-letter-words-page">
            {/* Add the Navbar here */}
            <Navbar studentName={studentName} studentAge={studentAge} />

            <h1>Learning Three-Letter Words</h1>
            <div className="word-slide">
                <h2 style={{ fontSize: '80px' }}>
                    {threeLetterWordsData[currentWordIndex].word.split('').map((letter, index) => (
                        <span key={index} style={{ color: highlights[index] ? 'red' : 'black' }}>
                            {letter}
                        </span>
                    ))}
                </h2>
                <img 
                    src={threeLetterWordsData[currentWordIndex].image} 
                    alt={`Word ${threeLetterWordsData[currentWordIndex].word}`} 
                    style={{ width: '300px', height: '300px' }} 
                />
                <button onClick={() => speakWord(threeLetterWordsData[currentWordIndex].word)}>Play Sound</button>
                <button onClick={previousWord}>Previous</button> {/* Previous Button */}
                <button onClick={nextWord}>Next</button>
                <button onClick={startRecognition}>Pronunciation Analyzer</button> {/* Pronunciation Analyzer */}

                {recognitionResult && (
                    <p>Recognized: {recognitionResult}</p> // Display recognized word
                )}
                {accuracyPercentage > 0 && (
                    <p>Pronunciation Accuracy: {Math.round(accuracyPercentage)}%</p> // Display accuracy
                )}
            </div>

            {/* Progress Bar */}
            <div className="progress-container">
                <div className="progress-bar" style={{ width: `${progressPercentage}%` }}></div>
            </div>
            <p>{Math.round(progressPercentage)}% completed</p>

            {/* Exit Button */}
            <button onClick={handleExit} className="exit-button">
                Exit
            </button>
        </div>
    );
};

export default LearnThreeLetterWordsPage;
