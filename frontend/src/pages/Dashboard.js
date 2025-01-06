
// import React from 'react';
// import '../css/Dashboard.css';
// import { Bar } from 'react-chartjs-2';
// import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

// // Register the required Chart.js components
// ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

// const Dashboard = () => {
//   // Data for the English Test chart
//   const englishData = {
//     labels: ['Week 1', 'Week 2', 'Week 3'],
//     datasets: [
//       {
//         label: 'A-E',
//         data: [70, 77, 88], // Displayed in all weeks with the same value for clarity
//         backgroundColor: '#FFD700',
//       },
//       {
//         label: 'F-J',
//         data: [0, 65, 75], // Displayed only in Week 2 and Week 3
//         backgroundColor: '#FFF3B6',
//       },
//       {
//         label: 'K-O',
//         data: [0, 0, 60], // Displayed only in Week 3
//         backgroundColor: '#FFD700',
//       },
//     ],
// };


//   // Data for the Mathematical Test chart
//   const mathData = {
//     labels: ['Week 1', 'Week 2', 'Week 3'],
//     datasets: [
//       {
//         label: '1-5',
//         data: [70, 77, 88],
//         backgroundColor: '#7100FF',
//       },
//       {
//         label: '5-10',
//         data: [0, 65, 75],
//         backgroundColor: '#7100FF',
//       },
//       {
//         label: 'Addition 1-5',
//         data: [0, 0, 60],
//         backgroundColor: '#FFF3B6',
//       },
//     ],
//   };

//   // Data for the Speaking Test chart
//   const speakingData = {
//     labels: ['Week 1', 'Week 2', 'Week 3'],
//     datasets: [
//       {
//         label: 'Fluency',
//         data: [60,70,72],
//         backgroundColor: '#FFD700',
//       },
//       {
//         label: 'Pronunciation',
//         data: [40,45,56],
//         backgroundColor: '#FFF3B6',
//       },
//       {
//         label: 'Accuracy',
//         data: [40,50,55],
//         backgroundColor: '#FFD700',
//       },
//     ],
//   };

//   // Chart options
//   const options = {
//     responsive: true,
//     plugins: {
//       legend: {
//         position: 'top',
//       },
//       title: {
//         display: true,
//         text: 'Weekly Performance',
//       },
//     },
//   };

//   return (
//     <div className="dashboard">
//       {/* Sidebar */}
//       <div className="sidebar">
//         <div className="logo">
//           <h1>EduCare</h1>
//           <h2>logo</h2>
//         </div>
//         <button className="nav-btn">Home</button>
//         <button className="nav-btn">Tests</button>
//         <button className="nav-btn">My Tests</button>
//         <button className="nav-btn">Logout</button>
//       </div>

//       {/* Main Content */}
//       <div className="main-content">
//         <div className="header">
//           <div className="profile">
//             <img src="https://via.placeholder.com/50" alt="Profile" />
//             <div>
//               <h3>Child Name</h3>
//               <p>Age: 10</p>
//             </div>
//           </div>
//         </div>

//         {/* Graphical Analytics */}
//         <div className="analytics">
//           <div className="test-section">
//             <h3>English Test</h3>
//             <Bar options={options} data={englishData} />
//           </div>
//           <div className="test-section">
//             <h3>Mathematical Test</h3>
//             <Bar options={options} data={mathData} />
//           </div>
//           <div className="test-section">
//             <h3>Speaking Test</h3>
//             <Bar options={options} data={speakingData} />
//           </div>
//         </div>

//         {/* Feedback Section */}
//         <div className="feedback">
//           <h3>Teacher Feedback</h3>
//           <textarea placeholder="Enter feedback here..."></textarea>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;


// import React from 'react';
// import '../css/Dashboard.css'; // Ensure you have this CSS file for styling
// import { Bar } from 'react-chartjs-2';
// import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

// // Register the required Chart.js components
// ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

