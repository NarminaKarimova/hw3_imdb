import React from 'react';

const Movie = ({ posts, loading }) => {
  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
  <div className="data">

  {posts.map((item) => {
    return (
      <div className='p-4 d-inline-block justify-content-evenly container' style={{
        width: 400
      }}>

        <div className='card' style={{ width: '18rem', padding: 10 }} key={item.id}>
          <img src={item.Poster_Link} className='card-img-top'></img>
          <div className="card-body">
            <h5 className='card-title'>{item.Series_Title}</h5>
          </div>
          <span className="genre">
            <h6>{item.Genre}</h6>
          </span>
          <span className="rating">{item.IMDB_Rating}</span>
        </div>
      </div>

    )

  })}

 
</div>

)
};

export default Movie;