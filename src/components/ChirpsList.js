import React, { useEffect, useState } from 'react';
import ApiService from '../services/api';

const ChirpsList = () => {
  const [chirps, setChirps] = useState([]);

  useEffect(() => {
    const fetchChirps = async () => {
      try {
        const response = await ApiService.getChirps();
        setChirps(response.data);
      } catch (error) {
        console.error('Failed to fetch chirps', error);
      }
    };

    fetchChirps();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Chirps</h1>
      <div className="space-y-4">
        {chirps.map(chirp => (
          <div key={chirp.id} className="p-4 bg-white shadow-md rounded-md">
            <p className="text-gray-700">{chirp.message}</p>
            <p className="text-sm text-gray-500">- {chirp.user.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChirpsList;
