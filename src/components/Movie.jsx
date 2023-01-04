import React from 'react';
import { Link } from 'react-router-dom';
const Movie = ({ posts, loading }) => {
  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <div className="data">

      {posts.map((item) => {
        return (
          <div className='p-4 d-inline-block justify-content-evenly container' style={{
            width: 200
          }}>

            <div className='card' style={{ width: '10rem', padding: 10 }} key={item.id}>
              <img src={item.Poster_Link} className='card-img-top' alt='poster'></img>
              <div className="card-body">
                <h5 className='card-title'>{item.Series_Title}</h5>
              </div>
              <div className="genre">
                <h6>{item.Genre}</h6>
              </div>
              <div className="rating">{item.IMDB_Rating}</div>
              <div>
                <Link className="movie-item" to={`/movie_data/${item.id}`} >
                  More Info
                </Link>
              </div>
            </div>

          </div>

        )

      })}


    </div>

  )
};

export default Movie;
