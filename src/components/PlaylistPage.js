import React from 'react';
import './playlist.css';
import '../components/cssfiles/Common.css'; // Import common CSS

const PlaylistPage = ({ playlist }) => {
  return (
    <div className="playlist-container">
    <center> <h2>Playlist</h2></center> 
      {playlist.length === 0 ? (
     <center>  <p>No movies in the playlist.</p></center> 
      ) : (
        <div className="playlist-grid">
          {playlist.map((movie, index) => (
            <div key={index} className="playlist-item">
              <img src={movie.poster} alt={movie.title} />
              <span>{movie.title}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default PlaylistPage;
