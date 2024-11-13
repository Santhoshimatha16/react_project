import React, { useState } from 'react';
import './SignUpPage.css';
import { useNavigate } from 'react-router-dom';

function SignUpPage() {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();

  const handleSignUp = () => {
    if (email && username && password && password === confirmPassword) {
      alert('Sign up successful! You can now log in.');
      navigate('/login');
    } else {
      alert('Please fill all fields and ensure passwords match.');
    }
  };

  return (
    <div className="signup-page">
      <h1>Sign Up</h1>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <input
        type="password"
        placeholder="Confirm Password"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
      />
      <button onClick={handleSignUp} className="signup-button">Sign Up</button>
      <p>Already have an account?</p>
      <button onClick={() => navigate('/login')} className="login-button">Login</button>
    </div>
  );
}

export default SignUpPage;
