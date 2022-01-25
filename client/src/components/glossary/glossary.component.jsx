import React from "react";

import Explain from "../explain/explain.component";

import "./glossary.styles.css";

const Glossary = ({ word, gloss }) => (
  <div className="glossary-container">
    <div className="gloss">
      <div className="word-heading">
        <i>
          Ý nghĩa của <b>{word}</b> trong tiếng Anh
        </i>
      </div>
      <div className="share-word">
        <div className="share-icon-container">
          <i className="fab fa-facebook-f share-icon"></i>
          <i className="fab fa-twitter share-icon"></i>
        </div>
      </div>
      <div className="word-container">
        <div className="word">{word}</div>
        <div className="speaker">
          <div class="speaker__us speaker__item">
            <i class="fas fa-volume-up"> US</i>
          </div>
          <div class="speaker__uk speaker__item">
            <i class="fas fa-volume-up"> UK</i>
          </div>
        </div>
      </div>
      {Object.keys(gloss).map((key) =>
        gloss[key].length === 0 ? null : (
          <Explain word={word} type={key} explain={gloss[key]} />
        )
      )}
    </div>
    <div className="temp"></div>
  </div>
);

export default Glossary;