// const Dashboard = ({ studentName, age }) => {
//   // Data for the English Test chart
//   const englishData = {
//     labels: ['Week 1', 'Week 2', 'Week 3'],
//     datasets: [
//       {
//         label: 'A-E',
//         data: [70, 77, 88],
//         backgroundColor: '#FFD700',
//       },
//       {
//         label: 'F-J',
//         data: [0, 65, 75],
//         backgroundColor: '#FFF3B6',
//       },
//       {
//         label: 'K-O',
//         data: [0, 0, 60],
//         backgroundColor: '#FFD700',
//       },
//     ],
//   };

//   // Data for the Mathematical Test chart
//   const mathData = {
//     labels: ['Week 1', 'Week 2', 'Week 3'],
//     datasets: [
//       {
//         label: '1-5',
//         data: [70, 77, 88],
//         backgroundColor: '#7100FF',
//       },
//       {
//         label: '5-10',
//         data: [0, 65, 75],
//         backgroundColor: '#7100FF',
//       },
//       {
//         label: 'Addition 1-5',
//         data: [0, 0, 60],
//         backgroundColor: '#FFF3B6',
//       },
//     ],
//   };

//   // Data for the Speaking Test chart
//   const speakingData = {
//     labels: ['Week 1', 'Week 2', 'Week 3'],
//     datasets: [
//       {
//         label: 'Fluency',
//         data: [60, 70, 72],
//         backgroundColor: '#FFD700',
//       },
//       {
//         label: 'Pronunciation',
//         data: [40, 45, 56],
//         backgroundColor: '#FFF3B6',
//       },
//       {
//         label: 'Accuracy',
//         data: [40, 50, 55],
//         backgroundColor: '#FFD700',
//       },
//     ],
//   };

//   // Chart options
//   const options = {
//     responsive: true,
//     plugins: {
//       legend: {
//         position: 'top',
//       },
//       title: {
//         display: true,
//         text: 'Weekly Performance',
//       },
//     },
//   };

//   return (
//     <div className="dashboard">
//       {/* Sidebar */}
//       <div className="sidebar">
//         <div className="logo">
//           <h1>EduCare</h1>
//         </div>
//         <nav className="nav">
//           <button className="nav-btn">Home</button>
//           <button className="nav-btn">Tests</button>
//           <button className="nav-btn">My Tests</button>
//           <button className="nav-btn">Logout</button>
//         </nav>
//       </div>

//       {/* Main Content */}
//       <div className="main-content">
//         <header className="header">
//           <div className="profile">
//             <img src="https://via.placeholder.com/50" alt="Profile" />
//             <div>
//               <h3>{studentName}</h3>
//               <p>Age: {age}</p>
//             </div>
//           </div>
//         </header>

//         {/* Graphical Analytics */}
//         <div className="analytics">
//           <div className="test-section">
//             <h3>English Test</h3>
//             <Bar options={options} data={englishData} />
//           </div>
//           <div className="test-section">
//             <h3>Mathematical Test</h3>
//             <Bar options={options} data={mathData} />
//           </div>
//           <div className="test-section">
//             <h3>Speaking Test</h3>
//             <Bar options={options} data={speakingData} />
//           </div>
//         </div>

//         {/* Feedback Section */}
//         <div className="feedback">
//           <h3>Teacher Feedback</h3>
//           <textarea placeholder="Enter feedback here..."></textarea>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;



// import React from 'react';
// import { Bar } from 'react-chartjs-2';

// // Mock data for logins and active time
// const mockActiveTimeData = {
//     totalLogins: 5,  // Number of logins in the past week
//     totalActiveTime: 7200,  // Total active time in seconds (2 hours)
//     dailyActiveTime: [30, 60, 45, 50, 35, 70, 40],  // Mock data for each day of the week (in minutes)
// };

// // Convert total active time from seconds to hours and minutes
// const convertTime = (seconds) => {
//     const hours = Math.floor(seconds / 3600);
//     const minutes = Math.floor((seconds % 3600) / 60);
//     return `${hours} hours ${minutes} minutes`;
// };

// // Data for the bar chart (Active Time over the week)
// const chartData = {
//     labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
//     datasets: [
//         {
//             label: 'Active Time (Minutes)',
//             data: mockActiveTimeData.dailyActiveTime,  // Using mock daily active time data
//             backgroundColor: 'rgba(54, 162, 235, 0.6)',  // Light blue color
//         },
//     ],
// };

