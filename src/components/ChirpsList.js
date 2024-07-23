import React, { useEffect, useState } from 'react';
import ApiService from '../services/api';

const ChirpsList = () => {
  const [chirps, setChirps] = useState([]);
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState({});
  const [processing, setProcessing] = useState(false);

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

  const submit = async (e) => {
    e.preventDefault();
    setProcessing(true);
    setErrors({});

    try {
      await ApiService.postChirp({ message: message });
      setMessage('');
      const response = await ApiService.getChirps();
      setChirps(response.data);
    } catch (error) {
      setErrors({ message: 'Failed to submit chirp' });
    } finally {
      setProcessing(false);
    }
  };

  const deleteChirp = async (id) => {
    try {
      if(window.confirm('Are you sure want to delete this chirp?')) {
        await ApiService.deleteChirp(id);
        setChirps(chirps.filter(chirp => chirp.id !== id));
      }
    } catch (error) {
      console.error('Failed to delete chirp', error);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Chirps</h1>

      <div className="max-w-2xl mx-auto p-4 sm:p-6 lg:p-8">
        <form onSubmit={submit}>
          <textarea
            value={message}
            placeholder="What's on your mind?"
            className="p-4 block w-full border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm"
            onChange={e => setMessage(e.target.value)}
          ></textarea>
          {errors.message && <p className="text-red-500 mt-2">{errors.message}</p>}
          <button
            type="submit"
            className="mt-4 px-4 py-2 bg-indigo-500 text-white rounded-md hover:bg-indigo-600"
            disabled={processing}
          >
            Chirp
          </button>
        </form>

        <div className="space-y-4 mt-4">
          {chirps.map(chirp => (
            <div key={chirp.id} className="p-4 bg-white shadow-md rounded-md">
              <div className="flex justify-between">
                <div>
                  <p className="text-gray-700 text-ellipsis">{chirp.message}</p>
                  <p className="text-sm text-gray-500">- {chirp.user.name}</p>
                </div>
                <button
                  onClick={() => deleteChirp(chirp.id)}
                  className="mt-2 px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600">
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>


    </div>
  );
};

export default ChirpsList;
