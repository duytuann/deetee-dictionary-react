import React from "react";
import { Link } from "react-router-dom";

import "./header.styles.scss";

const Header = () => (
  <div className="header">
    <Link className="nav__brand" to="/">
      DeeTee Dictionary
    </Link>
    <ul className="nav__list">
      <li className="nav__item">
        <Link to="dictionary">Dictionary</Link>
      </li>
      <li className="nav__item">
        <Link to="translate">Translate</Link>
      </li>
      <li className="nav__item">
        <Link to="grammar">Grammar</Link>
      </li>
      <li className="nav__item">
        <Link to="/signin-signup">Sing In/Sing up</Link>
      </li>
    </ul>
  </div>
);

export default Header;
