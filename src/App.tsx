import React, { useState } from 'react';
import { LockScreen } from './components/LockScreen';
import { MainInterface } from './components/MainInterface';

export default function App() {
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);

  const toggleTheme = () => setIsDarkMode(!isDarkMode);

  return (
    <div 
      className="min-h-screen w-full font-sans selection:bg-[var(--accent-color)] selection:text-white"
      data-theme={isDarkMode ? 'dark' : 'light'}
    >
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
