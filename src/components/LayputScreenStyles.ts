import {
  ZeplinStyle,
  deviceType,
  WithRequiredProperty,
} from '../helpers/ZeplinConverter/ZeplinConverter';
import { RWZeplinConverter } from '../helpers/ZeplinConverter/RWZeplinConverter';
import * as CSS from 'csstype';

interface StyleProps {
  rectangleGreen: WithRequiredProperty<CSS.Properties, 'width' | 'height'>,
  rectangleOrange: WithRequiredProperty<CSS.Properties, 'width' | 'height'>,
  rectangleWhite:WithRequiredProperty<CSS.Properties, 'width' | 'height' | 'fontSize'>,
  rectangleBigBlack:WithRequiredProperty<CSS.Properties, 'width' | 'height' | 'marginBottom'>,
  rectanglesGray:WithRequiredProperty<CSS.Properties, 'width' | 'height'>,
  rectangleDarkGray:WithRequiredProperty<CSS.Properties, 'width' | 'height'  | 'marginTop' | 'fontSize'>,
  rectanglesColor:WithRequiredProperty<CSS.Properties, 'width' | 'paddingTop' | 'marginTop' | 'paddingBottom'>,
  rectangleGray1:WithRequiredProperty<CSS.Properties, 'width' | 'fontSize' | 'paddingLeft' | 'paddingTop'>,
  rectangleGray2:WithRequiredProperty<CSS.Properties, 'width'>,
  rectangleCian: WithRequiredProperty<CSS.Properties, 'width' | 'height'>,
  rectangleBlue:WithRequiredProperty<CSS.Properties, 'width' | 'height' | 'marginLeft' | 'marginRight'>,
  rectanglePing: WithRequiredProperty<CSS.Properties, 'width' | 'height'>,
}

