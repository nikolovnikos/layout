export const TABLET_WIDTH_SIZE = 1024;

/*
  Array keys of the device
  0 - deviceWidth,
  1 - deviceHeight,
  2 - deviceWidthLand,
  3 - deviceHeightLand
*/
export const devicesDimensions = {
  iphone11_1111: [414, 814, 800, 393],
  ipad: [768, 1024, 1024, 768],
  desktop_1440: [1440, 1024, 1440, 1024],
  // iphone 11 with top, bottom, left, right safearea
  // {"bottom": 34, "left": 0, "right": 0, "top": 48} - Portrait
  // {"bottom": 21, "left": 48, "right": 48, "top": 0} - Landscape
};
