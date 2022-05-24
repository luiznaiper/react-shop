import React from 'react'
import reactDom from 'react-dom'

const rootElement = document.getElementById('root');
const root = reactDom.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);