import ReactDOM from 'react-dom/client';
import App from './components/App';

import { BrowserRouter } from "react-router-dom";
import { Suspense } from "react";

import { Provider } from 'react-redux';
import {store} from './store/store';

import { ThemeProvider } from '@mui/material';
import { theme } from './styles/theme';


import './translations/i18n';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
    <Provider store={store}>
    <BrowserRouter >
    <ThemeProvider theme={theme}>
      
    <Suspense fallback={<div>Loading...</div>}>
      <App />
    </ Suspense >
   
    </ThemeProvider>
    </BrowserRouter>
    </Provider>

);
