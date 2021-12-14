import React from "react";
import "./Navbar.css";
import {NavLink} from "react-router-dom";
import Logo from "../../LogoWhite";
import SearchBar from "../../SearchBar";
import Avatar from "../../Avatar";


const Header =({user})=>{

  const {username,avatar_url} = user;

  return(
    <div className="main_header">
      <div className="header_wrapper">
          <ul className="header_top">
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to={`/users/${username}`}><Avatar url={avatar_url}/></NavLink></li>
            <li><NavLink to="/logout">Logout</NavLink></li>
          </ul>
          <Logo />
          <SearchBar />
          <ul className="header_bottom">
            <li><NavLink to="/dog_parks">Park</NavLink></li>
            <li><NavLink to="/dog_hospitals">Hospital</NavLink></li>
          </ul>
      </div>
    </div>
  )
};

export default Header;