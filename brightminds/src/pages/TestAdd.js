// import React, { useState } from 'react';
// import Navbar from '../components/Navbar'; // Import the Navbar component
// import { useNavigate } from 'react-router-dom'; // For navigation
// import '../css/test_add.css'; // Use the newly created CSS file

// const TestAdd = () => {
//   const [history, setHistory] = useState([[Math.floor(Math.random() * 11), Math.floor(Math.random() * 11)]]);
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [studentInput, setStudentInput] = useState('');
//   const [isCorrect, setIsCorrect] = useState(null);
//   const [correctCount, setCorrectCount] = useState(0); // Track correct answers
//   const [wrongCount, setWrongCount] = useState(0); // Track incorrect answers

//   const navigate = useNavigate(); // For handling exit button navigation

//   const num1 = history[currentIndex][0];
//   const num2 = history[currentIndex][1];

//   const checkAnswer = () => {
//     const correctAnswer = num1 + num2;
//     if (parseInt(studentInput) === correctAnswer) {
//       setIsCorrect(true);
//       setCorrectCount(correctCount + 1); // Increment correct count
//     } else {
//       setIsCorrect(false);
//       setWrongCount(wrongCount + 1); // Increment incorrect count
//     }
//   };

//   const generateNewNumbers = () => {
//     const newNum1 = Math.floor(Math.random() * 11);
//     const newNum2 = Math.floor(Math.random() * 11);
//     const newHistory = [...history, [newNum1, newNum2]];
//     setHistory(newHistory);
//     setCurrentIndex(newHistory.length - 1);
//     setStudentInput('');
//     setIsCorrect(null);
//   };

//   const renderDuckImages = (number) => {
//     return Array.from({ length: number }, (_, index) => (
//       <img key={index} src="/images/duck.png" alt="duck" className="bee-img" />
//     ));
//   };

//   const handleExit = () => {
//     // Navigate to the assessment page
//     navigate('/assessment');
//   };

//   return (
//     <div>
//       <Navbar /> {/* Navbar remains consistent */}

//       <div className="test-add-container">
//         {/* Display score on the top-right corner */}
//         <div className="score-display">
//           Correct: {correctCount} | Incorrect: {wrongCount}
//         </div>

//         <div className="content">
//           <h1>Addition Test</h1>

//           <div className="numbers">
//             <div className="number-box">
//               <span className="number">{num1}</span>
//               <div className="bee-images">{renderDuckImages(num1)}</div>
//             </div>

//             <span className="plus-sign">+</span>

//             <div className="number-box">
//               <span className="number">{num2}</span>
//               <div className="bee-images">{renderDuckImages(num2)}</div>
//             </div>

//             <span className="equals-sign">=</span>

//             <input
//               type="number"
//               min="0" // Restrict to non-negative numbers
//               value={studentInput}
//               onChange={(e) => setStudentInput(e.target.value)}
//               className="input-field"
//               placeholder="Answer" // Optional: add a placeholder for clarity
//             />
//           </div>

//           {/* Check Answer button */}
//           <button className="check-button" onClick={checkAnswer}>Check Answer</button>

//           {/* Show result and total number of ducks for correct answer */}
//           {isCorrect !== null && (
//             <div className="result">
//               {isCorrect ? (
//                 <div className="correct">
//                   <span className="result-number">Correct!</span>
//                   <div className="total-ducks">
//                     {renderDuckImages(num1 + num2)}
//                   </div>
//                 </div>
//               ) : (
//                 <span className="result-number incorrect">Incorrect. Try again!</span>
//               )}
//             </div>
//           )}

//           {/* Next button to generate new numbers */}
//           <button className="next-button" onClick={generateNewNumbers}>Next</button>

//           {/* Exit Button */}
//           <button className="exit-button" onClick={handleExit}>
//             Exit
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TestAdd;




// import React, { useState } from 'react';
// import Navbar from '../components/Navbar'; // Import the Navbar component
// import { useNavigate } from 'react-router-dom'; // For navigation
// import '../css/test_add.css'; // Use the newly created CSS file

// const TestAdd = () => {
//   const [history, setHistory] = useState([[Math.floor(Math.random() * 11), Math.floor(Math.random() * 11)]]);
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [studentInput, setStudentInput] = useState('');
//   const [isCorrect, setIsCorrect] = useState(null);
//   const [correctCount, setCorrectCount] = useState(0); // Track correct answers
//   const [wrongCount, setWrongCount] = useState(0); // Track incorrect answers

