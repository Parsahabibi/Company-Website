import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {ThemeProvider} from '@mui/material/styles';

import CssBaseline from '@mui/material/CssBaseline';

import Theme from "./Theme/Theme";
import {ToastContainer} from 'react-toastify';
import I18n from "./i18n";
import {LanguageProvider} from "./LanguageContext";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <LanguageProvider>
            <ThemeProvider theme={Theme}>
                <ToastContainer/>
                <CssBaseline/>
                <I18n render={(setLocal, locale) => <App onLocaleChanged={setLocal} locale={locale}/>}/>
            </ThemeProvider>
        </LanguageProvider>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
