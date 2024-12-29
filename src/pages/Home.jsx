// src/pages/Home.jsx
import React from 'react';

const Home = () => {
    return (
        <div className="min-h-screen bg-gray-100 flex justify-center items-center">
            <div className="text-center">
                <h1 className="text-5xl font-extrabold text-blue-600">Welcome to Event Management</h1>
                <p className="mt-4 text-lg text-gray-700">Manage events easily by creating and joining.</p>
                <div className="mt-8 space-y-4">
                    <a
                        href="/login"
                        className="w-full bg-blue-500 text-white py-3 px-6 rounded-full text-xl hover:bg-blue-600 transition duration-300"
                    >
                        Login
                    </a>
                    <a
                        href="/signup"
                        className="w-full bg-green-500 text-white py-3 px-6 rounded-full text-xl hover:bg-green-600 transition duration-300"
                    >
                        Sign Up
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Home;