//   const navigate = useNavigate(); // For handling exit button navigation

//   const num1 = history[currentIndex][0];
//   const num2 = history[currentIndex][1];

//   const checkAnswer = () => {
//     const correctAnswer = num1 + num2;
//     if (parseInt(studentInput) === correctAnswer) {
//       setIsCorrect(true);
//       setCorrectCount(correctCount + 1); // Increment correct count
//     } else {
//       setIsCorrect(false);
//       setWrongCount(wrongCount + 1); // Increment incorrect count
//     }
//   };

//   const generateNewNumbers = () => {
//     const newNum1 = Math.floor(Math.random() * 11);
//     const newNum2 = Math.floor(Math.random() * 11);
//     const newHistory = [...history, [newNum1, newNum2]];
//     setHistory(newHistory);
//     setCurrentIndex(newHistory.length - 1);
//     setStudentInput('');
//     setIsCorrect(null);
//   };

//   const renderDuckImages = (number) => {
//     return Array.from({ length: number }, (_, index) => (
//       <img key={index} src="/images/duck.png" alt="duck" className="bee-img" />
//     ));
//   };

//   const handleExit = () => {
//     // Trigger file download with scores before navigating
//     downloadScoresToFile();
//     navigate('/assessment');
//   };

//   const downloadScoresToFile = () => {
//     // Create a string with correct and incorrect count data
//     const data = `Correct Answers: ${correctCount}\nIncorrect Answers: ${wrongCount}`;

//     // Create a Blob object from the data
//     const blob = new Blob([data], { type: 'text/plain' });

//     // Create a URL for the Blob
//     const url = window.URL.createObjectURL(blob);

//     // Create a temporary <a> element for downloading the file
//     const a = document.createElement('a');
//     a.href = url;
//     a.download = 'test_ADDITION.txt'; // Filename of the downloaded file

//     // Append the <a> element to the body (required for Firefox)
//     document.body.appendChild(a);

//     // Programmatically click the <a> element to trigger the download
//     a.click();

//     // Clean up by removing the <a> element and revoking the Blob URL
//     document.body.removeChild(a);
//     window.URL.revokeObjectURL(url);
//   };

//   return (
//     <div>
//       <Navbar /> {/* Navbar remains consistent */}

//       <div className="test-add-container">
//         {/* Display score on the top-right corner */}
//         <div className="score-display">
//           Correct: {correctCount} | Incorrect: {wrongCount}
//         </div>

//         <div className="content">
//           <h1>Addition Test</h1>

//           <div className="numbers">
//             <div className="number-box">
//               <span className="number">{num1}</span>
//               <div className="bee-images">{renderDuckImages(num1)}</div>
//             </div>

//             <span className="plus-sign">+</span>

//             <div className="number-box">
//               <span className="number">{num2}</span>
//               <div className="bee-images">{renderDuckImages(num2)}</div>
//             </div>

//             <span className="equals-sign">=</span>

//             <input
//               type="number"
//               min="0" // Restrict to non-negative numbers
//               value={studentInput}
//               onChange={(e) => setStudentInput(e.target.value)}
//               className="input-field"
//               placeholder="Answer" // Optional: add a placeholder for clarity
//             />
//           </div>

//           {/* Check Answer button */}
//           <button className="check-button" onClick={checkAnswer}>Check Answer</button>

//           {/* Show result and total number of ducks for correct answer */}
//           {isCorrect !== null && (
//             <div className="result">
//               {isCorrect ? (
//                 <div className="correct">
//                   <span className="result-number">Correct!</span>
//                   <div className="total-ducks">
//                     {renderDuckImages(num1 + num2)}
//                   </div>
//                 </div>
//               ) : (
//                 <span className="result-number incorrect">Incorrect. Try again!</span>
//               )}
//             </div>
//           )}

//           {/* Next button to generate new numbers */}
//           <button className="next-button" onClick={generateNewNumbers}>Next</button>

//           {/* Exit Button */}
//           <button className="exit-button" onClick={handleExit}>
//             Exit
//           </button>

//           {/* Save Scores Button */}
//           <button className="save-button" onClick={downloadScoresToFile}>
//             Save Scores to File
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TestAdd;


