import React, { Fragment } from "react";
import { Switch, Route } from "react-router-dom";
import { AboutUs, ContactUs, MyWork } from "../pages";

const Routes = () => {
  return (
    <Fragment>
      <Switch>
        <Route exact path="/" render={() => <AboutUs />} />
        <Route exact path="/contact" render={() => <ContactUs />} />
        <Route exact path="/work" render={() => <MyWork />} />
      </Switch>
    </Fragment>
  );
};

export default Routes;
