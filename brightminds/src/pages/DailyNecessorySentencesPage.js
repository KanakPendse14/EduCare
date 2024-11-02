// import React, { useState, useRef } from 'react';
// import dailyNecessorySentencesData from '../data/DailyNecessorySentencesdata';
// import '../css/DailyNecessorySentences.css';

// const DailyNecessorySentencesPage = () => {
//   const [currentSentenceIndex, setCurrentSentenceIndex] = useState(0);
//   const [isRecording, setIsRecording] = useState(false);
//   const [audioURL, setAudioURL] = useState(null);
//   const [highlightedWordIndex, setHighlightedWordIndex] = useState(null);
//   const [completedSentences, setCompletedSentences] = useState(0); // Track completed sentences
//   const mediaRecorderRef = useRef(null);
//   const audioChunksRef = useRef([]);

//   const totalSentences = dailyNecessorySentencesData.length;

//   // Function to speak the current sentence in English
//   const speakSentence = (sentence) => {
//     const utterance = new SpeechSynthesisUtterance(sentence);
//     speechSynthesis.speak(utterance);

//     // Highlight words one by one
//     const words = sentence.split(' ');
//     words.forEach((_, index) => {
//       setTimeout(() => {
//         setHighlightedWordIndex(index);
//       }, index * 600); // Adjust timing as needed
//     });
//   };

//   // Function to speak the current sentence in Hindi
//   const speakHindiSentence = (hindi) => {
//     const utterance = new SpeechSynthesisUtterance(hindi);
//     utterance.lang = 'hi-IN'; // Set the language to Hindi

//     // Optionally, set a specific Hindi voice if available
//     const voices = speechSynthesis.getVoices();
//     const hindiVoice = voices.find((voice) => voice.lang === 'hi-IN');
//     if (hindiVoice) {
//       utterance.voice = hindiVoice;
//     }

//     speechSynthesis.speak(utterance);
//   };

//   // Navigate to the next sentence
//   const nextSentence = () => {
//     if (currentSentenceIndex < totalSentences - 1) {
//       setCurrentSentenceIndex((prev) => prev + 1);
//       setHighlightedWordIndex(null); // Reset highlights
//       setCompletedSentences((prev) => Math.min(prev + 1, totalSentences)); // Increment completed sentences
//     } else {
//       alert('You have completed the course!');
//     }
//   };

//   // Navigate to the previous sentence
//   const previousSentence = () => {
//     if (currentSentenceIndex > 0) {
//       setCurrentSentenceIndex((prev) => prev - 1);
//       setHighlightedWordIndex(null); // Reset highlights
//       setCompletedSentences((prev) => Math.max(prev - 1, 0)); // Decrement completed sentences
//     }
//   };

//   // Start recording audio
//   const startRecording = async () => {
//     setIsRecording(true);
//     audioChunksRef.current = [];
//     const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
//     mediaRecorderRef.current = new MediaRecorder(stream);
    
//     mediaRecorderRef.current.ondataavailable = (event) => {
//       audioChunksRef.current.push(event.data);
//     };

//     mediaRecorderRef.current.onstop = () => {
//       const audioBlob = new Blob(audioChunksRef.current, { type: 'audio/wav' });
//       const url = URL.createObjectURL(audioBlob);
//       setAudioURL(url); // Save the audio URL
//     };

//     mediaRecorderRef.current.start();
//   };

//   // Stop recording audio
//   const stopRecording = () => {
//     mediaRecorderRef.current.stop();
//     setIsRecording(false);
//   };

//   // Calculate progress percentage
//   const progressPercentage = (completedSentences / totalSentences) * 100;

//   const { sentence, hindi, image } = dailyNecessorySentencesData[currentSentenceIndex];
//   const words = sentence.split(' ');

