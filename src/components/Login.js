import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Welcome back ${formData.email}`);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-blue-50 p-6">
      <div className="bg-white w-full max-w-md p-8 rounded-xl shadow-lg">

       
 <div className="mb-6">
<h2 className="text-2xl font-bold text-gray-800 leading-snug">
  Signing to your{" "}
  <span className="text-gray-800 block sm:inline">
    POPX account
  </span>
</h2>
  <p className="text-sm text-gray-500 mt-2 leading-relaxed">
    Please login to continue accessing your account and manage your details.
  </p>
</div>

<form className="space-y-6">

       
          <div className="relative w-full">
            <label
              htmlFor="email"
              className="absolute -top-2 left-3 bg-white px-1 text-xs text-blue-600"
            >
              Email
            </label>

            <input
              type="email"
              id="email"
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="abc@example.com"
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
            />
          </div>

         
          <div className="relative w-full">
            <label
              htmlFor="password"
              className="absolute -top-2 left-3 bg-white px-1 text-xs text-blue-600"
            >
              Password
            </label>

            <input
              type="password"
              id="password"
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter password"
              onChange={(e) =>
                setFormData({ ...formData, password: e.target.value })
              }
            />
          </div>

       
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-lg transition duration-300 active:scale-95"
          >
            Login
          </button>

        </form>
      </div>
    </div>
  );
};

export default Login;