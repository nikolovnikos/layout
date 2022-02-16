import {
  useMemo,
} from 'react';

// import PropTypes from 'prop-types';
import {
  convertedStyles as layoutConvertedStyles,
  defaultStyles as defaultLayoutStyles,
} from './layoutScreenStyles';

import {
  useDeviceTypeContext,
  useOrientationContext,
  useResizeContext,
} from '../conext/AppContext';

import { deviceTypes } from '../general/types';

const LayoutScreen = () => {
  const orientation = useOrientationContext();
  const deviceType = useDeviceTypeContext();
  const resize = useResizeContext();

  const layoutStyles = useMemo(() => {
    let styles = Object.assign({}, defaultLayoutStyles);
    switch (deviceType) {
      case deviceTypes.mobile:
        styles = layoutConvertedStyles.getMobile(orientation);
        break;
      case deviceTypes.desktop:
        styles = layoutConvertedStyles.getDesktop(orientation);
        break;
      case deviceTypes.tablet:
        styles = layoutConvertedStyles.getTablet(orientation);
        break;
      default:
        styles = layoutConvertedStyles.getDesktop(orientation);
        break;
    }
    return styles;
  }, [orientation, resize, deviceType]);

  const rectangleGreen = () => {
    return (
      <div style={{
        width: layoutStyles.rectangleGreen.width,
        height: layoutStyles.rectangleGreen.height,
        backgroundColor: '#49c400',
      }}
      />
    );
  };

  const rectangleOrange = () => {
    return (
      <div style={{
        width: layoutStyles.rectangleOrange.width,
        height: layoutStyles.rectangleOrange.height,
        backgroundColor: '#ff9c24',
      }}
      />
    );
  };

  const rectangleWhite = () => {
    return (
      <div style={{
        width: layoutStyles.rectangleWhite.width,
        height: layoutStyles.rectangleWhite.height,
        backgroundColor: '#fff',
        display: 'table',
      }}
      >
        <div style={{
          fontSize: layoutStyles.rectangleWhite.fontSize,
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
        width: layoutStyles.rectangleBigBlack.width,
        height: layoutStyles.rectangleBigBlack.height,
        marginBottom: layoutStyles.rectangleBigBlack.marginBottom,
        backgroundColor: '#000',
      }}
      />
    );
  };

  const rectanglesGray = () => {
    return (<div style={{
      width: layoutStyles.rectanglesGray.width,
      height: layoutStyles.rectanglesGray.height,
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
      <div className='rectangleGray1' style={{
        width: layoutStyles.rectangleGray1.width,
        fontSize: layoutStyles.rectangleGray1.fontSize,
        paddingLeft: layoutStyles.rectangleGray1.paddingLeft,
        paddingTop: layoutStyles.rectangleGray1.paddingTop,
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
        width: layoutStyles.rectangleGray2.width,
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
        width: layoutStyles.rectangleDarkGray.width,
        height: layoutStyles.rectangleDarkGray.height,
        margin: `${layoutStyles.rectangleDarkGray.marginTop}px auto 0px auto`,
        backgroundColor: '#383838',
        position: 'relative',
        display: 'table',
      }}
      >
        <div style={{
          fontSize: layoutStyles.rectangleDarkGray.fontSize,
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
      width: layoutStyles.rectanglesColor.width,
      marginTop: layoutStyles.rectanglesColor.marginTop,
      paddingTop: layoutStyles.rectanglesColor.paddingTop,
      paddingBottom: layoutStyles.rectanglesColor.paddingBottom,
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
        width: layoutStyles.rectangleCian.width,
        height: layoutStyles.rectangleCian.height,
        backgroundColor: '#55ecce',
      }}
      />
    );
  };

  const rectangleBlue = () => {
    return (
      <div style={{
        width: layoutStyles.rectangleBlue.width,
        height: layoutStyles.rectangleBlue.height,
        marginLeft: layoutStyles.rectangleBlue.marginLeft,
        marginRight: layoutStyles.rectangleBlue.marginRight,
        backgroundColor: '#556eec',
      }}
      />
    );
  };

  const rectanglePing = () => {
    return (
      <div style={{
        width: layoutStyles.rectanglePing.width,
        height: layoutStyles.rectanglePing.height,
        backgroundColor: '#cc55ec',
      }}
      />
    );
  };

  return (
    <div style={{
      backgroundColor: '#fff',
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

export default LayoutScreen;
