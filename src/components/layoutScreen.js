import {
  useState,
  useEffect,
  useMemo,
} from 'react';
// import {
//  View,
//  StyleSheet,
//  Text,
// } from 'react-native';

import PropTypes from 'prop-types';

// import {
//   storeOrientation,
// } from '../../stores/store';
// import { STYLES } from '../../styles/common';

import { LayoutZeplin, devicesDimensions } from '../helpers/LayoutZeplinConverter';
/*
  Zeplin layout source:
  https://app.zeplin.io/project/61a8a9480bf3cf8df5b66ab2/screen/61b70b84075a1e48410f5f88
*/
const layoutZPhone = new LayoutZeplin(devicesDimensions.iphone11_1111);

const LayoutScreenConverter = ({
  orientation = 'portrait',
}) => {
  const rectangleGreen = () => {
    console.log(orientation);
    const widthsPhone = [414, 800];
    const heightsPhone = [48, 48];
    const dimentios = layoutZPhone.getBox(widthsPhone, heightsPhone, orientation);
    return (
      <div style={{
        width: dimentios.width,
        height: dimentios.height,
        backgroundColor: '#49c400',
        // justifyContent: 'center',
        // alignItems: 'center',
      }}
      />
    );
  };

  const rectangleOrange = () => {
    const widthsPhone = [414, 800];
    const heightsPhone = [48, 48];
    const dimentios = layoutZPhone.getBox(widthsPhone, heightsPhone, orientation);
    return (
      <div style={{
        width: dimentios.width,
        height: dimentios.height,
        backgroundColor: '#ff9c24',
        // justifyContent: 'center',
        // alignItems: 'center',
      }}
      />
    );
  };

  const rectangleWhite = () => {
    const widthsPhone = [414, 800];
    const heightsPhone = [80, 80];
    const dimentios = layoutZPhone.getBox(widthsPhone, heightsPhone, orientation);
    return (
      <div style={{
        width: dimentios.width,
        height: dimentios.height,
        backgroundColor: '#ffffff',
        display: 'table',
        // justifyContent: 'center',
        // alignItems: 'center',
      }}
      >
        <div style={{
          fontSize: layoutZPhone.getFontSize([32, 32], orientation),
          color: 'black',
          display: 'table-cell',
          verticalAlign: 'middle',
          fontFamily: 'Gotham-Bold',
        }}
        >
          Type something here AW
        </div>
      </div>
    );
  };

  const rectangleBigBlack = () => {
    const widthsPhone = [414, 800];
    const heightsPhone = [162, 162];
    const dimentios = layoutZPhone.getBox(widthsPhone, heightsPhone, orientation);
    return (
      <div style={{
        width: dimentios.width,
        height: dimentios.height,
        backgroundColor: '#000',
        // justifyContent: 'center',
        // alignItems: 'center',
      }}
      />
    );
  };

  const rectanglesGray = () => {
    const widthsPhone = [207, 207];
    const heightsPhone = [96, 96];
    const dimentios = layoutZPhone.getBox(widthsPhone, heightsPhone, orientation);
    return (<div style={{
      width: layoutZPhone.getWidth([414, 800], orientation),
      marginTop: layoutZPhone.getHeight([48, 48], orientation),
      height: dimentios.height,
      // justifyContent: 'space-between',
      // flexDirection: 'row',
      position: 'relative'
    }}
    >
      {rectangleGray1()}
      {rectangleGray2()}
    </div>)
  };

  const rectangleGray1 = () => {
    const widthsPhone = [207, 207];
    const heightsPhone = [96, 96];
    const dimentios = layoutZPhone.getBox(widthsPhone, heightsPhone, orientation);
    return (
      <div style={{
        width: dimentios.width,
        height: '100%',
        backgroundColor: '#959595',
        float: 'left',
      }}
      >
        <div style={{
          fontSize: layoutZPhone.getFontSize([12, 12], orientation),
          left: layoutZPhone.getWidth([12, 12], orientation),
          top: layoutZPhone.getHeight([12, 12], orientation),
          color: '#ffffff',
          position: 'absolute',
          fontFamily: 'Gotham-Light',
        }}
        >
          Type something here ABSDAWR
        </div>
      </div>
    );
  };

  const rectangleGray2 = () => {
    const widthsPhone = [110, 110];
    const heightsPhone = [96, 96];
    const dimentios = layoutZPhone.getBox(widthsPhone, heightsPhone, orientation);
    return (
      <div style={{
        width: dimentios.width,
        height: '100%',
        backgroundColor: '#cccccc',
        float: 'right',
        // justifyContent: 'center',
        // alignItems: 'center',
      }}
      />
    );
  };

  const rectangleDarkGray = () => {
    const widthsPhone = [222, 222];
    const heightsPhone = [72, 72];
    const dimentios = layoutZPhone.getBox(widthsPhone, heightsPhone, orientation);
    const marginTop = layoutZPhone.getHeight([84, 84], orientation);
    return (
      <div style={{
        width: dimentios.width,
        height: dimentios.height,
        marginTop,
        marginLeft: layoutZPhone.getWidth([96, 96], orientation),
        backgroundColor: '#383838',
        position: 'relative',
        display: 'table',
        // justifyContent: 'center',
        // alignItems: 'center',
      }}
      >
        <div style={{
          fontSize: layoutZPhone.getFontSize([16, 80], orientation),
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
      // width: layoutZPhone.getWidth([414, 800], orientation),
      marginTop: layoutZPhone.getHeight([56, 56], orientation),
      paddingTop: layoutZPhone.getHeight([8, 8], orientation),
      paddingBottom: layoutZPhone.getHeight([8, 8], orientation),
      paddingLeft: layoutZPhone.getWidth([10, 10], orientation),
      paddingRight: layoutZPhone.getWidth([10, 10], orientation),
      // position: 'relative',
      // flexDirection: 'column',
      display: 'flex',
      // justifyContent: 'space-between',
      backgroundColor: '#afafaf',
    }}
    >
      {rectangleCian()}
      {rectangleBlue()}
      {rectanglePing()}
    </div>);
  };

  const rectangleCian = () => {
    const widthsPhone = [124, 124];
    const heightsPhone = [104, 104];
    const dimentios = layoutZPhone.getBox(widthsPhone, heightsPhone, orientation);
    return (
      <div style={{
        width: dimentios.width,
        height: dimentios.height,
        backgroundColor: '#55ecce',
        // float: 'left',
        // justifyContent: 'center',
        // alignItems: 'center',
      }}
      />
    );
  };

  const rectangleBlue = () => {
    const widthsPhone = [159, 159];
    const heightsPhone = [104, 104];
    const dimentios = layoutZPhone.getBox(widthsPhone, heightsPhone, orientation);
    return (
      <div style={{
        width: dimentios.width,
        height: dimentios.height,
        backgroundColor: '#556eec',
        marginLeft: layoutZPhone.getWidth([12, 12], orientation),
        marginRight: layoutZPhone.getWidth([12, 12], orientation),
        // float: 'left',
        // justifyContent: 'center',
        // alignItems: 'center',
      }}
      />
    );
  };

  const rectanglePing = () => {
    const widthsPhone = [87, 87];
    const heightsPhone = [104, 104];
    const dimentios = layoutZPhone.getBox(widthsPhone, heightsPhone, orientation);
    return (
      <div style={{
        width: dimentios.width,
        height: dimentios.height,
        backgroundColor: '#cc55ec',
        // float: 'left',
        // justifyContent: 'center',
        // alignItems: 'center',
      }}
      />
    );
  };

  return (
    <div style={{
      backgroundColor: 'white',
      flexDirection: 'column',
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
