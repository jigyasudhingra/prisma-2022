import React from 'react';
// import TriangleIcon from 'Assets/Triangle.svg';
// import CircularBottomLeft from 'Assets/Circular-BottomLeft.svg';
// import CircularTopLeft from 'Assets/Circular-TopLeft.svg';
// import CircularRightBottom from 'Assets/Circular-BottomRight.svg';
// import CircularRightTop from 'Assets/Circular-TopRight.svg';
import { createStyles, makeStyles, Theme } from '@material-ui/core';

import 'animate.css';

const StylesIcons = () => {
  const classes = useStyles();
  return (
    <div className={classes.main}>
      {/* <img
        src={CircularTopLeft}
        alt="circular-bottom-left-icon"
        className={clsx('blob', classes.circularTopLeft)}
      />
      <img
        src={CircularRightTop}
        alt="circular-bottom-left-icon"
        className={clsx('blob', classes.circularTopRight)}
      />
      <img
        src={TriangleIcon}
        alt="triangle-icon"
        className={clsx(
          'animate__animated animate__fadeIn animate__infinty',
          classes.triangleIcon
        )}
      />
      <img
        src={CircularRightBottom}
        alt="circular-bottom-left-icon"
        className={clsx('blob', classes.circularBottomRight)}
      />
      <img
        src={CircularBottomLeft}
        alt="circular-bottom-left-icon"
        className={clsx('blob', classes.circularBottomLeft)}
      /> */}
    </div>
  );
};

export default StylesIcons;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    main: {
      zIndex: 2,
    },
    triangleIcon: {
      position: 'absolute',
      left: '20%',
      top: '26%',
      width: 200,
    },
    circularBottomLeft: {
      position: 'absolute',
      width: 90,
      bottom: '5%',
      left: '15%',
    },
    circularBottomRight: {
      position: 'absolute',
      bottom: '20%',
      right: '30%',
      width: 80,
      opacity: 2,
      // animationDelay: '1.5s',
    },
    circularTopRight: {
      position: 'absolute',
      right: '17%',
      width: 70,
    },
    circularTopLeft: {
      position: 'absolute',
      left: '5%',
      top: '7%',
    },
  })
);
