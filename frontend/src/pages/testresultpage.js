// import React, { useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import {
//   LineChart,
//   Line,
//   CartesianGrid,
//   XAxis,
//   YAxis,
//   Tooltip,
//   ResponsiveContainer,
//   Legend,
// } from 'recharts';

// const TestResultPage = () => {
//   const [studentName, setStudentName] = useState('');
//   const [age, setAge] = useState('');
//   const [testProgress, setTestProgress] = useState([]);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const storedStudent = localStorage.getItem('student');
//     if (storedStudent) {
//       const { Name, Age } = JSON.parse(storedStudent);
//       setStudentName(Name);
//       setAge(Age);
//       fetchTestProgress(Name);
//     } else {
//       navigate('/login');
//     }
//   }, [navigate]);

//   const fetchTestProgress = async (name) => {
//     try {
//       const res = await axios.get(`http://localhost:5000/api/test-progress/student/${name}`);
//       setTestProgress(res.data);
//     } catch (err) {
//       console.error('Error fetching test progress:', err);
//     }
//   };

//   const handleLogout = () => navigate('/');
//   const handlehomepage = () => navigate('/home');
//   const handleprofilepage = () => navigate('/profile');
//   const handletestresults = () => navigate('/testresultpage');
//   const handledashboard = () => navigate('/results');

//   const navButtonStyle = {
//     width: '100%',
//     padding: '10px',
//     backgroundColor: '#34495E',
//     color: '#fff',
//     border: 'none',
//     marginBottom: '10px',
//     cursor: 'pointer',
//     fontSize: '16px',
//     borderRadius: '5px',
//     textAlign: 'left',
//   };

//   const cardStyle = {
//     backgroundColor: '#ECF0F1',
//     padding: '15px',
//     marginBottom: '20px',
//     borderRadius: '10px',
//     boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
//   };

//   // === Chart Data Preparation ===

//   const timeChartData = testProgress.map(test => ({
//     date: new Date(test.test_date).toLocaleDateString(),
//     avgTime: test.average_time_per_question,
//   }));

//   const accuracyData = testProgress.map((test, index) => ({
//     testNumber: index + 1,
//     accuracy: test.accuracy,
//   }));

//   // Linear Regression for prediction
//   const calculatePredictionLine = (data) => {
//     const n = data.length;
//     if (n < 2) return [];

//     let sumX = 0, sumY = 0, sumXY = 0, sumXX = 0;

//     data.forEach(point => {
//       sumX += point.testNumber;
//       sumY += point.accuracy;
//       sumXY += point.testNumber * point.accuracy;
//       sumXX += point.testNumber * point.testNumber;
//     });

//     const slope = (n * sumXY - sumX * sumY) / (n * sumXX - sumX * sumX);
//     const intercept = (sumY - slope * sumX) / n;

//     const prediction = [];

//     for (let i = 1; i <= n + 1; i++) {
//       prediction.push({
//         testNumber: i,
//         predicted: +(slope * i + intercept).toFixed(2),
//       });
//     }

//     return prediction;
//   };

//   const predictionLine = calculatePredictionLine(accuracyData);

//   return (
//     <div style={{ display: 'flex', minHeight: '100vh' }}>
//       {/* Sidebar */}
//       <div style={{ width: '200px', backgroundColor: '#2C3E50', padding: '20px', color: '#fff' }}>
//         <div style={{ textAlign: 'center', marginBottom: '40px' }}>
//           <h1 style={{ fontSize: '24px' }}>EduCare</h1>
//         </div>
//         <div style={{ marginBottom: '20px' }}>
//           <h3>{studentName}</h3>
//           <p>Age: {age}</p>
//         </div>
//         <nav>
//           <button style={navButtonStyle} onClick={handlehomepage}>Home</button>
//           <button style={navButtonStyle} onClick={handletestresults}>Test Results</button>
//           <button style={navButtonStyle} onClick={handledashboard}>Dashboard</button>
//           <button style={navButtonStyle} onClick={handleprofilepage}>Profile</button>
//           <button style={navButtonStyle} onClick={handleLogout}>Logout</button>
//         </nav>
//       </div>

