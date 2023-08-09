import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Profile from './components/Profile';
import Missions from './components/missions/missionpage';
import Rockets from './components/Rockets';

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/rockets" element={<Rockets />} />
          <Route path="/myprofile" element={<Profile />} />
          <Route path="/misions" element={<Missions />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
