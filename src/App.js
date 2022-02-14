import {
  useState,
  useEffect,
  useRef,
} from 'react';
import './App.css';
import LayoutScreenConverter from './components/layoutScreen';



function App() {
  const innerWidth = useRef(window.innerWidth);

  const getCurrentOrientation = () => {
    if (deviceType === 'desktop') {
      return 'landscape';
    }
    return window.innerWidth < window.innerHeight ? 'portrait' : 'landscape';
  }

  const getDeviceType = () => {
    // console.log(navigator.userAgent)
    const ua = navigator.userAgent;
    if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(ua)) {
        return "tablet";
    }
    else if (/Mobile|Android|iP(hone|od)|IEMobile|BlackBerry|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(ua)) {
        return "mobile";
    }
    if (window.innerWidth <= 1024) {
      return "tablet";
    }
    return "desktop";
  };

  const getDeviceTypeChanged = () => {
    if (deviceType === 'tablet' && window.innerWidth > 1024) {
      return 'desktop';
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
    <div className="App">
      <LayoutScreenConverter orientation={orientation} deviceType={deviceType} resize={resize} />
    </div>
  );
}

export default App;
