
   export const getMovies = async( movie ) => { 

    const url = `https://api.themoviedb.org/3/search/movie?api_key=d32276a5408fa468e24382a0889edd27&query=${encodeURI(movie)}`
    const resp = await fetch(url)
    const {data} = await resp.json();

   const Pelicula = data.map( pelis => {
     
    return {
        id: pelis.id,
        title: pelis.title,
        poster: pelis.poster_path,
        vote_average: pelis.vote_average,
        original_language: pelis.original_language,
        overview: pelis.overview,
        release_date: pelis.release_date,
    }
   })   
 return Pelicula;
}