//   return (
//     <div className="daily-necessory-sentences-page">
//       <h1>Daily Necessory Sentences</h1>
//       <div className="sentence-slide">
//         <h2>
//           {words.map((word, index) => (
//             <span key={index} style={{ color: highlightedWordIndex === index ? 'red' : 'black' }}>
//               {word}{' '}
//             </span>
//           ))}
//         </h2>
//         <h2>{hindi}</h2>
//         <img src={`images/${image}`} alt={sentence} className="sentence-image" />

//         <div className="button-container">
//           <button onClick={previousSentence}>Previous</button>
//           <button onClick={() => speakSentence(sentence)}>Play English Sound</button>
//           <button onClick={() => speakHindiSentence(hindi)}>Play Hindi Sound</button>
//           <button onClick={nextSentence}>Next</button>
//         </div>

//         {isRecording ? (
//           <button onClick={stopRecording}>Stop Recording</button>
//         ) : (
//           <button onClick={startRecording}>Start Recording</button>
//         )}

//         {audioURL && (
//           <audio controls>
//             <source src={audioURL} type="audio/wav" />
//             Your browser does not support the audio tag.
//           </audio>
//         )}
//       </div>

//       {/* Progress Bar */}
//       <div className="progress-container">
//         <div className="progress-bar" style={{ width: `${progressPercentage}%` }}></div>
//       </div>
//       <p>{Math.round(progressPercentage)}% completed</p>
//     </div>
//   );
// };

// export default DailyNecessorySentencesPage;
// import React, { useState, useRef } from 'react';
// import dailyNecessorySentencesData from '../data/DailyNecessorySentencesdata';
// import '../css/DailyNecessorySentences.css';
// import Navbar from '../components/Navbar';
// import { useNavigate } from 'react-router-dom';

// const DailyNecessorySentencesPage = () => {
//   const [currentSentenceIndex, setCurrentSentenceIndex] = useState(0);
//   const [isRecording, setIsRecording] = useState(false);
//   const [highlightedWordIndex, setHighlightedWordIndex] = useState(null);
//   const [highlightedHindiWordIndex, setHighlightedHindiWordIndex] = useState(null);
//   const [completedSentences, setCompletedSentences] = useState(0);
//   const [recognitionResult, setRecognitionResult] = useState('');
//   const [accuracy, setAccuracy] = useState(null); // Store accuracy percentage
//   const mediaRecorderRef = useRef(null);
//   const audioChunksRef = useRef([]);
//   const navigate = useNavigate();

//   const totalSentences = dailyNecessorySentencesData.length;

//   const speakSentence = (sentence) => {
//     const utterance = new SpeechSynthesisUtterance(sentence);
//     speechSynthesis.speak(utterance);
//     const words = sentence.split(' ');
//     words.forEach((_, index) => {
//       setTimeout(() => {
//         setHighlightedWordIndex(index);
//       }, index * 600);
//     });
//   };

//   const speakHindiSentence = (hindi) => {
//     const utterance = new SpeechSynthesisUtterance(hindi);
//     utterance.lang = 'hi-IN';
//     const voices = speechSynthesis.getVoices();
//     const hindiVoice = voices.find((voice) => voice.lang === 'hi-IN');
//     if (hindiVoice) {
//       utterance.voice = hindiVoice;
//     }
//     speechSynthesis.speak(utterance);
//     const hindiWords = hindi.split(' ');
//     hindiWords.forEach((_, index) => {
//       setTimeout(() => {
//         setHighlightedHindiWordIndex(index);
//       }, index * 600);
//     });
//   };

//   const nextSentence = () => {
//     if (currentSentenceIndex < totalSentences - 1) {
//       setCurrentSentenceIndex((prev) => prev + 1);
//       setHighlightedWordIndex(null);
//       setHighlightedHindiWordIndex(null);
//       setCompletedSentences((prev) => Math.min(prev + 1, totalSentences));
//       setRecognitionResult(''); // Reset recognition result on next sentence
//       setAccuracy(null); // Reset accuracy on next sentence
//     } else {
//       alert('You have completed the course!');
//     }
//   };

