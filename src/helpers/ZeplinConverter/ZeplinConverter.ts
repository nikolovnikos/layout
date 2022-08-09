export interface deviceDimZ {
  widthP: number,
  heightP: number,
  widthL: number,
  heightL: number,
}

interface devicesDim {
  iphone11_safearea: deviceDimZ,
  ipad: deviceDimZ,
  desktop_1440: deviceDimZ,
}

export type deviceType = 'phone' | 'tablet' | 'desktop';

export const devicesDimensionsZ: devicesDim = {
  iphone11_safearea: { // iphone 11 with safearea
    widthP: 414,
    widthL: 800,
    heightP: 896,
    heightL: 400,
  },
  ipad: {
    widthP: 768,
    widthL: 1024,
    heightP: 1024,
    heightL: 768,
  },
  desktop_1440: {
    widthP: 1440,
    widthL: 1440,
    heightP: 1024,
    heightL: 1024,
  }
};

export type Orientation = 'portrait'|'landscape';

export type WithRequiredProperty<Type, Key extends keyof Type> = Pick<Type, Key> & {
  [Property in Key]-?: Type[Property];
};

export abstract class ZeplinConverter {
  private deviceDimZ: deviceDimZ;
  private orientation: Orientation;

  protected abstract getWindowWidth(): number;
  protected abstract getWindowHeight(): number;

  /**
   *
   * @param {deviceDimZ} deviceDimZ Object of device width in portrait and landscape in Zeplin project
   *
  */
  constructor(deviceDimZ: deviceDimZ, orientation: Orientation = 'portrait') {
    this.deviceDimZ = deviceDimZ;
    this.orientation = orientation;
  }

  public setOrientation = (orientation: Orientation) => {
    this.orientation = orientation;
  }

  public getDeviceDimensions = () : deviceDimZ => this.deviceDimZ

  private calucalteWidth = (widthZ: number, deviceWidthZ: number, locked: boolean = false): number => {
    let windowWidth = this.getWindowWidth();
    if (locked && windowWidth > deviceWidthZ) {
      windowWidth = deviceWidthZ;
    }
    const ratio = windowWidth / deviceWidthZ;
    return (widthZ * ratio);
  }

  private calucaltHeight = (heightZ: number, deviceHeightZ: number, locked: boolean = false): number => {
    let windowWidth = this.getWindowHeight();
    if (locked && windowWidth > deviceHeightZ) {
      windowWidth = deviceHeightZ;
    }
    const ratio = windowWidth / deviceHeightZ;
    return (heightZ * ratio);
  }

  /**
   *
   * @param {number} widthZ width of element in Zeplin
   * @param {number} heightZ height of element in Zeplin
   * @param {number} deviceWidthZ width of device in Zeplin (portrait or landscape)
   *
  */
  private calculateBox = (widthZ: number, heightZ: number, deviceWidthZ: number, locked: boolean = false): { width: number, height: number } => {
    const ratioZ = widthZ / heightZ;
    const w = this.calucalteWidth(widthZ, deviceWidthZ, locked);
    const h = w / ratioZ;
    return { width: w, height: h };
  }

  /**
   *
   * @param {number} widthZ width of element from Zeplin project
   * @param {Boolean} locked When set to true the return
   * value can't be bigger than Zeplin element value
   *
  */
  public getWidth = (widthZ: number, locked: boolean = false): number => {
    if (this.orientation === 'portrait') {
      return this.calucalteWidth(widthZ, this.deviceDimZ.widthP, locked);
    }
    return this.calucalteWidth(widthZ, this.deviceDimZ.widthL, locked)
  }
  
  /**
   *
   * @param {number} heightZ height of element from Zeplin project
   * @param {Boolean} locked When set to true the return
   * value can't be bigger than Zeplin element value
   *
  */
  public getHeight = (heightZ: number, locked: boolean = false): number => {
    if (this.orientation === 'portrait') {
      const dimensions = this.calculateBox(heightZ, heightZ, this.deviceDimZ.widthP, locked);
      return dimensions.height;
    }
    const dimensions = this.calculateBox(heightZ, heightZ, this.deviceDimZ.widthL, locked);
    return dimensions.height;
  }