// import React, { useState, useEffect } from 'react';
// import Navbar from '../components/Navbar'; // Import the Navbar component
// import { useNavigate } from 'react-router-dom'; // For navigation
// import '../css/test_add.css'; // Use the newly created CSS file

// const TestAdd = () => {
//   const [history, setHistory] = useState([[Math.floor(Math.random() * 11), Math.floor(Math.random() * 11)]]);
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [studentInput, setStudentInput] = useState('');
//   const [isCorrect, setIsCorrect] = useState(null);
//   const [correctCount, setCorrectCount] = useState(0); // Track correct answers
//   const [wrongCount, setWrongCount] = useState(0); // Track incorrect answers
//   const [startTime, setStartTime] = useState(Date.now()); // Track when the test starts
//   const [totalTimeSpent, setTotalTimeSpent] = useState(0); // Track total time spent
//   const [timePerQuestion, setTimePerQuestion] = useState([]); // Array to track time per question

//   const navigate = useNavigate(); // For handling exit button navigation

//   const num1 = history[currentIndex][0];
//   const num2 = history[currentIndex][1];

//   const checkAnswer = () => {
//     const correctAnswer = num1 + num2;
//     const endTime = Date.now();
//     const timeSpent = (endTime - startTime) / 1000; // Time spent on the question in seconds

//     // Add time spent on this question to the timePerQuestion array
//     setTimePerQuestion([...timePerQuestion, timeSpent]);

//     if (parseInt(studentInput) === correctAnswer) {
//       setIsCorrect(true);
//       setCorrectCount(correctCount + 1); // Increment correct count
//     } else {
//       setIsCorrect(false);
//       setWrongCount(wrongCount + 1); // Increment incorrect count
//     }

//     // Set the new start time for the next question
//     setStartTime(Date.now());
//   };

//   const generateNewNumbers = () => {
//     const newNum1 = Math.floor(Math.random() * 11);
//     const newNum2 = Math.floor(Math.random() * 11);
//     const newHistory = [...history, [newNum1, newNum2]];
//     setHistory(newHistory);
//     setCurrentIndex(newHistory.length - 1);
//     setStudentInput('');
//     setIsCorrect(null);
//   };

//   const renderDuckImages = (number) => {
//     return Array.from({ length: number }, (_, index) => (
//       <img key={index} src="/images/duck.png" alt="duck" className="bee-img" />
//     ));
//   };

//   const handleExit = () => {
//     // Calculate total time spent on the test
//     const totalTestTime = timePerQuestion.reduce((total, time) => total + time, 0);
//     setTotalTimeSpent(totalTestTime);

//     // Trigger file download with scores and time before navigating
//     downloadScoresToFile(totalTestTime);
//     navigate('/assessment');
//   };

//   const calculateAverageTime = () => {
//     if (timePerQuestion.length === 0) return 0;
//     const total = timePerQuestion.reduce((acc, time) => acc + time, 0);
//     return (total / timePerQuestion.length).toFixed(2); // Average time per question in seconds
//   };

//   const downloadScoresToFile = (totalTestTime) => {
//     // Create a string with correct and incorrect count, total time spent, and average time per question
//     const data = `Correct Answers: ${correctCount}\nIncorrect Answers: ${wrongCount}\nTotal Time Spent: ${totalTestTime.toFixed(2)} seconds\nAverage Time Per Question: ${calculateAverageTime()} seconds`;

//     // Create a Blob object from the data
//     const blob = new Blob([data], { type: 'text/plain' });

//     // Create a URL for the Blob
//     const url = window.URL.createObjectURL(blob);

//     // Create a temporary <a> element for downloading the file
//     const a = document.createElement('a');
//     a.href = url;
//     a.download = 'test_scores.txt'; // Filename of the downloaded file

//     // Append the <a> element to the body (required for Firefox)
//     document.body.appendChild(a);

//     // Programmatically click the <a> element to trigger the download
//     a.click();

//     // Clean up by removing the <a> element and revoking the Blob URL
//     document.body.removeChild(a);
//     window.URL.revokeObjectURL(url);
//   };

//   return (
//     <div>
//       <Navbar /> {/* Navbar remains consistent */}

//       <div className="test-add-container">
//         {/* Display score on the top-right corner */}
//         <div className="score-display">
//           Correct: {correctCount} | Incorrect: {wrongCount}
//         </div>

