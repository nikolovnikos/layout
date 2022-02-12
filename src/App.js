import {
  useState,
  useEffect,
  useRef,
} from 'react';
import './App.css';
import LayoutScreenConverter from './components/layoutScreen';


const deviceType = () => {
  console.log(navigator.userAgent)
  const ua = navigator.userAgent;
  if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(ua)) {
      return "tablet";
  }
  else if (/Mobile|Android|iP(hone|od)|IEMobile|BlackBerry|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(ua)) {
      return "mobile";
  }
  if (window.innerWidth <= 1080) {
    return "tablet";
  }
  return "desktop";
};

function App() {

  const device = useRef(deviceType());

  const getCurrentOrientation = () => {
    // console.log('1');
    if (device.current === 'desktop') {
      return 'landscape';
    }
    return window.innerWidth < window.innerHeight ? 'portrait' : 'landscape';
  }

  const [orientation, setOrienation] = useState(() => getCurrentOrientation());


	useEffect(() => {
    function handleResize() {
      setOrienation(() => getCurrentOrientation());
    }
    window.addEventListener('resize', handleResize)
		return function cleanup() {
			window.removeEventListener('resize', handleResize)
		};
  }, []);

  return (
    <div className="App">
      <LayoutScreenConverter orientation={orientation}/>
    </div>
  );
}

export default App;
