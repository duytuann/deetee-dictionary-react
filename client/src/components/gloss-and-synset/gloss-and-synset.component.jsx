import React from "react";

import "./gloss-and-synset.styles.css";

const GlossAndSynset = ({ gloss, synset }) => {
  const arr = gloss.split(";");
  return (
    <div className="gloss-synset">
      {<div className="means">{arr[0]}</div>}
      {synset.length === 0 ? null : (
        <div className="synset">
          Synset:{" "}
          {synset.map((w, index) =>
            index === synset.length - 1 ? w : w + " ; "
          )}
        </div>
      )}
      {arr.map((mean, index) =>
        index === 0 || mean === "" ? null : <div className="ex">{mean}</div>
      )}
    </div>
  );
};

export default GlossAndSynset;
