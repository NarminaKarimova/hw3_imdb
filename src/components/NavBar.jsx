import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./NavBar.css";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="nav">
      <span class="imdb">IMDB</span>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/movie_data">Movies</NavLink>
      <NavLink to="/contact">Contact</NavLink>
    </nav>
  );
}
