import React from 'react';
import ReactDOM from 'react-dom/client';

import { ThemeProvider } from '@mui/material/styles';
import { theme } from "./styles/theme";

import { BrowserRouter } from "react-router-dom";
import { PublicClientApplication,EventType } from '@azure/msal-browser';

import App from './App';
const pca=new PublicClientApplication({
    auth:{
        clientId:'2b936fe1-48fd-4f27-8a8d-d25073d3f810',
        authority:'https://login.microsoftonline.com/67d7000f-9cd6-4591-90f5-37c8c02f42dc',
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
