/* eslint-disable prettier/prettier */
import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";

import styles from "assets/jss/material-kit-react/views/landingPageSections/teamStyle.js";

// import team1 from "assets/img/faces/avatar.jpg";
import team2 from "assets/img/faces/profile3.png";
// import team3 from "assets/img/faces/kendall.jpg";

const useStyles = makeStyles(styles);

export default function TeamSection() {
  const classes = useStyles();
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid
  );
  return (
    <div className={classes.section}>
      <h2 className={classes.title}>About me</h2>
      <div>
        <GridContainer justify='center'>
          <GridItem xs={12} sm={12} md={4}>
            <Card plain>
              <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                <img src={team2} alt='...' className={imageClasses} />
              </GridItem>
              <h4 className={classes.cardTitle}>
                Rafi Hasnain
                <br />
                <small className={classes.smallTitle}>Web Developer</small>
              </h4>
              <CardBody>
                <p className={classes.description}>
                  I am a web developer you already know. What you don{"'"}t know
                  is that I am a full-time best friend, boyfriend, sandbag, baby
                  teether😬 , etc. Btw don{"'"}t read this section. Because it
                  {"'"}s all about you(her) and not about me.
                </p>
              </CardBody>
              <CardFooter className={classes.justifyCenter}>
                <Button
                  justIcon
                  color='transparent'
                  href='https://www.instagram.com/rafi.hasnain/'
                  className={classes.margin5}>
                  <i className={classes.socials + " fab fa-instagram"} />
                </Button>
                <Button
                  justIcon
                  color='transparent'
                  href='https://www.facebook.com/rafi.hasnain.hs9/'
                  className={classes.margin5}>
                  <i className={classes.socials + " fab fa-facebook"} />
                </Button>
                <Button
                  justIcon
                  color='transparent'
                  href='https://www.linkedin.com/in/rafi-hasnain-4339341b0/'
                  className={classes.margin5}>
                  <i className={classes.socials + " fab fa-linkedin"} />
                </Button>
              </CardFooter>
            </Card>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
