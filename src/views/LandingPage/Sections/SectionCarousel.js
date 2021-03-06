/* eslint-disable prettier/prettier */
import React from "react";
// react component for creating beautiful carousel
import Carousel from "react-slick";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
// import LocationOn from "@material-ui/icons/LocationOn";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";

import image1 from "assets/img/img1.JPG";
import image2 from "assets/img/img2.JPG";
import image3 from "assets/img/img3.JPG";
import image4 from "assets/img/img4.JPG";
import image5 from "assets/img/img5.JPG";
import image6 from "assets/img/img6.jpg";
import image7 from "assets/img/img7.JPG";
import image8 from "assets/img/img8.jpg";
import image9 from "assets/img/img9.jpg";
import image10 from "assets/img/img10.jpg";
import image11 from "assets/img/img11.jpg";
import image12 from "assets/img/img12.jpg";
import image13 from "assets/img/img13.JPG";
import image14 from "assets/img/img14.jpg";
import image15 from "assets/img/img15.jpg";

import styles from "assets/jss/material-kit-react/views/componentsSections/carouselStyle.js";

const useStyles = makeStyles(styles);

export default function SectionCarousel() {
  const classes = useStyles();
  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoPlaySpeed: 3000,
    arrows: true,
    swipeToSlide: true,
    adaptiveHeight: true,
  };
  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <GridContainer>
          <GridItem xs={12} sm={12} md={8} className={classes.marginAuto}>
            <Card carousel>
              <Carousel {...settings}>
                <div>
                  <img src={image1} alt='First slide' className='slick-image' />
                  <div className='slick-caption'></div>
                </div>
                <div>
                  <img
                    src={image2}
                    alt='Second slide'
                    className='slick-image'
                  />
                  <div className='slick-caption'></div>
                </div>
                <div>
                  <img src={image3} alt='Third slide' className='slick-image' />
                  <div className='slick-caption'></div>
                </div>
                <div>
                  <img src={image4} alt='Third slide' className='slick-image' />
                  <div className='slick-caption'></div>
                </div>
                <div>
                  <img src={image5} alt='Third slide' className='slick-image' />
                  <div className='slick-caption'></div>
                </div>
                <div>
                  <img src={image6} alt='Third slide' className='slick-image' />
                  <div className='slick-caption'></div>
                </div>
                <div>
                  <img src={image7} alt='Third slide' className='slick-image' />
                  <div className='slick-caption'></div>
                </div>
                <div>
                  <img src={image8} alt='Third slide' className='slick-image' />
                  <div className='slick-caption'></div>
                </div>
                <div>
                  <img src={image9} alt='Third slide' className='slick-image' />
                  <div className='slick-caption'></div>
                </div>
                <div>
                  <img
                    src={image10}
                    alt='Third slide'
                    className='slick-image'
                  />
                  <div className='slick-caption'></div>
                </div>
                <div>
                  <img
                    src={image11}
                    alt='Third slide'
                    className='slick-image'
                  />
                  <div className='slick-caption'></div>
                </div>
                <div>
                  <img
                    src={image12}
                    alt='Third slide'
                    className='slick-image'
                  />
                  <div className='slick-caption'></div>
                </div>
                <div>
                  <img
                    src={image13}
                    alt='Third slide'
                    className='slick-image'
                  />
                  <div className='slick-caption'></div>
                </div>
                <div>
                  <img
                    src={image14}
                    alt='Third slide'
                    className='slick-image'
                  />
                  <div className='slick-caption'></div>
                </div>
                <div>
                  <img
                    src={image15}
                    alt='Third slide'
                    className='slick-image'
                  />
                  <div className='slick-caption'></div>
                </div>
              </Carousel>
            </Card>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
