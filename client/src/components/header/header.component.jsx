import React from "react";
import mainLogo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import "./header.styles.css";

const Header = () => (
  <div class="header--container">
    <div class="header">
      <div class="header__left">
        <a href="/">
          <img class="nav__brand" src={mainLogo} alt="Logo Deetee Dictionary" />
        </a>
        <ul class="nav__list">
          <li class="nav__item">
            <Link to="/dictionary">Từ điển</Link>
          </li>
          <li class="nav__item">
            <Link to="#">Dịch</Link>
          </li>
          <li class="nav__item">
            <Link to="#">Ngữ pháp</Link>
          </li>
          <li class="nav__item">
            <Link to="#">Từ điển đồng nghĩa</Link>
          </li>
        </ul>
      </div>
      <div class="header__right">
        <ul class="nav__list">
          <li class="nav__item">
            <Link to="#">
              <i class="fab fa-facebook-f"></i>
            </Link>
          </li>
          <li class="nav__item">
            <Link to="#">
              <i class="fab fa-instagram"></i>
            </Link>
          </li>
          <li class="nav__item">
            <Link to="#">
              <i class="fab fa-twitter"></i>
            </Link>
          </li>
          <li class="nav__item">
            <i class="fas fa-user"></i>
            <Link to="#"> Đăng nhập / Đăng ký</Link>
          </li>
        </ul>
      </div>
    </div>
  </div>
);

export default Header;
