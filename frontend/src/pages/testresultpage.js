// import React, { useState } from 'react';
// import { Line } from 'react-chartjs-2';
// import Papa from 'papaparse'; // Optional for CSV parsing

// const TestResultPage = () => {
//   const [additionData, setAdditionData] = useState(null);
//   const [graphData, setGraphData] = useState(null);

//   // Function to handle file upload and analysis
//   const handleFileUpload = (event, testType) => {
//     const file = event.target.files[0];

//     const reader = new FileReader();
//     reader.onload = function (e) {
//       const text = e.target.result;
//       // Extract data from text file
//       const extractedData = extractTestData(text);
//       if (testType === 'addition') {
//         setAdditionData(extractedData);
//         createGraph(extractedData);
//       }
//     };
//     reader.readAsText(file);
//   };

//   const extractTestData = (text) => {
//     // Extract relevant data from the text
//     const lines = text.split('\n');
//     const correctAnswers = lines.find((line) => line.startsWith('Correct Answers')).split(': ')[1];
//     const incorrectAnswers = lines.find((line) => line.startsWith('Incorrect Answers')).split(': ')[1];
//     const totalTimeSpent = lines.find((line) => line.startsWith('Total Time Spent')).split(': ')[1];
//     const avgTimePerQuestion = lines.find((line) => line.startsWith('Average Time Per Question')).split(': ')[1];

//     // Return as object
//     return {
//       correct: parseInt(correctAnswers),
//       incorrect: parseInt(incorrectAnswers),
//       totalTime: parseFloat(totalTimeSpent),
//       avgTimePerQuestion: parseFloat(avgTimePerQuestion),
//     };
//   };

//   const createGraph = (data) => {
//     // Example graph data
//     const graph = {
//       labels: ['Correct', 'Incorrect', 'Total Time Spent (sec)', 'Avg Time Per Question (sec)'],
//       datasets: [
//         {
//           label: 'Addition Test Results',
//           data: [data.correct, data.incorrect, data.totalTime, data.avgTimePerQuestion],
//           backgroundColor: ['rgba(75, 192, 192, 0.6)'],
//         },
//       ],
//     };
//     setGraphData(graph);
//   };

//   return (
//     <div className="test-analysis-container">
//       <h1>Test Analysis</h1>

//       {/* Block for Addition Test */}
//       <div className="test-block">
//         <h2>Addition Test</h2>
//         <input type="file" onChange={(e) => handleFileUpload(e, 'addition')} />
//         {additionData && (
//           <div className="analysis-data">
//             <p>Correct Answers: {additionData.correct}</p>
//             <p>Incorrect Answers: {additionData.incorrect}</p>
//             <p>Total Time Spent: {additionData.totalTime} seconds</p>
//             <p>Average Time Per Question: {additionData.avgTimePerQuestion} seconds</p>
//           </div>
//         )}
//         {graphData && (
//           <div className="graph-container">
//             <Line data={graphData} />
//           </div>
//         )}
//       </div>

//       {/* Block for other tests (e.g., Subtraction Test) */}
//       <div className="test-block">
//         <h2>Subtraction Test</h2>
//         {/* Similar implementation for Subtraction test */}
//       </div>
//     </div>
//   );
// };

// export default TestResultPage;

// import React, { useState } from 'react';
// import { Line } from 'react-chartjs-2';
// import { Chart, registerables } from 'chart.js'; // Import Chart and registerables
// import '../css/testresul.css';

// // Register the Chart.js components
// Chart.register(...registerables);

// const TestResultPage = () => {
//   const [additionData, setAdditionData] = useState(null);
//   const [graphData, setGraphData] = useState(null);

//   // Function to handle file upload and analysis
//   const handleFileUpload = (event, testType) => {
//     const file = event.target.files[0];

//     const reader = new FileReader();
//     reader.onload = function (e) {
//       const text = e.target.result;
//       const extractedData = extractTestData(text);
//       if (testType === 'addition') {
//         setAdditionData(extractedData);
//         createGraph(extractedData);
//       }
//     };
//     reader.readAsText(file);
//   };

