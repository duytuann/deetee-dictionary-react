import React from "react";

import "./search-bar.styles.css";

const SearchBar = () => (
  <div class="search__bar">
    <div class="search">
      <input type="text" class="searchTerm" placeholder="Tìm kiếm Tiếng Anh" />
      <button type="submit" class="searchButton">
        <i class="fa fa-search"></i>
      </button>
    </div>
  </div>
);

export default SearchBar;
