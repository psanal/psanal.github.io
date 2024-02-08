import React from 'react';
import ReactDOM from 'react-dom/client';

import { ThemeProvider } from '@mui/material/styles';
import { theme } from "./styles/theme";

import { BrowserRouter } from "react-router-dom";
import { PublicClientApplication,EventType } from '@azure/msal-browser';

import App from './App';
const pca=new PublicClientApplication({
    auth:{
        clientId:'',
        authority:'',
        redirectUri:'/'
    }
})

pca.addEventCallback(event=>{
    if(event.eventType==EventType.LOGIN_SUCCESS){
        pca.setActiveAccount(event.payload.account);
    }
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <ThemeProvider theme={theme}>
                <App msalInstance={pca} />
            </ThemeProvider>
        </BrowserRouter>
    </React.StrictMode>
);
