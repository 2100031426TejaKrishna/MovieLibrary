import React, { useState } from 'react';
import MovieCard from '../components/MovieCard';
import './Tollywood.css'; // Assuming Tollywood.css contains styles for movie list container
import kabir from '../photos/kabir.png';
import bhram from '../photos/bhram.png';
import gang from '../photos/gang.png';
import padma from '../photos/padma.png';
import patan from '../photos/patan.png';

const Bollywood = ({ addToPlaylist }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [movies, setMovies] = useState([
    {
      title: 'Kabir Singh',
      description: 'Movie 1',
      poster: kabir,
    },
    {
      title: 'Bhramastra',
      description: 'Movie 2',
      poster: bhram,
    },
    {
      title: 'Gang',
      description: ' Movie 3',
      poster: gang,
    },
    {
      title: 'Padmaavat',
      description: 'Movie 4',
      poster: padma,
    },
    {
      title: 'Patan',
      description: 'Movie 5',
      poster: patan,
    },
    // Add more movies as needed
  ]);

  const handlePlay = (title) => {
    console.log('Playing', title);
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  // Filter movies based on search query
  const filteredMovies = movies.filter(movie =>
    movie.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="movie-list-container">
      <br />
      <center>
        <input
          type="text"
          placeholder="Search by title"
          value={searchQuery}
          onChange={handleSearchChange}
        />
      </center>
      <div className="movie-list">
        {filteredMovies.map((movie, index) => (
          <MovieCard
            key={index}
            title={movie.title}
            description={movie.description}
            poster={movie.poster}
            onPlay={() => handlePlay(movie.title)}
            onAddToPlaylist={() => addToPlaylist(movie)}
          />
        ))}
      </div>
    </div>
  );
};

export default Bollywood;
