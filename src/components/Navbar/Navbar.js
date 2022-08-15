import React from "react";
import "./Navbar.css";
import navbarItems from "../NavbarItems";
import { FaBars } from "react-icons/fa";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faMagnifyingGlass, faUserLarge } from "@fortawesome/free-solid-svg-icons";
const Navbar = ({ toggle }) => {

  return (
    <nav>
        <div className="mobile-menu-icon" style={{marginLeft:'10px'}}>
          <FaBars onClick={toggle} />
        </div>
        <div className="whiteColor font-pacifico-lg logo-style">
          <h3 style={{ marginBottom: "20px" }}>logo</h3>
        </div>
      <div className="menu-items whiteColor">
        {navbarItems.map((item, index) => (
          <div className="link font20">
            {item.title}
          </div>
        ))}
      </div>
      <div className="icons whiteColor">
        <FontAwesomeIcon icon={faMagnifyingGlass} style={{marginLeft:'20px'}}/>
        <FontAwesomeIcon icon={faUserLarge} style={{marginLeft:'20px'}}/>
        <FontAwesomeIcon icon={faCartShopping} style={{marginLeft:'20px'}}/>
      </div>
    </nav>
  );
};

export default Navbar;
