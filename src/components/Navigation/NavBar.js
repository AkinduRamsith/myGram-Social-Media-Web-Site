import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import MessageIcon from "@mui/icons-material/Message";
import SettingsIcon from '@mui/icons-material/Settings';
import "./navbar.css"

export default function NavBar() {
  return (
    <div className="navBarBox">
      <div className="navBarLeft">
        <span className="logo">myGram</span>
      </div>
      <div className="navBarCenter">
        <div className="searchBarBox">
          <SearchIcon className="searchIcon" />
          <input placeholder="Search For Your Friend" className="searchInput" />
        </div>
      </div>
      <div className="navBarRight">
        <div className="navBarLinks">
          <span className="navBarLink">Home Page</span>
          <span className="navBarLink">Profile</span>
        </div>
        <div className="navBarIcons">
          <div className="navBarIcon">
            <PersonAddIcon />
            <span className="icanTag">3</span>
          </div>
          <div className="navBarIcon">
            <MessageIcon />
            <span className="icanTag">5</span>
          </div>
          <div className="navBarIcon">
            <SettingsIcon/>
            <span className="icanTag">2</span>
          </div>
        </div>
        <div className="pic">
         <img src="/images/1.jpg" className="profilePic" alt="" />
        </div>
      </div>
    </div>
  );
}