//       {/* Main Content */}
//       <div style={{ flex: 1, padding: '20px' }}>
//         <h2>Test Results</h2>

//         {/* Avg Time Line Chart */}
//         {timeChartData.length > 0 && (
//           <div style={{ marginBottom: '30px' }}>
//             <h3>Average Time per Question (sec)</h3>
//             <ResponsiveContainer width="100%" height={300}>
//               <LineChart data={timeChartData}>
//                 <CartesianGrid stroke="#ccc" />
//                 <XAxis dataKey="date" />
//                 <YAxis label={{ value: 'Seconds', angle: -90, position: 'insideLeft' }} />
//                 <Tooltip />
//                 <Line type="monotone" dataKey="avgTime" stroke="#3498db" strokeWidth={3} />
//               </LineChart>
//             </ResponsiveContainer>
//           </div>
//         )}

//         {/* Accuracy + Prediction Graph */}
//         {accuracyData.length > 0 && (
//           <div style={{ marginBottom: '30px' }}>
//             <h3>Accuracy Trend and Prediction</h3>
//             <ResponsiveContainer width="100%" height={300}>
//               <LineChart>
//                 <CartesianGrid stroke="#ccc" />
//                 <XAxis dataKey="testNumber" label={{ value: 'Test Number', position: 'insideBottomRight', offset: -5 }} />
//                 <YAxis label={{ value: 'Accuracy (%)', angle: -90, position: 'insideLeft' }} domain={[0, 100]} />
//                 <Tooltip />
//                 <Legend />
//                 <Line data={accuracyData} type="monotone" dataKey="accuracy" name="Actual Accuracy" stroke="#2ecc71" strokeWidth={3} dot />
//                 <Line data={predictionLine} type="monotone" dataKey="predicted" name="Predicted Accuracy" stroke="#e74c3c" strokeDasharray="5 5" />
//               </LineChart>
//             </ResponsiveContainer>
//           </div>
//         )}

//         {/* Test Result Cards */}
//         {testProgress.length === 0 ? (
//           <p>No test data available.</p>
//         ) : (
//           testProgress.map((test, index) => (
//             <div key={index} style={cardStyle}>
//               <h3>{test.test_name}</h3>
//               <p><strong>Date:</strong> {new Date(test.test_date).toLocaleDateString()}</p>
//               <p><strong>Duration:</strong> {test.test_duration} mins</p>
//               <p><strong>Total Questions:</strong> {test.total_questions}</p>
//               <p><strong>Correct:</strong> {test.correct_answers}</p>
//               <p><strong>Wrong:</strong> {test.wrong_answers}</p>
//               <p><strong>Accuracy:</strong> {test.accuracy}%</p>
//               <p><strong>Avg Time/Question:</strong> {test.average_time_per_question} sec</p>
//               <p><strong>Difficulty:</strong> {test.difficulty_level}</p>
//               <p><strong>Status:</strong> {test.test_status}</p>

//               {test.mistakes_summary?.length > 0 && (
//                 <div>
//                   <strong>Mistakes Summary:</strong>
//                   <ul>
//                     {test.mistakes_summary.map((mistake, i) => (
//                       <li key={i}>{mistake}</li>
//                     ))}
//                   </ul>
//                 </div>
//               )}
//             </div>
//           ))
//         )}
//       </div>
//     </div>
//   );
// };

// export default TestResultPage;




import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import {
  LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer, Legend, BarChart, Bar, PieChart, Pie, Cell
} from 'recharts';

