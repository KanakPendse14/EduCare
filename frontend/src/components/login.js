// import React, { useState } from 'react';
// import '../css/login.css';
// import { useNavigate } from 'react-router-dom';

// const Login = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const navigate = useNavigate();

//   const handleLogin = (e) => {
//     e.preventDefault();
//     // Handle login logic here (e.g., API calls)
//     console.log('Email:', email, 'Password:', password);
//     if (email === 'test@gmail.com' && password === '123') {
//       navigate('/home'); // Navigate to ListenandLearnPage
//   } else {
//       console.log('Invalid credentials');// Handle invalid login
//   }
    
//   };

//   return (
//     <div className="login-container">
//       <div className="login-box">
//         <h2 className="login-title">EduCare Login</h2>
//         <form onSubmit={handleLogin}>
//           <div className="input-group">
//             <label htmlFor="email">Email</label>
//             <input
//               type="email"
//               id="email"
//               placeholder="Enter your email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               required
//             />
//           </div>

//           <div className="input-group">
//             <label htmlFor="password">Password</label>
//             <input
//               type="password"
//               id="password"
//               placeholder="Enter your password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               required
//             />
//           </div>

//           <button type="submit" className="login-button">Login</button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Login;


// import React, { useState } from 'react';
// import '../css/login.css';
// import { useNavigate } from 'react-router-dom';

// const Login = () => {
//   const [name, setName] = useState('');
//   const [password, setPassword] = useState('');
//   const navigate = useNavigate();

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     try {
//       console.log('Attempting login with:', { Name: name, PASS: password }); // Log for debugging

//       const response = await fetch('http://localhost:5000/api/student/login', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ Name: name, PASS: password }),
//       });

//       if (!response.ok) {
//         throw new Error('Login failed. Invalid credentials.');
//       }

//       const data = await response.json();
//       console.log('Login successful:', data);
//       navigate('/home');

//     } catch (error) {
//       console.error('Error:', error.message);
//       alert(error.message);
//     }
//   };

//   return (
//     <div className="login-container">
//       <div className="login-box">
//         <h2 className="login-title">EduCare Login</h2>
//         <form onSubmit={handleLogin}>
//           <div className="input-group">
//             <label htmlFor="name">Name</label>
//             <input
//               type="text"
//               id="name"
//               placeholder="Enter your name"
//               value={name}
//               onChange={(e) => setName(e.target.value)}
//               required
//             />
//           </div>

//           <div className="input-group">
//             <label htmlFor="password">Password</label>
//             <input
//               type="password"
//               id="password"
//               placeholder="Enter your password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               required
//             />
//           </div>

//           <button type="submit" className="login-button">Login</button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Login;



// import React, { useState } from 'react';
// import '../css/login.css';
// import { useNavigate } from 'react-router-dom';

// const Login = () => {
//   const [name, setName] = useState('');
//   const [password, setPassword] = useState('');
//   const navigate = useNavigate();

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     try {
//       console.log('Attempting login with:', { Name: name, PASS: password });
  
//       const response = await fetch('http://localhost:5000/api/student/login', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ Name: name, PASS: password }),
//       });
  
//       if (!response.ok) {
//         throw new Error('Login failed. Invalid credentials.');
//       }
  
//       const data = await response.json();
//       console.log('Login successful:', data);
  
//       // Pass the entire student object to HomePage
//       navigate('/home', { state: { student: data.student } });
  
//     } catch (error) {
//       console.error('Error:', error.message);
//       alert(error.message);
//     }
//   };

//   return (
//     <div className="login-container">
//       <div className="login-box">
//         <h2 className="login-title">EduCare Login</h2>
//         <form onSubmit={handleLogin}>
//           <div className="input-group">
//             <label htmlFor="name">Name</label>
//             <input
//               type="text"
//               id="name"
//               placeholder="Enter your name"
//               value={name}
//               onChange={(e) => setName(e.target.value)}
//               required
//             />
//           </div>

//           <div className="input-group">
//             <label htmlFor="password">Password</label>
//             <input
//               type="password"
//               id="password"
//               placeholder="Enter your password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               required
//             />
//           </div>

//           <button type="submit" className="login-button">Login</button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Login;


import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { StudentContext } from '../context/StudentContext';

const Login = () => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
 

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      console.log('Attempting login with:', { Name: name, PASS: password });

      const response = await fetch('http://localhost:5000/api/student/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ Name: name, PASS: password }),
      });

      if (!response.ok) {
        throw new Error('Login failed. Invalid credentials.');
      }

      const data = await response.json();
      console.log('Login successful:', data);
      localStorage.setItem('student' , JSON.stringify(data.student));

      // Pass the entire student object to HomePage
      navigate('/home', { state: { student: data.student } });
    } catch (error) {
      console.error('Error:', error.message);
      alert(error.message);
    }
  };

  return (
    <div className="min-h-screen bg-deepBlue flex items-center justify-center">
      <div className="w-96 bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-mediumBlue mb-6 text-center">EduCare Login</h2>
        <form onSubmit={handleLogin} className="space-y-4">
          <div className="flex flex-col">
            <label htmlFor="name" className="text-mediumBlue font-medium">Name</label>
            <input
              type="text"
              id="name"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="mt-1 p-2 border border-mediumBlue rounded focus:outline-none focus:ring-2 focus:ring-orange"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="password" className="text-mediumBlue font-medium">Password</label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="mt-1 p-2 border border-mediumBlue rounded focus:outline-none focus:ring-2 focus:ring-orange"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-orange text-white py-2 rounded-lg font-semibold hover:bg-yellow hover:text-deepBlue transition"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;


