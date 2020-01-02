import React, { useState, useEffect, useMemo } from "react";
import Menu from "./components/Menu";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Page1 from "./components/Page1";
import Page2 from "./components/Page2";
import Login from "./components/Login";
import DefaultPage from "./components/DefaultPage";
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
  return (
    <>
      <Router>
        <Navbar />
        <div className="columns">
          <div className="column is-2">
            <Menu />
          </div>
          <div class="collum">
            <Switch>
              <Route path="/" exact component={Login} />
              <Route path="/DefaultPage" exact component={DefaultPage} />
              <Route path="/Page1" exact component={Page1} />
              <Route path="/Page2" exact component={Page2} />
              <Route path="/Login" exact component={Login} />
            </Switch>
          </div>
        </div>
        <Footer />
      </Router>
    </>
  );
};

export default App;
