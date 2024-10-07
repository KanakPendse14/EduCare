import React, { useState, useRef } from 'react';
import threeLetterWordsData from '../data/threeLetterWordsData'; // Adjust the path if needed
import "../css/LearnThreeLetterWordsPage.css";

const LearnThreeLetterWordsPage = () => {
    const [currentWordIndex, setCurrentWordIndex] = useState(0);
    const [isRecording, setIsRecording] = useState(false);
    const [audioURL, setAudioURL] = useState(null);
    const [highlights, setHighlights] = useState([false, false, false]);
    const [completedWords, setCompletedWords] = useState(0); // Track completed words
    const mediaRecorderRef = useRef(null);
    const audioChunksRef = useRef([]);

    const totalWords = threeLetterWordsData.length;

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
        } else {
            alert('You have completed the course!');
            // Optionally reset progress
            // setCurrentWordIndex(0);
            // setCompletedWords(0);
        }
    };

    // Navigate to the previous word
    const previousWord = () => {
        if (currentWordIndex > 0) {
            setCurrentWordIndex((prev) => prev - 1);
            setHighlights([false, false, false]); // Reset highlights
            setCompletedWords((prev) => Math.max(prev - 1, 0)); // Decrement completed words
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
    const progressPercentage = (completedWords / totalWords) * 100;

    return (
        <div className="three-letter-words-page">
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

export default LearnThreeLetterWordsPage;
