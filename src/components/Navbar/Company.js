import React, { useState } from 'react'
import './Company.scss'
import {Link} from 'react-router-dom'
import arrowdown from "../images/icon-arrow-down.svg";
import arrowup from "../images/icon-arrow-up.svg";



function Company() {
      const [Dropdown, setDropdown] = useState(false)
  return (
    <div className="company-dropdown">
      <h2 onClick={() => setDropdown(!Dropdown)}>
        Company{" "}
        {Dropdown ? (
          <img src={arrowup} alt="/" />
        ) : (
          <img src={arrowdown} alt="/" />
        )}
      </h2>
      <ul className={Dropdown ? "company-item show" : "company-item"}>
        <Link to="/history" id='li'>History</Link>
        <Link to="/our-team" id='li'>Our-Team</Link>
        <Link to="/blog" id='li'>Blog</Link>
      </ul>
    </div>
  );
}

export default Company