//   const previousSentence = () => {
//     if (currentSentenceIndex > 0) {
//       setCurrentSentenceIndex((prev) => prev - 1);
//       setHighlightedWordIndex(null);
//       setHighlightedHindiWordIndex(null);
//       setCompletedSentences((prev) => Math.max(prev - 1, 0));
//       setRecognitionResult(''); // Reset recognition result on previous sentence
//       setAccuracy(null); // Reset accuracy on previous sentence
//     }
//   };

//   const analyzePronunciation = () => {
//     const sentence = dailyNecessorySentencesData[currentSentenceIndex].sentence;
//     const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
//     recognition.interimResults = false;
//     recognition.lang = 'en-US';

//     recognition.start();

//     recognition.onresult = (event) => {
//       const transcript = event.results[0][0].transcript;
//       setRecognitionResult(transcript);
//       calculateAccuracy(transcript, sentence);
//     };

//     recognition.onerror = (event) => {
//       console.error('Error occurred in recognition: ', event.error);
//     };
//   };

//   // Calculate accuracy based on word matches
//   const calculateAccuracy = (spoken, expected) => {
//     const spokenWords = spoken.toLowerCase().trim().split(' ');
//     const expectedWords = expected.toLowerCase().trim().split(' ');

//     let correctWordCount = 0;
//     expectedWords.forEach((word) => {
//       if (spokenWords.includes(word)) {
//         correctWordCount++;
//       }
//     });

//     const accuracyPercentage = (correctWordCount / expectedWords.length) * 100;
//     setAccuracy(accuracyPercentage.toFixed(2)); // Set accuracy percentage
//   };

//   const progressPercentage = (completedSentences / totalSentences) * 100;

//   const handleExit = () => {
//     navigate('/listenandlearn');
//   };

//   const { sentence, hindi, image } = dailyNecessorySentencesData[currentSentenceIndex];
//   const words = sentence.split(' ');
//   const hindiWords = hindi.split(' ');

//   return (
//     <div className="daily-necessory-sentences-page">
//       <Navbar />
//       <h1>Daily Necessory Sentences</h1>
//       <div className="sentence-slide">
//         <h2>
//           {words.map((word, index) => (
//             <span key={index} style={{ color: highlightedWordIndex === index ? 'red' : 'black' }}>
//               {word}{' '}
//             </span>
//           ))}
//         </h2>
//         <h2>
//           {hindiWords.map((word, index) => (
//             <span key={index} style={{ color: highlightedHindiWordIndex === index ? 'red' : 'black' }}>
//               {word}{' '}
//             </span>
//           ))}
//         </h2>
//         <img src={`images/${image}`} alt={sentence} className="sentence-image" />

//         <div className="button-container">
//           <button onClick={previousSentence}>Previous</button>
//           <button onClick={() => speakSentence(sentence)}>Play English Sound</button>
//           <button onClick={() => speakHindiSentence(hindi)}>Play Hindi Sound</button>
//           <button onClick={nextSentence}>Next</button>
//         </div>

//         {/* Pronunciation Analyzer Button */}
//         <button onClick={analyzePronunciation}>Analyze English Pronunciation</button>

//         {/* Display recognition result and accuracy */}
//         {recognitionResult && (
//           <div>
//             <p>Recognized: {recognitionResult}</p>
//             {accuracy !== null && <p>Accuracy: {accuracy}%</p>}
//           </div>
//         )}
//       </div>

//       {/* Progress Bar */}
//       <div className="progress-container">
//         <div className="progress-bar" style={{ width: `${progressPercentage}%` }}></div>
//       </div>
//       <p>{Math.round(progressPercentage)}% completed</p>
//       {/* Exit Button */}
//       <button onClick={handleExit} className="exit-button">
//         Exit
//       </button>
//     </div>
//   );
// };

