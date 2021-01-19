import React, { Fragment } from "react";
import { Switch, Route } from "react-router-dom";
import { AboutUs, ContactUs, MyWork, ProjectDetails } from "../pages";

const Routes = () => {
  return (
    <Fragment>
      <Switch>
        <Route exact path="/" render={() => <AboutUs />} />
        <Route path="/contact" render={() => <ContactUs />} />
        <Route exact path="/work" render={() => <MyWork />} />
        <Route path="/work/:id" render={() => <ProjectDetails />} />
      </Switch>
    </Fragment>
  );
};

export default Routes;
