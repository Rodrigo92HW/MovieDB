import React, { useState } from 'react';
import AddMovie from './components/AddMovie';
import MovieGrid from './components/MovieGrid';

const MovieDBApp = () => {

  const [movie, setMovies] = useState([]);

  return (
    <>
      <h2>Desde MovieDBApp</h2>
      <AddMovie setMovies={setMovies} />  
      <hr></hr>

      <ol>
        { 
          movie.map( movie => (
            <MovieGrid 
             key={movie}
             movie={movie} 

            />
          ))
        }

      </ol>
   </>
  );
}

export default MovieDBApp;