// // Options for the bar chart
// const chartOptions = {
//     scales: {
//         y: {
//             beginAtZero: true,
//         },
//     },
// };

// const Dashboard = () => {
//     return (
//         <div className="dashboard">
//             {/* Other dashboard content */}
            
//             {/* Display total logins and total active time */}
//             <div className="active-time">
//                 <h3>Total Logins in the Last Week: {mockActiveTimeData.totalLogins}</h3>
//                 <h3>Total Active Time in the Last Week: {convertTime(mockActiveTimeData.totalActiveTime)}</h3>
//             </div>

//             {/* Chart to display active time distribution */}
//             <div className="active-time-chart">
//                 <Bar data={chartData} options={chartOptions} />
//             </div>
//         </div>
//     );
// };

// export default Dashboard;



// import React from 'react';
// import { Bar } from 'react-chartjs-2';
// import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

// // Register Chart.js components
// ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

// const Dashboard = ({ studentName, age }) => {
//   // Mock data for login activity (Last 7 days)
//   const loginData = {
//     labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'], // Days of the week
//     datasets: [
//       {
//         label: 'Logins',
//         data: [2, 1, 3, 0, 4, 2, 1], // Mock login counts per day
//         backgroundColor: '#42A5F5',
//       },
//     ],
//   };

//   // Chart options
//   const options = {
//     responsive: true,
//     plugins: {
//       legend: {
//         position: 'top',
//       },
//       title: {
//         display: true,
//         text: 'Login Activity Over the Last Week',
//       },
//     },
//   };

//   return (
//     <div style={{ display: 'flex', minHeight: '100vh' }}>
//       {/* Sidebar */}
//       <div style={{ width: '200px', backgroundColor: '#2C3E50', padding: '20px', color: '#fff' }}>
//         <div style={{ textAlign: 'center', marginBottom: '40px' }}>
//           <h1 style={{ fontSize: '24px' }}>EduCare</h1>
//         </div>
//         <nav>
//           <button style={navButtonStyle}>Home</button>
//           <button style={navButtonStyle}>Tests</button>
//           <button style={navButtonStyle}>My Tests</button>
//           <button style={navButtonStyle}>Logout</button>
//         </nav>
//       </div>

//       {/* Main Content */}
//       <div style={{ flex: 1, padding: '20px' }}>
//         <header style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
//           <img src="https://via.placeholder.com/50" alt="Profile" style={{ borderRadius: '50%', marginRight: '10px' }} />
//           <div>
//             <h3 style={{ margin: 0 }}>{studentName}</h3>
//             <p style={{ margin: 0 }}>Age: {age}</p>
//           </div>
//         </header>

//         {/* Login Activity Chart */}
//         <div style={{ marginBottom: '40px' }}>
//           <h3 style={{ marginBottom: '20px' }}>Login Activity</h3>
//           <div style={{ width: '80%', margin: '0 auto' }}>
//             <Bar data={loginData} options={options} />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// // Inline style for navigation buttons
// const navButtonStyle = {
//   width: '100%',
//   padding: '10px',
//   backgroundColor: '#34495E',
//   color: '#fff',
//   border: 'none',
//   marginBottom: '10px',
//   cursor: 'pointer',
//   fontSize: '16px',
//   borderRadius: '5px',
//   textAlign: 'left',
// };

// export default Dashboard;



import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { useNavigate } from 'react-router-dom';

