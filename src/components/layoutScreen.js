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

  const zeplinStyleObject = useMemo(() => {
    return new LayoutScreenStyle('phone')
  }, []);

  const [zeplinStyles, setZeplinStyles] = useState(() => {
    zeplinStyleObject.setDeviceZ(deviceType);
    const styles = zeplinStyleObject.getStyles(orientation);
    return styles;
  });

  useEffect(() => {
    const isMobileDevice = (deviceType === 'phone' || deviceType === 'tablet');
    const isNotRealPortrait = isMobileDevice && orientation === 'portrait' && innerWidth > window.innerHeight;
    const isNotRealLandscape = isMobileDevice && orientation === 'landscape' && innerWidth < window.innerHeight;
    if (isNotRealPortrait || isNotRealLandscape) {
      return;
    }
    console.log(innerWidth, orientation, deviceType);

    zeplinStyleObject.setDeviceZ(deviceType);
    const styles = zeplinStyleObject.getStyles(orientation);
    setZeplinStyles(styles);
  }, [innerWidth, orientation, deviceType, zeplinStyleObject]);

  useEffect(() => {
    zeplinStyleObject.setDeviceZToStorage();
  }, [zeplinStyleObject]);

  const rectangleGreen = useMemo(() => {
    console.log('rectangleGreen');
    return (
      <div style={{
        width: zeplinStyles.rectangleGreen.width,
        height: zeplinStyles.rectangleGreen.height,
        backgroundColor: '#49c400',
      }}
      />
    );
  }, [zeplinStyles.rectangleGreen.width, zeplinStyles.rectangleGreen.height]);

  const rectangleOrange = useMemo(() => {
    console.log('rectangleOrange');
    return (
      <div style={{
        width: zeplinStyles.rectangleOrange.width,
        height: zeplinStyles.rectangleOrange.height,
        backgroundColor: '#ff9c24',
      }}
      />
    );
  }, [zeplinStyles.rectangleOrange.width, zeplinStyles.rectangleOrange.height]);

  const rectangleWhite = useMemo(() => {
    console.log('rectangleWhite')
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
  }, [zeplinStyles.rectangleWhite.width, zeplinStyles.rectangleWhite.height, zeplinStyles.rectangleWhite.fontSize]);

  const rectangleBigBlack = useMemo(() => {
    console.log('rectangleBigBlack')
    return (
      <div style={{
        width: zeplinStyles.rectangleBigBlack.width,
        height: zeplinStyles.rectangleBigBlack.height,
        marginBottom: zeplinStyles.rectangleBigBlack.marginBottom,
        backgroundColor: '#000',
      }}
      />
    );
  }, [zeplinStyles.rectangleBigBlack.width, zeplinStyles.rectangleBigBlack.height, zeplinStyles.rectangleBigBlack.marginBottom]);

  const rectangleGray1 = useMemo(() => {
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
  }, [zeplinStyles.rectangleGray1.width, zeplinStyles.rectangleGray1.fontSize, zeplinStyles.rectangleGray1.paddingLeft, zeplinStyles.rectangleGray1.paddingTop]);

  const rectangleGray2 = useMemo(() => {
    return (
      <div style={{
        width: zeplinStyles.rectangleGray2.width,
        height: '100%',
        backgroundColor: '#cccccc',
        float: 'right',
      }}
      />
    );
  }, [zeplinStyles.rectangleGray2.width]);

  const rectanglesGray = useMemo(() => {
    console.log('rectanglesGray')
    return (<div style={{
      width: zeplinStyles.rectanglesGray.width,
      height: zeplinStyles.rectanglesGray.height,
      position: 'relative',
      margin: 'auto',
    }}
    >
      {rectangleGray1}
      {rectangleGray2}
    </div>)
  }, [zeplinStyles.rectanglesGray.width, zeplinStyles.rectanglesGray.height, rectangleGray1, rectangleGray2]);

  const rectangleDarkGray = useMemo(() => {
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
  }, [zeplinStyles.rectangleDarkGray.width, zeplinStyles.rectangleDarkGray.height, zeplinStyles.rectangleDarkGray.fontSize, zeplinStyles.rectangleDarkGray.marginTop]);

  const rectangleCian = useMemo(() => {
    return (
      <div style={{
        width: zeplinStyles.rectangleCian.width,
        height: zeplinStyles.rectangleCian.height,
        backgroundColor: '#55ecce',
      }}
      />
    );
  }, [zeplinStyles.rectangleCian.width, zeplinStyles.rectangleCian.height]);

  const rectangleBlue = useMemo(() => {
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
  }, [zeplinStyles.rectangleBlue.width, zeplinStyles.rectangleBlue.height, zeplinStyles.rectangleBlue.marginLeft, zeplinStyles.rectangleBlue.marginRight]);

  const rectanglePing = useMemo(() => {
    return (
      <div style={{
        width: zeplinStyles.rectanglePing.width,
        height: zeplinStyles.rectanglePing.height,
        backgroundColor: '#cc55ec',
      }}
      />
    );
  }, [zeplinStyles.rectanglePing.width, zeplinStyles.rectanglePing.height]);

  const rectanglesColor =  useMemo(() => {
    console.log('rectanglesColor')
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
      {rectangleCian}
      {rectangleBlue}
      {rectanglePing}
    </div>);
  }, [rectangleBlue, rectanglePing, zeplinStyles.rectanglesColor.width, zeplinStyles.rectanglesColor.height, zeplinStyles.rectanglesColor.paddingTop, zeplinStyles.rectanglesColor.paddingBottom, rectangleCian]);

  return (
    <div style={{
      backgroundColor: '#fff',
    }}>
      {rectangleGreen}
      {rectangleOrange}
      {rectangleWhite}
      {rectangleBigBlack}
      {rectanglesGray}
      {rectangleDarkGray}
      {rectanglesColor}
    </div>
  );
};

export default LayoutScreen;
