import { LayoutZeplinConverter, ZeplinStyle } from '../helpers/LayoutZeplinConverter';
import { orientationTypes } from '../general/types';

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

export class ZeplinStylesLayoutScreen extends ZeplinStyle {
  /**
   *  ZeplinStyle
   * @param {LayoutZeplinConverter} layoutZ instance of LayoutZeplinConverter class
   * @param {string} orientation portrait or landscape
   *
   */
  constructor(layoutZ, orientation) {
    super(layoutZ, orientation);
  }

  getMobile = () => {
    const s = Object.assign({}, defaultStyles);
    const layout = this.layoutZ;
    const widthFullScreenP = 414;
    const widthFullScreenL = 800;
    const isP = this.orientation === orientationTypes.portrait;
  
    s.rectangleGreen = isP ? layout.getBoxP(widthFullScreenP, 48) : layout.getBoxL(widthFullScreenL, 48);
    s.rectangleOrange = isP ? layout.getBoxP(widthFullScreenP, 48) : layout.getBoxL(widthFullScreenL, 48);
    s.rectangleWhite = isP ? layout.getBoxP(widthFullScreenP, 80) : layout.getBoxL(widthFullScreenL, 80);
    s.rectangleWhite.fontSize = isP ? layout.getHeightP(32) : layout.getHeightL(32);
    s.rectangleBigBlack = isP ? layout.getBoxP(widthFullScreenP, 162) : layout.getBoxL(widthFullScreenL, 162);
    s.rectangleBigBlack.marginBottom = isP ? layout.getHeightP(48) : layout.getHeightL(48);
  
    s.rectanglesGray = isP ? layout.getBoxP(widthFullScreenP, 96) : layout.getBoxL(widthFullScreenL, 96);
  
    s.rectangleGray1.width = isP ? layout.getWidthP(207) : layout.getWidthL(400);
    s.rectangleGray1.fontSize = isP ? layout.getHeightP(12) : layout.getHeightL(12);
    s.rectangleGray1.paddingTop = isP ? layout.getHeightP(12) : layout.getHeightL(16);
    s.rectangleGray1.paddingLeft = isP ? layout.getWidthP(12) : layout.getWidthL(16);
  
    s.rectangleGray2.width = isP ? layout.getWidthP(110) : layout.getWidthL(213);
  
    s.rectangleDarkGray = isP ? layout.getBoxP(222, 72) : layout.getBoxL(429, 72);
    s.rectangleDarkGray.marginTop = isP ? layout.getHeightP(84) : layout.getHeightL(84);
    s.rectangleDarkGray.fontSize = isP ? layout.getHeightP(16) : layout.getHeightL(16);
  
    s.rectanglesColor.width = isP ? layout.getWidthP(widthFullScreenP) : layout.getWidthL(widthFullScreenL);
    s.rectanglesColor.marginTop = isP ? layout.getHeightP(56) : layout.getHeightL(56);
    s.rectanglesColor.paddingTop = isP ? layout.getHeightP(8) : layout.getHeightL(8);
    s.rectanglesColor.paddingBottom = isP ? layout.getHeightP(8) : layout.getHeightL(8);
  
    s.rectangleCian = isP ? layout.getBoxP(124, 104) : layout.getBoxL(240, 104);
  
    s.rectangleBlue = isP ? layout.getBoxP(159, 104) : layout.getBoxL(307, 104);
    s.rectangleBlue.marginLeft = isP ? layout.getWidthP(8) : layout.getWidthL(16);
    s.rectangleBlue.marginRight = isP ? layout.getWidthP(8) : layout.getWidthL(16);
  
    s.rectanglePing = isP ? layout.getBoxP(87, 104) : layout.getBoxL(168, 104);
    return s;
  }

