import React, { useState, useEffect } from 'react';
import { Slider } from './Slider';
import { Fingerprint, Lock } from 'lucide-react';

interface LockScreenProps {
  onUnlock: () => void;
}

export const LockScreen: React.FC<LockScreenProps> = ({ onUnlock }) => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-between py-20 px-6 bg-[var(--bg-base)] transition-colors duration-500">
      <div className="bokeh bokeh-1" />
      <div className="bokeh bokeh-2" />
      <div className="scanlines" />

      <div className="relative z-10 flex flex-col items-center mt-10">
        <Lock className="text-[var(--accent-color)] mb-6 opacity-50" size={32} />
        <h1 className="text-6xl font-light tracking-wider text-[var(--text-primary)] mb-2 font-mono">
          {time.toLocaleTimeString('zh-CN', { hour12: false, hour: '2-digit', minute: '2-digit' })}
        </h1>
        <p className="text-[var(--text-secondary)] tracking-widest text-sm uppercase">
          {time.toLocaleDateString('zh-CN', { weekday: 'long', month: 'long', day: 'numeric' })}
        </p>
      </div>

      <div className="relative z-10 flex flex-col items-center w-full gap-12">
        <div className="flex flex-col items-center gap-4">
          <div className="w-16 h-16 rounded-full border border-[var(--wireframe)] flex items-center justify-center bg-[var(--bubble-bg)] backdrop-blur-md relative overflow-hidden">
            <Fingerprint className="text-[var(--accent-color)]" size={28} />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[var(--accent-color)] to-transparent opacity-20 animate-[scan_2s_ease-in-out_infinite]" />
          </div>
          <span className="text-[var(--text-secondary)] text-xs tracking-widest font-mono">IDENTITY VERIFICATION</span>
        </div>

        <Slider onUnlock={onUnlock} />
      </div>
      
      <style>{`
        @keyframes scan {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(100%); }
        }
      `}</style>
    </div>
  );
};
