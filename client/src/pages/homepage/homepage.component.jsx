import React from "react";

import mainLogo from "../../assets/logo.png";
import SearchBar from "../../components/search-bar/search-bar.components";

import "./homepage.styles.css";

const HomePage = () => (
  <div className="homepage">
    <div className="logo">
      <img className="logo__img" src={mainLogo} alt="Main Logo" />
      <div className="slogan">Make your words meaningful!</div>
    </div>
    <SearchBar />
  </div>
);

export default HomePage;
