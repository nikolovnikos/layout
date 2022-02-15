import React from 'react';
import './App.css';
import LayoutScreen from './components/LayoutScreen';
import { AppProvider } from './conext/AppContext';

function App() {
  return (
    <div className="App">
      <AppProvider>
        <LayoutScreen />
      </AppProvider>
    </div>
  );
}

export default App;
