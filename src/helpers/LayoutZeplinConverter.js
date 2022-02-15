import { orientationTypes } from '../general/types';

export class LayoutZeplin {
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

  getWidth = (boxWidthArrayZ = [0, 0], orientation = orientationTypes.portrait, locked = false) => {
    // const insets = useSafeAreaInsets();
    // const { left, right } = storeOrientation.getState().safeAreaInsets;
    // console.log(storeOrientation.getState().safeAreaInsets);
    let windowWidth = window.innerWidth;
    if (locked) {
      if (orientation === orientationTypes.landscape &&  window.innerWidth > this.#deviceWidthLand) {
        windowWidth = this.#deviceWidthLand;
      }
      else if (window.innerWidth > this.#deviceWidth){
        windowWidth = this.#deviceWidth;
      }
    }
    // console.log(windowWidth);
    let boxWidth = boxWidthArrayZ[0];
    let windowWidthZeplin = this.#deviceWidth;
    if (orientation === orientationTypes.landscape) {
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

  getHeight = (boxHeightArrayZ = [0, 0], orientation = orientationTypes.portrait, locked = false) => {
    // const insets = useSafeAreaInsets();
    // console.log(bottom, top);
    // const windowHeight = window.innerHeight;
    let windowHeight = window.innerHeight;
    if (locked) {
      if (orientation === orientationTypes.desktop_1440 &&  window.innerHeight > this.#deviceHeightLand) {
        windowHeight = this.#deviceHeightLand;
      }
      else if (window.innerHeight > this.#deviceHeight){
        windowHeight = this.#deviceHeight;
      }
    }
    // console.log(windowHeight);
    let boxHeight = boxHeightArrayZ[0];
    let windowHeightZeplin = this.#deviceHeight;
    if (orientation === orientationTypes.landscape) {
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
  getBox = (boxWidthArrayZ = [0, 0], boxHeightArrayZ = [0, 0], orientation = orientationTypes.portrait, locked = false) => {
    let ratioZ = boxWidthArrayZ[0] / boxHeightArrayZ[0];
    if (orientation === orientationTypes.landscape) {
      ratioZ = boxWidthArrayZ[1] / boxHeightArrayZ[1];
    }
    const w = this.getWidth(boxWidthArrayZ, orientation, locked);
    const h = w / ratioZ;
    // console.log(ratioZ, w, h);
    return { width: w, height: h };
  }

  getFontSize = (fontSizeArrayZ = [0, 0], orientation = orientationTypes.portrait, locked = false) => {
    const dimentios = this.getBox(fontSizeArrayZ, fontSizeArrayZ, orientation, locked);
    return dimentios.height;
  }
}