export class LayoutScreenStyle extends ZeplinStyle <StyleProps> {
  constructor(deviceType: deviceType) {
    super(deviceType);
  }
  setDeviceZToStorage() {}
  phoneDeviceZ() {
    /*
      Mobile
      https://app.zeplin.io/project/61a8a9480bf3cf8df5b66ab2/screen/61b70b84075a1e48410f5f88
    */
    const phoneZ = new RWZeplinConverter('iphone11');
    return phoneZ;
  }
  tabletDeviceZ() {
    /*
      Tablet
      https://app.zeplin.io/project/61a8a9480bf3cf8df5b66ab2/screen/620a3678a46278aabb5de991
    */
    const tabletZ = new RWZeplinConverter('ipad');
    return tabletZ;
    
  }
  desktopDeviceZ() {
    /*
      Desktop
      https://app.zeplin.io/project/61a8a9480bf3cf8df5b66ab2/screen/620a368451206fa8e5757617
    */
    const desktopZ = new RWZeplinConverter('desktop1440');
    return desktopZ;
  }
  phoneStylesPortrait() {
    const widthFullScreen = 414;
    const rectangleGreen = this.deviceZ.getBox(widthFullScreen, 48);
    const rectangleOrange = this.deviceZ.getBox(widthFullScreen, 48);
    const rectangleWhite = this.deviceZ.getBox(widthFullScreen, 80);
    const rectangleBigBlack = this.deviceZ.getBox(widthFullScreen, 162);
    const rectanglesGray = this.deviceZ.getBox(widthFullScreen, 96);
    const rectangleDarkGray = this.deviceZ.getBox(222, 72);
    const rectangleCian = this.deviceZ.getBox(124, 104);
    const rectangleBlue = this.deviceZ.getBox(159, 104);
    const rectanglePing = this.deviceZ.getBox(87, 104);
    const style: StyleProps = {
      rectangleGreen: {
        width: rectangleGreen.width + 'px',
        height: rectangleGreen.height + 'px',
      },
      rectangleOrange: {
        width: rectangleOrange.width + 'px',
        height: rectangleOrange.height + 'px',
      },
      rectangleWhite: {
        width: rectangleWhite.width + 'px',
        height: rectangleWhite.height + 'px',
        fontSize: this.deviceZ.getHeight(32) + 'px',
      },
      rectangleBigBlack: {
        width: rectangleBigBlack.width + 'px',
        height: rectangleBigBlack.height + 'px',
        marginBottom: this.deviceZ.getHeight(48) + 'px',
      },
      rectanglesGray: {
        width: rectanglesGray.width + 'px',
        height: rectanglesGray.height + 'px',
      },
      rectangleGray1: {
        width: this.deviceZ.getWidth(207) + 'px',
        fontSize: this.deviceZ.getHeight(12) + 'px',
        paddingLeft: this.deviceZ.getWidth(16) + 'px',
        paddingTop: this.deviceZ.getHeight(16) + 'px',
      },
      rectangleGray2: {
        width: this.deviceZ.getWidth(110) + 'px',
      },
      rectangleDarkGray: {
        width: rectangleDarkGray.width + 'px',
        height: rectangleDarkGray.height + 'px',
        fontSize: this.deviceZ.getHeight(16) + 'px',
        marginTop: this.deviceZ.getHeight(84) + 'px',
      },
      rectanglesColor: {
        width: this.deviceZ.getWidth(widthFullScreen) + 'px',
        marginTop: this.deviceZ.getHeight(56) + 'px',
        paddingTop: this.deviceZ.getHeight(8) + 'px',
        paddingBottom: this.deviceZ.getHeight(8) + 'px',
      },
      rectangleCian: {
        width: rectangleCian.width + 'px',
        height: rectangleCian.height + 'px',
      },
      rectangleBlue: {
        width: rectangleBlue.width + 'px',
        height: rectangleBlue.height + 'px',
        marginLeft: this.deviceZ.getWidth(8) + 'px',
        marginRight: this.deviceZ.getWidth(8) + 'px',
      },
      rectanglePing: {
        width: rectanglePing.width + 'px',
        height: rectanglePing.height + 'px',
      },
    };
    return style;
  }
  phoneStylesLandscape () {
    const widthFullScreen = 800;
    const rectangleGreen = this.deviceZ.getBox(widthFullScreen, 48);
    const rectangleOrange = this.deviceZ.getBox(widthFullScreen, 48);
    const rectangleWhite = this.deviceZ.getBox(widthFullScreen, 80);
    const rectangleBigBlack = this.deviceZ.getBox(widthFullScreen, 162);
    const rectanglesGray = this.deviceZ.getBox(widthFullScreen, 96);
    const rectangleDarkGray = this.deviceZ.getBox(429, 72);
    const rectangleCian = this.deviceZ.getBox(240, 104);
    const rectangleBlue = this.deviceZ.getBox(307, 104);
    const rectanglePing = this.deviceZ.getBox(168, 104);
    const style: StyleProps = {
      rectangleGreen: {
        width: rectangleGreen.width + 'px',
        height: rectangleGreen.height + 'px',
      },
      rectangleOrange: {
        width: rectangleOrange.width + 'px',
        height: rectangleOrange.height + 'px',
      },
      rectangleWhite: {
        width: rectangleWhite.width + 'px',
        height: rectangleWhite.height + 'px',
        fontSize: this.deviceZ.getHeight(32) + 'px',
      },
      rectangleBigBlack: {
        width: rectangleBigBlack.width + 'px',
        height: rectangleBigBlack.height + 'px',
        marginBottom: this.deviceZ.getHeight(48) + 'px',
      },
      rectanglesGray: {
        width: rectanglesGray.width + 'px',
        height: rectanglesGray.height + 'px',
      },
      rectangleGray1: {
        width: this.deviceZ.getWidth(400) + 'px',
        fontSize: this.deviceZ.getHeight(12) + 'px',
        paddingLeft: this.deviceZ.getWidth(16) + 'px',
        paddingTop: this.deviceZ.getHeight(16) + 'px',
      },
      rectangleGray2: {
        width: this.deviceZ.getWidth(213) + 'px',
      },
      rectangleDarkGray: {
        width: rectangleDarkGray.width + 'px',
        height: rectangleDarkGray.height + 'px',
        fontSize: this.deviceZ.getHeight(16) + 'px',
        marginTop: this.deviceZ.getHeight(84) + 'px',
      },
      rectanglesColor: {
        width: this.deviceZ.getWidth(widthFullScreen) + 'px',
        marginTop: this.deviceZ.getHeight(56) + 'px',
        paddingTop: this.deviceZ.getHeight(8) + 'px',
        paddingBottom: this.deviceZ.getHeight(8) + 'px',
      },
      rectangleCian: {
        width: rectangleCian.width + 'px',
        height: rectangleCian.height + 'px',
      },
      rectangleBlue: {
        width: rectangleBlue.width + 'px',
        height: rectangleBlue.height + 'px',
        marginLeft: this.deviceZ.getWidth(16) + 'px',
        marginRight: this.deviceZ.getWidth(16) + 'px',
      },
      rectanglePing: {
        width: rectanglePing.width + 'px',
        height: rectanglePing.height + 'px',
      },
    };
    return style;
  }
  tabletStylesPortrait () {
    const widthFullScreen = 768;
    const rectangleGreen = this.deviceZ.getBox(widthFullScreen, 48);
    const rectangleOrange = this.deviceZ.getBox(widthFullScreen, 48);
    const rectangleWhite = this.deviceZ.getBox(widthFullScreen, 80);
    const rectangleBigBlack = this.deviceZ.getBox(widthFullScreen, 88);
    const rectanglesGray = this.deviceZ.getBox(720, 86);
    const rectangleDarkGray = this.deviceZ.getBox(195, 64);
    const rectangleCian = this.deviceZ.getBox(224, 93);
    const rectangleBlue = this.deviceZ.getBox(298, 93);
    const rectanglePing = this.deviceZ.getBox(150, 93);
    const style: StyleProps = {
      rectangleGreen: {
        width: rectangleGreen.width + 'px',
        height: rectangleGreen.height + 'px',
      },
      rectangleOrange: {
        width: rectangleOrange.width + 'px',
        height: rectangleOrange.height + 'px',
      },
      rectangleWhite: {
        width: rectangleWhite.width + 'px',
        height: rectangleWhite.height + 'px',
        fontSize: this.deviceZ.getHeight(32) + 'px',
      },
      rectangleBigBlack: {
        width: rectangleBigBlack.width + 'px',
        height: rectangleBigBlack.height + 'px',
        marginBottom: this.deviceZ.getHeight(80) + 'px',
      },
      rectanglesGray: {
        width: rectanglesGray.width + 'px',
        height: rectanglesGray.height + 'px',
      },
      rectangleGray1: {
        width: this.deviceZ.getWidth(147) + 'px',
        fontSize: this.deviceZ.getHeight(14) + 'px',
        paddingLeft: this.deviceZ.getWidth(8) + 'px',
        paddingTop: this.deviceZ.getHeight(16) + 'px',
      },
      rectangleGray2: {
        width: this.deviceZ.getWidth(110) + 'px',
      },
      rectangleDarkGray: {
        width: rectangleDarkGray.width + 'px',
        height: rectangleDarkGray.height + 'px',
        fontSize: this.deviceZ.getHeight(16) + 'px',
        marginTop: this.deviceZ.getHeight(288) + 'px',
      },
      rectanglesColor: {
        width: this.deviceZ.getWidth(widthFullScreen) + 'px',
        marginTop: this.deviceZ.getHeight(92) + 'px',
        paddingTop: this.deviceZ.getHeight(16) + 'px',
        paddingBottom: this.deviceZ.getHeight(41) + 'px',
      },
      rectangleCian: {
        width: rectangleCian.width + 'px',
        height: rectangleCian.height + 'px',
      },
      rectangleBlue: {
        width: rectangleBlue.width + 'px',
        height: rectangleBlue.height + 'px',
        marginLeft: this.deviceZ.getWidth(24) + 'px',
        marginRight: this.deviceZ.getWidth(24) + 'px',
      },
      rectanglePing: {
        width: rectanglePing.width + 'px',
        height: rectanglePing.height + 'px',
      },
    };
    return style;
  }
  tabletStylesLandscape () {
    const widthFullScreen = 1024;
    const rectangleGreen = this.deviceZ.getBox(widthFullScreen, 48);
    const rectangleOrange = this.deviceZ.getBox(widthFullScreen, 48);
    const rectangleWhite = this.deviceZ.getBox(widthFullScreen, 80);
    const rectangleBigBlack = this.deviceZ.getBox(widthFullScreen, 88);
    const rectanglesGray = this.deviceZ.getBox(912, 86);
    const rectangleDarkGray = this.deviceZ.getBox(195, 64);
    const rectangleCian = this.deviceZ.getBox(289, 93);
    const rectangleBlue = this.deviceZ.getBox(384, 93);
    const rectanglePing = this.deviceZ.getBox(191, 93);
    const style: StyleProps = {
      rectangleGreen: {
        width: rectangleGreen.width + 'px',
        height: rectangleGreen.height + 'px',
      },
      rectangleOrange: {
        width: rectangleOrange.width + 'px',
        height: rectangleOrange.height + 'px',
      },
      rectangleWhite: {
        width: rectangleWhite.width + 'px',
        height: rectangleWhite.height + 'px',
        fontSize: this.deviceZ.getHeight(32) + 'px',
      },
      rectangleBigBlack: {
        width: rectangleBigBlack.width + 'px',
        height: rectangleBigBlack.height + 'px',
        marginBottom: this.deviceZ.getHeight(76) + 'px',
      },
      rectanglesGray: {
        width: rectanglesGray.width + 'px',
        height: rectanglesGray.height + 'px',
      },
      rectangleGray1: {
        width: this.deviceZ.getWidth(147) + 'px',
        fontSize: this.deviceZ.getHeight(14) + 'px',
        paddingLeft: this.deviceZ.getWidth(8) + 'px',
        paddingTop: this.deviceZ.getHeight(16) + 'px',
      },
      rectangleGray2: {
        width: this.deviceZ.getWidth(110) + 'px',
      },
      rectangleDarkGray: {
        width: rectangleDarkGray.width + 'px',
        height: rectangleDarkGray.height + 'px',
        fontSize: this.deviceZ.getHeight(16) + 'px',
        marginTop: this.deviceZ.getHeight(78) + 'px',
      },
      rectanglesColor: {
        width: this.deviceZ.getWidth(widthFullScreen) + 'px',
        marginTop: this.deviceZ.getHeight(50) + 'px',
        paddingTop: this.deviceZ.getHeight(16) + 'px',
        paddingBottom: this.deviceZ.getHeight(41) + 'px',
      },
      rectangleCian: {
        width: rectangleCian.width + 'px',
        height: rectangleCian.height + 'px',
      },
      rectangleBlue: {
        width: rectangleBlue.width + 'px',
        height: rectangleBlue.height + 'px',
        marginLeft: this.deviceZ.getWidth(24) + 'px',
        marginRight: this.deviceZ.getWidth(24) + 'px',
      },
      rectanglePing: {
        width: rectanglePing.width + 'px',
        height: rectanglePing.height + 'px',
      },
    };
    return style;
  }
  desktopStylesLandscape() {
    const widthFullScreen = 1440;
    const rectanglesGray = this.deviceZ.getBox(1280, 96, true);
    const rectangleDarkGray = this.deviceZ.getBox(227, 64, true);
    const rectangleCian = this.deviceZ.getBox(407, 104, true);
    const rectangleBlue = this.deviceZ.getBox(540, 104, true);
    const rectanglePing = this.deviceZ.getBox(269, 104, true);
    const style: StyleProps = {
      rectangleGreen: {
        width: this.deviceZ.getWidth(widthFullScreen) + 'px',
        height:  this.deviceZ.getHeight(48, true) + 'px',
      },
      rectangleOrange: {
        width: this.deviceZ.getWidth(widthFullScreen) + 'px',
        height:  this.deviceZ.getHeight(48, true) + 'px',
      },
      rectangleWhite: {
        width: this.deviceZ.getWidth(widthFullScreen) + 'px',
        height:  this.deviceZ.getHeight(80, true) + 'px',
        fontSize: this.deviceZ.getHeight(32, true) + 'px',
      },
      rectangleBigBlack: {
        width: this.deviceZ.getWidth(widthFullScreen) + 'px',
        height:  this.deviceZ.getHeight(96, true) + 'px',
        marginBottom: this.deviceZ.getHeight(110, true) + 'px',
      },
      rectanglesGray: {
        width: rectanglesGray.width + 'px',
        height: rectanglesGray.height + 'px',
      },
      rectangleGray1: {
        width: this.deviceZ.getWidth(207, true) + 'px',
        fontSize: this.deviceZ.getHeight(14, true) + 'px',
        paddingLeft: this.deviceZ.getWidth(16, true) + 'px',
        paddingTop: this.deviceZ.getHeight(16, true) + 'px',
      },
      rectangleGray2: {
        width: this.deviceZ.getWidth(155, true) + 'px',
      },
      rectangleDarkGray: {
        width: rectangleDarkGray.width + 'px',
        height: rectangleDarkGray.height + 'px',
        fontSize: this.deviceZ.getHeight(16, true) + 'px',
        marginTop: this.deviceZ.getHeight(196, true) + 'px',
      },
      rectanglesColor: {
        width: this.deviceZ.getWidth(widthFullScreen) + 'px',
        marginTop: this.deviceZ.getHeight(118, true) + 'px',
        paddingTop: this.deviceZ.getHeight(24, true) + 'px',
        paddingBottom: this.deviceZ.getHeight(40, true) + 'px',
      },
      rectangleCian: {
        width: rectangleCian.width + 'px',
        height: rectangleCian.height + 'px',
      },
      rectangleBlue: {
        width: rectangleBlue.width + 'px',
        height: rectangleBlue.height + 'px',
        marginLeft: this.deviceZ.getWidth(32, true) + 'px',
        marginRight: this.deviceZ.getWidth(32, true) + 'px',
      },
      rectanglePing: {
        width: rectanglePing.width + 'px',
        height: rectanglePing.height + 'px',
      },
    };
    return style;
  }
}
