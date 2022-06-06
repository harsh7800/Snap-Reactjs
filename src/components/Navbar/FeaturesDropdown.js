import React, { useState } from 'react'
import './Features.scss'
import arrowdown from "../images/icon-arrow-down.svg";
import arrowup from "../images/icon-arrow-up.svg";
import todoLogo from "../images/icon-todo.svg";
import reminderLogo from "../images/icon-reminders.svg";
import calenderLogo from "../images/icon-calendar.svg";
import stopwatchLogo from "../images/icon-planning.svg";
import {Link} from 'react-router-dom'


function FeaturesDropdown() {
      const [Dropdown, setDropdown] = useState(false)
      return (
          <div className="features-dropdown">
          <h2 onClick={() => setDropdown(!Dropdown)}>
            Features {Dropdown?(<img src={arrowup} alt="/"/>) : (<img src={arrowdown} alt="/"/>)}
            </h2>
            <ul className={Dropdown ? "features-item show" : "features-item"}>
                <Link to="/todo-list" id="li"><img src={todoLogo} alt="/"/>{" "}Todo-List <br /></Link>
                <Link to="/calendar" id="li"><img src={calenderLogo} alt="/" />{" "}Calendar <br /></Link>
                <Link to="/reminder" id="li"><img src={reminderLogo} alt="/"/>{" "} Reminder <br /></Link>
                <Link to="/stopwatch" id="li"><img src={stopwatchLogo} alt="/"/>{" "}Stopwatch</Link>
            </ul>
          </div>
      );
}

export default FeaturesDropdown