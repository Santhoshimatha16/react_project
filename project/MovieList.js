import React from 'react';

function MovieList() {
  const movies = [
    { id: 1, name: 'Mankatha', image : 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.amazon.com%2FMankatha-Ajith-Kumar%2Fdp%2FB099MHDN2V&psig=AOvVaw0978HuMmCTSg0VtAaDrwOp&ust=1725594458532000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCMD5ybbyqogDFQAAAAAdAAAAABA2.jpg' },
    { id: 2, name: 'Kaka Kaka', image : 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.justwatch.com%2Fph%2Fmovie%2Fkaakha-kaakha&psig=AOvVaw2yglw8jaFyS153UJOQp6tw&ust=1725594700085000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCNC5rdrzqogDFQAAAAAdAAAAABAE.jpg'},
    { id: 3, name: 'Nayakan', image : 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.tallengestore.com%2Fproducts%2Fnaayakan-kamal-haasan-mani-ratnam-tamil-movie-poster-art-prints&psig=AOvVaw3NCtGM8j956SzCWbfla-6q&ust=1725594868230000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCLCUzPrzqogDFQAAAAAdAAAAABAJ.jpg' },
    { id: 4, name: 'Ok Kanmani',image : 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.primevideo.com%2Fdetail%2FOk-Kanmani%2F0FFOWHH5CL9EFL55LJ90Y6982Y&psig=AOvVaw0byqqmHvYsefvZ7U8Ol3U-&ust=1725594897635000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCPCY34j0qogDFQAAAAAdAAAAABAi.jpg'}
  ];

  return (
    <div>
      <h3>Now Showing</h3>
      <ul>
        {movies.map(movie => (
          <li key={movie.id}>{movie.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default MovieList;
