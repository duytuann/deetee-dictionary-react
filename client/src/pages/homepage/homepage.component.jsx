import React from "react";

import mainLogo from "../../assets/logo.png";
import SearchBar from "../../components/search-bar/search-bar.components";

import "./homepage.styles.css";

const HomePage = () => (
  <div>
    <svg width="60" height="30" viewBox="0 0 60 30" class="box__item__1">
      <rect width="60" height="30" class="pg-hsvg-f1"></rect>
    </svg>
    <svg width="80" height="90" viewBox="0 0 80 90" class="box__item__2">
      <g transform="translate(-1286 -230)">
        <rect
          width="80"
          height="30"
          transform="translate(1286 290)"
          class="pg-hsvg-f2"
        ></rect>
        <circle
          cx="15"
          cy="15"
          r="15"
          transform="translate(1336 290)"
          class="pg-hsvg-f3"
        ></circle>
        <rect
          width="50"
          height="30"
          transform="translate(1316 260)"
          class="pg-hsvg-f4"
        ></rect>
        <circle
          cx="15"
          cy="15"
          r="15"
          transform="translate(1336 230)"
          class="pg-hsvg-f5"
        ></circle>
      </g>
    </svg>
    <svg width="90" height="80" viewBox="0 0 90 80" class="box__item__3">
      <g transform="translate(-8309 -240)">
        <rect
          width="90"
          height="30"
          transform="translate(8309 290)"
          class="pg-hsvg-f6"
        ></rect>
        <rect
          width="50"
          height="30"
          transform="translate(8339 290) rotate(-90)"
          class="pg-hsvg-f7"
        ></rect>
        <rect
          width="30"
          height="30"
          rx="15"
          transform="translate(8309 260)"
          class="pg-hsvg-f8"
        ></rect>
      </g>
    </svg>
    <svg width="60" height="30" viewBox="0 0 60 30" class="box__item__4">
      <g transform="translate(-866 -51)">
        <circle
          cx="15"
          cy="15"
          r="15"
          transform="translate(866 51)"
          class="pg-hsvg-f9"
        ></circle>
        <circle
          cx="15"
          cy="15"
          r="15"
          transform="translate(896 51)"
          class="pg-hsvg-f10"
        ></circle>
      </g>
    </svg>

    <div className="homepage">
      <div className="logo">
        <img className="logo__img" src={mainLogo} alt="Main Logo" />
        <div className="slogan">Make your words meaningful!</div>
      </div>
      <SearchBar />
    </div>
  </div>
);

export default HomePage;
