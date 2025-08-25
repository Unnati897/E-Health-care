// ehealth-frontend/src/App.jsx
import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import PatientsList from './pages/PatientsList';

function App(){
  const token = localStorage.getItem('token');
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/patients" element={token ? <PatientsList /> : <Navigate to="/login" />} />
      <Route path="*" element={<Navigate to={token ? "/patients" : "/login"} />} />
    </Routes>
  );
}

export default App;
