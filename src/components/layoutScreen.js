import {
  useMemo,
} from 'react';


import {
  useDeviceTypeContext,
  useOrientationContext,
  useInnerWidthContext,
  deviceTypes,
} from '../conext/AppContext';

import { LayoutScreenStyle } from './LayputScreenStyles';

const layoutScreenStyle = new LayoutScreenStyle('phone');

const LayoutScreen = () => {
  const orientation = useOrientationContext();
  const deviceType = useDeviceTypeContext();
  const innerWidth = useInnerWidthContext();

  const layoutStyles = useMemo(() => {
    layoutScreenStyle.setDeviceZ(deviceType);
    const styles = layoutScreenStyle.getStyles(orientation);

    return styles;
  }, [innerWidth, orientation, deviceType]);

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
        textAlign: 'center',
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
          textAlign: 'center',
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
        margin: `${layoutStyles.rectangleDarkGray.marginTop} auto 0px auto`,
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
          textAlign: 'center',
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
