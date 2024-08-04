// components/ProtectedRoute.jsx
"use client"
import { useState } from 'react';

const ProtectedRoute = ({ children }) => {
  const [password, setPassword] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const correctPassword = process.env.NEXT_PUBLIC_Protected_Root_Password;


  const handlePasswordSubmit = () => {
    if (password === correctPassword) {
      setIsAuthenticated(true);
    } else {
      alert('Incorrect password');
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="p-4 bg-white shadow rounded">
          <h1 className="text-2xl font-bold mb-4">Enter Password</h1>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border p-2 mb-4 w-full"
          />
          <button
            onClick={handlePasswordSubmit}
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            Submit
          </button>
        </div>
      </div>
    );
  }

  return children;
};

export default ProtectedRoute;