//         <div className="content">
//           <h1>Addition Test</h1>

//           <div className="numbers">
//             <div className="number-box">
//               <span className="number">{num1}</span>
//               <div className="bee-images">{renderDuckImages(num1)}</div>
//             </div>

//             <span className="plus-sign">+</span>

//             <div className="number-box">
//               <span className="number">{num2}</span>
//               <div className="bee-images">{renderDuckImages(num2)}</div>
//             </div>

//             <span className="equals-sign">=</span>

//             <input
//               type="number"
//               min="0" // Restrict to non-negative numbers
//               value={studentInput}
//               onChange={(e) => setStudentInput(e.target.value)}
//               className="input-field"
//               placeholder="Answer" // Optional: add a placeholder for clarity
//             />
//           </div>

//           {/* Check Answer button */}
//           <button className="check-button" onClick={checkAnswer}>Check Answer</button>

//           {/* Show result and total number of ducks for correct answer */}
//           {isCorrect !== null && (
//             <div className="result">
//               {isCorrect ? (
//                 <div className="correct">
//                   <span className="result-number">Correct!</span>
//                   <div className="total-ducks">
//                     {renderDuckImages(num1 + num2)}
//                   </div>
//                 </div>
//               ) : (
//                 <span className="result-number incorrect">Incorrect. Try again!</span>
//               )}
//             </div>
//           )}

//           {/* Next button to generate new numbers */}
//           <button className="next-button" onClick={generateNewNumbers}>Next</button>

//           {/* Exit Button */}
//           <button className="exit-button" onClick={handleExit}>
//             Exit
//           </button>

//           {/* Save Scores Button */}
//           <button className="save-button" onClick={() => downloadScoresToFile(totalTimeSpent)}>
//             Save Scores to File
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TestAdd;



// import React, { useState, useEffect } from 'react';
// import Navbar from '../components/Navbar'; // Import the Navbar component
// import { useNavigate } from 'react-router-dom'; // For navigation
// import '../css/test_add.css'; // Use the newly created CSS file

// const TestAdd = () => {
//   const [history, setHistory] = useState([[Math.floor(Math.random() * 11), Math.floor(Math.random() * 11)]]);
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [studentInput, setStudentInput] = useState('');
//   const [isCorrect, setIsCorrect] = useState(null);
//   const [correctCount, setCorrectCount] = useState(0); // Track correct answers
//   const [wrongCount, setWrongCount] = useState(0); // Track incorrect answers
//   const [startTime, setStartTime] = useState(Date.now()); // Track when the test starts
//   const [timePerQuestion, setTimePerQuestion] = useState([]); // Array to track time per question

//   const navigate = useNavigate(); // For handling exit button navigation

//   const num1 = history[currentIndex][0];
//   const num2 = history[currentIndex][1];

//   const checkAnswer = () => {
//     const correctAnswer = num1 + num2;
//     const endTime = Date.now();
//     const timeSpent = (endTime - startTime) / 1000; // Time spent on the question in seconds

//     // Add time spent on this question to the timePerQuestion array
//     setTimePerQuestion((prevTimes) => [...prevTimes, timeSpent]);

//     if (parseInt(studentInput) === correctAnswer) {
//       setIsCorrect(true);
//       setCorrectCount(correctCount + 1); // Increment correct count
//     } else {
//       setIsCorrect(false);
//       setWrongCount(wrongCount + 1); // Increment incorrect count
//     }

//     // Set the new start time for the next question
//     setStartTime(Date.now());
//   };

//   const generateNewNumbers = () => {
//     const newNum1 = Math.floor(Math.random() * 11);
//     const newNum2 = Math.floor(Math.random() * 11);
//     const newHistory = [...history, [newNum1, newNum2]];
//     setHistory(newHistory);
//     setCurrentIndex(newHistory.length - 1);
//     setStudentInput('');
//     setIsCorrect(null);
//   };

//   const renderDuckImages = (number) => {
//     return Array.from({ length: number }, (_, index) => (
//       <img key={index} src="/images/duck.png" alt="duck" className="bee-img" />
//     ));
//   };

//   const calculateTotalTime = () => {
//     return timePerQuestion.reduce((total, time) => total + time, 0).toFixed(2); // Total time in seconds
//   };

