import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import { useNavigate } from 'react-router-dom';
import '../css/test_add.css';
import SubmitButton from '../components/SubmitButton';
import ExitButton from '../components/ExitButton';

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

          <div className="exit-button-container">
          <button
            onClick={handleExit}
            className="exit-button"
          >
            Exit
          </button>
        </div>
          <SubmitButton onClick={() => downloadScoresToFile(totalTimeSpent, testStartTime, new Date())}/>
        </div>
      </div>
    </div>
  );
};

export default TestAdd;
