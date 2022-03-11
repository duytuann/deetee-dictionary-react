import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";

import Trie from "../../utils/Trie";

import "./autocomplete.styles.css";

const Autocomplete = ({ word, wordList }) => {
  const [suggestions, setSuggestions] = useState([]);

  const ref = useRef(new Trie());
  console.log(ref.current);
  useEffect(() => {
    wordList.forEach((w) => ref.current.insert(w));
    console.log(1);
  }, []);

  useEffect(() => {
    const result = ref.current.suggest(word);
    setSuggestions(result.filter((w, index) => index < 10));
  }, [word]);

  return (
    <div className="autocomplete">
      {word === "" ? null : suggestions.map((w) => <div>{w}</div>)}
    </div>
  );
};

export default Autocomplete;
