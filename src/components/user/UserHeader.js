import React from "react";
import {ReactComponent as Logo} from "../../thelogo.svg";
import {NavLink} from "react-router-dom"
const UserHeader = ()=>{
  return (
    <>
    <div className="place_display_header">
      <Logo className="header_logo"/>
      <div className="SearchBarWrapper">
          <ul className="SearchBarUl">
            <li><NavLink to="/dog_parks">Parks</NavLink></li>
            <li><NavLink to="/dog_hospitals">Hospitals</NavLink></li>
            <li><NavLink to="/">Home</NavLink></li>
          </ul>
      </div>
      <ul className="UserAndLogout">
        <li><NavLink to="/logout">Logout</NavLink></li>
      </ul>
    </div>
    </>
  )
};

export default UserHeader;