import React, { useState, useRef, useEffect } from 'react';
import { ChevronRight } from 'lucide-react';

interface SliderProps {
  onUnlock: () => void;
}

export const Slider: React.FC<SliderProps> = ({ onUnlock }) => {
  const [isDragging, setIsDragging] = useState(false);
  const [sliderPos, setSliderPos] = useState(0);
  const [unlocked, setUnlocked] = useState(false);
  const trackRef = useRef<HTMLDivElement>(null);
  const thumbRef = useRef<HTMLDivElement>(null);

  const handleStart = () => {
    if (unlocked) return;
    setIsDragging(true);
  };

  const handleMove = (clientX: number) => {
    if (!isDragging || unlocked || !trackRef.current || !thumbRef.current) return;
    
    const trackRect = trackRef.current.getBoundingClientRect();
    const thumbWidth = thumbRef.current.offsetWidth;
    const maxPos = trackRect.width - thumbWidth - 8; // 8px padding
    
    let newPos = clientX - trackRect.left - thumbWidth / 2;
    newPos = Math.max(0, Math.min(newPos, maxPos));
    
    setSliderPos(newPos);
    
    if (newPos >= maxPos * 0.95) {
      setUnlocked(true);
      setIsDragging(false);
      setSliderPos(maxPos);
      setTimeout(() => {
        onUnlock();
      }, 300);
    }
  };

  const handleEnd = () => {
    if (!unlocked) {
      setIsDragging(false);
      setSliderPos(0);
    }
  };

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => handleMove(e.clientX);
    const handleTouchMove = (e: TouchEvent) => handleMove(e.touches[0].clientX);
    const handleMouseUp = () => handleEnd();
    
    if (isDragging) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('touchmove', handleTouchMove);
      window.addEventListener('mouseup', handleMouseUp);
      window.addEventListener('touchend', handleMouseUp);
    }
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('touchend', handleMouseUp);
    };
  }, [isDragging, unlocked]);

  return (
    <div 
      ref={trackRef}
      className="slider-track relative w-full max-w-sm h-16 rounded-full flex items-center px-1 overflow-hidden group"
    >
      <div 
        className="absolute inset-0 bg-[var(--accent-color)] opacity-20 transition-opacity duration-300"
        style={{ width: `${(sliderPos / (trackRef.current?.offsetWidth || 1)) * 100 + 15}%` }}
      />
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <span className="text-[var(--text-secondary)] font-mono text-sm tracking-widest group-hover:text-[var(--text-primary)] transition-colors">
          {unlocked ? 'ACCESS GRANTED' : 'SLIDE TO UNLOCK'}
        </span>
      </div>
      <div
        ref={thumbRef}
        className={`slider-thumb absolute h-14 w-14 rounded-full flex items-center justify-center cursor-grab active:cursor-grabbing transition-transform ${!isDragging && !unlocked ? 'duration-300' : 'duration-0'}`}
        style={{ transform: `translateX(${sliderPos}px)` }}
        onMouseDown={handleStart}
        onTouchStart={handleStart}
      >
        <ChevronRight className={`text-[var(--accent-color)] ${unlocked ? 'opacity-0' : 'opacity-100'}`} />
        {unlocked && <div className="absolute w-3 h-3 bg-emerald-400 rounded-full animate-ping" />}
      </div>
    </div>
  );
};
