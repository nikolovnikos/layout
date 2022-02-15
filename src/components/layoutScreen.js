import {
  useMemo,
} from 'react';

import PropTypes from 'prop-types';
import { LayoutZeplin, devicesDimensions } from '../helpers/LayoutZeplinConverter';
/*
  Mobile
  https://app.zeplin.io/project/61a8a9480bf3cf8df5b66ab2/screen/61b70b84075a1e48410f5f88
*/
const layoutZPhone = new LayoutZeplin(devicesDimensions.iphone11_1111);
/*
  Desktop
  https://app.zeplin.io/project/61a8a9480bf3cf8df5b66ab2/screen/620a368451206fa8e5757617
*/
const layoutZDesktop = new LayoutZeplin(devicesDimensions.desktop_1440);

/*
  Tablet
  https://app.zeplin.io/project/61a8a9480bf3cf8df5b66ab2/screen/620a3678a46278aabb5de991
*/
const layoutZTablet = new LayoutZeplin(devicesDimensions.ipad_1111);

const stylesZ = {
  rectangleGreen: {
    width: 0,
    height: 0,
  },
  rectangleOrange: {
    width: 0,
    height: 0,
  },
  rectangleWhite: {
    width: 0,
    height: 0,
    fontSize: 0,
  },
  rectangleBigBlack: {
    width: 0,
    height: 0,
  },
  rectanglesGray: {
    width: 0,
    height: 0,
    marginTop: 0,
    marginLeft: 0,
  },
  rectangleDarkGray: {
    width: 0,
    height: 0,
    marginLeft: 0,
    marginTop: 0,
    fontSize: 0,
  },
  rectanglesColor: {
    width: 0,
    marginTop: 0,
    paddingTop: 0,
    paddingBottom: 0,
  },
  rectangleGray1: {
    width: 0,
    fontSize: 0,
    paddingLeft: 0,
    paddingTop: 0,
  },
  rectangleGray2: {
    width: 0,
  },
  rectangleCian: {
    width: 0,
    height: 0,
  },
  rectangleBlue: {
    width: 0,
    height: 0,
    marginLeft: 0,
    marginRight: 0,
  },
  rectanglePing: {
    width: 0,
    height: 0,
  },
  mainConatiner: {
    width: '100%',
  }
};

