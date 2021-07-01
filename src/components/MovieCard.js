import React from 'react'


const MovieCard = ({title, poster, vote_average,original_language, release_date, overview}) => {
    return ( 
        <div className="card">
            <p>{title}</p>
            <img src={poster} alt=''/>
            <p>{vote_average}</p>
            <p>{original_language}</p>
            <p>{release_date}</p>
            <p>{overview}</p>
        </div>
     );
}
 
export default MovieCard;