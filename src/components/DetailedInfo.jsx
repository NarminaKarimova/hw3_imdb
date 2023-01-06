// import axios from "axios";
import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom";
import "./DetailedInfo.css"
export default function DetailedInfo() {

    const [MovieDetails, fetchMovieDetails] = useState([])
    const { id } = useParams();
    useEffect(() => {

        fetch(`http://localhost:3000/movie_data/${id}`)
            .then((res) => res.json())
            .then((res) => {
                fetchMovieDetails(res)
                console.log(res);
            })
            .catch(err => {
                console.error(err);
            })
    }, []);
    return (
        <div>

            <div className="movie-card" id="bright">
                <div className="details">
                    <div className="header">
                        <img className="poster" src={MovieDetails.Poster_Link} />
                        <h1>{MovieDetails.Series_Title}</h1>
                        <h4>{MovieDetails.Released_Year}, {MovieDetails.Director}</h4>
                        <h5>{MovieDetails.Star1}, {MovieDetails.Star2}
                        <br /> {MovieDetails.Star3}, {MovieDetails.Star4}</h5>
                     
                        <span className="time">{MovieDetails.Runtime}</span>
                        <p className="genre">{MovieDetails.Genre}</p>
                    </div>
                    <div className="description">
                        <p className="overview">
                            {MovieDetails.Overview}
                        </p>
                    </div>
                </div>
                <div className="blur_back bright_back"></div>
            </div>

        </div>
    )

}



