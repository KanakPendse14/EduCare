import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for redirection
import Navbar from '../components/Navbar'; // Import the Navbar component
import '../css/shape_identifying.css'; // Use the newly created CSS file
import SubmitButton from '../components/SubmitButton';

const shapes = [
  { name: 'Circle', image: '/images/circle.png' },
  { name: 'Triangle', image: '/images/triangle.png' },
  { name: 'Square', image: '/images/square.png' },
  { name: 'Rectangle', image: '/images/rectangle.png' },
  { name: 'Pentagon', image: '/images/pentagon.png' },
  { name: 'Hexagon', image: '/images/hexagon.png' },
];

const ShapeIdentifyingTest = () => {
  const [selectedShape, setSelectedShape] = useState('');
  const [shapesToDisplay, setShapesToDisplay] = useState([]);
  const [isCorrect, setIsCorrect] = useState(null);
  const [correctShape, setCorrectShape] = useState('');
  const [correctCount, setCorrectCount] = useState(0); // Track correct answers
  const [wrongCount, setWrongCount] = useState(0); // Track wrong answers

  const navigate = useNavigate(); // Initialize useNavigate for navigation

  const getRandomShapes = () => {
    const randomShapes = new Set(); // Use a Set to ensure uniqueness
    const correctShapeIndex = Math.floor(Math.random() * shapes.length);
    
    // Add the correct shape
    randomShapes.add(shapes[correctShapeIndex]);

    // Keep adding random unique shapes until we have 3
    while (randomShapes.size < 3) {
      const shape = shapes[Math.floor(Math.random() * shapes.length)];
      randomShapes.add(shape);
    }

    // Convert the Set back to an array
    setShapesToDisplay(Array.from(randomShapes));
    setCorrectShape(shapes[correctShapeIndex].name);
    setSelectedShape('');
    setIsCorrect(null);
  };

  const checkAnswer = () => {
    if (selectedShape === correctShape) {
      setIsCorrect(true);
      setCorrectCount(correctCount + 1); // Increment correct count
    } else {
      setIsCorrect(false);
      setWrongCount(wrongCount + 1); // Increment wrong count
    }
  };

  const handleShapeClick = (shape) => {
    setSelectedShape(shape.name);
  };

  const handleNext = () => {
    getRandomShapes();
  };

  // Generate initial shapes
  useEffect(() => {
    getRandomShapes();
  }, []);

  // Handle exit button click
  const handleExit = () => {
    navigate('/assessment'); // Navigate to assessment.js
  };

  return (
    <>
      <Navbar /> {/* Navbar is now outside the shape test container */}

      <div className="shape-test-container">
        <h1 className='shape-title'>Select {correctShape}</h1> {/* Updated to dynamically show correct shape */}
        
        {/* Score display */}
        <div className="score-display" style={{ position: 'absolute', top: '60px', right: '20px' }}>
          <p>Correct: {correctCount}</p>
          <p>Wrong: {wrongCount}</p>
        </div>

        <div className="shape-display">
          {shapesToDisplay.map((shape, index) => (
            <div
              key={index}
              className={`shape ${selectedShape === shape.name ? 'selected' : ''}`}
              onClick={() => handleShapeClick(shape)}
            >
              <img src={shape.image} alt={shape.name} className="shape-img" />
            </div>
          ))}
        </div>

        <button className="check-button" onClick={checkAnswer}>Check</button>

        {/* Show result */}
        {isCorrect !== null && (
          <div className="result">
            {isCorrect ? (
              <span className="correct">Correct!</span>
            ) : (
              <span className="incorrect">Incorrect. Try again!</span>
            )}
          </div>
        )}

        <button className="next-button" onClick={handleNext}>Next</button>
        <SubmitButton/>
        
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
    </>
  );
};

export default ShapeIdentifyingTest;

// import React, { useState, useEffect } from 'react';
// import Navbar from '../components/Navbar';
// import { useNavigate } from 'react-router-dom';
// import '../css/test_add.css';
// import SubmitButton from '../components/SubmitButton';

// const ShapeTest = () => {
//   const shapes = ['Circle', 'Square', 'Triangle', 'Rectangle', 'Star', 'Heart', 'Oval', 'Diamond'];
//   const totalQuestions = 8;

//   const [history, setHistory] = useState([]);
//   const [currentShape, setCurrentShape] = useState('');
//   const [options, setOptions] = useState([]);
//   const [correctCount, setCorrectCount] = useState(0);
//   const [wrongCount, setWrongCount] = useState(0);
//   const [startTime, setStartTime] = useState(Date.now());
//   const [testStartTime, setTestStartTime] = useState(new Date());
//   const [timePerQuestion, setTimePerQuestion] = useState([]);
//   const [mistakesSummary, setMistakesSummary] = useState([]);
  
