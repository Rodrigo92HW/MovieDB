import React, { useState, useEffect } from 'react'
import MovieCard from './MovieCard';
import {getMovies} from './helpers/getMovies';


const MovieGrid = ({movie}) => {

    const [ movpel, setPelis] = useState([])

    useEffect(  () => {
        getMovies(movie)
        .then(setPelis)

    }, [movie])

    return (
        <div className="card-grid">
            <h3>{movie}</h3>

            <ol>
                {movpel.map( pelis => (
                    <MovieCard 
                     key={pelis.id}
                     {...pelis}

                    />
                ))}
            </ol>
        </div>
     );
}
 
export default MovieGrid;