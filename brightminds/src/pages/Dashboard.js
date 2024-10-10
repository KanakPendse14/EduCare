
import React from 'react';
import '../css/Dashboard.css';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

// Register the required Chart.js components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const Dashboard = () => {
  // Data for the English Test chart
  const englishData = {
    labels: ['Week 1', 'Week 2', 'Week 3'],
    datasets: [
      {
        label: 'A-E',
        data: [70, 77, 88], // Displayed in all weeks with the same value for clarity
        backgroundColor: '#FFD700',
      },
      {
        label: 'F-J',
        data: [0, 65, 75], // Displayed only in Week 2 and Week 3
        backgroundColor: '#FFF3B6',
      },
      {
        label: 'K-O',
        data: [0, 0, 60], // Displayed only in Week 3
        backgroundColor: '#FFD700',
      },
    ],
};


  // Data for the Mathematical Test chart
  const mathData = {
    labels: ['Week 1', 'Week 2', 'Week 3'],
    datasets: [
      {
        label: '1-5',
        data: [70, 77, 88],
        backgroundColor: '#7100FF',
      },
      {
        label: '5-10',
        data: [0, 65, 75],
        backgroundColor: '#7100FF',
      },
      {
        label: 'Addition 1-5',
        data: [0, 0, 60],
        backgroundColor: '#FFF3B6',
      },
    ],
  };

  // Data for the Speaking Test chart
  const speakingData = {
    labels: ['Week 1', 'Week 2', 'Week 3'],
    datasets: [
      {
        label: 'Fluency',
        data: [60,70,72],
        backgroundColor: '#FFD700',
      },
      {
        label: 'Pronunciation',
        data: [40,45,56],
        backgroundColor: '#FFF3B6',
      },
      {
        label: 'Accuracy',
        data: [40,50,55],
        backgroundColor: '#FFD700',
      },
    ],
  };

  // Chart options
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Weekly Performance',
      },
    },
  };

  return (
    <div className="dashboard">
      {/* Sidebar */}
      <div className="sidebar">
        <div className="logo">
          <h1>EduCare</h1>
          <h2>logo</h2>
        </div>
        <button className="nav-btn">Home</button>
        <button className="nav-btn">Tests</button>
        <button className="nav-btn">My Tests</button>
        <button className="nav-btn">Logout</button>
      </div>

      {/* Main Content */}
      <div className="main-content">
        <div className="header">
          <div className="profile">
            <img src="https://via.placeholder.com/50" alt="Profile" />
            <div>
              <h3>Child Name</h3>
              <p>Age: 10</p>
            </div>
          </div>
        </div>

        {/* Graphical Analytics */}
        <div className="analytics">
          <div className="test-section">
            <h3>English Test</h3>
            <Bar options={options} data={englishData} />
          </div>
          <div className="test-section">
            <h3>Mathematical Test</h3>
            <Bar options={options} data={mathData} />
          </div>
          <div className="test-section">
            <h3>Speaking Test</h3>
            <Bar options={options} data={speakingData} />
          </div>
        </div>

        {/* Feedback Section */}
        <div className="feedback">
          <h3>Teacher Feedback</h3>
          <textarea placeholder="Enter feedback here..."></textarea>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;