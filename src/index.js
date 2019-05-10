import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { unregister as unregisterServiceWorker } from './registerServiceWorker'
import ScrollToTop from './components/ScrollToTop/ScrollToTop';

ReactDOM.render((
    <BrowserRouter>
        <ScrollToTop>
            <App />
        </ScrollToTop>
    </BrowserRouter>
), document.getElementById('root'));
unregisterServiceWorker();
