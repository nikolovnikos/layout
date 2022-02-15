// import {
//   Dimensions,
//  } from 'react-native';
// import { storeOrientation } from '../stores/store';

// import { useSafeAreaInsets } from 'react-native-safe-area-context';

/*
  Array keys of the device
  0 - deviceWidth,
  1 - deviceHeight,
  2 - deviceWidthLand,
  3 - deviceHeightLand
*/
const devicesDimensions = {
  iphone11_1111: [414, 814, 800, 393],
  ipad_1111: [768, 1024, 1024, 768],
  desktop_1440: [1440, 1024, 1440, 1024],
  // iphone 11 with top, bottom, left, right safearea
  // {"bottom": 34, "left": 0, "right": 0, "top": 48} - Portrait
  // {"bottom": 21, "left": 48, "right": 48, "top": 0} - Landscape
};

class LayoutZeplin {
  #deviceWidth;

  #deviceHeight;

  #deviceWidthLand;

  #deviceHeightLand;

  constructor(device = [0, 0, 0, 0]) {
    const [
      deviceWidth,
      deviceHeight,
      deviceWidthLand,
      deviceHeightLand,
     ] = device;
    this.#deviceWidth = deviceWidth;
    this.#deviceHeight = deviceHeight;
    this.#deviceWidthLand = deviceWidthLand;
    this.#deviceHeightLand = deviceHeightLand;
  }

  getWidth = (boxWidthArrayZ = [0, 0], orientation = 'portrait') => {
    // const insets = useSafeAreaInsets();
    // const { left, right } = storeOrientation.getState().safeAreaInsets;
    // console.log(storeOrientation.getState().safeAreaInsets);
    let windowWidth = window.innerWidth;
    if (window.innerWidth > 1440) {
      windowWidth = 1440;
    }
    // console.log(windowWidth);
    let boxWidth = boxWidthArrayZ[0];
    let windowWidthZeplin = this.#deviceWidth;
    if (orientation === 'landscape') {
      windowWidthZeplin = this.#deviceWidthLand;
      boxWidth = boxWidthArrayZ[1];
      if (boxWidth > windowWidthZeplin) {
        boxWidth = windowWidthZeplin;
      }
    }
    // console.log(insets);
    const ratio = windowWidth / windowWidthZeplin;
    return boxWidth * ratio;
  }

  getHeight = (boxHeightArrayZ = [0, 0], orientation = 'portrait') => {
    // const insets = useSafeAreaInsets();
    // console.log(bottom, top);
    // const windowHeight = window.innerHeight;
    let windowHeight = window.innerHeight;
    if (window.innerHeight > 1024) {
      windowHeight = 1024;
    }
    // console.log(windowHeight);
    let boxHeight = boxHeightArrayZ[0];
    let windowHeightZeplin = this.#deviceHeight;
    if (orientation === 'landscape') {
      windowHeightZeplin = this.#deviceHeightLand;
      boxHeight = boxHeightArrayZ[1];
      if (boxHeight > windowHeightZeplin) {
        boxHeight = windowHeightZeplin;
      }
    }
    // console.log(insets);
    const ratio = windowHeight / windowHeightZeplin;
    return boxHeight * ratio;
  }

  /*
    boxWidthArrayZ = [ widthPortrait, widthLanscape ]
    boxHeightArrayZ = [ ]
  */
  getBox = (boxWidthArrayZ = [0, 0], boxHeightArrayZ = [0, 0], orientation) => {
    let ratioZ = boxWidthArrayZ[0] / boxHeightArrayZ[0];
    if (orientation === 'landscape') {
      ratioZ = boxWidthArrayZ[1] / boxHeightArrayZ[1];
    }
    const w = this.getWidth(boxWidthArrayZ, orientation);
    const h = w / ratioZ;
    // console.log(ratioZ, w, h);
    return { width: w, height: h };
  }

  getFontSize = (fontSizeArrayZ = [0, 0], orientation = 'portrait') => {
    const dimentios = this.getBox(fontSizeArrayZ, fontSizeArrayZ, orientation);
    return dimentios.height;
  }
}

export { devicesDimensions, LayoutZeplin };
