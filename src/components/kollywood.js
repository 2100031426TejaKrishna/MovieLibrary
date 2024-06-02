import React, { useState } from 'react';
import MovieCard from '../components/MovieCard';
import './Tollywood.css'; // Import CSS file for styling
import bng from '../photos/bng.png'; // Adjust the path as necessary
import beast from '../photos/beast.png'; // Adjust the path as necessary
import kaba from '../photos/kaba.png'; // Adjust the path as necessary
import xyz from '../photos/xyz.png'; // Adjust the path as necessary
import k from '../photos/k.png'; 

const Kollywood = ({ addToPlaylist }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const movies = [
    {
      title: 'Ok Bangarm',
      description: ' Movie 1',
      poster: bng, 
    },
    {
      title: 'Kabali',
      description: ' Movie 2',
      poster: kaba,
    },
    {
      title: 'Beast',
      description: ' Movie 3',
      poster: beast,
    },
    {
      title: 'Sandeep',
      description: 'Movie 4',
      poster: xyz,
    },
    {
      title: 'Kanguva',
      description: ' Movie 5',
      poster: k,
    },
    // Add more movies as needed
  ];

  const handlePlay = (title) => {
    console.log('Playing', title);
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
          onChange={(e) => setSearchQuery(e.target.value)}
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

export default Kollywood;
