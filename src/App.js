import {
  useState,
  useEffect,
  useMemo,
} from 'react';
import logo from './logo.svg';
import './App.css';
import { LayoutZeplin, devicesDimensions } from './helpers/LayoutZeplinConverter';

const layoutZMobile = new LayoutZeplin(devicesDimensions.iphone11_1111);
const layoutZTablet = new LayoutZeplin(devicesDimensions.ipad_1111);

function App() {

  const getCurrentOrientation = () => {
    console.log('1');
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
  
  const dimenstions = useMemo(() => {
    console.log(orientation);
    let marginTopTemplate = 0;
    let marginBottom = 0;
    let marginTopGameRow = 0;
    let marginLeftGameRow = 0;
    let fontSizeHeaderTemplate = 0;
    let marginBottomHeaderTemplate = 0;
    let paddingHorizontalTemplate = 0;
    let podXL = { width: 0, height: 0 };
    let podM = { width: 0, height: 0 };
    let podS = { width: 0, height: 0 };
    // // if (Device.isTablet()) {
    //   marginTopTemplate = layoutZTablet.getHeight([15, 15], orientation);
    //   marginBottom = layoutZTablet.getHeight([31, 31], orientation);
    //   marginTopGameRow = layoutZTablet.getHeight([8, 8], orientation);
    //   marginLeftGameRow = layoutZTablet.getHeight([8, 8], orientation);
    //   fontSizeHeaderTemplate = layoutZTablet.getFontSize([18, 18], orientation);
    //   marginBottomHeaderTemplate = layoutZTablet.getHeight([15, 15], orientation);
    //   paddingHorizontalTemplate = layoutZTablet.getWidth([8, 6], orientation);
    //   podXL = layoutZTablet.getBox([372, 332], [372, 332], orientation);
    //   podM = layoutZTablet.getBox([372, 332], [182, 162], orientation);
    //   podS = layoutZTablet.getBox([182, 162], [182, 162], orientation);
    // } else {
      marginTopTemplate = layoutZMobile.getHeight([15, 15], orientation);
      marginBottom = layoutZMobile.getHeight([31, 31], orientation);
      marginTopGameRow = layoutZMobile.getHeight([8, 8], orientation);
      marginLeftGameRow = layoutZMobile.getHeight([8, 8], orientation);
      fontSizeHeaderTemplate = layoutZMobile.getFontSize([18, 18], orientation);
      marginBottomHeaderTemplate = layoutZMobile.getHeight([15, 15], orientation);
      paddingHorizontalTemplate = layoutZMobile.getWidth([8, 8], orientation);
      podXL = layoutZMobile.getBox([398, 388], [398, 388], orientation);
      podM = layoutZMobile.getBox([398, 388], [195, 190], orientation);
      podS = layoutZMobile.getBox([195, 190], [195, 190], orientation);
    // }

    const dimensions = {
      marginTopTemplate,
      marginBottom,
      marginTopGameRow,
      marginLeftGameRow,
      fontSizeHeaderTemplate,
      marginBottomHeaderTemplate,
      podXL,
      podM,
      podS,
      paddingHorizontalTemplate,
    };
    return dimensions;
  }, [orientation]);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <div style={{ backgroundColor: 'red', width: dimenstions.podXL.width, height:  dimenstions.podXL.height }}>
          Test Difff
        </div>
      </header>
    </div>
  );
}

export default App;
