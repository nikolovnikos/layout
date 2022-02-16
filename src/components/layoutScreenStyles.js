import { LayoutZeplinConverter } from '../helpers/LayoutZeplinConverter';
import {devicesDimensions } from '../general/constants';
/*
  Mobile
  https://app.zeplin.io/project/61a8a9480bf3cf8df5b66ab2/screen/61b70b84075a1e48410f5f88
*/
const layoutZPhone = new LayoutZeplinConverter(devicesDimensions.iphone11_1111);
/*
  Desktop
  https://app.zeplin.io/project/61a8a9480bf3cf8df5b66ab2/screen/620a368451206fa8e5757617
*/
const layoutZDesktop = new LayoutZeplinConverter(devicesDimensions.desktop_1440);

/*
  Tablet
  https://app.zeplin.io/project/61a8a9480bf3cf8df5b66ab2/screen/620a3678a46278aabb5de991
*/
const layoutZTablet = new LayoutZeplinConverter(devicesDimensions.ipad);

export const defaultStyles = {
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
    marginBottom: 0,
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
};

export const convertedStyles = {
  getMobile: (orientation) => {
    const widthFullScreen = [414, 800];
    const layout = layoutZPhone;
    const s = Object.assign({}, defaultStyles);
    s.rectangleGreen = layout.getBox(widthFullScreen, [48, 48], orientation);
    s.rectangleOrange = layout.getBox(widthFullScreen, [48, 48], orientation);
    s.rectangleWhite = layout.getBox(widthFullScreen, [80, 80], orientation);
    s.rectangleWhite.fontSize = layout.getFontSize([32, 32], orientation);
    s.rectangleBigBlack = layout.getBox(widthFullScreen, [162, 162], orientation);
    s.rectangleBigBlack.marginBottom = layout.getHeight([48, 48], orientation);
  
    s.rectanglesGray = layout.getBox(widthFullScreen, [96, 96], orientation);
  
    s.rectangleGray1.width = layout.getWidth([207, 400], orientation);
    s.rectangleGray1.fontSize = layout.getFontSize([12, 12], orientation);
    s.rectangleGray1.paddingTop = layout.getHeight([12, 16], orientation);
    s.rectangleGray1.paddingLeft = layout.getWidth([12, 16], orientation);
  
    s.rectangleGray2.width = layout.getWidth([110, 213], orientation);
  
    s.rectangleDarkGray = layout.getBox([222, 429], [72, 72], orientation);
    s.rectangleDarkGray.marginTop = layout.getHeight([84, 84], orientation);
    s.rectangleDarkGray.fontSize = layout.getFontSize([16, 16], orientation);
  
    s.rectanglesColor.width = layout.getWidth(widthFullScreen, orientation);
    s.rectanglesColor.marginTop = layout.getHeight([56, 56], orientation);
    s.rectanglesColor.paddingTop = layout.getHeight([8, 8], orientation);
    s.rectanglesColor.paddingBottom = layout.getHeight([8, 8], orientation);
  
    s.rectangleCian = layout.getBox([124, 240], [104, 104], orientation);
  
    s.rectangleBlue = layout.getBox([159, 307], [104, 104], orientation);
    s.rectangleBlue.marginLeft = layout.getWidth([12, 16], orientation);
    s.rectangleBlue.marginRight = layout.getWidth([12, 16], orientation);
  
    s.rectanglePing = layout.getBox([87, 168], [104, 104], orientation);
    return s;
  },
  getDesktop: (orientation) => {
    const widthFullScreen = [1440, 1440];
    const layout = layoutZDesktop;
    const s = Object.assign({}, defaultStyles);
    s.rectangleGreen = layout.getBox(widthFullScreen, [48, 48], orientation);
    s.rectangleOrange = layout.getBox(widthFullScreen, [48, 48], orientation);
    s.rectangleWhite = layout.getBox(widthFullScreen, [80, 80], orientation);
    s.rectangleWhite.fontSize = layout.getFontSize([32, 32], orientation, true);
    s.rectangleBigBlack = layout.getBox(widthFullScreen, [96, 96], orientation);
    s.rectangleBigBlack.marginBottom = layout.getHeight([110, 110], orientation);
  
    s.rectanglesGray = layout.getBox([1280, 1280], [96, 96], orientation, true);
  
    s.rectangleGray1.width = layout.getWidth([207, 207], orientation, true);
    s.rectangleGray1.fontSize = layout.getFontSize([14, 14], orientation, true);
    s.rectangleGray1.paddingTop = layout.getHeight([16, 16], orientation, true);
    s.rectangleGray1.paddingLeft = layout.getWidth([16, 16], orientation, true);
  
    s.rectangleGray2.width = layout.getWidth([155, 155], orientation, true);
  
    s.rectangleDarkGray = layout.getBox([227, 227], [64, 64], orientation, true);
    s.rectangleDarkGray.marginTop = layout.getHeight([196, 196], orientation);
    s.rectangleDarkGray.fontSize = layout.getFontSize([16, 16], orientation, true);
  
    s.rectanglesColor.width = layout.getWidth(widthFullScreen, orientation);
    s.rectanglesColor.marginTop = layout.getHeight([118, 118], orientation);
    s.rectanglesColor.paddingTop = layout.getHeight([24, 24], orientation);
    s.rectanglesColor.paddingBottom = layout.getHeight([40, 40], orientation);
  
    s.rectangleCian = layout.getBox([407, 407], [104, 104], orientation, true);
  
    s.rectangleBlue = layout.getBox([540, 540], [104, 104], orientation, true);
    s.rectangleBlue.marginLeft = layout.getWidth([32, 32], orientation, true);
    s.rectangleBlue.marginRight = layout.getWidth([32, 32], orientation, true);
  
    s.rectanglePing = layout.getBox([269, 269], [104, 104], orientation, true);
    return s;
  },
  getTablet: (orientation) => {
    const widthFullScreen = [768, 1024];
    const layout = layoutZTablet;
    const s = Object.assign({}, defaultStyles);
    s.rectangleGreen = layout.getBox(widthFullScreen, [48, 48], orientation);
    s.rectangleOrange = layout.getBox(widthFullScreen, [48, 48], orientation);
    s.rectangleWhite = layout.getBox(widthFullScreen, [80, 80], orientation);
    s.rectangleWhite.fontSize = layout.getFontSize([32, 32], orientation);
    s.rectangleBigBlack = layout.getBox(widthFullScreen, [88, 88], orientation);
    s.rectangleBigBlack.marginBottom = layout.getHeight([80, 76], orientation);
  
    s.rectanglesGray = layout.getBox([720, 912], [86, 86], orientation);
  
    s.rectangleGray1.width = layout.getWidth([147, 147], orientation);
    s.rectangleGray1.fontSize = layout.getFontSize([14, 14], orientation);
    s.rectangleGray1.paddingTop = layout.getHeight([16, 16], orientation);
    s.rectangleGray1.paddingLeft = layout.getWidth([8, 8], orientation);
  
    s.rectangleGray2.width = layout.getWidth([110, 110], orientation);
  
    s.rectangleDarkGray = layout.getBox([195, 195], [64, 64], orientation);
    s.rectangleDarkGray.marginTop = layout.getHeight([288, 78], orientation);
    s.rectangleDarkGray.fontSize = layout.getFontSize([16, 16], orientation);
  
    s.rectanglesColor.width = layout.getWidth(widthFullScreen, orientation);
    s.rectanglesColor.marginTop = layout.getHeight([92, 50], orientation);
    s.rectanglesColor.paddingTop = layout.getHeight([16, 16], orientation);
    s.rectanglesColor.paddingBottom = layout.getHeight([41, 41], orientation);
  
    s.rectangleCian = layout.getBox([224, 289], [93, 93], orientation);
  
    s.rectangleBlue = layout.getBox([298, 384], [93, 93], orientation);
    s.rectangleBlue.marginLeft = layout.getWidth([24, 24], orientation);
    s.rectangleBlue.marginRight = layout.getWidth([24, 24], orientation);
  
    s.rectanglePing = layout.getBox([150, 191], [93, 93], orientation);
    return s;
  },
}

