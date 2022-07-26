import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import routes from './routes';

import './index.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        {routes.map(route => (
          <Route key={route.path} {...route} /> 
        ))}
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
