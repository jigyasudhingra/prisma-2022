import {
  Box,
  Button,
  createStyles,
  IconButton,
  makeStyles,
} from '@material-ui/core';
import clsx from 'clsx';
import React, { useState } from 'react';
import { THEME_PALETTE } from 'Theme/themeConstants';
import Slider from 'react-slick';
import '../../../../node_modules/slick-carousel/slick/slick-theme.css';
import '../../../../node_modules/slick-carousel/slick/slick.css';
import { useMediaQuery } from 'Hooks/useMediaQuery';
import Typo from 'Components/Typo';
import { Link } from 'react-router-dom';
import MACV_IMAGE from '../../../Assets/MacV.jpg';
import MOJOLAND_IMAGE from '../../../Assets/MojoLand.jpg';
import TIMEX_IMAGE from '../../../Assets/TIMEX.jpg';
import F9_IMAGE from '../../../Assets/F9.jpg';

interface CarouselButtonProps {
  onClick?: () => {};
  className?: string;
  alt?: boolean;
}

const CarouselPrevButton = (props: CarouselButtonProps) => {
  const { onClick, className, alt } = props;
  return (
    <IconButton onClick={onClick} className={clsx(className)}>
      {'<'}
    </IconButton>
  );
};
const images = [MACV_IMAGE, MOJOLAND_IMAGE, TIMEX_IMAGE, F9_IMAGE];

const CarouselNextButton = (props: CarouselButtonProps) => {
  const { onClick, className, alt } = props;
  return (
    <IconButton onClick={onClick} className={clsx(className)}>
      {'>'}
    </IconButton>
  );
};
const EventsSection: React.FC = () => {
  const classes = useStyles();
  const [imageIndex, setImageIndex] = useState(0);
  const { isDeviceSm } = useMediaQuery();

  return (
    <Box
      p={isDeviceSm ? 3 : 5}
      className={clsx(classes.background, 'subHeading')}
    >
      <Box pt={!isDeviceSm ? 5 : 2}>
        <Typo
          variant={isDeviceSm ? 'caption' : 'body2'}
          // className={classes.verticalLineText}
          color="secondary"
          gutterBottom
        >
          We Thank Our Sponsors
        </Typo>
        <Typo
          variant={isDeviceSm ? 'h5' : 'h4'}
          weight="bold"
          // color="secondary"
          style={{ letterSpacing: 1.1 }}
        >
          MEET OUR SPONSORS
        </Typo>
      </Box>
      <Box pt={3} pb={3}>
        <Slider
          centerPadding="0"
          arrows={false}
          slidesToShow={3}
          slidesToScroll={1}
          // dots
          autoplaySpeed={2000}
          // centerMode
          infinite
          // focusOnSelect
          // cssEase="linear"
          // touchMove
          autoplay
          speed={2000}
          className={classes.root}
          // nextArrow={<CarouselNextButton className={classes.nextArrow} />}
          // prevArrow={<CarouselPrevButton />}
          beforeChange={(current, next) => {
            setImageIndex(next);
          }}
        >
          {images.map((i, idx) => (
            <Box
              key={i}
              className={
                idx === imageIndex ? classes.activeImage : classes.image
              }
            >
              <Box
                p={isDeviceSm ? 1 : 3}
                // className={isDeviceSm ? '' : classes.innerCard}
                m={isDeviceSm ? 0 : 8}
              >
                <img
                  src={i}
                  alt={i}
                  width={isDeviceSm ? '90%' : 260}
                  height="auto"
                  style={{ borderRadius: 10 }}
                />
              </Box>
            </Box>
          ))}
        </Slider>
      </Box>
      <Link to="/sponsors" style={{ textDecoration: 'none' }}>
        <Button variant="outlined" color="primary">
          See Our Sponsors
        </Button>
      </Link>
      {/* ); */}
    </Box>
  );
};

export default EventsSection;

const useStyles = makeStyles(() =>
  createStyles({
    background: {
      backgroundColor: THEME_PALETTE.primary.main,
      // height: '100%',
      backgroundSize: 'cover',
      // minHeight: 690,
      position: 'relative',
    },
    nextArrow: {
      // left: 500,
    },
    root: {
      // '& .slick-next:before': {
      //   fontSize: 1,
      //   left: 500,
      // },
      // '& .slick-prev:before': {
      //   fontSize: 1,
      // },
      // '& .slick-prev': {
      //   top: 85,
      //   left: '-75px',
      // },
      // '& .slick-arrow': {
      //   top: 85,
      //   left: '-75px',
      // },
      // '& .slick-next': {
      //   top: 85,
      //   paddingLeft: '42px',
      // },
      // '& .slick-list': {
      //   width: 340,
      //   marginLeft: -20,
      // },
      // '& .slick-disabled': {
      //   opacity: 0.5,
      //   pointerEvents: 'none',
      // },
      // height: 10,
      // width: 250,
    },
    activeImage: {
      // transition: 'transform 8000ms',
      // transform: 'scale(0.7)',
      // opacity: 0.5,
    },
    image: {
      // transform: 'scale(1.1)',
      // transition: 'transform 8000ms',
      // opacity: 0.5,
    },
    innerCard: {
      backgroundColor: THEME_PALETTE.others.main,
      borderRadius: 10,
    },
  })
);
