import React, { useState, useEffect } from 'react';
import { Fingerprint, Scan, ShieldAlert } from 'lucide-react';

interface LockScreenProps {
  onUnlock: () => void;
}

export function LockScreen({ onUnlock }: LockScreenProps) {
  const [scanning, setScanning] = useState(false);
  const [progress, setProgress] = useState(0);
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const handleScan = () => {
    setScanning(true);
    let p = 0;
    const interval = setInterval(() => {
      p += 5;
      setProgress(p);
      if (p >= 100) {
        clearInterval(interval);
        setTimeout(() => {
          onUnlock();
        }, 500);
      }
    }, 50);
  };

  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center overflow-hidden bg-[var(--bg-base)]">
      <div className="scanlines"></div>
      <div className="bokeh bokeh-1"></div>
      <div className="bokeh bokeh-2"></div>

      {/* Top Status Bar */}
      <div className="absolute top-0 w-full p-6 flex justify-between items-start z-10">
        <div className="flex flex-col">
          <span className="text-xs tracking-widest text-[var(--text-secondary)] font-mono">SYS.STATUS</span>
          <span className="text-sm text-emerald-400 font-mono">SECURE</span>
        </div>
        <ShieldAlert className="text-[var(--text-secondary)] opacity-50" size={20} />
      </div>

      {/* Time Display */}
      <div className="flex flex-col items-center mb-20 z-10">
        <h1 className="text-7xl font-light tracking-tighter text-[var(--text-primary)] mb-2 font-mono">
          {time.toLocaleTimeString('en-US', { hour12: false, hour: '2-digit', minute: '2-digit' })}
        </h1>
        <p className="text-sm tracking-[0.3em] text-[var(--text-secondary)] uppercase">
          {time.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' })}
        </p>
      </div>

      {/* Fingerprint Scanner */}
      <div className="relative z-10 flex flex-col items-center">
        <div 
          className={`relative w-32 h-32 rounded-full flex items-center justify-center cursor-pointer transition-all duration-500
            ${scanning ? 'scale-95' : 'hover:scale-105'}
          `}
          onMouseDown={handleScan}
          onMouseUp={() => { if(progress < 100) { setScanning(false); setProgress(0); } }}
          onTouchStart={handleScan}
          onTouchEnd={() => { if(progress < 100) { setScanning(false); setProgress(0); } }}
        >
          {/* Outer Ring */}
          <div className={`absolute inset-0 rounded-full border border-[var(--wireframe)] transition-all duration-1000
            ${scanning ? 'border-[var(--accent-color)] rotate-180' : ''}
          `}></div>
          
          {/* Inner Ring */}
          <div className={`absolute inset-2 rounded-full border border-[var(--wireframe)] transition-all duration-700
            ${scanning ? 'border-[var(--accent-color)] -rotate-90' : ''}
          `}></div>

          {/* Icon */}
          <Fingerprint 
            size={48} 
            className={`transition-colors duration-300 ${scanning ? 'text-[var(--accent-color)]' : 'text-[var(--text-secondary)]'}`} 
          />

          {/* Scan Effect */}
          {scanning && (
            <div 
              className="absolute left-0 w-full h-1 bg-[var(--accent-color)] shadow-[0_0_10px_var(--accent-color)] opacity-50"
              style={{
                top: `${progress}%`,
                transition: 'top 0.05s linear'
              }}
            ></div>
          )}
        </div>

        <div className="mt-8 h-4 flex items-center justify-center">
          {scanning ? (
            <span className="text-xs tracking-widest text-[var(--accent-color)] font-mono animate-pulse">
              AUTHENTICATING {progress}%
            </span>
          ) : (
            <span className="text-xs tracking-widest text-[var(--text-secondary)] font-mono flex items-center gap-2">
              <Scan size={12} /> TOUCH TO UNLOCK
            </span>
          )}
        </div>
      </div>

      {/* Bottom Decoration */}
      <div className="absolute bottom-8 flex gap-1 z-10">
        {[...Array(3)].map((_, i) => (
          <div key={i} className="w-8 h-1 bg-[var(--wireframe)] rounded-full"></div>
        ))}
      </div>
    </div>
  );
}
