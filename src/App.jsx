import React from 'react';
import NavBar from './components/NavBar';
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';
import ResumePage from './components/ResumePage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <NavBar />
      <main style={{ padding: '20px' }}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/resume" element={<ResumePage />} />
        </Routes>
      </main>
    </Router>
  );
}
export default App;