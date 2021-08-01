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
          <Route exact path="/" render={() => <Home />} />
          <Route path="/aboutme" render={() => <AboutMe />} />
          <Route path="/work/:id" render={() => <WorkDetails />} />
        </Switch>
      </AnimatePresence>
    </Fragment>
  );
};

export default Routes;
