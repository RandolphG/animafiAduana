import React, { FC, Fragment } from "react";
import { AnimatePresence } from "framer-motion";
import { Route, Switch, useLocation } from "react-router-dom";
import { Logo, Navbar, Social } from "./components";
import { ExpandableSidebarNavigation } from "./components/common/expandableSidebarNavigation";
import { AboutPage, FrontPage, NotFound } from "./pages";

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
          {/*<Route path="/">
            <ExpandableSidebarNavigation />
          </Route>*/}
          <Route path="/404">
            <NotFound />
          </Route>
          <Route path="/aboutPage">
            <AboutPage />
          </Route>
          <Route path="/">
            <FrontPage />
          </Route>
        </Switch>
      </AnimatePresence>
      <Logo />
      <Social />
      <Navbar />
    </Fragment>
  );
};

export default App;
