import React from "react";

import "./search-bar.styles.css";

const SearchBar = ({ homepage }) => (
  <div class={homepage ? "search__bar" : "search__bar__dict"}>
    <div class={homepage ? "search" : "search_dict"}>
      <input type="text" class="searchTerm" placeholder="Tìm kiếm Tiếng Anh" />
      <button type="submit" class="searchButton">
        <i class="fa fa-search"></i>
      </button>
    </div>
  </div>
);

export default SearchBar;
