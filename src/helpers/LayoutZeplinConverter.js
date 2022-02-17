
Number.prototype.toFixedNumber = function(digits, base){
  var pow = Math.pow(base||10, digits);
  return Math.round(this*pow) / pow;
}

export class LayoutZeplinConverter {
  #deviceWidthPortZ = 0;

  #deviceWidthLandZ = 0;

  innerWidth = window.innerWidth;

  #getWidth = (widthZ = 0, deviceWidthZ = 0, locked = false) => {
    let windowWidth = this.innerWidth;
    // console.log(windowWidth);
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
   * @param {Array<number>} deviceZ Array of 2 numbers [deviceWidthPortZ, deviceWidthLandZ] from Zeplin project
   *
   */
  constructor(deviceZ = [0, 0]) {
    const [
      deviceWidthPortZ,
      deviceWidthLandZ,
     ] = deviceZ;
    this.#deviceWidthPortZ = deviceWidthPortZ;
    this.#deviceWidthLandZ = deviceWidthLandZ;
  }

  /**
   *
   * @param {number} widthZ width of element from Zeplin project
   * @param {Boolean} locked When set to true the return value can't be bigger than Zeplin element value
   *
   */
  getWidthL = (widthZ = 0, locked = false) => {
    return this.#getWidth(widthZ, this.#deviceWidthLandZ, locked);
  }

  /**
   *
   * @param {number} widthZ width of element from Zeplin project
   * @param {Boolean} locked When set to true the return value can't be bigger than Zeplin element value
   *
   */
  getWidthP = (widthZ = 0, locked = false) => {
    return this.#getWidth(widthZ, this.#deviceWidthPortZ, locked);
  }

    /**
   *
   * @param {number} heightZ height of element from Zeplin project
   * @param {Boolean} locked When set to true the return value can't be bigger than Zeplin element value
   *
   */
  getHeightL = (heightZ = 0, locked = false) => {
    const dimensions = this.#getBox(heightZ, heightZ, this.#deviceWidthLandZ, locked);
    return dimensions.height;
  }

  /**
   *
   * @param {number} heightZ height of element from Zeplin project
   * @param {Boolean} locked When set to true the return value can't be bigger than Zeplin element value
   *
   */
  getHeightP = (heightZ = 0, locked = false) => {
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
  getBoxL = (widthZ = 0, heightZ = 0, locked = false) => {
    return this.#getBox(widthZ, heightZ, this.#deviceWidthLandZ, locked);
  }

  /**
   *
   * @param {number} widthZ width of element from Zeplin project
   * @param {number} heightZ height of element from Zeplin project
   * @param {Boolean} locked When set to true the return value can't be bigger that Zeplin element values 
   *
   */
  getBoxP = (widthZ = 0, heightZ = 0, locked = false) => {
    return this.#getBox(widthZ, heightZ, this.#deviceWidthPortZ, locked);
  }
}
