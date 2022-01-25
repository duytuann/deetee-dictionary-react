import React from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import { createStructuredSelector } from "reselect";

import { selectWordInput } from "../../redux/search/search.selectors";
import { inputChange } from "../../redux/search/search.actions";

import "./search-bar.styles.css";

const SearchBar = ({ homepage, word, inputChange }) => {
  const history = useHistory();
  const handleSubmit = (event) => {
    event.preventDefault();
    history.push(`/dictionary/${word}`);
  };

  return (
    <div className={homepage ? "search__bar" : "search__bar__dict"}>
      <div className={homepage ? "search" : "search_dict"}>
        <form className="form-search" onSubmit={handleSubmit} value={word}>
          <input
            type="text"
            className="searchTerm"
            method="post"
            placeholder="Tìm kiếm Tiếng Anh"
            onChange={(event) => inputChange(event)}
          />
          <button type="submit" className="searchButton">
            <i className="fa fa-search icon-black"></i>
          </button>
        </form>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  inputChange: (event) => dispatch(inputChange(event)),
});

const mapStateToProps = createStructuredSelector({
  word: selectWordInput,
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
