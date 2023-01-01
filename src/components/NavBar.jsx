import React from "react";
import "./NavBar.css";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="nav">
      <span class="imdb">IMDB</span>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/movies">Movies</NavLink>
      <NavLink to="/contact">Contact</NavLink>
    </nav>
  );
}