//   const calculateAverageTime = () => {
//     if (timePerQuestion.length === 0) return 0;
//     const total = timePerQuestion.reduce((acc, time) => acc + time, 0);
//     return (total / timePerQuestion.length).toFixed(2); // Average time per question in seconds
//   };

//   const handleExit = () => {
//     // Calculate total time spent on the test
//     const totalTestTime = calculateTotalTime();

//     // Trigger file download with scores and time before navigating
//     downloadScoresToFile(totalTestTime);
//     navigate('/testresultpage');
//   };

//   const downloadScoresToFile = (totalTestTime) => {
//     // Create a string with correct and incorrect count, total time spent, and average time per question
//     const data = `Correct Answers: ${correctCount}\nIncorrect Answers: ${wrongCount}\nTotal Time Spent: ${totalTestTime} seconds\nAverage Time Per Question: ${calculateAverageTime()} seconds`;

//     // Create a Blob object from the data
//     const blob = new Blob([data], { type: 'text/plain' });

//     // Create a URL for the Blob
//     const url = window.URL.createObjectURL(blob);

//     // Create a temporary <a> element for downloading the file
//     const a = document.createElement('a');
//     a.href = url;
//     a.download = 'ADDITION_TESTSCORE.txt'; // Filename of the downloaded file

//     // Append the <a> element to the body (required for Firefox)
//     document.body.appendChild(a);

//     // Programmatically click the <a> element to trigger the download
//     a.click();

//     // Clean up by removing the <a> element and revoking the Blob URL
//     document.body.removeChild(a);
//     window.URL.revokeObjectURL(url);
//   };

//   return (
//     <div>
//       <Navbar /> {/* Navbar remains consistent */}

//       <div className="test-add-container">
//         {/* Display score on the top-right corner */}
//         <div className="score-display">
//           Correct: {correctCount} | Incorrect: {wrongCount}
//         </div>

//         <div className="content">
//           <h1>Addition Test</h1>

//           <div className="numbers">
//             <div className="number-box">
//               <span className="number">{num1}</span>
//               <div className="bee-images">{renderDuckImages(num1)}</div>
//             </div>

//             <span className="plus-sign">+</span>

//             <div className="number-box">
//               <span className="number">{num2}</span>
//               <div className="bee-images">{renderDuckImages(num2)}</div>
//             </div>

//             <span className="equals-sign">=</span>

//             <input
//               type="number"
//               min="0" // Restrict to non-negative numbers
//               value={studentInput}
//               onChange={(e) => setStudentInput(e.target.value)}
//               className="input-field"
//               placeholder="Answer" // Optional: add a placeholder for clarity
//             />
//           </div>

//           {/* Check Answer button */}
//           <button className="check-button" onClick={checkAnswer}>Check Answer</button>

//           {/* Show result and total number of ducks for correct answer */}
//           {isCorrect !== null && (
//             <div className="result">
//               {isCorrect ? (
//                 <div className="correct">
//                   <span className="result-number">Correct!</span>
//                   <div className="total-ducks">
//                     {renderDuckImages(num1 + num2)}
//                   </div>
//                 </div>
//               ) : (
//                 <span className="result-number incorrect">Incorrect. Try again!</span>
//               )}
//             </div>
//           )}

//           {/* Next button to generate new numbers */}
//           <button className="next-button" onClick={generateNewNumbers}>Next</button>

//           {/* Exit Button */}
//           <button className="exit-button" onClick={handleExit}>
//             Exit
//           </button>

//           {/* Save Scores Button */}
//           <button className="save-button" onClick={() => downloadScoresToFile(calculateTotalTime())}>
//             Save Scores to File
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TestAdd;



import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import { useNavigate } from 'react-router-dom';
import '../css/test_add.css';

