import React from 'react';
import '../components/cssfiles/MovieCard.css';

const MovieCard = ({ title, description, poster, onPlay, onAddToPlaylist }) => {
  return (
    <div className="movie-card">
      <img src={poster} alt={title} className="movie-poster" />
      <h3>{title}</h3>
      <p>{description}</p>
      <button onClick={onPlay}>Play</button>
      <button onClick={onAddToPlaylist}>Add to Playlist</button>
    </div>
  );
};

export default MovieCard;