// // export default DailyNecessorySentencesPage;
// import React, { useState, useRef } from 'react';
// import dailyNecessorySentencesData from '../data/DailyNecessorySentencesdata';
// import '../css/DailyNecessorySentences.css';
// import Navbar from '../components/Navbar';
// import { useNavigate } from 'react-router-dom';

// const DailyNecessorySentencesPage = () => {
//   const [currentSentenceIndex, setCurrentSentenceIndex] = useState(0);
//   const [isRecording, setIsRecording] = useState(false);
//   const [highlightedWordIndex, setHighlightedWordIndex] = useState(null);
//   const [highlightedHindiWordIndex, setHighlightedHindiWordIndex] = useState(null);
//   const [completedSentences, setCompletedSentences] = useState(0);
//   const [recognitionResult, setRecognitionResult] = useState('');
//   const [accuracy, setAccuracy] = useState(null); // Store accuracy percentage
//   const mediaRecorderRef = useRef(null);
//   const audioChunksRef = useRef([]);
//   const navigate = useNavigate();

//   const totalSentences = dailyNecessorySentencesData.length;

//   const speakSentence = (sentence) => {
//     const utterance = new SpeechSynthesisUtterance(sentence);
//     speechSynthesis.speak(utterance);
//     const words = sentence.split(' ');
//     words.forEach((_, index) => {
//       setTimeout(() => {
//         setHighlightedWordIndex(index);
//       }, index * 600);
//     });
//   };

//   const speakHindiSentence = (hindi) => {
//     const utterance = new SpeechSynthesisUtterance(hindi);
//     utterance.lang = 'hi-IN';
//     const voices = speechSynthesis.getVoices();
//     const hindiVoice = voices.find((voice) => voice.lang === 'hi-IN');
//     if (hindiVoice) {
//       utterance.voice = hindiVoice;
//     }
//     speechSynthesis.speak(utterance);
//     const hindiWords = hindi.split(' ');
//     hindiWords.forEach((_, index) => {
//       setTimeout(() => {
//         setHighlightedHindiWordIndex(index);
//       }, index * 600);
//     });
//   };

//   const nextSentence = () => {
//     if (currentSentenceIndex < totalSentences - 1) {
//       setCurrentSentenceIndex((prev) => prev + 1);
//       setHighlightedWordIndex(null);
//       setHighlightedHindiWordIndex(null);
//       setCompletedSentences((prev) => Math.min(prev + 1, totalSentences));
//       setRecognitionResult(''); // Reset recognition result on next sentence
//       setAccuracy(null); // Reset accuracy on next sentence
//     } else {
//       alert('You have completed the course!');
//     }
//   };

//   const previousSentence = () => {
//     if (currentSentenceIndex > 0) {
//       setCurrentSentenceIndex((prev) => prev - 1);
//       setHighlightedWordIndex(null);
//       setHighlightedHindiWordIndex(null);
//       setCompletedSentences((prev) => Math.max(prev - 1, 0));
//       setRecognitionResult(''); // Reset recognition result on previous sentence
//       setAccuracy(null); // Reset accuracy on previous sentence
//     }
//   };

//   const analyzePronunciation = () => {
//     const sentence = dailyNecessorySentencesData[currentSentenceIndex].sentence;
//     const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
//     if (!SpeechRecognition) {
//       alert('Speech recognition not supported in your browser. Please use Chrome.');
//       return;
//     }

//     const recognition = new SpeechRecognition();
//     recognition.lang = 'en-US';
//     recognition.interimResults = false;

//     recognition.start();

//     recognition.onresult = (event) => {
//       const transcript = event.results[0][0].transcript;
//       setRecognitionResult(transcript);
//       calculateAccuracy(transcript, sentence);
//     };

//     recognition.onerror = (event) => {
//       console.error('Error during recognition:', event.error);
//       alert('Speech recognition error: ' + event.error);
//     };
//   };

//   // Calculate accuracy based on word matches
//   const calculateAccuracy = (spoken, expected) => {
//     const spokenWords = spoken.toLowerCase().trim().split(' ');
//     const expectedWords = expected.toLowerCase().trim().split(' ');

