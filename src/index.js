import React from 'react';
import { createRoot } from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { registerLicense } from '@syncfusion/ej2-base';

registerLicense("Mgo+DSMBMAY9C3t2VVhjQlFac1lJXGFWf1NpR2NbfU54flBAalhWVAciSV9jS3xSd0dgWX9fc3dSR2JUUA==");

const root = createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
