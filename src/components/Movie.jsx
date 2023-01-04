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

            <div className='card' style={{ width: '14rem', padding: 10, height:'440px' }} key={item.id}>
              <img src={item.Poster_Link} className='card-img-top' alt='poster'></img>
              <div className="card-body">
                <h6 className='card-title' style={{fontWeight:'bold', color:"#6063ad", fontSize:"20px"}}>{item.Series_Title}</h6>
            
              <div className="rating" style={{color:"#6063ad", fontSize:"17px"}}>🖤 {item.IMDB_Rating} </div>
              <Link className="movie-item" to={`/movie_data/${item.id}`} >
                  More Info
                </Link>
              </div>
              <div>
              </div>
            </div>

          </div>

        )

      })}


    </div>

  )
};

export default Movie;