//     let correctWordCount = 0;
//     expectedWords.forEach((word) => {
//       if (spokenWords.includes(word)) {
//         correctWordCount++;
//       }
//     });

//     const accuracyPercentage = (correctWordCount / expectedWords.length) * 100;
//     setAccuracy(accuracyPercentage.toFixed(2)); // Set accuracy percentage
//   };

//   const progressPercentage = (completedSentences / totalSentences) * 100;

//   const handleExit = () => {
//     navigate('/listenandlearn');
//   };

//   const { sentence, hindi, image } = dailyNecessorySentencesData[currentSentenceIndex];
//   const words = sentence.split(' ');
//   const hindiWords = hindi.split(' ');

//   return (
//     <div className="daily-necessory-sentences-page">
//       <Navbar />
//       <h1>Daily Necessory Sentences</h1>
//       <div className="sentence-slide">
//         <h2>
//           {words.map((word, index) => (
//             <span key={index} style={{ color: highlightedWordIndex === index ? 'red' : 'black' }}>
//               {word}{' '}
//             </span>
//           ))}
//         </h2>
//         <h2>
//           {hindiWords.map((word, index) => (
//             <span key={index} style={{ color: highlightedHindiWordIndex === index ? 'red' : 'black' }}>
//               {word}{' '}
//             </span>
//           ))}
//         </h2>
//         <img src={`images/${image}`} alt={sentence} className="sentence-image" />

//         <div className="button-container">
//           <button onClick={previousSentence}>Previous</button>
//           <button onClick={() => speakSentence(sentence)}>Play English Sound</button>
//           <button onClick={() => speakHindiSentence(hindi)}>Play Hindi Sound</button>
//           <button onClick={nextSentence}>Next</button>
//         </div>

//         {/* Pronunciation Analyzer Button */}
//         <button onClick={analyzePronunciation}>Analyze English Pronunciation</button>

//         {/* Display recognition result and accuracy */}
//         {recognitionResult && (
//           <div>
//             <p>Recognized: {recognitionResult}</p>
//             {accuracy !== null && <p>Accuracy: {accuracy}%</p>}
//           </div>
//         )}
//       </div>

//       {/* Progress Bar */}
//       <div className="progress-container">
//         <div className="progress-bar" style={{ width: `${progressPercentage}%` }}></div>
//       </div>
//       <p>{Math.round(progressPercentage)}% completed</p>
//       {/* Exit Button */}
//       <button onClick={handleExit} className="exit-button">
//         Exit
//       </button>
//     </div>
//   );
// };

// export default DailyNecessorySentencesPage;

// import React, { useState } from 'react';
// import dailyNecessorySentencesData from '../data/DailyNecessorySentencesdata';
// import '../css/DailyNecessorySentences.css';
// import Navbar from '../components/Navbar';
// import { useNavigate } from 'react-router-dom';

// const DailyNecessorySentencesPage = () => {
//   const [currentSentenceIndex, setCurrentSentenceIndex] = useState(0);
//   const [highlightedWordIndex, setHighlightedWordIndex] = useState(null);
//   const [highlightedHindiWordIndex, setHighlightedHindiWordIndex] = useState(null);
//   const [completedSentences, setCompletedSentences] = useState(0);
//   const [recognitionResult, setRecognitionResult] = useState('');
//   const [accuracy, setAccuracy] = useState(null); // Store accuracy percentage
//   const navigate = useNavigate();

//   const totalSentences = dailyNecessorySentencesData.length;

//   const speakSentence = (sentence) => {
//     const utterance = new SpeechSynthesisUtterance(sentence);
//     speechSynthesis.speak(utterance);
//     const words = sentence.split(' ');
//     words.forEach((_, index) => {
//       setTimeout(() => {
//         setHighlightedWordIndex(index);
//       }, index * 600);
//     });
//   };

