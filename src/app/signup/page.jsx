"use client";

import React, { useState } from 'react';
import { FaUser, FaLock } from 'react-icons/fa';
import { FaGoogle, FaGithub, FaTwitter } from 'react-icons/fa';

export default function Signup() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [role, setRole] = useState('customer'); // 'customer' or 'admin'

  const handleSignup = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords don't match!");
      return;
    }
    const response = await fetch('https://example.com/api/signup', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password, role })
    });
    const data = await response.json();
    console.log(data);
  };

  return (
<<<<<<< Updated upstream
    <div>
      Signup
      <Nav />
=======
    <div className="flex items-center justify-center h-screen bg-gradient-to-r from-purple-400 to-blue-500">
      <div className="w-full max-w-md p-10 space-y-8 bg-white shadow-lg rounded-lg">
        <h2 className="text-3xl font-bold text-center text-gray-800">Sign Up</h2>
        <form onSubmit={handleSignup} className="space-y-6">
          <div className="relative">
            <FaUser className="absolute left-3 top-3 text-gray-500" />
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-10 py-3 border border-gray-300 rounded-full focus:ring-2 focus:ring-blue-400 shadow-sm focus:outline-none transition duration-150"
              required
            />
          </div>
          <div className="relative">
            <FaUser className="absolute left-3 top-3 text-gray-500" />
            <input
              type="email"
              placeholder="email"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-10 py-3 border border-gray-300 rounded-full focus:ring-2 focus:ring-blue-400 shadow-sm focus:outline-none transition duration-150"
              required
            />
          </div>
          <div className="relative">
            <FaLock className="absolute left-3 top-3 text-gray-500" />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-10 py-3 border border-gray-300 rounded-full focus:ring-2 focus:ring-blue-400 shadow-sm focus:outline-none transition duration-150"
              required
            />
          </div>
          <div className="relative">
            <FaLock className="absolute left-3 top-3 text-gray-500" />
            <input
              type="password"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full px-10 py-3 border border-gray-300 rounded-full focus:ring-2 focus:ring-blue-400 shadow-sm focus:outline-none transition duration-150"
              required
            />
          </div>
          <div className="relative">
            <label className="text-gray-500 mr-2">Sign up as:</label>
            <select
              value={role}
              onChange={(e) => setRole(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-full focus:ring-2 focus:ring-blue-400 shadow-sm focus:outline-none transition duration-150 bg-white"
              required
            >
              <option value="customer">Customer</option>
              <option value="admin">Admin</option>
            </select>
          </div>
          <button
            type="submit"
            className="w-full py-3 mt-6 text-white bg-blue-600 rounded-full hover:bg-blue-700 transition duration-150"
          >
            Sign Up
          </button>
        </form>

        <div className="text-center text-gray-600 my-4">Or sign up with</div>
        <div className="flex justify-center space-x-4">
          <button className="p-3 bg-red-500 text-white rounded-full hover:bg-red-600 transition duration-150">
            <FaGoogle />
          </button>
          <button className="p-3 bg-gray-800 text-white rounded-full hover:bg-gray-900 transition duration-150">
            <FaGithub />
          </button>
          <button className="p-3 bg-blue-400 text-white rounded-full hover:bg-blue-500 transition duration-150">
            <FaTwitter />
          </button>
        </div>

        <p className="text-center text-gray-600 mt-4">
          Already have an account?
          <a href="/login" className="text-blue-600 hover:underline ml-2">Login</a>
        </p>
      </div>
>>>>>>> Stashed changes
    </div>
  );
}
