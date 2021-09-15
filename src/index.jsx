import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { defineCustomElements } from '@ionic/pwa-elements/loader';
import { StatusBar, Style } from '@capacitor/status-bar';


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

StatusBar.setStyle({ style: Style.Dark });

// Call the element loader after the app has been rendered the first time
defineCustomElements(window);