import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './components/Home';
import CreateAccount from './components/CreateAccount';
import Login from './components/Login';
import AccountSettings from './components/AccountSettings';


function App() {
  return (
    <Router>
     
        
      <div className="min-h-screen bg-gray-50 text-slate-800 font-sans">


        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create-account" element={<CreateAccount />} />
          <Route path="/login" element={<Login />} />
          <Route path="/account-settings" element={<AccountSettings />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;