import { ZeplinConverter, deviceDimZ, Orientation } from './ZeplinConverter';

export class RWZeplinConverter extends ZeplinConverter {
  constructor (deviceZ: deviceDimZ, orientation: Orientation = 'portrait') {
    super(deviceZ, orientation);
  }
  getWindowHeight(): number {
    return document.body.clientHeight;
  }
  getWindowWidth(): number {
    return document.body.clientWidth;
  }
}