const getMobileDimensions = (s = stylesZ, orientation) => {
  const widthFullScreen = [414, 800];
  s.rectangleGreen = layoutZPhone.getBox(widthFullScreen, [48, 48], orientation);
  s.rectangleOrange = layoutZPhone.getBox(widthFullScreen, [48, 48], orientation);
  s.rectangleWhite = layoutZPhone.getBox(widthFullScreen, [80, 80], orientation);
  s.rectangleWhite.fontSize = layoutZPhone.getFontSize([32, 32], orientation);
  s.rectangleBigBlack = layoutZPhone.getBox(widthFullScreen, [162, 162], orientation);

  s.rectanglesGray = layoutZPhone.getBox(widthFullScreen, [96, 96], orientation);
  s.rectanglesGray.marginTop = layoutZPhone.getHeight([48, 48], orientation);

  s.rectangleGray1.width = layoutZPhone.getWidth([207, 400], orientation);
  s.rectangleGray1.fontSize = layoutZPhone.getFontSize([12, 12], orientation);
  s.rectangleGray1.paddingTop = layoutZPhone.getHeight([12, 16], orientation);
  s.rectangleGray1.paddingLeft = layoutZPhone.getWidth([12, 16], orientation);

  s.rectangleGray2.width = layoutZPhone.getWidth([110, 213], orientation);

  s.rectangleDarkGray = layoutZPhone.getBox([222, 429], [72, 72], orientation);
  s.rectangleDarkGray.marginTop = layoutZPhone.getHeight([84, 84], orientation);
  s.rectangleDarkGray.marginLeft = layoutZPhone.getWidth([96, 234], orientation);
  s.rectangleDarkGray.fontSize = layoutZPhone.getFontSize([16, 16], orientation);

  s.rectanglesColor.width = layoutZPhone.getWidth(widthFullScreen, orientation);
  s.rectanglesColor.marginTop = layoutZPhone.getHeight([56, 56], orientation);
  s.rectanglesColor.paddingTop = layoutZPhone.getHeight([8, 8], orientation);
  s.rectanglesColor.paddingBottom = layoutZPhone.getHeight([8, 8], orientation);

  s.rectangleCian = layoutZPhone.getBox([124, 240], [104, 104], orientation);

  s.rectangleBlue = layoutZPhone.getBox([159, 307], [104, 104], orientation);
  s.rectangleBlue.marginLeft = layoutZPhone.getWidth([12, 16], orientation);
  s.rectangleBlue.marginRight = layoutZPhone.getWidth([12, 16], orientation);

  s.rectanglePing = layoutZPhone.getBox([87, 168], [104, 104], orientation);
  s.mainConatiner.width = layoutZPhone.getWidth(widthFullScreen, orientation);
  return s;
};
const getDesktopDimensions = (s = stylesZ, orientation) => {
  const widthFullScreen = [1440, 1440];
  s.rectangleGreen = layoutZDesktop.getBox(widthFullScreen, [48, 48], orientation);
  s.rectangleOrange = layoutZDesktop.getBox(widthFullScreen, [48, 48], orientation);
  s.rectangleWhite = layoutZDesktop.getBox(widthFullScreen, [80, 80], orientation);
  s.rectangleWhite.fontSize = layoutZDesktop.getFontSize([32, 32], orientation);
  s.rectangleBigBlack = layoutZDesktop.getBox(widthFullScreen, [96, 96], orientation);

  s.rectanglesGray = layoutZDesktop.getBox([1280, 1280], [96, 96], orientation, true);
  s.rectanglesGray.marginTop = layoutZDesktop.getHeight([110, 110], orientation, true);
  s.rectanglesGray.marginLeft = layoutZDesktop.getWidth([80, 80], orientation, true);

  s.rectangleGray1.width = layoutZDesktop.getWidth([207, 207], orientation, true);
  s.rectangleGray1.fontSize = layoutZDesktop.getFontSize([14, 14], orientation, true);
  s.rectangleGray1.paddingTop = layoutZDesktop.getHeight([16, 16], orientation, true);
  s.rectangleGray1.paddingLeft = layoutZDesktop.getWidth([16, 16], orientation, true);

  s.rectangleGray2.width = layoutZDesktop.getWidth([155, 155], orientation, true);

  s.rectangleDarkGray = layoutZDesktop.getBox([227, 227], [64, 64], orientation, true);
  s.rectangleDarkGray.marginTop = layoutZDesktop.getHeight([196, 196], orientation);
  s.rectangleDarkGray.marginLeft = layoutZDesktop.getWidth([606, 606], orientation, true);
  s.rectangleDarkGray.fontSize = layoutZDesktop.getFontSize([16, 16], orientation, true);

  s.rectanglesColor.width = layoutZDesktop.getWidth(widthFullScreen, orientation);
  s.rectanglesColor.marginTop = layoutZDesktop.getHeight([118, 118], orientation);
  s.rectanglesColor.paddingTop = layoutZDesktop.getHeight([24, 24], orientation);
  s.rectanglesColor.paddingBottom = layoutZDesktop.getHeight([40, 40], orientation);

  s.rectangleCian = layoutZDesktop.getBox([407, 407], [104, 104], orientation, true);

  s.rectangleBlue = layoutZDesktop.getBox([540, 540], [104, 104], orientation, true);
  s.rectangleBlue.marginLeft = layoutZDesktop.getWidth([32, 32], orientation, true);
  s.rectangleBlue.marginRight = layoutZDesktop.getWidth([32, 32], orientation, true);

  s.rectanglePing = layoutZDesktop.getBox([269, 269], [104, 104], orientation, true);
  s.mainConatiner.width = layoutZDesktop.getWidth(widthFullScreen, orientation, false);
  return s;
};
const getTabletDimensions = (s = stylesZ, orientation) => {
  const widthFullScreen = [768, 1024];
  s.rectangleGreen = layoutZTablet.getBox(widthFullScreen, [48, 48], orientation);
  s.rectangleOrange = layoutZTablet.getBox(widthFullScreen, [48, 48], orientation);
  s.rectangleWhite = layoutZTablet.getBox(widthFullScreen, [80, 80], orientation);
  s.rectangleWhite.fontSize = layoutZTablet.getFontSize([32, 32], orientation);
  s.rectangleBigBlack = layoutZTablet.getBox(widthFullScreen, [88, 88], orientation);

  s.rectanglesGray = layoutZTablet.getBox([720, 912], [86, 86], orientation);
  s.rectanglesGray.marginTop = layoutZTablet.getHeight([80, 76], orientation);
  s.rectanglesGray.marginLeft = layoutZTablet.getWidth([24, 56], orientation);

  s.rectangleGray1.width = layoutZTablet.getWidth([147, 147], orientation);
  s.rectangleGray1.fontSize = layoutZTablet.getFontSize([14, 14], orientation);
  s.rectangleGray1.paddingTop = layoutZTablet.getHeight([16, 16], orientation);
  s.rectangleGray1.paddingLeft = layoutZTablet.getWidth([8, 8], orientation);

  s.rectangleGray2.width = layoutZTablet.getWidth([110, 110], orientation);

  s.rectangleDarkGray = layoutZTablet.getBox([195, 195], [64, 64], orientation);
  s.rectangleDarkGray.marginTop = layoutZTablet.getHeight([288, 78], orientation);
  s.rectangleDarkGray.marginLeft = layoutZTablet.getWidth([287, 415], orientation);
  s.rectangleDarkGray.fontSize = layoutZTablet.getFontSize([16, 16], orientation);

  s.rectanglesColor.width = layoutZTablet.getWidth(widthFullScreen, orientation);
  s.rectanglesColor.marginTop = layoutZTablet.getHeight([92, 50], orientation);
  s.rectanglesColor.paddingTop = layoutZTablet.getHeight([16, 16], orientation);
  s.rectanglesColor.paddingBottom = layoutZTablet.getHeight([41, 41], orientation);

  s.rectangleCian = layoutZTablet.getBox([224, 289], [93, 93], orientation);

  s.rectangleBlue = layoutZTablet.getBox([298, 384], [93, 93], orientation);
  s.rectangleBlue.marginLeft = layoutZTablet.getWidth([24, 24], orientation);
  s.rectangleBlue.marginRight = layoutZTablet.getWidth([24, 24], orientation);

  s.rectanglePing = layoutZTablet.getBox([150, 191], [93, 93], orientation);
  s.mainConatiner.width = layoutZTablet.getWidth(widthFullScreen, orientation);
  return s;
};