// Register Chart.js components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const Dashboard = ({ studentName, age }) => {
  // Mock data for login activity (Last 7 days)
  const loginData = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'], // Days of the week
    datasets: [
      {
        label: 'Logins',
        data: [2, 1, 3, 0, 2], // Mock login counts per day
        backgroundColor: '#42A5F5',
      },
    ],
  };
  const navigate = useNavigate(); 
  const handleLogout = () => {
    navigate('/login'); // Navigate to Home when the "Exit" button is clicked
  };

  const handlehomepage = () => {
    navigate('/home');
  }

  const handleprofilepage = () => {
    navigate('/profle');
  }

  const handletestresults = ()  => {
    navigate('/testresultpage')
  }

  // Chart options
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Login Activity Over the Last Week',
      },
    },
  };

  // Mock data for course progress
  const courseProgress = [
    { course: 'Alphabates', progress: 35 },
    { course: 'Vovels', progress: 20 },
    { course: 'Conconents', progress: 0 },
    { course: 'Shapes', progress: 10 },
    { course: 'Colours', progress: 60 },
    { course: 'Objects', progress: 50 },
    { course: 'Stories', progress: 0 },
    { course: 'Everyday Phrases', progress: 22 },

  ];

  const MathematicsProgress = [
    { course: '0-10 Numbers', progress: 35 },
    { course: 'Even Numbers', progress: 20 },
    { course: 'Odd Numbers', progress: 0 },
    { course: 'Addition', progress: 10 },
    { course: 'Subtraction', progress: 0 }
  ];

  return (
    <div style={{ display: 'flex', minHeight: '100vh' }}>
      {/* Sidebar */}
      <div style={{ width: '200px', backgroundColor: '#2C3E50', padding: '20px', color: '#fff' }}>
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <h1 style={{ fontSize: '24px' }}>EduCare</h1>
        </div>
        <nav>
          <button style={navButtonStyle} onClick={handlehomepage}>Home</button>
          <button style={navButtonStyle} onClick={handletestresults}>Test Results</button>
          <button style={navButtonStyle} onClick={handleprofilepage}>Profile</button>
          <button  style={navButtonStyle} onClick={handleLogout} >Logout</button>
        </nav>
      </div>

      {/* Main Content */}
      <div style={{ flex: 1, padding: '20px' }}>
        <header style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
          <img src="https://via.placeholder.com/50" alt="Profile" style={{ borderRadius: '50%', marginRight: '10px' }} />
          <div>
            <h3 style={{ margin: 0 }}>{studentName}</h3>
            <p style={{ margin: 0 }}>Age: {age}</p>
          </div>
        </header>

        {/* Login Activity Chart */}
        <div style={{ marginBottom: '40px' }}>
          <h3 style={{ marginBottom: '20px' }}>Login Activity</h3>
          <div style={{ width: '80%', margin: '0 auto' }}>
            <Bar data={loginData} options={options} />
          </div>
        </div>

        {/* Course Progress Section */}
        <div>
          <h3 style={{ marginBottom: '20px' }}>English Progress</h3>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
            {courseProgress.map((course, index) => (
              <div key={index} style={progressBlockStyle}>
                <h4 style={{ margin: '0 0 10px 0' }}>{course.course}</h4>
                <div style={{ backgroundColor: '#e0e0e0', borderRadius: '5px', height: '20px', overflow: 'hidden' }}>
                  <div style={{ width: `${course.progress}%`, height: '100%', backgroundColor: '#42A5F5' }} />
                </div>
                <p style={{ marginTop: '5px' }}>{course.progress}%</p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 style={{ marginBottom: '20px' }}>Mathematics Progress</h3>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
            {MathematicsProgress.map((course, index) => (
              <div key={index} style={progressBlockStyle}>
                <h4 style={{ margin: '0 0 10px 0' }}>{course.course}</h4>
                <div style={{ backgroundColor: '#e0e0e0', borderRadius: '5px', height: '20px', overflow: 'hidden' }}>
                  <div style={{ width: `${course.progress}%`, height: '100%', backgroundColor: '#42A5F5' }} />
                </div>
                <p style={{ marginTop: '5px' }}>{course.progress}%</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

// Inline style for navigation buttons
const navButtonStyle = {
  width: '100%',
  padding: '10px',
  backgroundColor: '#34495E',
  color: '#fff',
  border: 'none',
  marginBottom: '10px',
  cursor: 'pointer',
  fontSize: '16px',
  borderRadius: '5px',
  textAlign: 'left',
};

// Inline style for progress blocks
const progressBlockStyle = {
  backgroundColor: '#fff',
  border: '1px solid #ddd',
  borderRadius: '10px',
  padding: '10px',
  width: '150px',
  boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
};

export default Dashboard;
