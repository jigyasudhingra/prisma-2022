import { Box, createStyles, IconButton, makeStyles } from '@material-ui/core';
import clsx from 'clsx';
import React, { useState } from 'react';
import { THEME_PALETTE } from 'Theme/themeConstants';
import Slider from 'react-slick';
import '../../../../node_modules/slick-carousel/slick/slick-theme.css';
import '../../../../node_modules/slick-carousel/slick/slick.css';
import HERO_IMAGE from '../../../Assets/RegistrationEnquiryQR.png';
import MACV_IMAGE from '../../../Assets/macv.png';
import MOJOLAND_IMAGE from '../../../Assets/mojoland.png';
import TIMEX_IMAGE from '../../../Assets/timex_page-0001.jpg';
import F9_IMAGE from '../../../Assets/logobig.png';

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

  return (
    <Box p={5} className={clsx(classes.background, 'subHeading')}>
      <Box p={5} className={clsx(classes.background, 'subHeading')}>
        <Slider
          centerPadding="0"
          arrows={false}
          slidesToShow={3}
          slidesToScroll={1}
          dots
          centerMode
          infinite
          focusOnSelect
          cssEase="linear"
          touchMove
          autoplay
          speed={100}
          className={classes.root}
          nextArrow={<CarouselNextButton className={classes.nextArrow} />}
          prevArrow={<CarouselPrevButton />}
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
              <img src={i} alt={i} width='100%' height='auto' />
            </Box>
          ))}
        </Slider>
      </Box>
      {/* ); */}
    </Box>
  );
};

export default EventsSection;

const useStyles = makeStyles(() =>
  createStyles({
    background: {
      backgroundColor: THEME_PALETTE.others.main,
      height: '100%',
      backgroundSize: 'cover',
      minHeight: 690,
      position: 'relative',
    },
    nextArrow: {
      left: 500,
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
      // transform: 'scale(1.1)',
      // opacity: 1,
    },
    image: {
      // transform: 'scale(0.7)',
      // transition: 'transform 300ms',
      // opacity: 0.5,
    },
  })
);
