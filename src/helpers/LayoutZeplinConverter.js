import { orientationTypes } from '../general/types';

export class LayoutZeplinConverter {
  #deviceWidthPortZ = 0;

  #deviceHeightPortZ = 0;

  #deviceWidthLandZ = 0;

  #deviceHeightLandZ = 0;


  /**
   *
   * @param {Array<number>} deviceZ Array of 4 numbers [deviceWidthPortZ, deviceHeightPortZ, deviceWidthLandZ, deviceHeightLandZ] from Zeplin project
   *
   */
  constructor(deviceZ = [0, 0, 0, 0]) {
    const [
      deviceWidthPortZ,
      deviceHeightPortZ,
      deviceWidthLandZ,
      deviceHeightLandZ,
     ] = deviceZ;
    this.#deviceWidthPortZ = deviceWidthPortZ;
    this.#deviceHeightPortZ = deviceHeightPortZ;
    this.#deviceWidthLandZ = deviceWidthLandZ;
    this.#deviceHeightLandZ = deviceHeightLandZ;
  }

  /**
   *
   * @param {Array<number>} widthArrayZ Array of two widths for portrait and landscape from Zeplin project
   * @param {String} orientation current device orientation
   * @param {Boolean} locked When set to true the return value can't be bigger than Zeplin element width
   *
   */
  getWidth = (widthArrayZ = [0, 0], orientation = orientationTypes.portrait, locked = false) => {
    let windowWidth = window.innerWidth;
    if (locked) {
      if (orientation === orientationTypes.landscape &&  window.innerWidth > this.#deviceWidthLandZ) {
        windowWidth = this.#deviceWidthLandZ;
      }
      else if (window.innerWidth > this.#deviceWidthPortZ){
        windowWidth = this.#deviceWidthPortZ;
      }
    }
    let newWidth = widthArrayZ[0];
    let windowWidthZ = this.#deviceWidthPortZ;
    if (orientation === orientationTypes.landscape) {
      windowWidthZ = this.#deviceWidthLandZ;
      newWidth = widthArrayZ[1];
    }
    const ratio = windowWidth / windowWidthZ;
    return newWidth * ratio;
  }

  /**
   *
   * @param {Array<number>} heightArrayZ Array of two heights for portrait and landscape from Zeplin project
   * @param {String} orientation current device orientation
   * @param {Boolean} locked When set to true the return value can't be bigger than Zeplin element height
   *
   */
  getHeight = (heightArrayZ = [0, 0], orientation = orientationTypes.portrait, locked = false) => {
    let windowHeight = window.innerHeight;
    if (locked) {
      if (orientation === orientationTypes.desktop_1440 &&  window.innerHeight > this.#deviceHeightLandZ) {
        windowHeight = this.#deviceHeightLandZ;
      }
      else if (window.innerHeight > this.#deviceHeightPortZ){
        windowHeight = this.#deviceHeightPortZ;
      }
    }
    let newHeight = heightArrayZ[0];
    let windowHeightZ = this.#deviceHeightPortZ;
    if (orientation === orientationTypes.landscape) {
      windowHeightZ = this.#deviceHeightLandZ;
      newHeight = heightArrayZ[1];
    }
    const ratio = windowHeight / windowHeightZ;
    return newHeight * ratio;
  }

  /**
   *
   * @param {Array<number>} widthArrayZ Array of two widths for portrait and landscape from Zeplin project
   * @param {Array<number>} heightArrayZ Array of two heights for portrait and landscape from Zeplin project
   * @param {String} orientation current device orientation
   * @param {Boolean} locked When set to true the return value is locked to Zeplin element dimensions 
   *
   */
  getBox = (widthArrayZ = [0, 0], heightArrayZ = [0, 0], orientation = orientationTypes.portrait, locked = false) => {
    let ratioZ = widthArrayZ[0] / heightArrayZ[0];
    if (orientation === orientationTypes.landscape) {
      ratioZ = widthArrayZ[1] / heightArrayZ[1];
    }
    const w = this.getWidth(widthArrayZ, orientation, locked);
    const h = w / ratioZ;
    return { width: w, height: h };
  }

  /**
   *
   * @param {Array<number>} fontSizeArrayZ Array of two fontSizes for portrait and landscape from Zeplin project
   * @param {String} orientation current device orientation
   * @param {Boolean} locked When set to true the return value can't be bigger than Zeplin element fontSize
   *
   */
  getFontSize = (fontSizeArrayZ = [0, 0], orientation = orientationTypes.portrait, locked = false) => {
    const dimensions = this.getBox(fontSizeArrayZ, fontSizeArrayZ, orientation, locked);
    return dimensions.height;
  }
}
