/* eslint-disable prettier/prettier */
import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";

import "assets/scss/material-kit-react.scss?v=1.10.0";

// pages for this product
// import Components from "views/Components/Components.js";
// import LandingPage from "views/LandingPage/LandingPage.js";
// import ProfilePage from "views/ProfilePage/ProfilePage.js";
// import LoginPage from "views/LoginPage/LoginPage.js";
import Countdown from "views/CountDown/CoundownTime.js";

var hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
    <Switch>
      {/* <Route path='/components' component={Components} />
      <Route path='/profile-page' component={ProfilePage} />
      <Route path='/login-page' component={LoginPage} /> */}
      <Route path='/' component={Countdown} />
    </Switch>
  </Router>,
  document.getElementById("root")
);
