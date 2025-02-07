// import React from 'react';
// import { useLocation, useNavigate } from 'react-router-dom';


// const ProfilePage = () => {
//   const location = useLocation();
//   const navigate = useNavigate();
//   const { student } = location.state || {};

//   // Debug: Log the received student data
//   console.log('Location state in ProfilePage:', location.state);

//   if (!student) {
//     return (
//       <div>
//         <p>No student data available. Please log in again.</p>
//         <button onClick={() => navigate('/')}>Go to Login</button>
//       </div>
//     );
//   }

//   return (
//     <div className="profile-page">
//       <h1>Student Profile</h1>
//       <p><strong>Name:</strong> {student.Name}</p>
//       <p><strong>Age:</strong> {student.AGE}</p>
//       <p><strong>Teacher:</strong> {student.TEACHERNAME}</p>
//       <p><strong>Guardian Name:</strong> {student.GARDIANNAME}</p>
//       <p><strong>Guardian Contact:</strong> {student.GARDIANCONTACT}</p>
//       <p><strong>Address:</strong> {student.ADDRESS}</p>
//       <p><strong>Student ID:</strong> {student.STD_ID}</p>
      
//     </div>
//   );
// };

// export default ProfilePage;



// import React from 'react';
// import { useLocation, useNavigate } from 'react-router-dom';

// const ProfilePage = () => {
//   const location = useLocation();
//   const navigate = useNavigate();
//   const { student } = location.state || {};

//   // Debug: Log the received student data
//   console.log('Location state in ProfilePage:', location.state);

//   if (!student) {
//     return (
//       <div className="bg-yellow text-deepBlue p-6 rounded-md">
//         <p>No student data available. Please log in again.</p>
//         <button
//           className="mt-4 bg-mediumBlue text-white px-4 py-2 rounded-lg hover:bg-deepBlue"
//           onClick={() => navigate('/')}
//         >
//           Go to Login
//         </button>
//       </div>
//     );
//   }

//   return (
//     <div className="bg-yellow min-h-screen p-6">
//       <div className="max-w-3xl mx-auto bg-white p-6 rounded-lg shadow-lg">
//         <h1 className="text-3xl font-bold text-deepBlue">Student Profile</h1>
//         <div className="mt-6 text-mediumBlue">
//           <p><strong>Name:</strong> {student.Name}</p>
//           <p><strong>Age:</strong> {student.AGE}</p>
//           <p><strong>Teacher:</strong> {student.TEACHERNAME}</p>
//           <p><strong>Guardian Name:</strong> {student.GARDIANNAME}</p>
//           <p><strong>Guardian Contact:</strong> {student.GARDIANCONTACT}</p>
//           <p><strong>Address:</strong> {student.ADDRESS}</p>
//           <p><strong>Student ID:</strong> {student.STD_ID}</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProfilePage;


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
      <div className="bg-sky-800 min-h-screen flex items-center justify-center">
        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
          <p className="text-deepBlue text-lg font-semibold">
            No student data available. Please log in again.
          </p>
          <button
            className="mt-6 bg-deepBlue text-white py-2 px-4 rounded-lg font-semibold hover:bg-mediumBlue"
            onClick={() => navigate('/')}
          >
            Go to Login
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-sky-300 min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-3xl">
        <h1 className="text-2xl font-bold text-deepBlue text-center mb-6">
          Student Profile
        </h1>
        <div className="space-y-4 text-mediumBlue">
          <p>
            <strong className="text-deepBlue">Name:</strong> {student.Name}
          </p>
          <p>
            <strong className="text-deepBlue">Age:</strong> {student.AGE}
          </p>
          <p>
            <strong className="text-deepBlue">Teacher:</strong> {student.TEACHERNAME}
          </p>
          <p>
            <strong className="text-deepBlue">Guardian Name:</strong>{' '}
            {student.GARDIANNAME}
          </p>
          <p>
            <strong className="text-deepBlue">Guardian Contact:</strong>{' '}
            {student.GARDIANCONTACT}
          </p>
          <p>
            <strong className="text-deepBlue">Address:</strong> {student.ADDRESS}
          </p>
          <p>
            <strong className="text-deepBlue">Student ID:</strong> {student.STD_ID}
          </p>
        </div>
        <button
          className="mt-6 bg-deepBlue text-white py-2 px-4 rounded-lg font-semibold hover:bg-mediumBlue"
          onClick={() => navigate('/home')}
        >
          Go Back
        </button>
      </div>
    </div>
  );
};

export default ProfilePage;
