import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LoginPanel from "./components/Login/Login";
import Register from "./components/Register/Register"; // <-- THE FIX: Add this line

function App() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPanel />} />
      <Route path="/register" element={<Register />} /> {/* <-- This will now work */}
    </Routes>
  );
}

export default App;