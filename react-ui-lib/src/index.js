import React from 'react';
import ReactDOM from 'react-dom/client';
import './estilos.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Importar Bootstrap JavaScript
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();