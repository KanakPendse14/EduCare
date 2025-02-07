// import React, { useState, useRef } from 'react';
// import "../css/LearnVowelsPage.css";
// import Navbar from '../components/Navbar';
// import { useNavigate } from 'react-router-dom'; // Add this for navigation

// const LearnVowelsPage = ({ studentName, studentAge }) => {
//     const [currentVowel, setCurrentVowel] = useState(0);
//     const [isRecording, setIsRecording] = useState(false);
//     const [recordedAudio, setRecordedAudio] = useState(null);
//     const mediaRecorderRef = useRef(null);
//     const audioChunksRef = useRef([]);
//     const navigate = useNavigate(); // Initialize the useNavigate hook

//     // Array of vowels and corresponding image paths
//     const vowelsData = [
//         { vowel: 'A', image: '/images/Aa.png' },
//         { vowel: 'E', image: '/images/E.png' },
//         { vowel: 'I', image: '/images/I.png' },
//         { vowel: 'O', image: '/images/O.png' },
//         { vowel: 'U', image: '/images/U.png' },
//     ];

//     // Function to speak the current vowel
//     const speakVowel = (vowel) => {
//         const utterance = new SpeechSynthesisUtterance(vowel);
//         speechSynthesis.speak(utterance);
//     };

//     // Navigate to the next vowel
//     const nextVowel = () => {
//         setCurrentVowel((prev) => (prev + 1) % vowelsData.length);
//     };

//     // Start/stop recording
//     const handleRecording = async () => {
//         if (isRecording) {
//             mediaRecorderRef.current.stop();
//             setIsRecording(false);
//         } else {
//             const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
//             mediaRecorderRef.current = new MediaRecorder(stream);
//             audioChunksRef.current = [];

//             mediaRecorderRef.current.ondataavailable = (event) => {
//                 audioChunksRef.current.push(event.data);
//             };

//             mediaRecorderRef.current.onstop = () => {
//                 const audioBlob = new Blob(audioChunksRef.current, { type: 'audio/wav' });
//                 const audioUrl = URL.createObjectURL(audioBlob);
//                 setRecordedAudio(audioUrl);
//             };

//             mediaRecorderRef.current.start();
//             setIsRecording(true);
//         }
//     };

//     // Function to handle the exit button
//     const handleExit = () => {
//         // Redirect to the homepage or any other desired page
//         navigate('/assessment');
//     };

//     return (
//         <div className="vowels-page">
//             {/* Pass the studentName and studentAge to the Navbar */}
//             <Navbar studentName={studentName} studentAge={studentAge} />

//             <h1>Learning Vowels</h1>
//             <div className="vowel-slide">
//                 <h2 style={{ fontSize: '80px' }}>{vowelsData[currentVowel].vowel}</h2>
//                 <img 
//                     src={vowelsData[currentVowel].image} 
//                     alt={`Vowel ${vowelsData[currentVowel].vowel}`} // Corrected template literal
//                     style={{ width: '300px', height: '300px' }} // Adjust the size as necessary
//                 />
//                 {/* <button onClick={() => speakVowel(vowelsData[currentVowel].vowel)}>Play Sound</button> */}
//                 <button onClick={nextVowel}>Next</button>
//                 <button onClick={handleRecording}>
//                     {isRecording ? 'Stop Recording' : 'Record My Voice'}
//                 </button>
//             </div>

//             {recordedAudio && (
//                 <div>
//                     <h3>Your Recorded Audio:</h3>
//                     <audio controls src={recordedAudio}></audio>
//                 </div>
//             )}
            
//             {/* Exit Button */}
//             <button onClick={handleExit} className="exit-button">
//                 Exit
//             </button>
//         </div>
//     );
// };

// export default LearnVowelsPage;


import React, { useState, useRef } from 'react';
import "../css/LearnVowelsPage.css";
import Navbar from '../components/Navbar';
import { useNavigate } from 'react-router-dom'; // Add this for navigation

const LearnVowelsPage = ({ studentName, studentAge }) => {
    const [currentVowel, setCurrentVowel] = useState(0);
    const [isRecording, setIsRecording] = useState(false);
    const [recordedAudio, setRecordedAudio] = useState(null);
    const mediaRecorderRef = useRef(null);
    const audioChunksRef = useRef([]);
    const navigate = useNavigate(); // Initialize the useNavigate hook

    // Array of vowels and corresponding image paths
    const vowelsData = [
        { vowel: 'A', image: '/images/Aa.png' },
        { vowel: 'E', image: '/images/E.png' },
        { vowel: 'I', image: '/images/I.png' },
        { vowel: 'O', image: '/images/O.png' },
        { vowel: 'U', image: '/images/U.png' },
    ];

    // Navigate to the next vowel
    const nextVowel = () => {
        setCurrentVowel((prev) => (prev + 1) % vowelsData.length);
    };

    // Start/stop recording
    const handleRecording = async () => {
        if (isRecording) {
            mediaRecorderRef.current.stop();
            setIsRecording(false);
        } else {
            const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
            mediaRecorderRef.current = new MediaRecorder(stream);
            audioChunksRef.current = [];

            mediaRecorderRef.current.ondataavailable = (event) => {
                audioChunksRef.current.push(event.data);
            };

            mediaRecorderRef.current.onstop = () => {
                const audioBlob = new Blob(audioChunksRef.current, { type: 'audio/wav' });
                const audioUrl = URL.createObjectURL(audioBlob);
                setRecordedAudio(audioUrl);
            };

            mediaRecorderRef.current.start();
            setIsRecording(true);
        }
    };

    // Function to handle playing the recorded vowel audio
    const playRecordedAudio = () => {
        if (recordedAudio) {
            const audio = new Audio(recordedAudio);
            audio.play();
        }
    };

    // Function to handle audio submission
    const handleAudioSubmit = () => {
        if (recordedAudio) {
            alert('Audio submitted successfully!');
            // Code to submit audio can be added here
            // Example: Send `recordedAudio` to the server for processing
        } else {
            alert('No audio recorded. Please record first.');
        }
    };

    // Function to handle the exit button
    const handleExit = () => {
        navigate('/assessment'); // Redirect to the assessment page
    };

    return (
        <div className="vowels-page">
            {/* Pass the studentName and studentAge to the Navbar */}
            <Navbar studentName={studentName} studentAge={studentAge} />

            <h1>Let's Practice Vowels</h1>
            <div className="vowel-slide">
                <h2 style={{ fontSize: '80px' }}>{vowelsData[currentVowel].vowel}</h2>
                <img 
                    src={vowelsData[currentVowel].image} 
                    alt={`Vowel ${vowelsData[currentVowel].vowel}`} 
                    style={{ width: '300px', height: '300px' }}
                />
                <button onClick={nextVowel}>Next</button>
                <button onClick={handleRecording}>
                    {isRecording ? 'Stop Recording' : 'Record My Voice'}
                </button>
            </div>

            {recordedAudio && (
                <div>
                    <h3>Your Recorded Audio:</h3>
                    <audio controls src={recordedAudio}></audio>
                    <button onClick={playRecordedAudio}>Play Recorded Audio</button>
                    <button onClick={handleAudioSubmit} className="submit-audio-button">
                        Submit Audio
                    </button>
                </div>
            )}
            
            {/* Exit Button */}
            <div className="exit-button-container">
          <button
            onClick={handleExit}
            className="exit-button"
          >
            Exit
          </button>
        </div>
        </div>
    );
};

export default LearnVowelsPage;
