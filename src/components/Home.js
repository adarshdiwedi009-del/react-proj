import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-white">
      <h1 className="text-4xl font-bold text-black mb-2">Welcome to POPX</h1>
      <p className="text-gray-500 mb-8 text-lg text-center">
        Manage your projects with ease and simplicity.
      </p>

      <div className="flex flex-col sm:flex-row gap-4 w-full max-w-xs sm:max-w-md">

        <Link
          to="/create-account"
          className="flex-1 text-center bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-300 shadow-md"
        >
          Create Account
        </Link>

        <button
          onClick={() => navigate("/login")}
          className="flex-1 border-blue-600 bg-purple-300 text-black hover:bg-blue-50 font-semibold py-3 px-6 rounded-lg transition duration-300"
        >
          Already Registered? Login
        </button>

      </div>
    </div>
  );
};

export default Home;