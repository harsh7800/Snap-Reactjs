import React, { useState } from "react";
import Company from "./Company";
import FeaturesDropdown from "./FeaturesDropdown";
import "./Navbar.scss";
import hamburger from "../images/icon-menu.svg";
import hamburgerClose from "../images/icon-close-menu.svg";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [menu, setMenu] = useState(false);
  return (
    <>
      <nav className="navbar-wrapper">
        <h2>Snap</h2>
        <ul className={menu ? "navbar show" : "navbar"}>
          <li style={{ fontSize: "1em" }}>
            <FeaturesDropdown />
          </li>
          <li>
            <Company />
          </li>
          <li>

          <Link
            to="/career"
            style={{
              fontSize: "1.3em",
              marginTop: "-.4em",
              marginLeft: "30px",
              textDecoration: "none",
              color: "rgba(0, 0, 0, 0.514)",
              fontFamily: "Concert One",
            }}
            >
            Career
          </Link>
            </li>
          <li>
            
          <Link
            id="li"
            to="/about"
            style={{
              textDecoration: "none",
              color: "rgba(0, 0, 0, 0.514)",
              fontFamily: "Concert One",
              fontSize: "1.3em",
              marginTop: "-.3em",
              marginLeft: "30px",
            }}
            >
            About
          </Link>
            </li>
          <Link
            id="li"
            to="/home"
            style={{
              textDecoration: "none",
              color: "rgba(0, 0, 0, 0.514)",
              fontFamily: "Concert One",
              fontSize: "1.3em",
              marginTop: "0em",
              marginLeft: "30px",
            }}
          >
            Home
          </Link>
        </ul>
        <div className="registration">
          <button id="login">Login</button>
          <button id="signup">signup</button>
        </div>

        <button className="menu" onClick={() => setMenu(!menu)}>
          {menu ? (
            <img src={hamburgerClose} alt="" />
          ) : (
            <img src={hamburger} alt="" />
          )}
        </button>
      </nav>
    </>
  );
}
