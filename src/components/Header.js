import React,{useContext} from "react";
import {ReactComponent as Logo} from "../thelogo.svg";
import SearchBar from "../SearchBar";
import {NavLink} from "react-router-dom";
import userContext from "../context/userContext";
import "./Header.css";

const Header = ()=>{

  const {user,handleSearch} = useContext(userContext);
  
  return (
    <div className="place_display_header">
      <Logo className="header_logo"/>
      <div className="SearchBarWrapper">
          <SearchBar handleSearch={handleSearch}/>
          <ul className="SearchBarUl">
            <li><NavLink to="/dog_parks">Parks</NavLink></li>
            <li><NavLink to="/dog_hospitals">Hospitals</NavLink></li>
            <li><NavLink to="/">Home</NavLink></li>
          </ul>
      </div>
      <ul className="UserAndLogout">
        <li><NavLink to={`/users/${user.username}`}>User</NavLink></li>
        <li><NavLink to="/logout">Logout</NavLink></li>
      </ul>
    </div>
  )
};

export default Header;