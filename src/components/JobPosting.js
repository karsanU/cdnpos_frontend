import React from "react";
import "./jobPosting.css";
import Refresh from "./../assets/img/Refresh";
import Delete from "./../assets/img/Delete";
import Edit from "./../assets/img/Edit";
import fb_logo from "./../assets/img/fb_logo.png";

function JobPosting() {
  return (
    <div className="job-posting">
      <div className="job-posting__title">
        <div className="job-posting__title-name">
          <span> Master</span>
          <span> Chemical Tanker</span>
        </div>
        <div className="job-posting__title-status">
          <div>
            <div> </div> Active
          </div>
          <div className="pointer">
            <Refresh />
          </div>
          <div className="pointer">
            <Edit />
          </div>
          <div className="pointer">
            <Delete />
          </div>
        </div>
      </div>

      <div className="job-posting__menu">
        <div className="job-posting__menu-item-selected pointer">
          DESCRIPTION
        </div>
        <div className="pointer"> INSIGHT </div>
        <div className="pointer"> APPLICANTS </div>
        <div className="pointer"> NOTIFICATIONS </div>
      </div>
      <div className="job-content ">
        <div className="job-posting__description ">
          <span> Job Description</span>
          <table>
            <tr>
              <td> Rank </td>
              <td> Master </td>
            </tr>
            <tr>
              <td> Ship type </td>
              <td> Chemical Tanker</td>
            </tr>
            <tr>
              <td> Min. Experience </td>
              <td> 06 Months </td>
            </tr>
            <tr>
              <td> US Visa </td>
              <td> Required </td>
            </tr>
            <tr>
              <td> Salary </td>
              <td> 5000 USD </td>
            </tr>
            <tr>
              <td> Ship Details </td>
              <td>
                <span> Chembulk gibrlater</span>
                <span> 20000 DWT</span>
                <span> 2010 Built</span>
              </td>
            </tr>
            <tr>
              <td> Description </td>
              <td>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </td>
            </tr>
          </table>
        </div>
        <div>
          <div className="job-posting__facebook">
            <img
              alt="Profile"
              className="left-navbar__profile"
              src={fb_logo}
            ></img>
            Share on facebook
          </div>
          <div className="job-posting__other-jobs"></div>
        </div>
      </div>
    </div>
  );
}

export default JobPosting;