//   const extractTestData = (text) => {
//     // Extract relevant data from the text
//     const lines = text.split('\n');
//     const correctAnswers = lines.find((line) => line.startsWith('Correct Answers')).split(': ')[1];
//     const incorrectAnswers = lines.find((line) => line.startsWith('Incorrect Answers')).split(': ')[1];
//     const totalTimeSpent = lines.find((line) => line.startsWith('Total Time Spent')).split(': ')[1];
//     const avgTimePerQuestion = lines.find((line) => line.startsWith('Average Time Per Question')).split(': ')[1];

//     // Return as object
//     return {
//       correct: parseInt(correctAnswers),
//       incorrect: parseInt(incorrectAnswers),
//       totalTime: parseFloat(totalTimeSpent),
//       avgTimePerQuestion: parseFloat(avgTimePerQuestion),
//     };
//   };

//   const createGraph = (data) => {
//     // Example graph data
//     const graph = {
//       labels: ['Correct', 'Incorrect', 'Total Time Spent (sec)', 'Avg Time Per Question (sec)'],
//       datasets: [
//         {
//           label: 'Addition Test Results',
//           data: [data.correct, data.incorrect, data.totalTime, data.avgTimePerQuestion],
//           backgroundColor: ['rgba(75, 192, 192, 0.6)'],
//         },
//       ],
//     };
//     setGraphData(graph);
//   };

//   return (
//     <div className="test-analysis-container">
//       <h1>Test Analysis</h1>

//       {/* Block for Addition Test */}
//       <div className="test-block">
//         <h2>Addition Test</h2>
//         <input type="file" onChange={(e) => handleFileUpload(e, 'addition')} />
//         {additionData && (
//           <div className="analysis-data">
//             <p>Correct Answers: {additionData.correct}</p>
//             <p>Incorrect Answers: {additionData.incorrect}</p>
//             <p>Total Time Spent: {additionData.totalTime} seconds</p>
//             <p>Average Time Per Question: {additionData.avgTimePerQuestion} seconds</p>
//           </div>
//         )}
//         {graphData && (
//           <div className="graph-container">
//             <Line data={graphData} />
//           </div>
//         )}
//       </div>

//       {/* Block for other tests (e.g., Subtraction Test) */}
//       <div className="test-block">
//         <h2>Subtraction Test</h2>
//         {/* Similar implementation for Subtraction test */}
//       </div>
//     </div>
//   );
// };

// export default TestResultPage;



// import React, { useState } from 'react';
// import { Line } from 'react-chartjs-2';
// import { Chart, registerables } from 'chart.js'; // Import Chart and registerables

// // Register the Chart.js components
// Chart.register(...registerables);

// const TestResultPage = () => {
//   const [testData, setTestData] = useState(null);
//   const [graphData, setGraphData] = useState(null);
//   const [selectedTest, setSelectedTest] = useState('');

//   // Function to handle file upload and analysis
//   const handleFileUpload = (event) => {
//     const file = event.target.files[0];

//     // Check if file exists and get the file name
//     if (file) {
//       const fileName = file.name.toUpperCase(); // Convert file name to uppercase for easier comparison

//       // Determine test type based on file name
//       if (fileName.includes('TEST_ADDITION_RESULTS')) {
//         setSelectedTest('addition');
//       } else if (fileName.includes('SUBTRACTION_TESTRESULT')) {
//         setSelectedTest('subtraction');
//       } else {
//         alert('Invalid file. Please upload a valid test result file.');
//         return; // Exit if file name is invalid
//       }

//       const reader = new FileReader();
//       reader.onload = function (e) {
//         const text = e.target.result;
//         const extractedData = extractTestData(text);
//         setTestData(extractedData);
//         createGraph(extractedData);
//       };
//       reader.readAsText(file);
//     }
//   };

