import React from "react";
// import { Blog, Features, Footer, Header, Possibility, WhatGPT3} from './containers'
import { Navbar } from "./components";
import {
  Banner,
  Categories,
  Statistics,
  Features,
  Guide_section,
  Testimonials,
  Footer,
} from "./containers";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AuctionCard from "./components/AuctionCards/AuctionCards";
import HomePage from "./components/HomePage/Homepage";
import SellAProduct from "./components/SellAProduct/SellAProduct";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/auction" element={<AuctionCard />} />
        <Route path="/" element={<SellAProduct />} />
        <Route path="/home" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