//   const speakHindiSentence = (hindi) => {
//     const utterance = new SpeechSynthesisUtterance(hindi);
//     utterance.lang = 'hi-IN';
//     const voices = speechSynthesis.getVoices();
//     const hindiVoice = voices.find((voice) => voice.lang === 'hi-IN');
//     if (hindiVoice) {
//       utterance.voice = hindiVoice;
//     }
//     speechSynthesis.speak(utterance);
//     const hindiWords = hindi.split(' ');
//     hindiWords.forEach((_, index) => {
//       setTimeout(() => {
//         setHighlightedHindiWordIndex(index);
//       }, index * 600);
//     });
//   };

//   const nextSentence = () => {
//     if (currentSentenceIndex < totalSentences - 1) {
//       setCurrentSentenceIndex((prev) => prev + 1);
//       setHighlightedWordIndex(null);
//       setHighlightedHindiWordIndex(null);
//       setCompletedSentences((prev) => Math.min(prev + 1, totalSentences));
//       setRecognitionResult(''); // Reset recognition result on next sentence
//       setAccuracy(null); // Reset accuracy on next sentence
//     } else {
//       alert('You have completed the course!');
//     }
//   };

//   const previousSentence = () => {
//     if (currentSentenceIndex > 0) {
//       setCurrentSentenceIndex((prev) => prev - 1);
//       setHighlightedWordIndex(null);
//       setHighlightedHindiWordIndex(null);
//       setCompletedSentences((prev) => Math.max(prev - 1, 0));
//       setRecognitionResult(''); // Reset recognition result on previous sentence
//       setAccuracy(null); // Reset accuracy on previous sentence
//     }
//   };

//   const analyzePronunciation = () => {
//     const sentence = dailyNecessorySentencesData[currentSentenceIndex].sentence;
//     const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
//     if (!SpeechRecognition) {
//       alert('Speech recognition not supported in your browser. Please use Chrome.');
//       return;
//     }

//     const recognition = new SpeechRecognition();
//     recognition.lang = 'en-US';
//     recognition.interimResults = false;

//     recognition.start();

//     recognition.onresult = (event) => {
//       const transcript = event.results[0][0].transcript;
//       setRecognitionResult(transcript);
//       calculateAccuracy(transcript, sentence);
//     };

//     recognition.onerror = (event) => {
//       console.error('Error during recognition:', event.error);
//       alert('Speech recognition error: ' + event.error);
//     };
//   };

//   // Calculate accuracy by comparing word by word, including the order
//   const calculateAccuracy = (spoken, expected) => {
//     const spokenWords = spoken.toLowerCase().trim().split(' ');
//     const expectedWords = expected.toLowerCase().trim().split(' ');

//     const totalWords = expectedWords.length;
//     let correctWordCount = 0;

//     for (let i = 0; i < totalWords; i++) {
//       if (spokenWords[i] === expectedWords[i]) {
//         correctWordCount++;
//       }
//     }

//     // Determine accuracy based on the percentage of correct words
//     let accuracyPercentage;
//     if (correctWordCount === totalWords) {
//       accuracyPercentage = 100; // Perfect match
//     } else if (correctWordCount === 0) {
//       accuracyPercentage = 0; // Totally different
//     } else {
//       accuracyPercentage = (correctWordCount / totalWords) * 100; // Partial match
//     }

//     setAccuracy(accuracyPercentage.toFixed(2)); // Set accuracy percentage
//   };

//   const progressPercentage = (completedSentences / totalSentences) * 100;

//   const handleExit = () => {
//     navigate('/listenandlearn');
//   };

//   const { sentence, hindi, image } = dailyNecessorySentencesData[currentSentenceIndex];
//   const words = sentence.split(' ');
//   const hindiWords = hindi.split(' ');

