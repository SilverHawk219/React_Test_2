import React from "react";
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
              <Route path="/" exact component={DefaultPage} />
              <Route path="/Page1" exact component={Page1} />
              <Route path="/Page2" exact component={Page2} />
            </Switch>
          </div>
        </div>
        <Footer />
      </Router>
    </>
  );
};

export default App;
