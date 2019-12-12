import React, { useState, useEffect, useMemo } from "react";
import Menu from "./Menu";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Page1 from "./Page1";
import Page2 from "./Page2";
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
  const [global, setGlobal] = useState({});

  useEffect(() => {
    const ls = localStorage.getItem("global");
    ls && setGlobal(JSON.parse(ls));
  }, []);

  return (
    <>
      <section className="section">
        <div className="columns">
          <div className="column">
            <Navbar />
          </div>
        </div>
        <div className="columns">
          <div className="column is-2">
            <Menu />
          </div>
          <div className="column">
            <Switch>
              <Route path="/" exact component={DefaultPage} />
              <Route path="/Page1" exact component={Page1} />
              <Route path="/Page2" exact component={Page2} />
            </Switch>
          </div>
        </div>
        <Footer />
      </section>
    </>
  );
};

export default App;
