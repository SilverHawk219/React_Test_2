import React, { useState, useEffect, useMemo } from "react";
import Menu from "./Menu";
import Navbar from "./Navbar";
import Footer from "./Footer";
import DefaultPage from "./DefaultPage";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Link,
  Switch
} from "react-router-dom";
import { GlobalContext } from "./GlobalContext";

const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <div className="columns">
          <div className="column is-2">
            <Menu />
          </div>
          <div class="collum">
            <DefaultPage />
          </div>
        </div>
        <Footer />
      </Router>
    </>
  );
};

export default App;
