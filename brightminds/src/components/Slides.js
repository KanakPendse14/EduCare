// src/components/Slide.js
import React, { useState } from 'react';
import "../css/Slides.css"

const Slides = ({ title, image, audio, onRecord }) => {
    const [recording, setRecording] = useState(false);
    const [mediaRecorder, setMediaRecorder] = useState(null);

    const playAudio = () => {
        const audioElement = new Audio(audio);
        audioElement.play();
    };

    const startRecording = async () => {
        const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
        const recorder = new MediaRecorder(stream);
        setMediaRecorder(recorder);
        recorder.start();

        const audioChunks = [];
        recorder.ondataavailable = (event) => {
            audioChunks.push(event.data);
        };

        recorder.onstop = () => {
            const audioBlob = new Blob(audioChunks);
            const audioUrl = URL.createObjectURL(audioBlob);
            onRecord(audioUrl); // Call the callback function to handle recording
        };

        setRecording(true);
        recorder.stop();
        setRecording(false);
    };

    return (
        <div className="slide">
            <h2>{title}</h2>
            <img src={image} alt={title} />
            <div>
                <button onClick={playAudio}>Play Audio</button>
                <button onClick={recording ? null : startRecording}>
                    {recording ? 'Recording...' : 'Record Your Voice'}
                </button>
            </div>
        </div>
    );
};

export default Slides;
