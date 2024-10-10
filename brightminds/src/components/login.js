import React, { useState } from 'react';
import '../css/login.css';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // Handle login logic here (e.g., API calls)
    console.log('Email:', email, 'Password:', password);
    if (email === 'test@gmail.com' && password === '123') {
      navigate('/home'); // Navigate to ListenandLearnPage
  } else {
      console.log('Invalid credentials');// Handle invalid login
  }
    
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2 className="login-title">EduCare Login</h2>
        <form onSubmit={handleLogin}>
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button type="submit" className="login-button">Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
