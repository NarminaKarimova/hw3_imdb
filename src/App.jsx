import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import { Route, Routes } from "react-router-dom";
import Movies from "./Movies";
import Contact from "./Contact";

export default function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element=<Home /> />
        <Route path="/product" element=<Movies /> />
        <Route path="/about" element=<Contact /> />
      </Routes>
    </>
  );
}
