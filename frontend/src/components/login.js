import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

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
      localStorage.setItem('student', JSON.stringify(data.student));
      navigate('/home', { state: { student: data.student } });
    } catch (error) {
      console.error('Error:', error.message);
      alert(error.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-[#e0efff] to-[#f7faff]">
      <div className="bg-white shadow-2xl rounded-2xl w-full max-w-md p-10">
        <div className="flex flex-col items-center">
          <img src="https://i.im.ge/2024/10/11/kmwwTK.99e50934e515314d14abaa8cb3e2a511.jpeg" alt="EduCare Logo" className="w-16 h-16 mb-4" />
          <h2 className="text-3xl font-extrabold text-[#134074] mb-2">Welcome to EduCare</h2>
          <p className="text-gray-600 mb-6 text-center">Please login to your account</p>
        </div>
        <form onSubmit={handleLogin} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-[#134074]">Name</label>
            <input
              type="text"
              id="name"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="mt-1 block w-full px-4 py-2 border border-[#8ab6d6] rounded-md shadow-sm focus:ring-[#ff914d] focus:border-[#ff914d] focus:outline-none"
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-[#134074]">Password</label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="mt-1 block w-full px-4 py-2 border border-[#8ab6d6] rounded-md shadow-sm focus:ring-[#ff914d] focus:border-[#ff914d] focus:outline-none"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-[#ff914d] hover:bg-[#ffd6a5] text-white hover:text-[#134074] font-bold py-2 rounded-lg transition duration-300"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;


