/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable prettier/prettier */
import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import Chat from "@material-ui/icons/Chat";
import Movie from "@material-ui/icons/Movie";
import Game from "@material-ui/icons/GamepadRounded";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import InfoArea from "components/InfoArea/InfoArea.js";

import styles from "assets/jss/material-kit-react/views/landingPageSections/productStyle.js";

const useStyles = makeStyles(styles);

export default function ProductSection() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <GridContainer justify='center'>
        <GridItem xs={12} sm={12} md={8}>
          <h2 className={classes.title}>Let{"'"}s talk </h2>
          <h5 className={classes.description} style={{ padding: "20px" }}>
            It{"'"}s a pandemic situation that{"'"}s why I am not able to
            celebrate your birthday. Consider this as a gift from me 🎁. I love
            you 😘
          </h5>
        </GridItem>
      </GridContainer>
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={4}>
            <a href='https://www.messenger.com/' target='_blank'>
              <InfoArea
                title='Chat'
                description='I am free any time to chat 😘'
                icon={Chat}
                iconColor='info'
                vertical
              />
            </a>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <a href='https://www.netflix.com/browse' target='_blank'>
              <InfoArea
                title='Movies'
                description='It can be a movie date 🍿'
                icon={Movie}
                iconColor='success'
                vertical
              />
            </a>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <a
              href='https://www.youtube.com/watch?v=giKljwjiMNc'
              target='_blank'>
              <InfoArea
                title='Games'
                description='We can play among us 🎮'
                icon={Game}
                iconColor='danger'
                vertical
              />
            </a>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
