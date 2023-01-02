
import React, { useEffect, useState } from 'react'
function Movies() {
  const [Movies, fetchMovies] = useState([])
  useEffect(() => {
    fetch('http://localhost:3500/movie_data')
      .then((res) => res.json())
      .then((res) => {
        fetchMovies(res)
        console.log(res);
      })
      .catch(err => {
        console.error(err);
      })
  }, []);
  return (
    <div className="container">
      <h1>Reactjs Fetch Api Data from Json Server</h1>

      {Movies.map((item, index) => {
        return (
          <img src={item.Poster_Link}></img>
        )

      })}
    </div>
  )
}
export default Movies;
