import { Fragment } from "react";
import { Switch, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { Home, WorkDetails, AboutMe } from "../pages";

const Routes = () => {
  const location = useLocation();
  console.log(location);

  return (
    <Fragment>
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.pathname}>
          <Route path="/about/:id">
            <AboutMe />
          </Route>
          <Route path="/work/:id">
            <WorkDetails />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </AnimatePresence>
    </Fragment>
  );
};

export default Routes;
