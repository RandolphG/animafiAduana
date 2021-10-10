import React, { FC, Fragment } from "react";
import { AnimatePresence } from "framer-motion";
import { Route, Switch, useHistory, useLocation } from "react-router-dom";
import { Logo, Navbar, Social } from "./components";
import { AboutPage, FrontPage } from "./pages";

/**
 * Application Root Level
 * @constructor
 */
const App: FC = () => {
  const location = useLocation();

  return (
    <Fragment>
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.key}>
          <Route path="/aboutPage">
            <AboutPage />
          </Route>
          <Route path="/">
            <FrontPage />
          </Route>
        </Switch>
      </AnimatePresence>
      <Logo />
      <Navbar />
      <Social />
    </Fragment>
  );
};

export default App;
