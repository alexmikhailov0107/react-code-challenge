import React, { useState } from "react";
import Navbar from "./Navbar/Navbar";
import Sidebar from "./Sidebar/Sidebar";

function TopNavbar() {
  const [isopen, setisopen] = useState(false);
  const toggle = () => {
    setisopen(!isopen);
  };

  return (
    <div>
        <Navbar toggle={toggle} />
        <Sidebar isopen={isopen} toggle={toggle} />
    </div>
  );
}

export default TopNavbar;
