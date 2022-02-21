
Number.prototype.toFixedNumber = function(digits, base){
  var pow = Math.pow(base||10, digits);
  return Math.round(this*pow) / pow;
}

const getWindowWidth = () => document.body.clientWidth;

export class ZeplinStyle {
  /**
   *  ZeplinStyle
   * @param {LayoutZeplinConverter} layoutZ instance of LayoutZeplinConverter class
   * @param {string} orientation portrait or landscape
   *
   */
  constructor(layoutZ, orientation) {
    this.layoutZ = layoutZ;
    this.orientation = orientation;
  }
  getMobile = () => {}
  getTablet = () => {}
  getDesktop = () => {}
}

export class LayoutZeplinConverter {
  /**
  * @param {number} deviceWidthPortZ width of the device in portrait in Zeplin
  * */
  #deviceWidthPortZ;

  /**
   * @param {number} deviceWidthLandZ width of the device in landscape in Zeplin
   * */
  #deviceWidthLandZ;

  /**
   *
   * @param {number} widthZ width of element in Zeplin
   * @param {number} deviceWidthZ width of device in Zeplin (portrait or landscape)
   *
   */
  #getWidth = (widthZ, deviceWidthZ, locked = false) => {
    let windowWidth = getWindowWidth();
    if (locked && windowWidth > deviceWidthZ) {
      windowWidth = deviceWidthZ;
    }
    const ratio = windowWidth / deviceWidthZ;
    return (widthZ * ratio).toFixedNumber(3);
  }

  /**
   *
   * @param {number} widthZ width of element in Zeplin
   * @param {number} heightZ height of element in Zeplin
   * @param {number} deviceWidthZ width of device in Zeplin (portrait or landscape)
   *
   */
  #getBox = (widthZ, heightZ, deviceWidthZ, locked = false) => {
    const ratioZ = widthZ / heightZ;
    const w = this.#getWidth(widthZ, deviceWidthZ, locked);
    const h = (w / ratioZ).toFixedNumber(3);
    return { width: w, height: h };
  }

  /**
   *
   * @param {Object} deviceZ Object of device width in portrait and landscape in Zeplin project
   * @param {number} deviceZ.deviceWidthPortZ width in portrait
   * @param {number} deviceZ.deviceWidthLandZ width in landscape
   *
   */
  constructor(deviceZ) {
    const {
      deviceWidthPortZ,
      deviceWidthLandZ,
     } = deviceZ;
    this.#deviceWidthPortZ = deviceWidthPortZ;
    this.#deviceWidthLandZ = deviceWidthLandZ;
  }

  /**
   *
   * @param {number} widthZ width of element from Zeplin project
   * @param {Boolean} locked When set to true the return value can't be bigger than Zeplin element value
   *
   */
  getWidthL = (widthZ, locked = false) => this.#getWidth(widthZ, this.#deviceWidthLandZ, locked);

  /**
   *
   * @param {number} widthZ width of element from Zeplin project
   * @param {Boolean} locked When set to true the return value can't be bigger than Zeplin element value
   *
   */
  getWidthP = (widthZ, locked = false) => this.#getWidth(widthZ, this.#deviceWidthPortZ, locked);

    /**
   *
   * @param {number} heightZ height of element from Zeplin project
   * @param {Boolean} locked When set to true the return value can't be bigger than Zeplin element value
   *
   */
  getHeightL = (heightZ, locked = false) => {
    const dimensions = this.#getBox(heightZ, heightZ, this.#deviceWidthLandZ, locked);
    return dimensions.height;
  }

  /**
   *
   * @param {number} heightZ height of element from Zeplin project
   * @param {Boolean} locked When set to true the return value can't be bigger than Zeplin element value
   *
   */
  getHeightP = (heightZ, locked = false) => {
    const dimensions = this.#getBox(heightZ, heightZ, this.#deviceWidthPortZ, locked);
    return dimensions.height;
  }
 
  /**
   *
   * @param {number} widthZ width of element from Zeplin project
   * @param {number} heightZ height of element from Zeplin project
   * @param {Boolean} locked When set to true the return value can't be bigger that Zeplin element values 
   *
   */
  getBoxL = (widthZ, heightZ, locked = false) => this.#getBox(widthZ, heightZ, this.#deviceWidthLandZ, locked);

  /**
   *
   * @param {number} widthZ width of element from Zeplin project
   * @param {number} heightZ height of element from Zeplin project
   * @param {Boolean} locked When set to true the return value can't be bigger that Zeplin element values
   *
   */
  getBoxP = (widthZ, heightZ, locked = false) => this.#getBox(widthZ, heightZ, this.#deviceWidthPortZ, locked);
}