//   const extractTestData = (text) => {
//     // Extract relevant data from the text
//     const lines = text.split('\n');
//     const correctAnswers = lines.find((line) => line.startsWith('Correct Answers')).split(': ')[1];
//     const incorrectAnswers = lines.find((line) => line.startsWith('Incorrect Answers')).split(': ')[1];
//     const totalTimeSpent = lines.find((line) => line.startsWith('Total Time Spent')).split(': ')[1];
//     const avgTimePerQuestion = lines.find((line) => line.startsWith('Average Time Per Question')).split(': ')[1];

//     // Return as object
//     return {
//       correct: parseInt(correctAnswers),
//       incorrect: parseInt(incorrectAnswers),
//       totalTime: parseFloat(totalTimeSpent),
//       avgTimePerQuestion: parseFloat(avgTimePerQuestion),
//     };
//   };

//   const createGraph = (data) => {
//     // Example graph data
//     const graph = {
//       labels: ['Correct', 'Incorrect', 'Total Time Spent (sec)', 'Avg Time Per Question (sec)'],
//       datasets: [
//         {
//           label: `${selectedTest.charAt(0).toUpperCase() + selectedTest.slice(1)} Test Results`,
//           data: [data.correct, data.incorrect, data.totalTime, data.avgTimePerQuestion],
//           backgroundColor: ['rgba(75, 192, 192, 0.6)'],
//         },
//       ],
//     };
//     setGraphData(graph);
//   };

//   return (
//     <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', padding: '20px' }}>
//       <h1 style={{ textAlign: 'center' }}>Test Analysis</h1>

//       {/* Single File Upload */}
//       <input type="file" onChange={handleFileUpload} style={{ marginBottom: '20px' }} />

//       {/* Test Results Blocks */}
//       <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '20px' }}>
//         <div style={testBlockStyle}>
//           <h2>Addition Test Results</h2>
//           {selectedTest === 'addition' && testData && (
//             <div style={analysisDataStyle}>
//               <p>Correct Answers: {testData.correct}</p>
//               <p>Incorrect Answers: {testData.incorrect}</p>
//               <p>Total Time Spent: {testData.totalTime} seconds</p>
//               <p>Average Time Per Question: {testData.avgTimePerQuestion} seconds</p>
//             </div>
//           )}
//         </div>
        
//         <div style={testBlockStyle}>
//           <h2>Subtraction Test Results</h2>
//           {selectedTest === 'subtraction' && testData && (
//             <div style={analysisDataStyle}>
//               <p>Correct Answers: {testData.correct}</p>
//               <p>Incorrect Answers: {testData.incorrect}</p>
//               <p>Total Time Spent: {testData.totalTime} seconds</p>
//               <p>Average Time Per Question: {testData.avgTimePerQuestion} seconds</p>
//             </div>
//           )}
//         </div>
//       </div>

//       {/* Graph Display */}
//       {graphData && (
//         <div style={graphContainerStyle}>
//           <Line data={graphData} />
//         </div>
//       )}
//     </div>
//   );
// };

// // Inline styles
// const testBlockStyle = {
//   backgroundColor: '#fff',
//   border: '1px solid #ddd',
//   borderRadius: '10px',
//   padding: '20px',
//   width: '48%', // Adjust the width for spacing
//   boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
// };

// const analysisDataStyle = {
//   backgroundColor: '#f9f9f9',
//   padding: '10px',
//   borderRadius: '5px',
//   marginTop: '10px',
// };

// const graphContainerStyle = {
//   marginTop: '20px',
// };

// export default TestResultPage;



// import React, { useState } from 'react';
// import { Line } from 'react-chartjs-2';
// import { Chart, registerables } from 'chart.js';
// import '../css/testresul.css';

// // Register the Chart.js components
// Chart.register(...registerables);

// const TestResultPage = () => {
//   const [testData, setTestData] = useState(null);
//   const [graphData, setGraphData] = useState(null);
//   const [selectedTest, setSelectedTest] = useState('');

//   const handleFileUpload = (event) => {
//     const file = event.target.files[0];

