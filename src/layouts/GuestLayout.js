import React from 'react';
import { Link } from 'react-router-dom';

const GuestLayout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <header className="w-full p-4 bg-white shadow-md">
        <nav className="max-w-7xl mx-auto flex justify-between items-center">
          <div>
            <Link to="/" className="text-xl font-bold text-gray-800">Chirper</Link>
          </div>
          <div>
            <Link to="/login" className="text-gray-600 hover:text-gray-800 mx-2">Login</Link>
            <Link to="/register" className="text-gray-600 hover:text-gray-800 mx-2">Register</Link>
          </div>
        </nav>
      </header>
      <main className="flex-grow flex items-center justify-center w-full">
        {children}
      </main>
    </div>
  );
};

export default GuestLayout;
