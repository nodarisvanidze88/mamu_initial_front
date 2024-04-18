import './App.css';
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom"
import SignInComponent from './signedin/SignInComponent';
import HomeComponent from './signedin/HomeComponent';

function App() {
  const [isAuthenticated, setAuthenticated] = useState(false);

  return (
    <Router>
      <Routes>
        <Route path="/signin" element={<SignInComponent />} />
        <Route
          path="/"
          element={isAuthenticated ? <HomeComponent /> : <Navigate to="/signin" />}
        />
      </Routes>
    </Router>
  );
}

export default App;