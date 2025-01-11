import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState<'user' | 'contractor' | null>(null);
  const navigate = useNavigate(); // Use useNavigate instead of useHistory

  const handleLogin = () => {
    if (email && password && role) {
      // Here you would typically validate the credentials via an API.
      localStorage.setItem('role', role);
      navigate(`/${role}-dashboard`); // Use navigate instead of history.push
    } else {
      alert('Please fill in all fields.');
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-xl shadow-xl w-96">
        <h2 className="text-2xl font-bold text-center mb-6">Login</h2>

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-3 mb-4 border rounded"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-3 mb-4 border rounded"
        />

        <div className="mb-6">
          <p className="text-gray-600">Select Role:</p>
          <div className="flex space-x-4">
            <button
              onClick={() => setRole('user')}
              className={`p-2 border rounded ${role === 'user' ? 'bg-blue-500 text-white' : ''}`}
            >
              User
            </button>
            <button
              onClick={() => setRole('contractor')}
              className={`p-2 border rounded ${role === 'contractor' ? 'bg-blue-500 text-white' : ''}`}
            >
              Contractor
            </button>
          </div>
        </div>

        <button
          onClick={handleLogin}
          className="w-full bg-blue-500 text-white p-3 rounded-lg"
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;
