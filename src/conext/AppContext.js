
import React, {
  useState,
  useEffect,
  useRef,
  useContext,
} from 'react';

import { deviceTypes, orientationTypes } from '../general/types';
import  { TABLET_MIN_WIDTH_SIZE } from '../general/constants';

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
  const innerWidth = useRef(window.innerWidth);
  const innerHeight = useRef(window.innerHeight);

  const getCurrentOrientation = () => {
    if (deviceType === deviceTypes.desktop) {
      return orientationTypes.landscape;
    }
    return window.innerWidth < window.innerHeight ? orientationTypes.portrait : orientationTypes.landscape;
  }

  const getDeviceType = () => {
    // console.log(navigator.userAgent)
    const deviceByUserAgent = getDeviceByUserAgent();
    if (deviceByUserAgent === deviceTypes.desktop && window.innerWidth <= TABLET_MIN_WIDTH_SIZE) {
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

  const getDeviceTypeChanged = () => {
    const deviceByUserAgent = getDeviceByUserAgent();
    if (deviceByUserAgent === deviceTypes.desktop && window.innerWidth > TABLET_MIN_WIDTH_SIZE) {
      return deviceTypes.desktop;
    }
    return deviceType;
  }

  const getResize = () => {
    if (window.innerWidth !== innerWidth.current) {
      const resizenew = Math.abs(innerWidth.current/window.innerWidth - 1).toFixed(2);
      // console.log(resizenew);
      innerWidth.current = window.innerWidth;
      return resizenew;
    }
    return resize;
  }

  const [deviceType, setDeviceType] = useState(() => getDeviceType());
  const [resize, setResize] = useState(0);
  const [orientation, setOrienation] = useState(() => getCurrentOrientation());

  useEffect(() => {
    function handleResize() {
      setResize(() => getResize());
      setDeviceType(() => getDeviceTypeChanged());
      setOrienation(() => getCurrentOrientation());
    }
    window.addEventListener('resize', handleResize)
		return function cleanup() {
			window.removeEventListener('resize', handleResize)
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