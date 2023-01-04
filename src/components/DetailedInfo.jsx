// import axios from "axios";
import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom";
import "./DetailedInfo.css"
export default function DetailedInfo() {

    const [MovieDetails, fetchMovieDetails] = useState([])
    const { id } = useParams();
    useEffect(() => {

        fetch(`http://localhost:3500/movie_data/${id}`)
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

            <div className="movie_card" id="bright">
                <div className="info_section">
                    <div className="movie_header">
                        <img className="locandina" src={MovieDetails.Poster_Link} />
                        <h1>{MovieDetails.Series_Title}</h1>
                        <h4>{MovieDetails.Released_Year}, {MovieDetails.Director}</h4>
                        <span className="minutes">{MovieDetails.Runtime}</span>
                        <p className="type">{MovieDetails.Genre}</p>
                    </div>
                    <div className="movie_desc">
                        <p className="text">
                            {MovieDetails.Overview}
                        </p>
                    </div>
                </div>
                <div className="blur_back bright_back"></div>
            </div>

        </div>
    )

}



