import React from 'react';
import ApiService from '../services/api';
import { useNavigate } from 'react-router-dom';

const Logout = ({ setToken }) => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await ApiService.logout();
      localStorage.removeItem('token');
      setToken(null);
      navigate('/login');
    } catch (err) {
      console.error('Logout failed', err);
    }
  };

  return (
    <button onClick={handleLogout} className="btn-primary">Logout</button>
  );
};

export default Logout;
