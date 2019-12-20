import React from "react";
import { NavLink } from "react-router-dom";

const Menu = () => {
  return (
    <>
      <aside className="menu">
        <p className="menu-label">Pages</p>
        <ul className="menu-list">
          <li>
            <NavLink to={"/Page1"} activeClassName="is-active">
              Page1(table)
            </NavLink>
          </li>
          <li>
            <NavLink to={"/Page2"} activeClassName="is-active">
              Page2
            </NavLink>
          </li>
        </ul>
      </aside>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </>
  );
};

export default Menu;
