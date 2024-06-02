import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import '../components/cssfiles/Homepage.css';

const Homepage = () => {
  const [playlist, setPlaylist] = useState([]);

  const addToPlaylist = (movie) => {
    setPlaylist((prevPlaylist) => [...prevPlaylist, movie]);
  };

  return (
    <div className="homepage-container">
      <Navbar playlist={playlist} />
      <div className="container">
        <div className="slideshow-container">
          <div className="slideshow-text">
            Welcome to Movie Mania!<br></br>
    </div>
        </div>
        {/* Render Tollywood and pass addToPlaylist */}
      </div>
    </div>
  );
};

export default Homepage;
