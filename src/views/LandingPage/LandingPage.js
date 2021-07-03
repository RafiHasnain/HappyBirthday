/* eslint-disable prettier/prettier */
import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Parallax from "components/Parallax/Parallax.js";

import styles from "assets/jss/material-kit-react/views/landingPage.js";

// Sections for this page
import ProductSection from "./Sections/ProductSection.js";
import TeamSection from "./Sections/TeamSection.js";
// import WorkSection from "./Sections/WorkSection.js";
import SectionCarousel from "./Sections/SectionCarousel.js";
import YoutubeEmbed from "./Sections/YoutubeEmbed";
// import SectionNavbars from "./Sections/SectionNavbars.js";
// import ImageGallery from "react-image-gallery";
const dashboardRoutes = [];

const useStyles = makeStyles(styles);

export default function LandingPage(props) {
  const classes = useStyles();
  const { ...rest } = props;

  // const images = [
  //   {
  //     original:
  //       "https://instagram.fdac22-1.fna.fbcdn.net/v/t51.2885-15/e35/s1080x1080/79224396_906100956458895_6185980748911274524_n.jpg?tp=1&_nc_ht=instagram.fdac22-1.fna.fbcdn.net&_nc_cat=103&_nc_ohc=3hSdvs0lWpkAX_OBZ1L&tn=u6UJnd-gpEdO7DUL&edm=AABBvjUBAAAA&ccb=7-4&oh=2f4fcb7bd3e989a3c208f59aa6422083&oe=60DD3BC9&_nc_sid=83d603",
  //     thumbnail:
  //       "https://instagram.fdac22-1.fna.fbcdn.net/v/t51.2885-15/e35/s1080x1080/79224396_906100956458895_6185980748911274524_n.jpg?tp=1&_nc_ht=instagram.fdac22-1.fna.fbcdn.net&_nc_cat=103&_nc_ohc=3hSdvs0lWpkAX_OBZ1L&tn=u6UJnd-gpEdO7DUL&edm=AABBvjUBAAAA&ccb=7-4&oh=2f4fcb7bd3e989a3c208f59aa6422083&oe=60DD3BC9&_nc_sid=83d603",
  //   },
  //   {
  //     original:
  //       "https://instagram.fdac22-1.fna.fbcdn.net/v/t51.2885-15/e35/s1080x1080/117533412_171494327926502_902588790723556568_n.jpg?tp=1&_nc_ht=instagram.fdac22-1.fna.fbcdn.net&_nc_cat=102&_nc_ohc=WMjVNyJu934AX_GcPpT&edm=AABBvjUBAAAA&ccb=7-4&oh=39290d04642d1e5236a82729e4fed125&oe=60DD3D88&_nc_sid=83d603",
  //     thumbnail:
  //       "https://instagram.fdac22-1.fna.fbcdn.net/v/t51.2885-15/e35/s1080x1080/117533412_171494327926502_902588790723556568_n.jpg?tp=1&_nc_ht=instagram.fdac22-1.fna.fbcdn.net&_nc_cat=102&_nc_ohc=WMjVNyJu934AX_GcPpT&edm=AABBvjUBAAAA&ccb=7-4&oh=39290d04642d1e5236a82729e4fed125&oe=60DD3D88&_nc_sid=83d603",
  //   },

  //   {
  //     original:
  //       "https://instagram.fdac22-1.fna.fbcdn.net/v/t51.2885-15/e35/s1080x1080/119233962_362219211469411_2242992815110864756_n.jpg?tp=1&_nc_ht=instagram.fdac22-1.fna.fbcdn.net&_nc_cat=107&_nc_ohc=2yWsjXGqGbIAX95y3R_&edm=AABBvjUBAAAA&ccb=7-4&oh=43f986488da859c28c9d48cb2db3a09e&oe=60DCA75F&_nc_sid=83d603",
  //     thumbnail:
  //       "https://instagram.fdac22-1.fna.fbcdn.net/v/t51.2885-15/e35/s1080x1080/119233962_362219211469411_2242992815110864756_n.jpg?tp=1&_nc_ht=instagram.fdac22-1.fna.fbcdn.net&_nc_cat=107&_nc_ohc=2yWsjXGqGbIAX95y3R_&edm=AABBvjUBAAAA&ccb=7-4&oh=43f986488da859c28c9d48cb2db3a09e&oe=60DCA75F&_nc_sid=83d603",
  //   },
  // ];
  return (
    <div>
      <Header
        color='transparent'
        routes={dashboardRoutes}
        brand='Baby Rush Boss ❤️ '
        rightLinks={<HeaderLinks />}
        fixed
        changeColorOnScroll={{
          height: 400,
          color: "warning",
        }}
        {...rest}
      />
      {/* <SectionNavbars /> */}
      <Parallax image={require("assets/img/rush4.jpg").default}>
        <div className={classes.container}>
          {/* <ImageGallery items={images} additionalClass='react-image-gallery' /> */}
          <GridContainer>
            <GridItem xs={12} sm={12} md={6}>
              <h1 className={classes.title}>Happy Birthday Boss</h1>
              {/* <h4 style={{ color: "black" }}>
                Every landing page needs a small description after the big bold
                title, that{"'"}s why we added this text here. Add here all the
                information that can make you or your product create the first
                impression.
              </h4> */}
              <br />
              <Button
                color='danger'
                size='lg'
                href='https://www.youtube.com/watch?v=dQw4w9WgXcQ&ref=creativetim'
                target='_blank'
                rel='noopener noreferrer'>
                <i className='fas fa-play' />
                Watch video
              </Button>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}>
          <GridContainer justify='center'>
            <GridItem xs={12} sm={12} md={8}>
              <h2
                className={classes.title}
                style={{
                  color: "black",
                  paddingLeft: "90px",
                  paddingTop: "70px",
                }}>
                {" "}
                Here are some sweet memories{" "}
              </h2>
            </GridItem>
          </GridContainer>
          <SectionCarousel />
          <ProductSection />
          <TeamSection />
          <YoutubeEmbed embedId='nl62hhiBMOM' />
          {/* <WorkSection /> */}
        </div>
      </div>
      <Footer />
    </div>
  );
}
