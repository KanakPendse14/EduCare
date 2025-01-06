import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';


const ProfilePage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { student } = location.state || {};

  // Debug: Log the received student data
  console.log('Location state in ProfilePage:', location.state);

  if (!student) {
    return (
      <div>
        <p>No student data available. Please log in again.</p>
        <button onClick={() => navigate('/')}>Go to Login</button>
      </div>
    );
  }

  return (
    <div className="profile-page">
      <h1>Student Profile</h1>
      <p><strong>Name:</strong> {student.Name}</p>
      <p><strong>Age:</strong> {student.AGE}</p>
      <p><strong>Teacher:</strong> {student.TEACHERNAME}</p>
      <p><strong>Guardian Name:</strong> {student.GARDIANNAME}</p>
      <p><strong>Guardian Contact:</strong> {student.GARDIANCONTACT}</p>
      <p><strong>Address:</strong> {student.ADDRESS}</p>
      <p><strong>Student ID:</strong> {student.STD_ID}</p>
      
    </div>
  );
};

export default ProfilePage;

