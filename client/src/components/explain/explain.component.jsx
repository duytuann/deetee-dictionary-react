import React from "react";

import GlossAndSynset from "../gloss-and-synset/gloss-and-synset.component";

import "./explain.styles.css";

const Explain = ({ type, explain }) => {
  return (
    <div className="explain">
      <div className="type">{type}</div>
      <div className="gloss-synset-wrapper"> 
      {explain.map((ex) => (
        <GlossAndSynset synset={ex.synset} gloss={ex.gloss} />
      ))}
      </div>
    </div>
  );
};

export default Explain;