//     if (file) {
//       const fileName = file.name.toUpperCase();

//       if (fileName.includes('TEST_ADDITION_RESULTS')) {
//         setSelectedTest('addition');
//       } else if (fileName.includes('SUBTRACTION_TESTRESULT')) {
//         setSelectedTest('subtraction');
//       } else {
//         alert('Invalid file. Please upload a valid test result file.');
//         return;
//       }

//       const reader = new FileReader();
//       reader.onload = function (e) {
//         const text = e.target.result;
//         const extractedData = extractTestData(text);
//         setTestData(extractedData);
//         createGraph(extractedData);
//       };
//       reader.readAsText(file);
//     }
//   };

//   const extractTestData = (text) => {
//     const lines = text.split('\n');
//     const correctAnswers = lines.find((line) => line.startsWith('Correct Answers')).split(': ')[1];
//     const incorrectAnswers = lines.find((line) => line.startsWith('Incorrect Answers')).split(': ')[1];
//     const totalTimeSpent = lines.find((line) => line.startsWith('Total Time Spent')).split(': ')[1];
//     const avgTimePerQuestion = lines.find((line) => line.startsWith('Average Time Per Question')).split(': ')[1];

//     return {
//       correct: parseInt(correctAnswers),
//       incorrect: parseInt(incorrectAnswers),
//       totalTime: parseFloat(totalTimeSpent),
//       avgTimePerQuestion: parseFloat(avgTimePerQuestion),
//     };
//   };

//   const createGraph = (data) => {
//     const graph = {
//       labels: ['Correct', 'Incorrect', 'Total Time Spent (sec)', 'Avg Time Per Question (sec)'],
//       datasets: [
//         {
//           label: `${selectedTest.charAt(0).toUpperCase() + selectedTest.slice(1)} Test Results`,
//           data: [data.correct, data.incorrect, data.totalTime, data.avgTimePerQuestion],
//           backgroundColor: 'rgba(75, 192, 192, 0.6)',
//         },
//       ],
//     };
//     setGraphData(graph);
//   };

//   return (
//     <div className="app-container">
//       <div className="sidebar">
//         <h2>EduCare</h2>
//         <ul>
//           <li>Home</li>
//           <li>Test Results</li>
//           <li>Profile</li>
//           <li>Logout</li>
//         </ul>
//       </div>

//       <div className="main-content">
//         <h1>Test Analysis</h1>
//         <input type="file" onChange={handleFileUpload} />

//         <div className="test-results-container">
//           <div className="test-block">
//             <h2>Addition Test Results</h2>
//             {selectedTest === 'addition' && testData && (
//               <div className="analysis-data">
//                 <p>Correct Answers: {testData.correct}</p>
//                 <p>Incorrect Answers: {testData.incorrect}</p>
//                 <p>Total Time Spent: {testData.totalTime} seconds</p>
//                 <p>Average Time Per Question: {testData.avgTimePerQuestion} seconds</p>
//               </div>
//             )}
//           </div>

//           <div className="test-block">
//             <h2>Subtraction Test Results</h2>
//             {selectedTest === 'subtraction' && testData && (
//               <div className="analysis-data">
//                 <p>Correct Answers: {testData.correct}</p>
//                 <p>Incorrect Answers: {testData.incorrect}</p>
//                 <p>Total Time Spent: {testData.totalTime} seconds</p>
//                 <p>Average Time Per Question: {testData.avgTimePerQuestion} seconds</p>
//               </div>
//             )}
//           </div>
//         </div>

//         {graphData && (
//           <div className="graph-container">
//             <Line data={graphData} />
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default TestResultPage;



import React, { useState } from 'react';
import { Line } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';
import '../css/testresul.css';

// Register the Chart.js components
Chart.register(...registerables);

