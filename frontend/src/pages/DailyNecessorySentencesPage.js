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
