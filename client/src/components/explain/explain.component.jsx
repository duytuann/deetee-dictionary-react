import React from "react";

import GlossAndSynset from "../gloss-and-synset/gloss-and-synset.component";

import "./explain.styles.css";

const Explain = ({ word, type, explain }) => {
  console.log(explain);
  return (
    <div className="explain">
      <div className="type">{type}</div>
      {explain.map((ex) => (
        <GlossAndSynset gloss={ex.gloss} synset={ex.synset} />
      ))}
    </div>
  );
};

export default Explain;
