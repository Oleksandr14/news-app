import ReactDOM from 'react-dom/client';
import App from './components/App';

import { BrowserRouter } from "react-router-dom";

import { Provider } from 'react-redux';
import {store} from './store/store';

import { ThemeProvider } from '@mui/material';
import { theme } from './styles/theme';



const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
    <Provider store={store}>
    <BrowserRouter basename="/news-app/">
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
    </BrowserRouter>
    </Provider>

);