//   return (
//     <div className="daily-necessory-sentences-page">
//       <Navbar />
//       <h1>Daily Necessory Sentences</h1>
//       <div className="sentence-slide">
//         <h2>
//           {words.map((word, index) => (
//             <span key={index} style={{ color: highlightedWordIndex === index ? 'red' : 'black' }}>
//               {word}{' '}
//             </span>
//           ))}
//         </h2>
//         <h2>
//           {hindiWords.map((word, index) => (
//             <span key={index} style={{ color: highlightedHindiWordIndex === index ? 'red' : 'black' }}>
//               {word}{' '}
//             </span>
//           ))}
//         </h2>
//         <img src={`images/${image}`} alt={sentence} className="sentence-image" />

//         <div className="button-container">
//           <button onClick={previousSentence}>Previous</button>
//           <button onClick={() => speakSentence(sentence)}>Play English Sound</button>
//           <button onClick={() => speakHindiSentence(hindi)}>Play Hindi Sound</button>
//           <button onClick={nextSentence}>Next</button>
//         </div>

//         {/* Pronunciation Analyzer Button */}
//         <button onClick={analyzePronunciation}>Analyze English Pronunciation</button>

//         {/* Display recognition result and accuracy */}
//         {recognitionResult && (
//           <div>
//             <p>Recognized: {recognitionResult}</p>
//             {accuracy !== null && <p>Accuracy: {accuracy}%</p>}
//           </div>
//         )}
//       </div>

//       {/* Progress Bar */}
//       <div className="progress-container">
//         <div className="progress-bar" style={{ width: `${progressPercentage}%` }}></div>
//       </div>
//       <p>{Math.round(progressPercentage)}% completed</p>
//       {/* Exit Button */}
//       <button onClick={handleExit} className="exit-button">
//         Exit
//       </button>
//     </div>
//   );
// };

// export default DailyNecessorySentencesPage;

import React, { useState } from 'react';
import dailyNecessorySentencesData from '../data/DailyNecessorySentencesdata';
import '../css/DailyNecessorySentences.css';
import Navbar from '../components/Navbar';
import { useNavigate } from 'react-router-dom';