const TestResultPage = () => {
  const [testData, setTestData] = useState(null);
  const [graphData, setGraphData] = useState(null);
  const [selectedTest, setSelectedTest] = useState('');

  const handleFileUpload = (event) => {
    const file = event.target.files[0];

    if (file) {
      const fileName = file.name.toUpperCase();

      if (fileName.includes('TEST_ADDITION_RESULTS')) {
        setSelectedTest('addition');
      } else if (fileName.includes('SUBTRACTION_TESTRESULT')) {
        setSelectedTest('subtraction');
      } else {
        alert('Invalid file. Please upload a valid test result file.');
        return;
      }

      const reader = new FileReader();
      reader.onload = function (e) {
        const text = e.target.result;
        const extractedData = extractTestData(text);
        if (extractedData) {
          setTestData(extractedData);
          createGraph(extractedData);
        }
      };
      reader.readAsText(file);
    }
  };

  const extractTestData = (text) => {
    const lines = text.split('\n');
    console.log("Extracted Lines:", lines); // Debugging line

    const getLineData = (lineStart) => {
      const line = lines.find((line) => line.startsWith(lineStart));
      return line ? line.split(': ')[1] : null;
    };

    const correctAnswers = getLineData('Correct Answers');
    const incorrectAnswers = getLineData('Incorrect Answers');
    const totalTimeSpent = getLineData('Total Time Spent');
    const avgTimePerQuestion = getLineData('Average Time Per Question');
    const testStartTime = getLineData('Test Start Time');
    const testEndTime = getLineData('Test End Time');

    // Check if any critical data is missing
    if (
      correctAnswers === null || 
      incorrectAnswers === null || 
      totalTimeSpent === null || 
      avgTimePerQuestion === null || 
      testStartTime === null || 
      testEndTime === null
    ) {
      console.log("Data Extraction Failed:", { correctAnswers, incorrectAnswers, totalTimeSpent, avgTimePerQuestion, testStartTime, testEndTime }); // Debugging line
      alert('Invalid file format. Please ensure the file contains all required data.');
      return null; // Return null or handle accordingly
    }

    return {
      correct: parseInt(correctAnswers),
      incorrect: parseInt(incorrectAnswers),
      totalTime: parseFloat(totalTimeSpent),
      avgTimePerQuestion: parseFloat(avgTimePerQuestion),
      startTime: testStartTime,
      endTime: testEndTime,
    };
  };

  const createGraph = (data) => {
    const graph = {
      labels: ['Correct', 'Incorrect', 'Total Time Spent (sec)', 'Avg Time Per Question (sec)'],
      datasets: [
        {
          label: `${selectedTest.charAt(0).toUpperCase() + selectedTest.slice(1)} Test Results`,
          data: [data.correct, data.incorrect, data.totalTime, data.avgTimePerQuestion],
          backgroundColor: 'rgba(75, 192, 192, 0.6)',
        },
      ],
    };
    setGraphData(graph);
  };

  return (
    <div className="app-container">
      <div className="sidebar">
        <h2>EduCare</h2>
        <ul>
          <li>Home</li>
          <li>Test Results</li>
          <li>Profile</li>
          <li>Logout</li>
        </ul>
      </div>

      <div className="main-content">
        <h1>Test Analysis</h1>
        <input type="file" onChange={handleFileUpload} />

        <div className="test-results-container">
          {testData && (
            <div className="test-block">
              <h2>{selectedTest.charAt(0).toUpperCase() + selectedTest.slice(1)} Test Results</h2>
              <div className="analysis-data">
                <p>Correct Answers: {testData.correct}</p>
                <p>Incorrect Answers: {testData.incorrect}</p>
                <p>Total Time Spent: {testData.totalTime.toFixed(2)} seconds</p>
                <p>Average Time Per Question: {testData.avgTimePerQuestion.toFixed(2)} seconds</p>
                <p>Test Start Time: {testData.startTime}</p>
                <p>Test End Time: {testData.endTime}</p>
              </div>
            </div>
          )}
        </div>

        {graphData && (
          <div className="graph-container">
            <Line data={graphData} />
          </div>
        )}
      </div>
    </div>
  );
};

export default TestResultPage;