  /**
   *
   * @param {number} heightZ height of element from Zeplin project
   * @param {Boolean} locked When set to true the return
   * value can't be bigger than Zeplin element value
   *
  */
  public getUnPropHeight = (heightZ: number, locked: boolean = false): number => {
    if (this.orientation === 'portrait') {
      return this.calucaltHeight(heightZ, this.deviceDimZ.heightP, locked);
    }
    return this.calucaltHeight(heightZ, this.deviceDimZ.heightL, locked);
  }

  /**
   *
   * @param {number} widthZ width of element from Zeplin project
   * @param {number} heightZ height of element from Zeplin project
   * @param {Boolean} locked When set to true the return
   * value can't be bigger that Zeplin element values
   *
  */
  public getBox = (widthZ: number, heightZ: number, locked: boolean = false): { width: number, height: number } => {
    if (this.orientation === 'portrait') {
      return this.calculateBox(widthZ, heightZ, this.deviceDimZ.widthP, locked);
    }
    return this.calculateBox(widthZ, heightZ, this.deviceDimZ.widthL, locked);
  }
}

export abstract class ZeplinStyle <T>  {
  private deviceType: deviceType;
  protected deviceZ: ZeplinConverter;

  constructor(deviceType: deviceType) {
    this.deviceType = deviceType;
    this.deviceZ = this.getDeviceZ();
  }

  protected abstract phoneDeviceZ(): ZeplinConverter | any;
  protected abstract tabletDeviceZ(): ZeplinConverter | any;
  protected abstract desktopDeviceZ(): ZeplinConverter | any;

  protected abstract phoneStylesPortrait(): T;
  protected abstract phoneStylesLandscape(): T;
  protected abstract tabletStylesPortrait(): T;
  protected abstract tabletStylesLandscape(): T;
  protected abstract desktopStylesLandscape(): T;

  private getPhone(orientation: Orientation): T {
    const isPortrait = orientation === 'portrait';
    this.deviceZ.setOrientation(orientation);
  
    if (isPortrait) {
      return this.phoneStylesPortrait();
    }
    return this.phoneStylesLandscape();
  }

  private getTablet(orientation: Orientation): T {
    const isPortrait = orientation === 'portrait';
    this.deviceZ.setOrientation(orientation);
  
    if (isPortrait) {
      return this.tabletStylesPortrait();
    }
    return this.tabletStylesLandscape();
  }

  private getDesktop (): T {
    this.deviceZ.setOrientation('landscape');
    return this.desktopStylesLandscape();
  }

  private getDeviceZ () : ZeplinConverter {
    let deviceZ: ZeplinConverter;
    switch (this.deviceType) {
      case 'phone':
        deviceZ = this.phoneDeviceZ();
        break;
      case 'tablet':
        deviceZ = this.tabletDeviceZ();
        break;
      case 'desktop':
        deviceZ = this.desktopDeviceZ();
        break;
      default:
        deviceZ = this.phoneDeviceZ();
        break;
    }
    return deviceZ;
  }

  setDeviceZ (deviceType: deviceType) {
    this.deviceType = deviceType;
    this.deviceZ = this.getDeviceZ();
  }

  getStyles(orientation: Orientation): T {
    let style: T;
    switch (this.deviceType) {
      case 'phone':
        style = this.getPhone(orientation);
        break;
      case 'tablet':
        style = this.getTablet(orientation);
        break;
      case 'desktop':
        style = this.getDesktop();
        break;
      default:
        style = this.getPhone(orientation);
        break;
    }
    return style;
  }
}



// type RequireAtLeastOne<T, Keys extends keyof T = keyof T> =
//     Pick<T, Exclude<keyof T, Keys>> 
//     & {
//         [K in Keys]-?:
//             Required<Pick<T, K>>
//             & Partial<Pick<T, Exclude<Keys, K>>>
//     }[Keys]

// type RequireOnlyOne<T, Keys extends keyof T = keyof T> =
//     Pick<T, Exclude<keyof T, Keys>>
//     & {
//         [K in Keys]-?:
//             Required<Pick<T, K>>
//             & Partial<Record<Exclude<Keys, K>, undefined>>
//     }[Keys]