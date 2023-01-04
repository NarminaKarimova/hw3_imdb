import Pagination from "./Pagination"
import React, { useEffect, useState } from 'react';
import Movie from "./Movie"


function Movies() {
  const [Movies, fetchMovies] = useState([])
  const [loading] = useState(false);
  const [currentPage, SetCurrentPage] = useState(1);
  const [moviesPerpage] = useState(35);

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

  // Get current posts
  const indexOfLastPost = currentPage * moviesPerpage;
  const indexOfFirstPost = indexOfLastPost - moviesPerpage;
  const currentPosts = Movies.slice(indexOfFirstPost, indexOfLastPost)

  // Change page
  const paginate = pgNumber => SetCurrentPage(pgNumber);




  return (
    <div>
      <h1 style={{textAlign:'center'}}>Movies</h1>
      <Movie posts={currentPosts} loading={loading} />
      <Pagination
        postsPerPage={moviesPerpage}
        totalPosts={Movies.length}
        paginate={paginate}
      />
    </div>
  )
}
export default Movies;
