import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

// Create container for the app
const container = document.createElement('div');
container.id = 'st-star-terminal-container';
container.style.position = 'fixed';
container.style.inset = '0';
container.style.zIndex = '99999';
container.style.display = 'none';
container.style.width = '100%';
container.style.height = '100%';
document.body.appendChild(container);

// Create toggle button
const toggleBtn = document.createElement('button');
toggleBtn.id = 'st-star-terminal-toggle';
toggleBtn.innerText = '星际终端';
toggleBtn.style.position = 'fixed';
toggleBtn.style.bottom = '20px';
toggleBtn.style.right = '20px';
toggleBtn.style.zIndex = '100000';
toggleBtn.style.padding = '10px 15px';
toggleBtn.style.backgroundColor = 'rgba(30, 35, 40, 0.8)';
toggleBtn.style.color = '#dce3e8';
toggleBtn.style.border = '1px solid rgba(255, 255, 255, 0.2)';
toggleBtn.style.borderRadius = '8px';
toggleBtn.style.cursor = 'pointer';
toggleBtn.style.backdropFilter = 'blur(10px)';
toggleBtn.style.fontFamily = 'sans-serif';

toggleBtn.addEventListener('click', () => {
  if (container.style.display === 'none') {
    container.style.display = 'block';
  } else {
    container.style.display = 'none';
  }
});

document.body.appendChild(toggleBtn);

// Render the App
const root = ReactDOM.createRoot(container);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
