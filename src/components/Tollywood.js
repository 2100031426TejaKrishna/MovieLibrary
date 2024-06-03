import React, { useState } from 'react';
import MovieCard from '../components/MovieCard';
import '../components/cssfiles/Common.css'; // Import common CSS
import luvstr from '../photos/luvstory.png'; 
import pusha from '../photos/pushpa.png'; 
import animal from '../photos/animal.png'; 
import dasara from '../photos/dasra.png'; 
import ranga from '../photos/ranga.png'; 
import vakel from '../photos/vakel.png'; 
import rrr from '../photos/rrr.png'; 
import guntur from '../photos/guntr.png'; 
import upena from '../photos/upena.png'; 
import saho from '../photos/saho.png'; 

const Tollywood = ({ addToPlaylist }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const movies = [
    { title: 'LoveStory', description: ' Movie 1', poster: luvstr },
    { title: 'Pushpa', description: 'Movie 2', poster: pusha },
    { title: 'Animal', description: ' Movie 3', poster: animal },
    { title: 'Dasara', description: 'Movie 4', poster: dasara },
    { title: 'Rangasthalm', description: ' Movie 5', poster: ranga },
    { title: 'Sahoo', description: ' Movie 6', poster: saho },
    { title: 'RRR', description: ' Movie 7', poster: rrr },
    { title: 'Upena', description: ' Movie 8', poster: upena },
    { title: 'GunturKaram', description: ' Movie 9', poster: guntur },
    { title: 'VakeelSabb', description: ' Movie 10', poster: vakel }
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
      <br></br> 
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

export default Tollywood;
