import React, { Fragment } from "react";
import { Switch, Route, useLocation } from "react-router-dom";
// Components
import { AboutUs, ContactUs, MyWork, WorkDetails } from "../pages";
// Animation
import { AnimatePresence } from "framer-motion";

const Routes = () => {
  const location = useLocation();
  console.log(location);
  return (
    <Fragment>
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.pathname}>
          <Route exact path="/" render={() => <AboutUs />} />
          <Route path="/contact" render={() => <ContactUs />} />
          <Route exact path="/work" render={() => <MyWork />} />
          <Route path="/work/:id" render={() => <WorkDetails />} />
        </Switch>
      </AnimatePresence>
    </Fragment>
  );
};

export default Routes;
