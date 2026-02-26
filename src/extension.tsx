import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// ── 创建遮罩容器 ──────────────────────────────────────────
const overlay = document.createElement('div');
overlay.id = 'st-terminal-overlay';
overlay.style.cssText = `
  position: fixed;
  inset: 0;
  z-index: 99999;
  display: none;
`;
document.body.appendChild(overlay);

// ── 用 Shadow DOM 隔离，防止样式污染酒馆 ─────────────────
const shadow = overlay.attachShadow({ mode: 'open' });

// 把 App 的样式注入 Shadow DOM
const styleEl = document.createElement('style');
styleEl.textContent = `
  :host {
    all: initial;
    display: block;
    width: 100%;
    height: 100%;
  }
  * { box-sizing: border-box; }
`;
shadow.appendChild(styleEl);

const appRoot = document.createElement('div');
appRoot.style.cssText = 'width:100%;height:100%;';
shadow.appendChild(appRoot);

// ── 挂载 React App ────────────────────────────────────────
ReactDOM.createRoot(appRoot).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// ── 悬浮按钮 ─────────────────────────────────────────────
const btn = document.createElement('button');
btn.id = 'st-terminal-btn';
btn.textContent = '终';
btn.title = '星际终端';
btn.style.cssText = `
  position: fixed;
  bottom: 24px;
  right: 24px;
  z-index: 99998;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: linear-gradient(135deg, #5c7b96, #3b5a72);
  color: #dce3e8;
  border: 1px solid rgba(144,164,186,0.4);
  font-size: 15px;
  font-family: 'PingFang SC', 'Microsoft YaHei', sans-serif;
  cursor: pointer;
  box-shadow: 0 4px 20px rgba(0,0,0,0.4);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  letter-spacing: 0.05em;
`;
btn.addEventListener('mouseenter', () => {
  btn.style.transform = 'scale(1.1)';
  btn.style.boxShadow = '0 6px 28px rgba(92,123,150,0.5)';
});
btn.addEventListener('mouseleave', () => {
  btn.style.transform = 'scale(1)';
  btn.style.boxShadow = '0 4px 20px rgba(0,0,0,0.4)';
});

let isOpen = false;
btn.addEventListener('click', () => {
  isOpen = !isOpen;
  overlay.style.display = isOpen ? 'block' : 'none';
  btn.textContent = isOpen ? '✕' : '终';
  btn.style.background = isOpen
    ? 'linear-gradient(135deg, #3b444f, #1e2328)'
    : 'linear-gradient(135deg, #5c7b96, #3b5a72)';
});

document.body.appendChild(btn);
