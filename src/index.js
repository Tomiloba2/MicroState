import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import "../node_modules/react-bootstrap/dist/react-bootstrap";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import { BrowserRouter } from 'react-router-dom';

const root=ReactDOM.createRoot(document.querySelector('#root'));
root.render(
    <React.StrictMode>
        <BrowserRouter>
           <App/>
        </BrowserRouter>
    </React.StrictMode>
);