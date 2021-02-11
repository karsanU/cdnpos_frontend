import React from "react";
import "./topNavbar.css";
import "./../assets/img/Search";
import Search from "./../assets/img/Search";
import Settings from "./../assets/img/Settings";
import Mail from "./../assets/img/Mail";
import SignOut from "./../assets/img/Signout";

function TopNavBar() {
  return (
    <div
      className="left-navbar"
      onClick={(e) => {
        e.stopPropagation();
      }}
      className="top-navbar"
    >
      <div className="top-navbar__search">
        <Search />
      </div>
      <div className="top-navbar__menu">
        <div className="pointer top-navbar__menu-active">Blog</div>
        <div className="pointer">Questions</div>
        <div className="pointer">Companies</div>
        <div className="pointer">Contact</div>
      </div>
      <div className="top-navbar__icons">
        <Settings />
        <Mail />
        <SignOut />
      </div>
    </div>
  );
}

export default TopNavBar;
