
import 'bootstrap/dist/css/bootstrap.min.css';
import Movie from "./Movie"
import Pagination from "./Pagination"
import React, { useEffect, useState } from 'react'

const Movies=()=> {
  const [Movies1, fetchMovies] = useState([])
  const [loading,setLoading]=useState(false);
  const [currentPage,SetCurrentPage]=useState(1);
  const [moviesPerpage]=useState(35);
  useEffect(() => {
    fetch('http://localhost:3500/movie_data')
      .then((res) => res.json())
      .then((res) => {
        setLoading(true)
        fetchMovies(res)
        setLoading(false)
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      })
  }, []);

  // Get current posts
  const indexOfLastPost=currentPage*moviesPerpage;
  const indexOfFirstPost=indexOfLastPost-moviesPerpage;
  const currentPosts=Movies1.slice(indexOfFirstPost,indexOfLastPost)

  // Change page
  const paginate = pgNumber => SetCurrentPage(pgNumber);



  return (
    <div>

    <h1>Movies</h1>

    <Movie posts={currentPosts} loading={loading} />
    <Pagination
        postsPerPage={moviesPerpage}
        totalPosts={Movies1.length}
        paginate={paginate}
      />
    </div>

    )
}
export default Movies;
