import React, { useState, useEffect, useRef } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

const ExtensionContainer = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [position, setPosition] = useState({ x: window.innerWidth / 2 - 195, y: window.innerHeight / 2 - 375 });
  const [isDragging, setIsDragging] = useState(false);
  const dragStart = useRef({ x: 0, y: 0 });

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    dragStart.current = {
      x: e.clientX - position.x,
      y: e.clientY - position.y
    };
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (isDragging) {
      setPosition({
        x: e.clientX - dragStart.current.x,
        y: e.clientY - dragStart.current.y
      });
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    if (isDragging) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
    } else {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    }
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging]);

  return (
    <>
      <button
        id="st-star-terminal-toggle"
        onClick={() => setIsOpen(!isOpen)}
        style={{
          position: 'fixed',
          bottom: '20px',
          right: '20px',
          zIndex: 100000,
          padding: '10px 15px',
          backgroundColor: 'rgba(30, 35, 40, 0.8)',
          color: '#dce3e8',
          border: '1px solid rgba(255, 255, 255, 0.2)',
          borderRadius: '8px',
          cursor: 'pointer',
          backdropFilter: 'blur(10px)',
          fontFamily: 'sans-serif'
        }}
      >
        终
      </button>

      {isOpen && (
        <div style={{
          position: 'fixed',
          inset: 0,
          zIndex: 99999,
          pointerEvents: 'none'
        }}>
          {/* Backdrop for clicking outside to close */}
          <div 
            style={{ position: 'absolute', inset: 0, pointerEvents: 'auto' }} 
            onClick={() => setIsOpen(false)}
          />
          
          {/* Draggable Window */}
          <div
            style={{
              position: 'absolute',
              left: `${position.x}px`,
              top: `${position.y}px`,
              width: '390px',
              height: '750px',
              backgroundColor: 'rgba(20, 23, 26, 0.85)',
              backdropFilter: 'blur(20px)',
              borderRadius: '24px',
              boxShadow: '0 20px 50px rgba(0,0,0,0.5), 0 0 0 1px rgba(255,255,255,0.1)',
              overflow: 'hidden',
              pointerEvents: 'auto',
              display: 'flex',
              flexDirection: 'column'
            }}
          >
            {/* Drag Handle */}
            <div
              onMouseDown={handleMouseDown}
              style={{
                height: '30px',
                width: '100%',
                cursor: 'grab',
                position: 'absolute',
                top: 0,
                left: 0,
                zIndex: 100000,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
              }}
            >
              <div style={{ width: '40px', height: '4px', backgroundColor: 'rgba(255,255,255,0.3)', borderRadius: '2px' }} />
            </div>
            
            {/* Close Button */}
            <button
              onClick={() => setIsOpen(false)}
              style={{
                position: 'absolute',
                top: '12px',
                right: '16px',
                zIndex: 100001,
                background: 'none',
                border: 'none',
                color: 'rgba(255,255,255,0.5)',
                cursor: 'pointer',
                fontSize: '16px'
              }}
            >
              ✕
            </button>

            {/* App Content */}
            <div style={{ width: '100%', height: '100%', position: 'relative', paddingTop: '10px' }}>
              <App />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

const container = document.createElement('div');
container.id = 'st-star-terminal-root';
document.body.appendChild(container);

const root = ReactDOM.createRoot(container);
root.render(
  <React.StrictMode>
    <ExtensionContainer />
  </React.StrictMode>
);
