import React from "react";
import "./Sidebar.css";
import navbarItems from "../NavbarItems";
import { FaTimes } from "react-icons/fa";

const Sidebar = ({ isopen, toggle }) => {
  let opacityClasses = ["sidebar-container"];
  if (isopen) {
    opacityClasses.push("opacity-on");
  } else {
    opacityClasses.push("opacity-off");
  }

  return (
    <div
      className={opacityClasses.join(" ")}
      isopen={isopen.toString()}
      onClick={toggle}
    >
      <div className="icon">
        <FaTimes className="close-icon" onClick={toggle} />
      </div>
      <div className="sidebar-wrapper">
        <div className="sidebar-menu">
          {navbarItems.map((item, index) => (
            <div className="sidebar-links">
              {item.title}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
