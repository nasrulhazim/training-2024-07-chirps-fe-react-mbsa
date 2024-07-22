import React from 'react';
import { Link } from 'react-router-dom';
import Logout from '../components/Logout';

const AppLayout = ({ children, setToken }) => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <header className="w-full p-4 bg-white shadow-md">
        <nav className="max-w-7xl mx-auto flex justify-between items-center">
          <div>
            <Link to="/" className="text-xl font-bold text-gray-800">Chirper</Link>
          </div>
          <div>
            <Logout setToken={setToken} />
          </div>
        </nav>
      </header>
      <main className="flex-grow p-4">
        {children}
      </main>
    </div>
  );
};

export default AppLayout;
