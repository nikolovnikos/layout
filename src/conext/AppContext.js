
import React, {
  useState,
  useEffect,
  useContext,
} from 'react';

const OrientationContext = React.createContext();
const DeviceTypeContext = React.createContext();
const InnerWidthContext = React.createContext();

export function useOrientationContext() {
  return useContext(OrientationContext);
}

export function useDeviceTypeContext() {
  return useContext(DeviceTypeContext);
}

export function useInnerWidthContext() {
  return useContext(InnerWidthContext);
}

export function AppProvider({ children }) {
  const getDeviceType = () => {
    // console.log(navigator.userAgent)
    const deviceByUserAgent = getDeviceByUserAgent();
    if (deviceByUserAgent === deviceTypes.desktop && document.body.clientWidth <= TABLET_MAX_WIDTH_SIZE) {
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
  const [innerWidth, setInnerWidth] = useState(window.innerWidth);
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
      // console.log(document.body.clientWidth);
      setInnerWidth(document.body.clientWidth);
      const deviceByUserAgent = getDeviceByUserAgent();
      if (deviceByUserAgent === deviceTypes.desktop && document.body.clientWidth > TABLET_MAX_WIDTH_SIZE) {
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
      window.addEventListener("orientationchange", handleOrienationChangeEvent, true);
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
          <InnerWidthContext.Provider value={innerWidth}>
            {children}
          </InnerWidthContext.Provider>
        </OrientationContext.Provider>
      </DeviceTypeContext.Provider>
    </>
  );
}

export const deviceTypes = {
  mobile: 'phone',
  tablet: 'tablet',
  desktop: 'desktop',
};

export const orientationTypes = {
  portrait: 'portrait',
  landscape: 'landscape',
}
const TABLET_MAX_WIDTH_SIZE = 1133;
