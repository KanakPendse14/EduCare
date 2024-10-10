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

import React, { useState, useRef } from 'react';
import dailyNecessorySentencesData from '../data/DailyNecessorySentencesdata';
import '../css/DailyNecessorySentences.css';
import Navbar from '../components/Navbar'; // Adjust the import path according to your project structure

const DailyNecessorySentencesPage = () => {
  const [currentSentenceIndex, setCurrentSentenceIndex] = useState(0);
  const [isRecording, setIsRecording] = useState(false);
  const [audioURL, setAudioURL] = useState(null);
  const [highlightedWordIndex, setHighlightedWordIndex] = useState(null);
  const [highlightedHindiWordIndex, setHighlightedHindiWordIndex] = useState(null); // Track highlighted Hindi word
  const [completedSentences, setCompletedSentences] = useState(0); // Track completed sentences
  const mediaRecorderRef = useRef(null);
  const audioChunksRef = useRef([]);

  const totalSentences = dailyNecessorySentencesData.length;

  // Function to speak the current sentence in English
  const speakSentence = (sentence) => {
    const utterance = new SpeechSynthesisUtterance(sentence);
    speechSynthesis.speak(utterance);

    // Highlight words one by one
    const words = sentence.split(' ');
    words.forEach((_, index) => {
      setTimeout(() => {
        setHighlightedWordIndex(index);
      }, index * 600); // Adjust timing as needed
    });
  };

  // Function to speak the current sentence in Hindi
  const speakHindiSentence = (hindi) => {
    const utterance = new SpeechSynthesisUtterance(hindi);
    utterance.lang = 'hi-IN'; // Set the language to Hindi

    // Optionally, set a specific Hindi voice if available
    const voices = speechSynthesis.getVoices();
    const hindiVoice = voices.find((voice) => voice.lang === 'hi-IN');
    if (hindiVoice) {
      utterance.voice = hindiVoice;
    }

    speechSynthesis.speak(utterance);

    // Highlight Hindi words one by one
    const hindiWords = hindi.split(' ');
    hindiWords.forEach((_, index) => {
      setTimeout(() => {
        setHighlightedHindiWordIndex(index);
      }, index * 600); // Adjust timing as needed
    });
  };

  // Navigate to the next sentence
  const nextSentence = () => {
    if (currentSentenceIndex < totalSentences - 1) {
      setCurrentSentenceIndex((prev) => prev + 1);
      setHighlightedWordIndex(null); // Reset highlights for English
      setHighlightedHindiWordIndex(null); // Reset highlights for Hindi
      setCompletedSentences((prev) => Math.min(prev + 1, totalSentences)); // Increment completed sentences
    } else {
      alert('You have completed the course!');
    }
  };

  // Navigate to the previous sentence
  const previousSentence = () => {
    if (currentSentenceIndex > 0) {
      setCurrentSentenceIndex((prev) => prev - 1);
      setHighlightedWordIndex(null); // Reset highlights for English
      setHighlightedHindiWordIndex(null); // Reset highlights for Hindi
      setCompletedSentences((prev) => Math.max(prev - 1, 0)); // Decrement completed sentences
    }
  };

  // Start recording audio
  const startRecording = async () => {
    setIsRecording(true);
    audioChunksRef.current = [];
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    mediaRecorderRef.current = new MediaRecorder(stream);
    
    mediaRecorderRef.current.ondataavailable = (event) => {
      audioChunksRef.current.push(event.data);
    };

    mediaRecorderRef.current.onstop = () => {
      const audioBlob = new Blob(audioChunksRef.current, { type: 'audio/wav' });
      const url = URL.createObjectURL(audioBlob);
      setAudioURL(url); // Save the audio URL
    };

    mediaRecorderRef.current.start();
  };

  // Stop recording audio
  const stopRecording = () => {
    mediaRecorderRef.current.stop();
    setIsRecording(false);
  };

  // Calculate progress percentage
  const progressPercentage = (completedSentences / totalSentences) * 100;

  const { sentence, hindi, image } = dailyNecessorySentencesData[currentSentenceIndex];
  const words = sentence.split(' ');
  const hindiWords = hindi.split(' '); // Split Hindi sentence into words

  return (
    <div className="daily-necessory-sentences-page">
      <Navbar /> {/* Include the Navbar here */}
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

        {isRecording ? (
          <button onClick={stopRecording}>Stop Recording</button>
        ) : (
          <button onClick={startRecording}>Start Recording</button>
        )}

        {audioURL && (
          <audio controls>
            <source src={audioURL} type="audio/wav" />
            Your browser does not support the audio tag.
          </audio>
        )}
      </div>

      {/* Progress Bar */}
      <div className="progress-container">
        <div className="progress-bar" style={{ width: `${progressPercentage}%` }}></div>
      </div>
      <p>{Math.round(progressPercentage)}% completed</p>
    </div>
  );
};

export default DailyNecessorySentencesPage;
