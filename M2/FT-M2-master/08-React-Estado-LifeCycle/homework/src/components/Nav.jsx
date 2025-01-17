/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import Logo from "../weather.jpg";
import SearchBar from "./SearchBar.jsx";
import styles from "./Nav.css";

function Nav({ onSearch }) {
  return (
    <nav class="navbar bg-dark fixed-top">
      <div class="container-fluid">
        <a href="#" class="navbar-brand text-light">
          <img
            src={Logo}
            alt="Logo"
            width="30"
            height="30"
            class="d-inline-block align-text-top"
          />
          Weather App
        </a>
        <SearchBar onSearch={onSearch} />
      </div>
    </nav>
  );
}

export default Nav;
