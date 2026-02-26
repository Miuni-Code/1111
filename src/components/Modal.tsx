import React from 'react';
import { X } from 'lucide-react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}

export const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
      <div 
        className="absolute inset-0 bg-black/40 backdrop-blur-md transition-opacity"
        onClick={onClose}
      />
      
      <div className="glass-card relative w-full max-w-2xl max-h-[85vh] flex flex-col animate-in fade-in zoom-in-95 duration-200 clip-corner overflow-hidden">
        {title && (
          <div className="flex items-center justify-between p-4 border-b border-[var(--wireframe)] bg-[var(--bubble-bg)] shrink-0">
            <h2 className="text-lg font-light tracking-widest text-[var(--text-primary)]">
              {title}
            </h2>
            <button 
              onClick={onClose}
              className="p-1 text-[var(--text-secondary)] hover:text-[var(--accent-color)] transition-colors"
            >
              <X size={20} />
            </button>
          </div>
        )}
        
        <div className={`overflow-y-auto flex-1 bg-[var(--card-bg)] ${title ? 'p-6' : 'p-0'}`}>
          {children}
        </div>
      </div>
    </div>
  );
};
