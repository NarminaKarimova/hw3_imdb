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
  }, []);
  return (
    <div className="container">
      <h1>Reactjs Fetch Api Data from Json Server</h1>

      <table className="table">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Name</th>
          </tr>
        </thead>
        <tbody>
          {Movies.map((item, i) => {
            return <tr>
              <td>{item.id}</td>
              <td>{item.Series_Title}</td>
            </tr>
          })}
          <tr>

          </tr>
        </tbody>
      </table>
    </div>
  )
}
export default Movies;
