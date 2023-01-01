import React from "react";
import Navbar from "./components/NavBar";
import Home from "./components/Home";
import { Route, Routes } from "react-router-dom";
import Movies from "./components/Movies";
import Contact from "./components/Contact";

export default function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element=<Home /> />
        <Route path="/movies" element=<Movies /> />
        <Route path="/contact" element=<Contact /> />
      </Routes>
    </>
  );
}
