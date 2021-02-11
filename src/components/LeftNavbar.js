import React from "react";
import "./leftNavbar.css";
import profilePic from "./../assets/img/profile.jpg";
import Dashboard from "../assets/img/Dashboard";
import SeaDocs from "../assets/img/SeaDocs";
import Jobs from "../assets/img/Jobs";
import Connections from "../assets/img/Connections";

function LeftNavBar() {
  return (
    <div
      className="left-navbar"
      onClick={(e) => {
        e.stopPropagation();
      }}
    >
      <img
        alt="Profile"
        className="left-navbar__profile"
        src={profilePic}
      ></img>
      <span className="left-navbar__username"> Devinder Kumar </span>
      <span className="left-navbar__title"> Chief officer</span>
      <div className="left-navbar__update-profile pointer">Update Profile</div>
      <div className="left-navbar__buttons">
        <div className="left-navbar__button pointer">
          <Dashboard />
          <span className="left-navbar__button-text"> DASHBOARD </span>
        </div>
        <div className="left-navbar__button pointer left-navbar__button-active">
          <Jobs />
          <span className="left-navbar__button-text left-navbar__button-text-active">
            JOBS
          </span>
        </div>
        <div className="left-navbar__button pointer">
          <SeaDocs />
          <span className="left-navbar__button-text"> SEA DOCS </span>
        </div>
        <div className="left-navbar__button pointer">
          <Connections />
          <span className="left-navbar__button-text"> CONNECTIONS </span>
        </div>
      </div>
    </div>
  );
}

export default LeftNavBar;
