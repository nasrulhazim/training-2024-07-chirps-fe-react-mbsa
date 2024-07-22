import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate, Link } from 'react-router-dom';
import Register from './components/Register';
import Login from './components/Login';
import ChirpsList from './components/ChirpsList';
import GuestLayout from './layouts/GuestLayout';
import AppLayout from './layouts/AppLayout';

function App() {
  const [token, setToken] = useState(localStorage.getItem('token'));

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route
            path="/register"
            element={
              <GuestLayout>
                <Register />
              </GuestLayout>
            }
          />
          <Route
            path="/login"
            element={
              <GuestLayout>
                <Login setToken={setToken} />
              </GuestLayout>
            }
          />
          <Route
            path="/chirps"
            element={
              token ? (
                <AppLayout setToken={setToken}>
                  <ChirpsList />
                </AppLayout>
              ) : (
                <Navigate to="/login" />
              )
            }
          />
          <Route
            path="/"
            element={
              <Navigate to={token ? "/chirps" : "/login"} />
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