//   const navigate = useNavigate();
//   const studentName = localStorage.getItem('student') || 'Unknown';
//   const testName = 'Shape Identifying Test';

//   useEffect(() => {
//     startNewQuestion();
//   }, []);

//   const startNewQuestion = () => {
//     const newShape = shapes[Math.floor(Math.random() * shapes.length)];
//     const newOptions = generateOptions(newShape);

//     setCurrentShape(newShape);
//     setOptions(newOptions);
//     setStartTime(Date.now());
//   };

//   const generateOptions = (correctShape) => {
//     const shuffledShapes = shapes.filter(shape => shape !== correctShape)
//                                   .sort(() => 0.5 - Math.random());
//     const randomOptions = shuffledShapes.slice(0, 2);
//     const allOptions = [...randomOptions, correctShape].sort(() => 0.5 - Math.random());
//     return allOptions;
//   };

//   const handleOptionClick = (selectedShape) => {
//     const endTime = Date.now();
//     const timeSpent = (endTime - startTime) / 1000;
//     setTimePerQuestion(prev => [...prev, timeSpent]);

//     if (selectedShape === currentShape) {
//       setCorrectCount(prev => prev + 1);
//     } else {
//       setWrongCount(prev => prev + 1);
//       setMistakesSummary(prev => [
//         ...prev,
//         `Shape was ${currentShape} → Selected: ${selectedShape}`
//       ]);
//     }

//     setHistory(prev => [...prev, { question: currentShape, selected: selectedShape }]);

//     if (history.length + 1 >= totalQuestions) {
//       // Test done, stay on same page until user manually submits
//     } else {
//       startNewQuestion();
//     }
//   };

//   const calculateAverageTime = () => {
//     if (timePerQuestion.length === 0) return 0;
//     const total = timePerQuestion.reduce((acc, time) => acc + time, 0);
//     return total / timePerQuestion.length;
//   };

//   const calculateAccuracy = () => {
//     if (totalQuestions === 0) return 0;
//     return (correctCount / totalQuestions) * 100;
//   };

//   const handleSubmit = async () => {
//     const testEndTime = new Date();
//     const totalTestDuration = (testEndTime - testStartTime) / 1000;

//     const rawAccuracy = calculateAccuracy();
//     const rawAvgTime = calculateAverageTime();

//     const testResults = {
//       test_name: testName,
//       student_name: studentName,
//       test_duration: parseFloat(totalTestDuration.toFixed(2)),
//       total_questions: history.length,
//       correct_answers: correctCount,
//       wrong_answers: wrongCount,
//       accuracy: isNaN(rawAccuracy) ? 0 : parseFloat(rawAccuracy.toFixed(2)),
//       average_time_per_question: isNaN(rawAvgTime) ? 0 : parseFloat(rawAvgTime.toFixed(2)),
//       time_per_question: timePerQuestion.map(t => parseFloat(t.toFixed(2))),
//       mistakes_summary: mistakesSummary,
//       difficulty_level: 'Easy',
//       test_status: 'Completed',
//       test_date: new Date().toISOString()
//     };

//     try {
//       const response = await fetch('http://localhost:5000/api/test-progress/submit', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(testResults),
//       });

//       if (response.ok) {
//         console.log('Shape Test results submitted successfully');
//         navigate('/assessment'); // after submit, go back
//       } else {
//         const errorData = await response.json();
//         console.error('Failed to submit Shape Test results:', errorData);
//       }
//     } catch (error) {
//       console.error('Error submitting Shape Test results:', error);
//     }
//   };

//   const handleExit = () => {
//     navigate('/assessment');
//   };

//   return (
//     <div>
//       <Navbar />
//       <div className="test-add-container">
//         <div className="score-display">
//           Correct: {correctCount} | Incorrect: {wrongCount}
//         </div>

//         <div className="content">
//           <h1>{testName}</h1>

//           <div className="shape-display">
//             <span className="shape-name">{currentShape}</span>
//           </div>

//           <div className="options-container">
//             {options.map((option, index) => (
//               <button
//                 key={index}
//                 className="option-button"
//                 onClick={() => handleOptionClick(option)}
//               >
//                 {option}
//               </button>
//             ))}
//           </div>

//           <div className="button-row">
//             <button onClick={handleExit} className="exit-button">Exit</button>
//             <SubmitButton onClick={handleSubmit} />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ShapeTest;
