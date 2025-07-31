import React from 'react';
import NavBar from './components/NavBar';
import HomePage from './components/HomePage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <NavBar />
      <main style={{ padding: '20px' }}>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </main>
    </Router>
  );
}
export default App;