const LayoutScreenConverter = ({
  orientation = 'portrait',
  deviceType = 'desktop',
  resize = 0,
}) => {
  const dimensions = useMemo(() => {
    // console.log(deviceType, orientation);
    let dimensions = stylesZ;
    switch (deviceType) {
      case 'mobile':
        dimensions = getMobileDimensions(stylesZ, orientation);
        break;
      case 'desktop':
        dimensions = getDesktopDimensions(stylesZ, orientation);
        break;
      case 'tablet':
        dimensions = getTabletDimensions(stylesZ, orientation);
        break;
      default:
        dimensions = getMobileDimensions(stylesZ, orientation);
        break;
    }
    return dimensions;
  }, [orientation, resize, deviceType]);

  const rectangleGreen = () => {
    console.log(orientation);
    return (
      <div style={{
        width: dimensions.rectangleGreen.width,
        height: dimensions.rectangleGreen.height,
        backgroundColor: '#49c400',
      }}
      />
    );
  };

  const rectangleOrange = () => {
    return (
      <div style={{
        width: dimensions.rectangleOrange.width,
        height: dimensions.rectangleOrange.height,
        backgroundColor: '#ff9c24',
      }}
      />
    );
  };

  const rectangleWhite = () => {
    return (
      <div style={{
        width: dimensions.rectangleWhite.width,
        height: dimensions.rectangleWhite.height,
        backgroundColor: '#ffffff',
        display: 'table',
      }}
      >
        <div style={{
          fontSize: dimensions.rectangleWhite.fontSize,
          color: 'black',
          display: 'table-cell',
          verticalAlign: 'middle',
          fontFamily: 'Gotham-Bold',
        }}
        >
          Type something
        </div>
      </div>
    );
  };

  const rectangleBigBlack = () => {
    return (
      <div style={{
        width: dimensions.rectangleBigBlack.width,
        height: dimensions.rectangleBigBlack.height,
        marginBottom: dimensions.rectanglesGray.marginTop,
        backgroundColor: '#000',
      }}
      />
    );
  };

  const rectanglesGray = () => {
    return (<div style={{
      width: dimensions.rectanglesGray.width,
      height: dimensions.rectanglesGray.height,
      position: 'relative',
      margin: 'auto',
    }}
    >
      {rectangleGray1()}
      {rectangleGray2()}
    </div>)
  };

  const rectangleGray1 = () => {
    return (
      <div style={{
        width: dimensions.rectangleGray1.width,
        fontSize: dimensions.rectangleGray1.fontSize,
        paddingLeft: dimensions.rectangleGray1.paddingLeft,
        paddingTop: dimensions.rectangleGray1.paddingTop,
        height: '100%',
        backgroundColor: '#959595',
        float: 'left',
        boxSizing: 'border-box',
        MozBoxSizing: 'border-box',
        WebkitBoxSizing: 'border-box',
      }}
      >
        <div style={{
          color: '#ffffff',
          position: 'absolute',
          fontFamily: 'Gotham-Light',
        }}
        >
          Type something
        </div>
      </div>
    );
  };

  const rectangleGray2 = () => {
    return (
      <div style={{
        width: dimensions.rectangleGray2.width,
        height: '100%',
        backgroundColor: '#cccccc',
        float: 'right',
      }}
      />
    );
  };

  const rectangleDarkGray = () => {
    return (
      <div style={{
        width: dimensions.rectangleDarkGray.width,
        height: dimensions.rectangleDarkGray.height,
        margin: `${dimensions.rectangleDarkGray.marginTop}px auto 0px auto`,
        backgroundColor: '#383838',
        position: 'relative',
        display: 'table',
      }}
      >
        <div style={{
          fontSize: dimensions.rectangleDarkGray.fontSize,
          color: '#ffffff',
          display: 'table-cell',
          verticalAlign: 'middle',
          fontFamily: 'Gotham-Medium',
        }}
        >
          Type something
        </div>
      </div>
    );
  };

  const rectanglesColor = () => {
    return (<div style={{
      width: dimensions.rectanglesColor.width,
      marginTop: dimensions.rectanglesColor.marginTop,
      paddingTop: dimensions.rectanglesColor.paddingTop,
      paddingBottom: dimensions.rectanglesColor.paddingBottom,
      display: 'flex',
      backgroundColor: '#afafaf',
      justifyContent: 'center',
    }}
    >
      {rectangleCian()}
      {rectangleBlue()}
      {rectanglePing()}
    </div>);
  };

  const rectangleCian = () => {
    return (
      <div style={{
        width: dimensions.rectangleCian.width,
        height: dimensions.rectangleCian.height,
        backgroundColor: '#55ecce',
      }}
      />
    );
  };

  const rectangleBlue = () => {
    return (
      <div style={{
        width: dimensions.rectangleBlue.width,
        height: dimensions.rectangleBlue.height,
        marginLeft: dimensions.rectangleBlue.marginLeft,
        marginRight: dimensions.rectangleBlue.marginRight,
        backgroundColor: '#556eec',
      }}
      />
    );
  };

  const rectanglePing = () => {
    return (
      <div style={{
        width: dimensions.rectanglePing.width,
        height: dimensions.rectanglePing.height,
        backgroundColor: '#cc55ec',
      }}
      />
    );
  };

  return (
    <div style={{
      backgroundColor: 'white',
      margin: 'auto',
      width: dimensions.mainConatiner.width,
    }}>
      {rectangleGreen()}
      {rectangleOrange()}
      {rectangleWhite()}
      {rectangleBigBlack()}
      {rectanglesGray()}
      {rectangleDarkGray()}
      {rectanglesColor()}
    </div>
  );
};


LayoutScreenConverter.propTypes = {
  orientation: PropTypes.string.isRequired,
};

export default LayoutScreenConverter;