const DailyNecessorySentencesPage = () => {
  const [currentSentenceIndex, setCurrentSentenceIndex] = useState(0);
  const [highlightedWordIndex, setHighlightedWordIndex] = useState(null);
  const [highlightedHindiWordIndex, setHighlightedHindiWordIndex] = useState(null);
  const [completedSentences, setCompletedSentences] = useState(0);
  const [recognitionResult, setRecognitionResult] = useState('');
  const [accuracy, setAccuracy] = useState(null); // Store accuracy percentage
  const navigate = useNavigate();

  const totalSentences = dailyNecessorySentencesData.length;

  const speakSentence = (sentence) => {
    const utterance = new SpeechSynthesisUtterance(sentence);
    speechSynthesis.speak(utterance);
    const words = sentence.split(' ');
    words.forEach((_, index) => {
      setTimeout(() => {
        setHighlightedWordIndex(index);
      }, index * 600);
    });
  };

  const speakHindiSentence = (hindi) => {
    const utterance = new SpeechSynthesisUtterance(hindi);
    utterance.lang = 'hi-IN';
    const voices = speechSynthesis.getVoices();
    const hindiVoice = voices.find((voice) => voice.lang === 'hi-IN');
    if (hindiVoice) {
      utterance.voice = hindiVoice;
    }
    speechSynthesis.speak(utterance);
    const hindiWords = hindi.split(' ');
    hindiWords.forEach((_, index) => {
      setTimeout(() => {
        setHighlightedHindiWordIndex(index);
      }, index * 600);
    });
  };

  const nextSentence = () => {
    if (currentSentenceIndex < totalSentences - 1) {
      setCurrentSentenceIndex((prev) => prev + 1);
      setHighlightedWordIndex(null);
      setHighlightedHindiWordIndex(null);
      setCompletedSentences((prev) => Math.min(prev + 1, totalSentences));
      setRecognitionResult(''); // Reset recognition result on next sentence
      setAccuracy(null); // Reset accuracy on next sentence
    } else {
      alert('You have completed the course!');
    }
  };

  const previousSentence = () => {
    if (currentSentenceIndex > 0) {
      setCurrentSentenceIndex((prev) => prev - 1);
      setHighlightedWordIndex(null);
      setHighlightedHindiWordIndex(null);
      setCompletedSentences((prev) => Math.max(prev - 1, 0));
      setRecognitionResult(''); // Reset recognition result on previous sentence
      setAccuracy(null); // Reset accuracy on previous sentence
    }
  };

  const analyzePronunciation = () => {
    const sentence = dailyNecessorySentencesData[currentSentenceIndex].sentence;
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) {
      alert('Speech recognition not supported in your browser. Please use Chrome.');
      return;
    }

    const recognition = new SpeechRecognition();
    recognition.lang = 'en-US';
    recognition.interimResults = false;

    recognition.start();

    recognition.onresult = (event) => {
      const transcript = event.results[0][0].transcript;
      setRecognitionResult(transcript);
      calculateAccuracy(transcript, sentence);
    };

    recognition.onerror = (event) => {
      console.error('Error during recognition:', event.error);
      alert('Speech recognition error: ' + event.error);
    };
  };

  // Revised accuracy calculation based on spoken vs expected phrase
  const calculateAccuracy = (spoken, expected) => {
    // Remove punctuation and trim extra spaces
    const removePunctuation = (str) => str.replace(/[.,/#!$%^&*;:{}=\-_`~()]/g, "").trim();
  
    const spokenWords = removePunctuation(spoken.toLowerCase()).split(' ');
    const expectedWords = removePunctuation(expected.toLowerCase()).split(' ');
  
    const totalWords = expectedWords.length;
    let correctWordCount = 0;
  
    // Compare words
    for (let i = 0; i < totalWords; i++) {
      if (spokenWords[i] === expectedWords[i]) {
        correctWordCount++;
      }
    }
  
    // Calculate accuracy percentage based on correct words
    const matchRatio = correctWordCount / totalWords;
    const accuracyPercentage = matchRatio * 100; // Full percentage accuracy
  
    setAccuracy(Math.round(accuracyPercentage)); // Round to nearest integer and set accuracy
  };
  

  const progressPercentage = (completedSentences / totalSentences) * 100;

  const handleExit = () => {
    navigate('/listenandlearn');
  };

  const { sentence, hindi, image } = dailyNecessorySentencesData[currentSentenceIndex];
  const words = sentence.split(' ');
  const hindiWords = hindi.split(' ');

  return (
    <div className="daily-necessory-sentences-page">
      <Navbar />
      <h1>Daily Necessory Sentences</h1>
      <div className="sentence-slide">
        <h2>
          {words.map((word, index) => (
            <span key={index} style={{ color: highlightedWordIndex === index ? 'red' : 'black' }}>
              {word}{' '}
            </span>
          ))}
        </h2>
        <h2>
          {hindiWords.map((word, index) => (
            <span key={index} style={{ color: highlightedHindiWordIndex === index ? 'red' : 'black' }}>
              {word}{' '}
            </span>
          ))}
        </h2>
        <img src={`images/${image}`} alt={sentence} className="sentence-image" />

        <div className="button-container">
          <button onClick={previousSentence}>Previous</button>
          <button onClick={() => speakSentence(sentence)}>Play English Sound</button>
          <button onClick={() => speakHindiSentence(hindi)}>Play Hindi Sound</button>
          <button onClick={nextSentence}>Next</button>
        </div>

        {/* Pronunciation Analyzer Button */}
        <button onClick={analyzePronunciation}>Analyze English Pronunciation</button>

        {/* Display recognition result and accuracy */}
        {recognitionResult && (
          <div>
            <p>Recognized: {recognitionResult}</p>
            {accuracy !== null && <p>Accuracy: {accuracy }%</p>}
          </div>
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

export default DailyNecessorySentencesPage;
