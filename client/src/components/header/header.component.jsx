import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import mainLogo from "../../assets/logo.png";
import { selectSearchHidden } from "../../redux/search/search.selectors";
import SearchBar from "../search-bar/search-bar.components";
import { toggleSearchHidden } from "../../redux/search/search.actions";

import "./header.styles.css";

const Header = ({ homepage, hidden, dispatch }) => (
  <div>
    <div className="header--container">
      <div className="header">
        <div className="header__left">
          <a href="/">
            <img
              className="nav__brand"
              src={mainLogo}
              alt="Logo Deetee Dictionary"
            />
          </a>
          <ul className="nav__list">
            <li className="nav__item">
              <Link to="/dictionary">Từ điển</Link>
            </li>
            <li className="nav__item">
              <Link to="#">Dịch</Link>
            </li>
            <li className="nav__item">
              <Link to="#">Ngữ pháp</Link>
            </li>
            <li className="nav__item">
              <Link to="#">Từ điển đồng nghĩa</Link>
            </li>
          </ul>
        </div>
        <div className="header__right">
          <ul className="nav__list">
            <li className="nav__item">
              <Link to="#">
                <i className="fab fa-facebook-f"></i>
              </Link>
            </li>
            <li className="nav__item">
              <Link to="#">
                <i className="fab fa-instagram"></i>
              </Link>
            </li>
            <li className="nav__item">
              <Link to="#">
                <i className="fab fa-twitter"></i>
              </Link>
            </li>
            <li className="nav__item">
              <i className="fas fa-user"></i>
              <Link to="#"> Đăng nhập / Đăng ký</Link>
            </li>
            {homepage ? null : (
              <div
                onClick={() => {
                  dispatch(toggleSearchHidden());
                }}
              >
                <li
                  className={
                    hidden
                      ? "nav__item toggle bgc_c_v"
                      : "nav__item toggle bgc_c_x"
                  }
                >
                  <div className="searchbutton">
                    <i
                      className={
                        hidden
                          ? "fa fa-search icon-black"
                          : "fas fa-times icon-white"
                      }
                    ></i>{" "}
                    Tìm kiếm
                  </div>
                </li>
              </div>
            )}
          </ul>
        </div>
      </div>
    </div>
    {homepage ? null : hidden ? null : (
      <div className="search-bar-container">
        <SearchBar />
      </div>
    )}
  </div>
);

const mapStateToProps = createStructuredSelector({
  hidden: selectSearchHidden,
});

export default connect(mapStateToProps)(Header);
