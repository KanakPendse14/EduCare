// import React from 'react';
// import Navbar from '../components/Navbar'; // Adjust the path as needed
// import '../css/home.css'; // Ensure the path to your CSS file is correct

// const HomePage = () => {
//   const studentName = "Aayush Shah"; // Replace with dynamic data
//   const studentAge = 10; // Replace with dynamic data

//   return (
//     <div>
//       <Navbar studentName={studentName} studentAge={studentAge} />
//       <div className="home-page">
//         <div className="left-content">
//           <h1>Welcome to EduCare</h1>
//           <p>
//             EduCare is Assistive technology for children with learning disabilities includes tools and devices designed to support and enhance their learning experiences.
//           </p>
//         </div>
//         <div className="right-content">
        
//           <blockquote className="quote">
//             <h1>Quote-of -the-day</h1>
//                "Education is the most powerful weapon which you can use to change the world." 
//           </blockquote>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HomePage;


// import React from 'react';
// import { useLocation } from 'react-router-dom';
// import Navbar from '../components/Navbar';
// import '../css/home.css';

// const HomePage = () => {
//   const location = useLocation();
//   console.log('Location state received:', location.state); // Debug: Log location state

//   const { studentName, studentAge } = location.state || {
//     studentName: 'Unknown Student',
//     studentAge: 'Unknown Age',
//   };

//   console.log('Student name:', studentName); // Debug: Log the student name
//   console.log('Student age:', studentAge);  // Debug: Log the student age

//   return (
//     <div>
//       <Navbar studentName={studentName} studentAge={studentAge} />
//       <div className="home-page">
//         <div className="left-content">
//           <h1>Welcome, {studentName}!</h1>
//           <p>
//             Age: {studentAge} years<br />
//             EduCare is Assistive technology for children with learning disabilities includes tools and devices designed to support and enhance their learning experiences.
//           </p>
//         </div>
//         <div className="right-content">
//           <blockquote className="quote">
//             <h1>Quote-of-the-day</h1>
//             "Education is the most powerful weapon which you can use to change the world."
//           </blockquote>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HomePage;


// import React from 'react';
// import { useLocation, useNavigate } from 'react-router-dom';
// import Navbar from '../components/Navbar';
// import '../css/home.css';

// const HomePage = () => {
//   const location = useLocation();
//   const navigate = useNavigate();

//   // Debug: Log location state
//   console.log('Location state received:', location.state);

//   const { studentName, studentAge, student } = location.state || {
//     studentName: 'Unknown Student',
//     studentAge: 'Unknown Age',
//     student: null,
//   };

//   // Debug: Log the student details
//   console.log('Student name:', studentName);
//   console.log('Student age:', studentAge);

//   // Handle navigation to ProfilePage
//   const goToProfile = () => {
//     if (student) {
//       navigate('/profile', { state: { student } });
//     } else {
//       alert('No student data available.');
//     }
//   };

//   return (
//     <div>
//       <Navbar studentName={studentName} studentAge={studentAge} />
//       <div className="home-page">
//         <div className="left-content">
//           <h1>Welcome, {studentName}!</h1>
//           <p>
//             Age: {studentAge} years<br />
//             EduCare is Assistive technology for children with learning disabilities includes tools and devices designed to support and enhance their learning experiences.
//           </p>
//           {/* Button to navigate to ProfilePage */}
//           <button className="profile-button" onClick={goToProfile}>
//             View Profile
//           </button>
//         </div>
//         <div className="right-content">
//           <blockquote className="quote">
//             <h1>Quote-of-the-day</h1>
//             "Education is the most powerful weapon which you can use to change the world."
//           </blockquote>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HomePage;


import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import '../css/home.css';

const HomePage = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // Debug: Log location state
  console.log('Location state received:', location.state);

  // Destructure the full student object
  const { student } = location.state || {};

  // Fallback if student data is missing
  if (!student) {
    return (
      <div>
        <p>No student data available. Please log in again.</p>
      </div>
    );
  }

  // Handle navigation to ProfilePage
  const goToProfile = () => {
    if (student) {
      navigate('/studentprofile', { state: { student } });
    } else {
      alert('No student data available.');
    }
  };

  return (
    <div>
      <Navbar studentName={student.Name} studentAge={student.AGE} />
      <div className="home-page">
        <div className="left-content">
          <h1>Welcome, {student.Name}!</h1>
          <p>
            Age: {student.AGE} years<br />
            EduCare is Assistive technology for children with learning disabilities that includes tools and devices designed to support and enhance their learning experiences.
          </p>
          {/* Button to navigate to ProfilePage */}
          <button className="profile-button" onClick={goToProfile}>
            View Profile
          </button>
        </div>
        <div className="right-content">
          <blockquote className="quote">
            <h1>Quote-of-the-day</h1>
            "Education is the most powerful weapon which you can use to change the world."
          </blockquote>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
