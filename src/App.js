import "./App.css";
import LeftNavbar from "./components/LeftNavbar";
import TopNavBar from "./components/TopNavbar";
import JobPosting from "./components/JobPosting";
import HamburgerMenuIcon from "./assets/img/HamburgerMenuIcon";
import useWindowDimensions from "./useWindowDimensions";
import { useState } from "react";

function App() {
  const { height, width } = useWindowDimensions();
  const [openLeftNavBar, setOpenLeftNavBar] = useState(false);
  const [openTopNavBar, setOpenTopNavBar] = useState(false);

  return (
    <div className="App">
      {width >= 1170 ? (
        <>
          <LeftNavbar></LeftNavbar>
          <div className="right-block">
            <TopNavBar />
            <JobPosting />
          </div>
        </>
      ) : (
        <div className="right-block">
          {/* when screen size reaches certin size activate hamburger menu*/}
          <div className="hamburger-menu ">
            <div
              className=" pointer"
              onClick={() => {
                setOpenLeftNavBar(!openLeftNavBar);
                setOpenTopNavBar(false);
              }}
            >
              <HamburgerMenuIcon />
            </div>
            <div
              className=" pointer"
              onClick={() => {
                setOpenTopNavBar(!openTopNavBar);
                setOpenLeftNavBar(false);
              }}
            >
              <HamburgerMenuIcon />
            </div>
          </div>
          {openLeftNavBar ? (
            <div
              className="appear-on-top"
              onClick={(e) => {
                e.stopPropagation();
                setOpenTopNavBar(false);
                setOpenLeftNavBar(false);
              }}
            >
              <LeftNavbar />
            </div>
          ) : null}
          {openTopNavBar ? (
            <div
              className="appear-on-top"
              onClick={(e) => {
                e.stopPropagation();
                setOpenTopNavBar(false);
                setOpenLeftNavBar(false);
              }}
            >
              <TopNavBar />
            </div>
          ) : null}
          <JobPosting />
        </div>
      )}
    </div>
  );
}

export default App;