  getTablet = () => {
    const s = Object.assign({}, defaultStyles);
    const layout = this.layoutZ;
    const widthFullScreenP = 768;
    const widthFullScreenL = 1024;
    const isP = this.orientation === orientationTypes.portrait;
  
    s.rectangleGreen = isP ? layout.getBoxP(widthFullScreenP, 48) : layout.getBoxL(widthFullScreenL, 48);
    s.rectangleOrange = isP ? layout.getBoxP(widthFullScreenP, 48) : layout.getBoxL(widthFullScreenL, 48);
    s.rectangleWhite = isP ? layout.getBoxP(widthFullScreenP, 80) : layout.getBoxL(widthFullScreenL, 80);
    s.rectangleWhite.fontSize = isP ? layout.getHeightP(32) : layout.getHeightL(32);
    s.rectangleBigBlack = isP ? layout.getBoxP(widthFullScreenP, 88) : layout.getBoxL(widthFullScreenL, 88);
    s.rectangleBigBlack.marginBottom = isP ? layout.getHeightP(80) : layout.getHeightL(76);
  
    s.rectanglesGray = isP ? layout.getBoxP(720, 86) : layout.getBoxL(912, 86);
  
    s.rectangleGray1.width = isP ? layout.getWidthP(147) : layout.getWidthL(147);
    s.rectangleGray1.fontSize = isP ? layout.getHeightP(14) : layout.getHeightL(14);
    s.rectangleGray1.paddingTop = isP ? layout.getHeightP(16) : layout.getHeightL(16);
    s.rectangleGray1.paddingLeft = isP ? layout.getWidthP(8) : layout.getWidthL(8);
  
    s.rectangleGray2.width = isP ? layout.getWidthP(110) : layout.getWidthL(110);
  
    s.rectangleDarkGray = isP ? layout.getBoxP(195, 64) : layout.getBoxL(195, 64);
    s.rectangleDarkGray.marginTop = isP ? layout.getHeightP(288) : layout.getHeightL(78);
    s.rectangleDarkGray.fontSize = isP ? layout.getHeightP(16) :layout.getHeightL(16);
  
    s.rectanglesColor.width = isP ? layout.getWidthP(widthFullScreenP) : layout.getWidthL(widthFullScreenL);
    s.rectanglesColor.marginTop = isP ? layout.getHeightP(92) : layout.getHeightL(50);
    s.rectanglesColor.paddingTop = isP ? layout.getHeightP(16) : layout.getHeightL(16);
    s.rectanglesColor.paddingBottom = isP ? layout.getHeightP(41) : layout.getHeightL(41);
  
    s.rectangleCian = isP ? layout.getBoxP(224, 93) : layout.getBoxL(289, 93);
  
    s.rectangleBlue = isP ? layout.getBoxP(298, 93) : layout.getBoxL(384, 93);
    s.rectangleBlue.marginLeft = isP ? layout.getWidthP(24) : layout.getWidthL(24);
    s.rectangleBlue.marginRight = isP ? layout.getWidthP(24) : layout.getWidthL(24);
  
    s.rectanglePing = isP ? layout.getBoxP(150, 93) : layout.getBoxL(191, 93);
    return s;
  }

  getDesktop = () => {
    const s = Object.assign({}, defaultStyles);
    const layout = this.layoutZ;
    const widthFullScreen = 1440;
  
    s.rectangleGreen.width = layout.getWidthL(widthFullScreen);
    s.rectangleGreen.height = layout.getHeightL(48, true);
    s.rectangleOrange.width = layout.getWidthL(widthFullScreen);
    s.rectangleOrange.height = layout.getHeightL(48, true);
    s.rectangleWhite.width = layout.getWidthL(widthFullScreen);
    s.rectangleWhite.height = layout.getHeightL(80, true);
    s.rectangleWhite.fontSize = layout.getHeightL(32, true);
    s.rectangleBigBlack.width = layout.getWidthL(widthFullScreen);
    s.rectangleBigBlack.height = layout.getHeightL(96, true);
    s.rectangleBigBlack.marginBottom = layout.getHeightL(110, true);
  
    s.rectanglesGray = layout.getBoxL(1280, 96, true);
  
    s.rectangleGray1.width = layout.getWidthL(207, true);
    s.rectangleGray1.fontSize = layout.getHeightL(14, true);
    s.rectangleGray1.paddingTop = layout.getHeightL(16, true);
    s.rectangleGray1.paddingLeft = layout.getWidthL(16, true);
  
    s.rectangleGray2.width = layout.getWidthL(155, true);
  
    s.rectangleDarkGray = layout.getBoxL(227, 64, true);
    s.rectangleDarkGray.marginTop = layout.getHeightL(196, true);
    s.rectangleDarkGray.fontSize = layout.getHeightL(16, true);
  
    s.rectanglesColor.width = layout.getWidthL(widthFullScreen);
    s.rectanglesColor.marginTop = layout.getHeightL(118 ,true);
    s.rectanglesColor.paddingTop = layout.getHeightL(24, true);
    s.rectanglesColor.paddingBottom = layout.getHeightL(40, true);
  
    s.rectangleCian = layout.getBoxL(407, 104, true);
  
    s.rectangleBlue = layout.getBoxL(540, 104, true);
    s.rectangleBlue.marginLeft = layout.getWidthL(32, true);
    s.rectangleBlue.marginRight = layout.getWidthL(32, true);
  
    s.rectanglePing = layout.getBoxL(269, 104, true);
    return s;
  }
}

