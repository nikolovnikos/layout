import { ZeplinConverter, deviceModel, Orientation } from './ZeplinConverter';

export class RWZeplinConverter extends ZeplinConverter {
  constructor (deviceModel: deviceModel, orientation: Orientation = 'portrait') {
    super(deviceModel, orientation);
  }
  getWindowHeight(): number {
    return document.body.clientHeight;
  }
  getWindowWidth(): number {
    return document.body.clientWidth;
  }
}
