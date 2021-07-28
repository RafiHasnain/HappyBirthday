/* eslint-disable prettier/prettier */
import React from "react";
// import Loader from "react-loader-spinner";
// nodejs library that concatenates classes
// import classNames from "classnames";
// @material-ui/core components
// import { makeStyles } from "@material-ui/core/styles";
// import styles from "assets/jss/material-kit-react/views/landingPage.js";
import Countdown from "react-countdown";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import LandingPage from "views/LandingPage/LandingPage.js";

import gift from "assets/img/gift.svg";

// Renderer callback with condition
const renderer = ({ days, hours, minutes, seconds, completed }) => {
  if (completed) {
    // Render a complete state
    return <LandingPage />;
  } else {
    // Render a countdown
    return (
      <div>
        <GridContainer justify='center'>
          <GridItem xs={12} sm={12} md={7}>
            <h1>
              {" "}
              Days {days} :Hours {hours}: Minutes {minutes} : Seconds {seconds}{" "}
            </h1>
            {/* <Loader
              type='Hearts'
              color='#00BFFF'
              height={100}
              width={100}
              timeout={3000} //3 secs
            /> */}
          </GridItem>
          <GridItem xs={12} sm={12} md={7}>
            <img src={gift} alt='Gift Image' />
          </GridItem>
        </GridContainer>
      </div>
    );
  }
};

const CountdownTime = () => {
  //return <Countdown date={"2021-07-04T00:00:00"} renderer={renderer} />;
  return <Countdown date={Date.now() + 5000} renderer={renderer}></Countdown>;
};

export default CountdownTime;
