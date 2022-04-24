import './AboutSection.css';
import React, { useState } from 'react';
import Slider from 'react-slick';
import '../../../../node_modules/slick-carousel/slick/slick-theme.css';
import '../../../../node_modules/slick-carousel/slick/slick.css';
import { Box, createStyles, IconButton, makeStyles } from '@material-ui/core';
import clsx from 'clsx';
import HERO_IMAGE from '../../../Assets/RegistrationEnquiryQR.png';
import '../../../App.css';

const AboutSection: React.FC = () => {
  const classes = useStyles();
  const slider = React.useRef<Slider>(null);
  const [imageIndex, setImageIndex] = useState(0);

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

  const CarouselNextButton = (props: CarouselButtonProps) => {
    const { onClick, className, alt } = props;
    return (
      <IconButton onClick={onClick} className={clsx(className)}>
        {'>'}
      </IconButton>
    );
  };

  const images = [HERO_IMAGE, HERO_IMAGE, HERO_IMAGE, HERO_IMAGE];
  return (
    <Box p={5} className="subHeading">
      <Slider
        centerPadding="0"
        ref={slider}
        arrows
        slidesToShow={3}
        slidesToScroll={1}
        dots
        centerMode
        infinite
        focusOnSelect
        cssEase="linear"
        touchMove
        autoplay
        speed={500}
        nextArrow={<CarouselNextButton />}
        prevArrow={<CarouselPrevButton />}
        beforeChange={(current, next) => {
          setImageIndex(next);
        }}
      >
        {images.map((i, idx) => (
          <Box
            className={idx === imageIndex ? classes.activeImage : classes.image}
          >
            <img src={i} alt={i} width={100} />
          </Box>
        ))}
      </Slider>
    </Box>
  );
};

export default AboutSection;

const useStyles = makeStyles(() =>
  createStyles({
    activeImage: {
      transform: 'scale(1.1)',
      opacity: 1,
    },
    image: {
      transform: 'scale(0.7)',
      transition: 'transform 300ms',
      opacity: 0.5,
    },
  })
);
