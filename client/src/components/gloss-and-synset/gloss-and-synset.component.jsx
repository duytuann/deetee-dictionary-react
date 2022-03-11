import React from "react";
import { Link } from "react-router-dom";

import "./gloss-and-synset.styles.css";

const GlossAndSynset = ({ gloss, synset }) => {
  const arr = gloss.split(";");
  return (
    <div className="gloss-synset">
      {<div className="means">{arr[0]}</div>}
      {synset.length === 0 ? null : (
        <div className="synset">
          <b>Synset:</b>{" "}
          {synset.map((w, index) =>
            index === synset.length - 1 ? (
              <Link className="hv" to={`/dictionary/${w}`}>
                {w}
              </Link>
            ) : (
              <Link className="hv" to={`/dictionary/${w}`}>
                {w + " ;"}
              </Link>
            )
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
