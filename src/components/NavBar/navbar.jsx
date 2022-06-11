import React, { useState, useRef, useEffect } from "react";
import { HashLink } from "react-router-hash-link";

import "./navbar.css";

import Logo1 from "../../assets/logo1.svg";
import Logo2 from "../../assets/logo2.svg";
import Logo3 from "../../assets/logo3.svg";

const NavBar = () => {
  const [move1, setMove1] = useState(false);

  useEffect(() => {
    setMove1(true);
  }, []);

  return (
    <div id="navbar">
      <div id="navLogo">
        <img
          id="logo3"
          className="logoPart"
          src={Logo3}
          alt="Appittuneity Logo"
        />
        <img
          id="logo1"
          className="logoPart"
          src={Logo1}
          alt="Appittuneity Logo"
        />
        <img
          id={`${move1 ? "logo2" : ""}`}
          className="logoPart"
          src={Logo2}
          alt="Appittuneity Logo"
        />
      </div>
      <div>
        <ul id="navbarUl">
          <li>
            <HashLink className="hash" to="#home">
              HOME
            </HashLink>
          </li>
          <li>SERVICES</li>
          <li>SKILLS</li>
          <li>
            <HashLink className="hash" to="#industries">
              INDUSTRIES
            </HashLink>
          </li>
          <li>BLOGS</li>
          <li>WE ARE HIRING</li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
