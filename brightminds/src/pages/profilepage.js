import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
  const [student, setStudent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const navigate = useNavigate(); // For navigation

  useEffect(() => {
    const fetchStudentData = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/students/me', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            // Include token if you use authentication
            // 'Authorization': `Bearer ${token}`,
          },
        });
        
        if (!response.ok) {
          throw new Error('Failed to fetch student data');
        }
        
        const data = await response.json();
        setStudent(data);
      } catch (err) {
        setError(err.message);
        navigate('/home'); // Redirect to login if there's an error (e.g., not authenticated)
      } finally {
        setLoading(false);
      }
    };

    fetchStudentData();
  }, [navigate]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div style={{ padding: '20px' }}>
      {student && (
        <>
          <h1>{student.name}'s Profile</h1>
          <p><strong>Age:</strong> {student.age}</p>
          <p><strong>Email:</strong> {student.email}</p>
          <h3>Enrolled Courses</h3>
          <ul>
            {student.courses.map((course, index) => (
              <li key={index}>{course}</li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
};

export default Profile;
