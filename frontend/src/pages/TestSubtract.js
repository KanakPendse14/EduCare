// import React, { useState } from 'react';
// import Navbar from '../components/Navbar'; // Import the Navbar component
// import { useNavigate } from 'react-router-dom'; // For navigation
// import '../css/test_add.css'; // Use the existing CSS file
// import SubmitButton from '../components/SubmitButton';
// import ExitButton from '../components/ExitButton';

// const TestSubtract = () => {
//   const [history, setHistory] = useState([[Math.floor(Math.random() * 11) + 2, Math.floor(Math.random() * 11)]]); // Ensures first number is > 2
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [studentInput, setStudentInput] = useState('');
//   const [isCorrect, setIsCorrect] = useState(null);
//   const [correctCount, setCorrectCount] = useState(0); // Track correct answers
//   const [wrongCount, setWrongCount] = useState(0); // Track incorrect answers

//   const navigate = useNavigate(); // For handling exit button navigation

//   const num1 = history[currentIndex][0];
//   const num2 = history[currentIndex][1];

//   const checkAnswer = () => {
//     const correctAnswer = num1 - num2;
//     if (parseInt(studentInput) === correctAnswer) {
//       setIsCorrect(true);
//       setCorrectCount(correctCount + 1); // Increment correct count
//     } else {
//       setIsCorrect(false);
//       setWrongCount(wrongCount + 1); // Increment incorrect count
//     }
//   };

//   const generateNewNumbers = () => {
//     const newNum1 = Math.floor(Math.random() * 11) + 2; // Ensures first number is > 2
//     const newNum2 = Math.floor(Math.random() * (newNum1 + 1)); // Ensures second number is less than or equal to the first
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
//     navigate('/assessment'); // Redirect to assessment page
//   };

//   return (
//     <div>
//       <Navbar />

//       <div className="test-add-container">
//         {/* Display score on the top-right corner */}
//         <div className="score-display">
//           Correct: {correctCount} | Incorrect: {wrongCount}
//         </div>
//         <div className="content">
          
          
//           <h1>Subtraction Test</h1>

//           <div className="numbers">
//             <div className="number-box">
//               <span className="number">{num1}</span>
//               <div className="bee-images">{renderDuckImages(num1)}</div>
//             </div>

//             <span className="minus-sign">-</span>

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
//                     {renderDuckImages(num1 - num2)}
//                   </div>
//                 </div>
//               ) : (
//                 <span className="result-number incorrect">Incorrect. Try again!</span>
//               )}
//             </div>
//           )}

//           {/* Next button to generate new numbers */}
//           <button className="next-button" onClick={generateNewNumbers}>Next</button>

//           {/* <button
//           onClick={handleExit}
//           className='bg-black/20 text-white px-7 py-3 rounded-full shadow-lg hover:bg-black/30 transition duration-300'
//         >
//           Exit
//         </button> */}
//         <div className="exit-button-container">
//           <button
//             onClick={handleExit}
//             className="exit-button"
//           >
//             Exit
//           </button>
//         </div>
//           {/* <button className="save-button" >
//             Submit Score
//           </button> */}
//           <SubmitButton />
          
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TestSubtract;


import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import { useNavigate } from 'react-router-dom';
import '../css/test_add.css';
import SubmitButton from '../components/SubmitButton';

