// src/pages/Login.jsx
import React, { useState } from 'react';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = (e) => {
        e.preventDefault();
        // Add your login logic here (e.g., API call)
    };

    return (
        <div className="min-h-screen bg-gray-100 flex justify-center items-center">
            <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-sm">
                <h2 className="text-2xl font-bold text-center text-blue-600 mb-6">Login to Your Account</h2>
                
                <form onSubmit={handleLogin}>
                    {/* Email Field */}
                    <div className="mb-4">
                        <label className="block text-gray-700">Email</label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                        />
                    </div>
                    
                    {/* Password Field */}
                    <div className="mb-6">
                        <label className="block text-gray-700">Password</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                        />
                    </div>
                    
                    {/* Login Button */}
                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white py-3 px-6 rounded-full text-xl hover:bg-blue-600 transition duration-300"
                    >
                        Login
                    </button>
                </form>

                {/* Forgot Password Link */}
                <div className="text-center mt-4">
                    <a href="/forgot-password" className="text-blue-500 hover:underline">
                        Forgot Password?
                    </a>
                </div>

                {/* Sign Up Link */}
                <div className="text-center mt-4">
                    <p>Don't have an account? <a href="/signup" className="text-blue-500 hover:underline">Sign Up</a></p>
                </div>
            </div>
        </div>
    );
};

export default Login;
