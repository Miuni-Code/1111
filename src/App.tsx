import React, { useState, useEffect } from 'react';
import { LockScreen } from './components/LockScreen';
import { MainInterface } from './components/MainInterface';

export default function App() {
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      document.documentElement.setAttribute('data-theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      document.documentElement.removeAttribute('data-theme');
    }
  }, [isDarkMode]);

  const toggleTheme = () => setIsDarkMode(!isDarkMode);

  return (
    <div className="min-h-screen w-full font-sans selection:bg-[var(--accent-color)] selection:text-white">
      {!isUnlocked ? (
        <LockScreen onUnlock={() => setIsUnlocked(true)} />
      ) : (
        <MainInterface 
          onLock={() => setIsUnlocked(false)} 
          toggleTheme={toggleTheme}
          isDarkMode={isDarkMode}
        />
      )}
    </div>
  );
}
