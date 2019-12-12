import logo from "./logo.png";
import React, { useState, useEffect, useContext } from "react";
import { GlobalContext } from "./GlobalContext";

const Navbar = () => {
  const [global, setGlobal] = useContext(GlobalContext);

  //  useEffect(() => {
  //    setLogged(global.logged);
  //  }, []);

  const magentaStyle = {
    background: "#e20074"
  };

  return (
    <nav
      className="navbar is-dark"
      role="navigation"
      aria-label="main navigation"
      style={magentaStyle}
    >
      <div className="navbar-brand">
        <img src={logo} />
        <p className="navbar-item title ">React Test Website</p>
      </div>
    </nav>
  );
};

export default Navbar;
