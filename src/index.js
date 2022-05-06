import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { AuthContextProvider } from './contexts/AuthContext';
import App from './App';
import './index.scss';
import { MainGoalContextProvider } from './contexts/MainGoalContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <AuthContextProvider>
      <MainGoalContextProvider>
        <App />
      </MainGoalContextProvider>
    </AuthContextProvider>
  </BrowserRouter>
);
reportWebVitals();
