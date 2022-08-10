import {
  useMemo,
  useEffect,
  useState,
} from 'react';


import {
  useDeviceTypeContext,
  useOrientationContext,
  useInnerWidthContext,
} from '../conext/AppContext';

import { LayoutScreenStyle } from './LayputScreenStyles';

const LayoutScreen = () => {
  const orientation = useOrientationContext();
  const deviceType = useDeviceTypeContext();
  const innerWidth = useInnerWidthContext();

  const zeplinStyleObject = useMemo(() => new LayoutScreenStyle('phone'), []);

  const [zeplinStyles, setZeplinStyles] = useState(() => {
    zeplinStyleObject.setDeviceZ(deviceType);
    return zeplinStyleObject.getStyles(orientation)
  });

  useEffect(() => {
    console.log(0)
    zeplinStyleObject.setDeviceZ(deviceType);
    const styles = zeplinStyleObject.getStyles(orientation);
    setZeplinStyles(styles);
  }, [innerWidth, orientation, deviceType, zeplinStyleObject]);

  useEffect(() => {
    zeplinStyleObject.setDeviceZToStorage();
  }, [zeplinStyleObject]);

  const rectangleGreen = () => {
    return (
      <div style={{
        width: zeplinStyles.rectangleGreen.width,
        height: zeplinStyles.rectangleGreen.height,
        backgroundColor: '#49c400',
      }}
      />
    );
  };

  const rectangleOrange = () => {
    return (
      <div style={{
        width: zeplinStyles.rectangleOrange.width,
        height: zeplinStyles.rectangleOrange.height,
        backgroundColor: '#ff9c24',
      }}
      />
    );
  };

  const rectangleWhite = () => {
    return (
      <div style={{
        width: zeplinStyles.rectangleWhite.width,
        height: zeplinStyles.rectangleWhite.height,
        backgroundColor: '#fff',
        display: 'table',
        textAlign: 'center',
      }}
      >
        <div style={{
          fontSize: zeplinStyles.rectangleWhite.fontSize,
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
        width: zeplinStyles.rectangleBigBlack.width,
        height: zeplinStyles.rectangleBigBlack.height,
        marginBottom: zeplinStyles.rectangleBigBlack.marginBottom,
        backgroundColor: '#000',
      }}
      />
    );
  };

  const rectanglesGray = () => {
    return (<div style={{
      width: zeplinStyles.rectanglesGray.width,
      height: zeplinStyles.rectanglesGray.height,
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
        width: zeplinStyles.rectangleGray1.width,
        fontSize: zeplinStyles.rectangleGray1.fontSize,
        paddingLeft: zeplinStyles.rectangleGray1.paddingLeft,
        paddingTop: zeplinStyles.rectangleGray1.paddingTop,
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
        width: zeplinStyles.rectangleGray2.width,
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
        width: zeplinStyles.rectangleDarkGray.width,
        height: zeplinStyles.rectangleDarkGray.height,
        margin: `${zeplinStyles.rectangleDarkGray.marginTop} auto 0px auto`,
        backgroundColor: '#383838',
        position: 'relative',
        display: 'table',
      }}
      >
        <div style={{
          fontSize: zeplinStyles.rectangleDarkGray.fontSize,
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
      width: zeplinStyles.rectanglesColor.width,
      marginTop: zeplinStyles.rectanglesColor.marginTop,
      paddingTop: zeplinStyles.rectanglesColor.paddingTop,
      paddingBottom: zeplinStyles.rectanglesColor.paddingBottom,
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
        width: zeplinStyles.rectangleCian.width,
        height: zeplinStyles.rectangleCian.height,
        backgroundColor: '#55ecce',
      }}
      />
    );
  };

  const rectangleBlue = () => {
    return (
      <div style={{
        width: zeplinStyles.rectangleBlue.width,
        height: zeplinStyles.rectangleBlue.height,
        marginLeft: zeplinStyles.rectangleBlue.marginLeft,
        marginRight: zeplinStyles.rectangleBlue.marginRight,
        backgroundColor: '#556eec',
      }}
      />
    );
  };

  const rectanglePing = () => {
    return (
      <div style={{
        width: zeplinStyles.rectanglePing.width,
        height: zeplinStyles.rectanglePing.height,
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
