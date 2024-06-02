import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import './App.css';
import Login from './components/login';
import Register from './components/register';
import Homepage from './components/Homepage';
import Tollywood from './components/Tollywood';
import Kollywood from './components/kollywood';
import Bollywood from './components/bollywood';
import Navbar from './components/Navbar'; // Import Navbar component
import PlaylistPage from './components/PlaylistPage'; // Import PlaylistPage component

const App = () => {
  const [playlist, setPlaylist] = useState([]);

  const addToPlaylist = (movie) => {
    setPlaylist((prevPlaylist) => {
      if (prevPlaylist.find((m) => m.title === movie.title)) {
        return prevPlaylist; // Avoid duplicates
      }
      return [...prevPlaylist, movie];
    });
  };

  return (
    <Router>
      <AppContent addToPlaylist={addToPlaylist} playlist={playlist} />
    </Router>
  );
};

const AppContent = ({ addToPlaylist, playlist }) => {
  const location = useLocation();
  const showNavbar = !['/', '/register'].includes(location.pathname);

  return (
    <>
      {showNavbar && <Navbar playlist={playlist} />}
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/HomePage" element={<Homepage />} />
        <Route path="/tollywood" element={<Tollywood addToPlaylist={addToPlaylist} />} />
        <Route path="/kollywood" element={<Kollywood addToPlaylist={addToPlaylist} />} />
        <Route path="/bollywood" element={<Bollywood addToPlaylist={addToPlaylist} />} />
        <Route path="/playlist" element={<PlaylistPage playlist={playlist} />} /> {/* Add route for playlist page */}
      </Routes>
    </>
  );
};

export default App;