const TestSubtract = () => {
  const [history, setHistory] = useState([[Math.floor(Math.random() * 11) + 2, Math.floor(Math.random() * 11)]]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [studentInput, setStudentInput] = useState('');
  const [isCorrect, setIsCorrect] = useState(null);
  const [correctCount, setCorrectCount] = useState(0);
  const [wrongCount, setWrongCount] = useState(0);
  const [startTime, setStartTime] = useState(Date.now());
  const [testStartTime, setTestStartTime] = useState(new Date());
  const [timePerQuestion, setTimePerQuestion] = useState([]);
  const [mistakesSummary, setMistakesSummary] = useState([]);
  const [totalQuestions] = useState(10);

  const navigate = useNavigate();

  const studentName = localStorage.getItem('student') || 'Unknown';
  const testName = 'Subtraction Test';

  const num1 = history[currentIndex][0];
  const num2 = history[currentIndex][1];

  useEffect(() => {
    setTestStartTime(new Date());
  }, []);

  const checkAnswer = () => {
    const correctAnswer = num1 - num2;
    const endTime = Date.now();
    const timeSpent = (endTime - startTime) / 1000;

    setTimePerQuestion([...timePerQuestion, timeSpent]);

    if (parseInt(studentInput) === correctAnswer) {
      setIsCorrect(true);
      setCorrectCount(correctCount + 1);
    } else {
      setIsCorrect(false);
      setWrongCount(wrongCount + 1);
      setMistakesSummary([
        ...mistakesSummary,
        `Q${currentIndex + 1}: ${num1} - ${num2} → Given: ${studentInput}, Expected: ${correctAnswer}`
      ]);
    }

    setStartTime(Date.now());
  };

  const generateNewNumbers = () => {
    const newNum1 = Math.floor(Math.random() * 11) + 2;
    const newNum2 = Math.floor(Math.random() * (newNum1 + 1)); // ensure num2 <= num1
    setHistory([...history, [newNum1, newNum2]]);
    setCurrentIndex(history.length);
    setStudentInput('');
    setIsCorrect(null);
  };

  const renderDuckImages = (number) => {
    return Array.from({ length: number }, (_, index) => (
      <img key={index} src="/images/duck.png" alt="duck" className="bee-img" />
    ));
  };

  const handleExit = () => {
    navigate('/assessment');
  };

  const calculateAverageTime = () => {
    if (timePerQuestion.length === 0) return 0;
    const total = timePerQuestion.reduce((acc, time) => acc + time, 0);
    return total / timePerQuestion.length;
  };

  const calculateAccuracy = () => {
    if (totalQuestions === 0) return 0;
    return (correctCount / totalQuestions) * 100;
  };

  const handleSubmit = async () => {
    const testEndTime = new Date();
    const totalTestDuration = (testEndTime - testStartTime) / 1000;

    const rawAccuracy = calculateAccuracy();
    const rawAvgTime = calculateAverageTime();

    const testResults = {
      test_name: testName,
      student_name: studentName,
      test_duration: parseFloat(totalTestDuration.toFixed(2)),
      total_questions: totalQuestions,
      correct_answers: correctCount,
      wrong_answers: wrongCount,
      accuracy: isNaN(rawAccuracy) ? 0 : parseFloat(rawAccuracy.toFixed(2)),
      average_time_per_question: isNaN(rawAvgTime) ? 0 : parseFloat(rawAvgTime.toFixed(2)),
      time_per_question: timePerQuestion.map(t => parseFloat(t.toFixed(2))),
      mistakes_summary: mistakesSummary,
      difficulty_level: 'Easy',
      test_status: 'Completed',
      test_date: new Date().toISOString()
    };

    try {
      const response = await fetch('http://localhost:5000/api/test-progress/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(testResults),
      });

      if (response.ok) {
        console.log('Test results submitted successfully');
      } else {
        const errorData = await response.json();
        console.error('Failed to submit test results:', errorData);
      }
    } catch (error) {
      console.error('Error submitting test results:', error);
    }
  };

  return (
    <div>
      <Navbar />
      <div className="test-add-container">
        <div className="score-display">
          Correct: {correctCount} | Incorrect: {wrongCount}
        </div>

        <div className="content">
          <h1>{testName}</h1>

          <div className="numbers">
            <div className="number-box">
              <span className="number">{num1}</span>
              <div className="bee-images">{renderDuckImages(num1)}</div>
            </div>

            <span className="minus-sign">-</span>

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
            <div className={`result ${isCorrect ? 'correct' : 'incorrect'}`}>
              {isCorrect ? (
                <div>
                  <span>Correct!</span>
                  <div className="total-ducks">
                    {renderDuckImages(num1 - num2)}
                  </div>
                </div>
              ) : (
                <span>Incorrect. Try again!</span>
              )}
            </div>
          )}

          <button className="next-button" onClick={generateNewNumbers}>Next</button>

          <div className="exit-button-container">
            <button onClick={handleExit} className="exit-button">Exit</button>
          </div>

          <SubmitButton onClick={handleSubmit} />
        </div>
      </div>
    </div>
  );
};

export default TestSubtract;