const TestResultPage = () => {
  const [studentName, setStudentName] = useState('');
  const [age, setAge] = useState('');
  const [testProgress, setTestProgress] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const storedStudent = localStorage.getItem('student');
    if (storedStudent) {
      const { Name, Age } = JSON.parse(storedStudent);
      setStudentName(Name);
      setAge(Age);
      fetchTestProgress(Name);
    } else {
      navigate('/login');
    }
  }, [navigate]);

  const fetchTestProgress = async (name) => {
    try {
      const res = await axios.get(`http://localhost:5000/api/test-progress/student/${name}`);
      setTestProgress(res.data);
    } catch (err) {
      console.error('Error fetching test progress:', err);
    }
  };

  const handleLogout = () => navigate('/');
  const handleHomepage = () => navigate('/home');
  const handleProfilePage = () => navigate('/profile');
  const handleTestResults = () => navigate('/testresultpage');
  const handleDashboard = () => navigate('/results');

  // Chart Data Preparation
  const timeChartData = testProgress.map(test => ({
    date: new Date(test.test_date).toLocaleDateString(),
    avgTime: test.average_time_per_question,
  }));

  const accuracyData = testProgress.map((test, index) => ({
    testNumber: index + 1,
    accuracy: test.accuracy,
  }));

  const difficultyData = testProgress.reduce((acc, test) => {
    const level = test.difficulty_level || 'Unknown';
    acc[level] = (acc[level] || 0) + 1;
    return acc;
  }, {});

  const difficultyChartData = Object.keys(difficultyData).map(key => ({
    name: key,
    value: difficultyData[key],
  }));

  const COLORS = ['#3498db', '#2ecc71', '#e74c3c', '#f39c12', '#9b59b6'];

  const calculatePredictionLine = (data) => {
    const n = data.length;
    if (n < 2) return [];

    let sumX = 0, sumY = 0, sumXY = 0, sumXX = 0;
    data.forEach(point => {
      sumX += point.testNumber;
      sumY += point.accuracy;
      sumXY += point.testNumber * point.accuracy;
      sumXX += point.testNumber * point.testNumber;
    });

    const slope = (n * sumXY - sumX * sumY) / (n * sumXX - sumX * sumX);
    const intercept = (sumY - slope * sumX) / n;

    return Array.from({ length: n + 1 }, (_, i) => ({
      testNumber: i + 1,
      predicted: +(slope * (i + 1) + intercept).toFixed(2),
    }));
  };

  const predictionLine = calculatePredictionLine(accuracyData);

  // Styles
  const pageStyle = {
    display: 'flex',
    minHeight: '100vh',
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#f4f6f8',
  };

  const sidebarStyle = {
    width: '220px',
    backgroundColor: '#34495e',
    color: '#fff',
    padding: '20px',
  };

  const navButtonStyle = {
    width: '100%',
    padding: '12px',
    backgroundColor: '#2c3e50',
    color: '#fff',
    border: 'none',
    marginBottom: '10px',
    cursor: 'pointer',
    fontSize: '16px',
    borderRadius: '8px',
    textAlign: 'left',
    transition: 'background-color 0.3s',
  };

  const navButtonHoverStyle = {
    backgroundColor: '#1abc9c',
  };

  const contentStyle = {
    flex: 1,
    padding: '30px',
  };

  const cardStyle = {
    backgroundColor: '#fff',
    padding: '20px',
    marginBottom: '20px',
    borderRadius: '12px',
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
  };

  return (
    <div style={pageStyle}>
      {/* Sidebar */}
      <div style={sidebarStyle}>
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <h1 style={{ fontSize: '28px', color: '#1abc9c' }}>EduCare</h1>
        </div>
        <div style={{ marginBottom: '30px' }}>
          <h3 style={{ margin: '0 0 5px 0' }}>{studentName}</h3>
          <p>Age: {age}</p>
        </div>
        <nav>
          <button style={navButtonStyle} onClick={handleHomepage}>🏠 Home</button>
          <button style={navButtonStyle} onClick={handleTestResults}>📊 Test Results</button>
          <button style={navButtonStyle} onClick={handleDashboard}>📈 Dashboard</button>
          <button style={navButtonStyle} onClick={handleProfilePage}>👤 Profile</button>
          <button style={navButtonStyle} onClick={handleLogout}>🚪 Logout</button>
        </nav>
      </div>

      {/* Main Content */}
      <div style={contentStyle}>
        <h2 style={{ marginBottom: '20px', color: '#2c3e50' }}>Test Results</h2>

        {/* Avg Time Line Chart */}
        {timeChartData.length > 0 && (
          <div style={cardStyle}>
            <h3>Average Time per Question (sec)</h3>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={timeChartData}>
                <CartesianGrid stroke="#ccc" />
                <XAxis dataKey="date" />
                <YAxis label={{ value: 'Seconds', angle: -90, position: 'insideLeft' }} />
                <Tooltip />
                <Line type="monotone" dataKey="avgTime" stroke="#3498db" strokeWidth={3} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        )}

        {/* Accuracy + Prediction Line Chart */}
        {accuracyData.length > 0 && (
          <div style={cardStyle}>
            <h3>Accuracy Trend and Prediction</h3>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart>
                <CartesianGrid stroke="#ccc" />
                <XAxis dataKey="testNumber" label={{ value: 'Test Number', position: 'insideBottomRight', offset: -5 }} />
                <YAxis label={{ value: 'Accuracy (%)', angle: -90, position: 'insideLeft' }} domain={[0, 100]} />
                <Tooltip />
                <Legend />
                <Line data={accuracyData} type="monotone" dataKey="accuracy" name="Actual Accuracy" stroke="#2ecc71" strokeWidth={3} dot />
                <Line data={predictionLine} type="monotone" dataKey="predicted" name="Predicted Accuracy" stroke="#e74c3c" strokeDasharray="5 5" />
              </LineChart>
            </ResponsiveContainer>
          </div>
        )}

        {/* Difficulty Distribution Pie Chart */}
        {difficultyChartData.length > 0 && (
          <div style={cardStyle}>
            <h3>Difficulty Level Distribution</h3>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={difficultyChartData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                  outerRadius={100}
                  dataKey="value"
                >
                  {difficultyChartData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        )}

        {/* Correct vs Wrong Bar Chart */}
        {testProgress.length > 0 && (
          <div style={cardStyle}>
            <h3>Correct vs Wrong Answers</h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={testProgress.map(test => ({
                name: test.test_name,
                Correct: test.correct_answers,
                Wrong: test.wrong_answers,
              }))}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="Correct" fill="#2ecc71" />
                <Bar dataKey="Wrong" fill="#e74c3c" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        )}

        {/* Test Cards */}
        {testProgress.length === 0 ? (
          <p>No test data available.</p>
        ) : (
          testProgress.map((test, index) => (
            <div key={index} style={cardStyle}>
              <h3>{test.test_name}</h3>
              <p><strong>Date:</strong> {new Date(test.test_date).toLocaleDateString()}</p>
              <p><strong>Duration:</strong> {test.test_duration} mins</p>
              <p><strong>Total Questions:</strong> {test.total_questions}</p>
              <p><strong>Correct:</strong> {test.correct_answers}</p>
              <p><strong>Wrong:</strong> {test.wrong_answers}</p>
              <p><strong>Accuracy:</strong> {test.accuracy}%</p>
              <p><strong>Avg Time/Question:</strong> {test.average_time_per_question} sec</p>
              <p><strong>Difficulty:</strong> {test.difficulty_level}</p>
              <p><strong>Status:</strong> {test.test_status}</p>

              {test.mistakes_summary?.length > 0 && (
                <div>
                  <strong>Mistakes Summary:</strong>
                  <ul>
                    {test.mistakes_summary.map((mistake, i) => (
                      <li key={i}>{mistake}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default TestResultPage;
