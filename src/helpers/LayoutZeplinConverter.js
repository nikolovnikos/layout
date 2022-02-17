
Number.prototype.toFixedNumber = function(digits, base){
  var pow = Math.pow(base||10, digits);
  return Math.round(this*pow) / pow;
}

export class LayoutZeplinConverter {
  #deviceWidthPortZ = 0;

  #deviceWidthLandZ = 0;

  innerWidth = document.body.clientWidth;

  #getWidth = (widthZ = 0, deviceWidthZ = 0, locked = false) => {
    let windowWidth = this.innerWidth;
    // console.log(windowWidth, 'z');
    if (locked && windowWidth > deviceWidthZ) {
      windowWidth = deviceWidthZ;
    }
    let newWidth = widthZ;
    let windowWidthZ = deviceWidthZ;
    const ratio = windowWidth / windowWidthZ;
    return (newWidth * ratio).toFixedNumber(2);
  }

  #getBox = (widthZ = 0, heightZ = 0, deviceWidthZ = 0, locked = false) => {
    let ratioZ = widthZ / heightZ;
    const w = this.#getWidth(widthZ, deviceWidthZ, locked);
    const h = (w / ratioZ).toFixedNumber(2);
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
  getWidthL = (widthZ, locked = false) => {
    return this.#getWidth(widthZ, this.#deviceWidthLandZ, locked);
  }

  /**
   *
   * @param {number} widthZ width of element from Zeplin project
   * @param {Boolean} locked When set to true the return value can't be bigger than Zeplin element value
   *
   */
  getWidthP = (widthZ, locked = false) => {
    return this.#getWidth(widthZ, this.#deviceWidthPortZ, locked);
  }

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
  getBoxL = (widthZ, heightZ, locked = false) => {
    return this.#getBox(widthZ, heightZ, this.#deviceWidthLandZ, locked);
  }

  /**
   *
   * @param {number} widthZ width of element from Zeplin project
   * @param {number} heightZ height of element from Zeplin project
   * @param {Boolean} locked When set to true the return value can't be bigger that Zeplin element values 
   *
   */
  getBoxP = (widthZ, heightZ, locked = false) => {
    return this.#getBox(widthZ, heightZ, this.#deviceWidthPortZ, locked);
  }
}
