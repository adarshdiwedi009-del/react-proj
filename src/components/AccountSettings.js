import React from "react";
import { useNavigate } from 'react-router-dom';
import female from "../assets/female.jpg";
const AccountSettings = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50 flex justify-center p-6">
      
      {/* Main Card (white stays default) */}
      <div className="bg-white w-full max-w-md rounded-xl shadow-md overflow-hidden">

        {/* Heading (white section) */}
        <div className="p-6">
          <h2 className="text-xl font-bold text-gray-800">
            Account Settings
          </h2>
        </div>

        {/* Profile Section (light different background) */}
        <div className="bg-gray-100 px-6 py-4">

          <div className="flex gap-4 items-start">

            {/* Profile Image */}
            <div className="relative w-16 h-16">
              <img
                src={female}
                alt="profile"
                className="w-16 h-16 rounded-full object-cover"
              />

              {/* Camera Icon */}
              <div className="absolute bottom-0 right-0 bg-blue-600 p-1 rounded-full border-2 border-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-3 h-3 text-white"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M4 5a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V7a2 2 0 00-2-2h-1.586a1 1 0 01-.707-.293l-1.414-1.414A2 2 0 0011.586 3H8.414a2 2 0 00-1.414.586L5.586 4.707A1 1 0 014.879 5H4z" />
                  <path d="M10 8a3 3 0 100 6 3 3 0 000-6z" />
                </svg>
              </div>
            </div>

            {/* Name + Email */}
            <div>
              <h3 className="text-md font-semibold text-gray-800">
                Shivangi Mishra
              </h3>
              <p className="text-sm text-gray-500">
                abc@gmail.com
              </p>
            </div>
          </div>
        </div>

        {/* Paragraph (still light section but cleaner) */}
        <div className="bg-gray-100 px-6 pb-4">
          <p className="text-sm text-gray-500 leading-relaxed">
            This is your account profile section where you can manage your personal details, update your information, and change your settings anytime.
          </p>
        </div>

        {/* Bottom Divider Line */}
        <div className="border-t border-gray-200"></div>

      </div>
    </div>
  );
};

export default AccountSettings;