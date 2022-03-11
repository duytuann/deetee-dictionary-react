import React, { useEffect } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectGlossary } from "../../redux/search/search.selectors";
import { getGlossary } from "../../redux/search/search.actions";
import { useDispatch } from "react-redux";
import Glossary from "../../components/glossary/glossary.component";

import "./word.styles.css";

const Word = ({ match, gloss }) => {
  const word = match.params.word;
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(getGlossary(word));
  }, [word]);

  return (
    <div className="word-page">
      <div className="leftslot"></div>
      <div className="rightslot">
        <Glossary gloss={gloss} word={word} />
      </div>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  gloss: selectGlossary,
});

export default connect(mapStateToProps)(Word);
