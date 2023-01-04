import React from "react";
import Navbar from "./components/NavBar";
import Home from "./components/Home";
import { Route, Routes } from "react-router-dom";
import Movies from "./components/Movies";
import Contact from "./components/Contact";
import DetailedInfo from "./components/DetailedInfo";

export default function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element=<Home /> />
        <Route path="/movie_data" element=<Movies /> />
        <Route path="/contact" element=<Contact /> />
        <Route path="/movie_data/:id" element=<DetailedInfo /> />
      </Routes>
    </>
  );
}
