import React, { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { useNavigate } from 'react-router-dom';

// Register Chart.js components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const Dashboard = () => {
  const [studentName, setStudentName] = useState('');
  const [age, setAge] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const storedStudent = localStorage.getItem('student');
    if (storedStudent) {
      const { Name, Age } = JSON.parse(storedStudent);
      setStudentName(Name);
      setAge(Age);
    } else {
      navigate('/login');
    }
  }, [navigate]);

  const handleLogout = () => {
    navigate('/login');
  };

  const handlehomepage = () => {
    navigate('/home');
  };

  const handleprofilepage = () => {
    navigate('/profle');
  };

  const handletestresults = () => {
    navigate('/testresultpage');
  };

  const loginData = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
    datasets: [
      {
        label: 'Logins',
        data: [2, 1, 3, 0, 2],
        backgroundColor: '#42A5F5',
      },
    ],
  };

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
    { course: 'Subtraction', progress: 0 },
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
          <button style={navButtonStyle} onClick={handleLogout}>Logout</button>
        </nav>
      </div>

      {/* Main Content */}
      <div style={{ flex: 1, padding: '20px' }}>
        <header style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
          <img src="https://via.placeholder.com/50" alt="Profile" style={{ borderRadius: '50%', marginRight: '10px' }} />
          <div>
            <h3 style={{ margin: 0 }}>{studentName}</h3>
          </div>
        </header>

        {/* Login Activity Chart */}
        <div style={{ marginBottom: '40px' }}>
          <h3 style={{ marginBottom: '20px' }}>Login Activity</h3>
          <div style={{ width: '80%', margin: '0 auto' }}>
            <Bar data={loginData} options={options} />
          </div>
        </div>

        {/* English Progress */}
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

        {/* Mathematics Progress */}
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
