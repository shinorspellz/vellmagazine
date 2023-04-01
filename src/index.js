import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { hydrate, render } from "react-dom";
import "@fontsource/libre-bodoni";
import "@fontsource/pt-serif";


// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//     <App />
// );

const rootElement = document.getElementById("root");
if (rootElement.hasChildNodes()) {
  hydrate(<App />, rootElement);
} else {
  render(<App />, rootElement);
}

