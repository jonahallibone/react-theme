import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { unregister as unregisterServiceWorker } from './registerServiceWorker'
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import { ParallaxProvider } from "react-scroll-parallax";
import { hydrate, render } from "react-dom";

const rootElement = document.getElementById("root");
const Application = () => {
    return (
        <BrowserRouter>
            <ScrollToTop>
                <ParallaxProvider>
                    <App />
                </ParallaxProvider>
            </ScrollToTop>
        </BrowserRouter>
    )
}

if (rootElement.hasChildNodes()) {
  hydrate(<Application />, rootElement);
} else {
  render(<Application />, rootElement);
}

unregisterServiceWorker();
