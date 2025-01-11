import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.css";
import App from "./App"; 

// Make sure the correct DOM element exists
const rootElement = document.getElementById('root') as HTMLElement;

if (!rootElement) {
  throw new Error('Could not find root element!');
}

const root = ReactDOM.createRoot(rootElement); // Ensure you're using the correct root element
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
