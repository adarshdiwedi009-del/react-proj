import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const CreateAccount = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    password: '',
    company: '',
    isAgency: 'No'
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Account created for ${formData.fullName}!`);
    navigate('/');
  };

  const inputClasses = "w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition";

  return (
    <div className="flex items-center justify-center min-h-screen p-6 bg-blue-50">
      <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md">
        <button 
          onClick={() => navigate('/')} 
          className="text-blue-600 text-sm font-medium mb-6 flex items-center hover:underline"
        >
          ← Back to Home
        </button>
        
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Create your POPX account </h2>
        
     <form onSubmit={handleSubmit} className="space-y-5">

  
  <div className="relative w-full">
    <label htmlFor="fullName" className="absolute -top-2 left-3 bg-white px-1 text-xs text-blue-600">
      Full Name
    </label>
    <input
      type="text"
      id="fullName"
      required
      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      placeholder="Name"
      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
    />
  </div>

  
  <div className="relative w-full">
    <label htmlFor="phone" className="absolute -top-2 left-3 bg-white px-1 text-xs text-blue-600">
      Phone Number
    </label>
    <input
      type="tel"
      id="phone"
      required
      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      placeholder="Enter phone number"
      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
    />
  </div>

 
  <div className="relative w-full">
    <label htmlFor="email" className="absolute -top-2 left-3 bg-white px-1 text-xs text-blue-600">
      Email
    </label>
    <input
      type="email"
      id="email"
      required
      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      placeholder="abc@example.com"
      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
    />
  </div>

  <div className="relative w-full">
    <label htmlFor="password" className="absolute -top-2 left-3 bg-white px-1 text-xs text-blue-600">
      Password
    </label>
    <input
      type="password"
      id="password"
      required
      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      placeholder="Enter password"
      onChange={(e) => setFormData({ ...formData, password: e.target.value })}
    />
  </div>

    <div className="relative w-full">
    <label htmlFor="company" className="absolute -top-2 left-3 bg-white px-1 text-xs text-blue-600">
      Company
    </label>
    <input
      type="text"
      id="company"
      required
      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
     placeholder="Your company name"
      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
    />
  </div>

           <div className="py-2">
            <p className="text-sm font-semibold text-gray-600 mb-2">Are you an Agency?</p>
            <div className="flex gap-6">
              <label className="flex items-center cursor-pointer">
                <input type="radio" name="agency" value="Yes" className="w-4 h-4 text-blue-600 focus:ring-blue-500" 
                  onChange={(e) => setFormData({...formData, isAgency: e.target.value})} />
                <span className="ml-2 text-sm text-gray-700">Yes</span>
              </label>
              <label className="flex items-center cursor-pointer">
                <input type="radio" name="agency" value="No" defaultChecked className="w-4 h-4 text-blue-600 focus:ring-blue-500" 
                  onChange={(e) => setFormData({...formData, isAgency: e.target.value})} />
                <span className="ml-2 text-sm text-gray-700">No</span>
              </label>
            </div>
          </div>

        <button
  type="submit"
  onClick={() => navigate("/account-settings")}
  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-lg mt-4 transition duration-300 shadow-md transform active:scale-95"
>
  Create Account
</button>
        </form>
      </div>
    </div>
  );
};

export default CreateAccount;