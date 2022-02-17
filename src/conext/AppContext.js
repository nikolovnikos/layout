
import React, {
  useState,
  useEffect,
  useRef,
  useContext,
} from 'react';

import { deviceTypes, orientationTypes } from '../general/types';
import  { TABLET_MAX_WIDTH_SIZE } from '../general/constants';

const OrientationContext = React.createContext();
const DeviceTypeContext = React.createContext();
const ResizeContext = React.createContext();

export function useOrientationContext() {
  return useContext(OrientationContext);
}

export function useDeviceTypeContext() {
  return useContext(DeviceTypeContext);
}

export function useResizeContext() {
  return useContext(ResizeContext);
}

export function AppProvider({ children }) {
  const outerWidth = useRef(window.outerWidth);

  const getDeviceType = () => {
    // console.log(navigator.userAgent)
    const deviceByUserAgent = getDeviceByUserAgent();
    if (deviceByUserAgent === deviceTypes.desktop && window.outerWidth <= TABLET_MAX_WIDTH_SIZE) {
      return deviceTypes.tablet;
    }
    return deviceByUserAgent;
  };

  const getDeviceByUserAgent = () => {
    const ua = navigator.userAgent;
    if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(ua)) {
      return deviceTypes.tablet;
    }
    else if (/Mobile|Android|iP(hone|od)|IEMobile|BlackBerry|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(ua)) {
      return deviceTypes.mobile;
    }
    return deviceTypes.desktop;
  }


  const [deviceType, setDeviceType] = useState(() => getDeviceType());
  const [resize, setResize] = useState(0);
  const [orientation, setOrienation] = useState(() => getCurrentOrientation());

  function getCurrentOrientation() {
    const orientationType = (window.screen.orientation || {}).type
    if (orientationType) {
      // no Safari
      if (orientationType.indexOf(orientationTypes.landscape) !== -1) {
        return orientationTypes.landscape
      } else {
        return orientationTypes.portrait;
      }
    }

    // on Safari web and iOS
    if (typeof window.orientation === 'undefined') {
      // Detect desktop 
      return orientationTypes.landscape;
    }
    // Detect mobile iOS device
    if (window.orientation === 90 || window.orientation === -90) {
      // Landscape Mode
      return orientationTypes.landscape;
    }
    // console.log(window.orientation);
    return orientationTypes.portrait;
  }

  useEffect(() => {
    const handleResize = () => {
      if (window.outerWidth !== outerWidth.current) {
        const resizenew = Math.abs(outerWidth.current / window.outerWidth - 1).toFixed(3);
        // console.log(resizenew);
        outerWidth.current = window.outerWidth;
        setResize(resizenew);
      }
      const deviceByUserAgent = getDeviceByUserAgent();
      if (deviceByUserAgent === deviceTypes.desktop && window.outerWidth > TABLET_MAX_WIDTH_SIZE) {
        setDeviceType(deviceTypes.desktop);
      }
      if (!window.onorientationchange) {
        // Desktop Devices
        setOrienation(getCurrentOrientation());
      }
    }
    const handleOrienationChangeEvent = (event) => {
      const { type } = event.target.screen.orientation;
      if (type.indexOf(orientationTypes.landscape) !== -1) {
        setOrienation(orientationTypes.landscape);
      } else {
        setOrienation(orientationTypes.portrait);
      }
    };
    window.addEventListener('resize', handleResize, true);
    if (window.onorientationchange) {
      // Only on mobile devices
      window.addEventListener("orientationchange", handleOrienationChangeEvent);
    }
		return function cleanup() {
      window.removeEventListener('resize', handleResize);
      if (window.onorientationchange) {
        window.removeEventListener("orientationchange", handleOrienationChangeEvent);
      }
		};
  }, []);

  return (
    <>
      <DeviceTypeContext.Provider value={deviceType}>
        <OrientationContext.Provider value={orientation}>
          <ResizeContext.Provider value={resize}>
            {children}
          </ResizeContext.Provider>
        </OrientationContext.Provider>
      </DeviceTypeContext.Provider>
    </>
  );
}