const TestAdd = () => {
  const [history, setHistory] = useState([[Math.floor(Math.random() * 11), Math.floor(Math.random() * 11)]]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [studentInput, setStudentInput] = useState('');
  const [isCorrect, setIsCorrect] = useState(null);
  const [correctCount, setCorrectCount] = useState(0);
  const [wrongCount, setWrongCount] = useState(0);
  const [startTime, setStartTime] = useState(Date.now());
  const [testStartTime, setTestStartTime] = useState(new Date()); // To track test start date and time
  const [totalTimeSpent, setTotalTimeSpent] = useState(0);
  const [timePerQuestion, setTimePerQuestion] = useState([]);
  
  const navigate = useNavigate();

  const num1 = history[currentIndex][0];
  const num2 = history[currentIndex][1];

  useEffect(() => {
    // Capture the test start time when the component mounts
    setTestStartTime(new Date());
  }, []);

  const checkAnswer = () => {
    const correctAnswer = num1 + num2;
    const endTime = Date.now();
    const timeSpent = (endTime - startTime) / 1000;

    setTimePerQuestion([...timePerQuestion, timeSpent]);

    if (parseInt(studentInput) === correctAnswer) {
      setIsCorrect(true);
      setCorrectCount(correctCount + 1);
    } else {
      setIsCorrect(false);
      setWrongCount(wrongCount + 1);
    }

    setStartTime(Date.now());
  };

  const generateNewNumbers = () => {
    const newNum1 = Math.floor(Math.random() * 11);
    const newNum2 = Math.floor(Math.random() * 11);
    const newHistory = [...history, [newNum1, newNum2]];
    setHistory(newHistory);
    setCurrentIndex(newHistory.length - 1);
    setStudentInput('');
    setIsCorrect(null);
  };

  const renderDuckImages = (number) => {
    return Array.from({ length: number }, (_, index) => (
      <img key={index} src="/images/duck.png" alt="duck" className="bee-img" />
    ));
  };

  const handleExit = () => {
    const testEndTime = new Date(); // Capture test end time
    const totalTestDuration = (testEndTime - testStartTime) / 1000; // Calculate total time spent on the test in seconds

    // Trigger file download with scores and time
    downloadScoresToFile(totalTestDuration, testStartTime, testEndTime);
    navigate('/assessment');
  };

  const calculateAverageTime = () => {
    if (timePerQuestion.length === 0) return 0;
    const total = timePerQuestion.reduce((acc, time) => acc + time, 0);
    return (total / timePerQuestion.length).toFixed(2);
  };

  const downloadScoresToFile = (totalTestDuration, testStartTime, testEndTime) => {
    const startTimeFormatted = testStartTime.toLocaleString();
    const endTimeFormatted = testEndTime.toLocaleString();

    // Prepare file content including correct/incorrect count, time, start/end date and time
    const data = `Correct Answers: ${correctCount}\nIncorrect Answers: ${wrongCount}\nTotal Time Spent: ${totalTestDuration.toFixed(2)} seconds\nAverage Time Per Question: ${calculateAverageTime()} seconds\nTest Start Time: ${startTimeFormatted}\nTest End Time: ${endTimeFormatted}`;

    const blob = new Blob([data], { type: 'text/plain' });
    const url = window.URL.createObjectURL(blob);

    const a = document.createElement('a');
    a.href = url;
    a.download = 'TEST_ADDITION_RESULTS.txt';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
  };

  return (
    <div>
      <Navbar />

      <div className="test-add-container">
        <div className="score-display">
          Correct: {correctCount} | Incorrect: {wrongCount}
        </div>

        <div className="content">
          <h1>Addition Test</h1>

          <div className="numbers">
            <div className="number-box">
              <span className="number">{num1}</span>
              <div className="bee-images">{renderDuckImages(num1)}</div>
            </div>

            <span className="plus-sign">+</span>

            <div className="number-box">
              <span className="number">{num2}</span>
              <div className="bee-images">{renderDuckImages(num2)}</div>
            </div>

            <span className="equals-sign">=</span>

            <input
              type="number"
              min="0"
              value={studentInput}
              onChange={(e) => setStudentInput(e.target.value)}
              className="input-field"
              placeholder="Answer"
            />
          </div>

          <button className="check-button" onClick={checkAnswer}>Check Answer</button>

          {isCorrect !== null && (
            <div className="result">
              {isCorrect ? (
                <div className="correct">
                  <span className="result-number">Correct!</span>
                  <div className="total-ducks">
                    {renderDuckImages(num1 + num2)}
                  </div>
                </div>
              ) : (
                <span className="result-number incorrect">Incorrect. Try again!</span>
              )}
            </div>
          )}

          <button className="next-button" onClick={generateNewNumbers}>Next</button>

          <button className="exit-button" onClick={handleExit}>Exit</button>

          <button className="save-button" onClick={() => downloadScoresToFile(totalTimeSpent, testStartTime, new Date())}>
            Save Scores to File
          </button>
        </div>
      </div>
    </div>
  );
};

export default TestAdd;
