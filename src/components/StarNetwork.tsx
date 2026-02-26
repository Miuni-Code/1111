import React, { useState, useEffect, useRef } from 'react';
import { MessageSquare, Globe, Bell, ChevronLeft, Plus, UserPlus, Image as ImageIcon, Search, Edit2, UserMinus, RefreshCw, Settings, Upload, BookUser, X } from 'lucide-react';
import { ChatInterface } from './ChatInterface';
import { StarNetworkMoments } from './StarNetworkMoments';
import { StarNetworkNotifications } from './StarNetworkNotifications';
import { dataStore } from '../lib/dataStore';
import { Contact } from '../types';

interface StarNetworkProps {
  onBack: () => void;
  settings?: any;
}

export const StarNetwork: React.FC<StarNetworkProps> = ({ onBack, settings }) => {
  const [activeTab, setActiveTab] = useState('chat');
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [bgImage, setBgImage] = useState<string | null>(null);
  const [showMenu, setShowMenu] = useState(false);
  
  const [actionType, setActionType] = useState<string | null>(null);
  const [activeChatId, setActiveChatId] = useState<number | null>(null);

  useEffect(() => {
    // Fetch characters from SillyTavern
    try {
      // @ts-ignore
      const stContext = window.SillyTavern?.getContext?.();
      if (stContext && stContext.characters) {
        const stContacts: Contact[] = stContext.characters.map((char: any, index: number) => ({
          id: index,
          name: char.name,
          lastMessage: char.description?.substring(0, 50) || '...',
          time: '',
          unread: false,
          type: 'user',
          avatar: char.avatar,
          online: true,
          description: char.description,
          stCharacter: char
        }));
        setContacts(stContacts);
      }
    } catch (e) {
      console.error("Failed to fetch characters from SillyTavern", e);
    }
  }, []);

  const handleContactClick = (contact: Contact) => {
    try {
      // @ts-ignore
      const stContext = window.SillyTavern?.getContext?.();
      if (stContext && stContext.setCharacter) {
        // Set the character in SillyTavern
        // Assuming it expects the character name or index. Let's pass the object or name.
        stContext.setCharacter(contact.stCharacter || contact.name);
      }
    } catch (e) {
      console.error("Failed to set character in SillyTavern", e);
    }
    setActiveChatId(contact.id);
  };

  const activeContact = contacts.find(c => c.id === activeChatId);

  if (activeChatId !== null && activeContact) {
    return (
      <ChatInterface 
        contact={activeContact} 
        onBack={() => setActiveChatId(null)} 
        settings={settings}
      />
    );
  }

  return (
    <div className="flex flex-col h-full w-full bg-[var(--card-bg)] backdrop-blur-md relative overflow-hidden">
      {bgImage && (
        <img 
          src={bgImage} 
          alt="Background" 
          className="absolute inset-0 w-full h-full object-cover opacity-20 pointer-events-none mix-blend-luminosity"
          referrerPolicy="no-referrer"
        />
      )}
      
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-5 border-b border-[var(--wireframe)] bg-[var(--bubble-bg)] shrink-0 relative z-50">
        <div className="flex items-center">
          <button onClick={onBack} className="p-2 -ml-2 text-[var(--text-secondary)] hover:text-[var(--accent-color)] transition-colors">
            <ChevronLeft size={24} />
          </button>
          <h2 className="text-xl font-light tracking-widest text-[var(--text-primary)] ml-2">
            星网回路 <span className="text-sm text-[var(--accent-color)] ml-1">({contacts.length})</span>
          </h2>
        </div>
      </div>

      {/* Content Area */}
      {activeTab === 'chat' && (
        <div className="flex-1 overflow-y-auto p-2 space-y-1 relative z-10">
          {contacts.map((contact) => (
            <div 
              key={contact.id}
              onClick={() => handleContactClick(contact)}
              className="flex items-center p-3 rounded-xl hover:bg-[var(--bubble-bg)] cursor-pointer transition-colors group"
            >
              {/* Avatar / Icon */}
              <div className="relative shrink-0 mr-4">
                <div className="w-12 h-12 rounded-full border border-[var(--wireframe)] group-hover:border-[var(--accent-color)] transition-colors p-0.5 bg-[var(--card-bg)]">
                  <img src={contact.avatar || undefined} alt={contact.name} className="w-full h-full rounded-full object-cover" referrerPolicy="no-referrer" />
                </div>
                
                {/* Online Status / Unread Dot */}
                {contact.type === 'user' && (
                  <div className={`absolute bottom-0 right-0 w-3 h-3 rounded-full border-2 border-[var(--bg-base)] ${contact.online ? 'bg-emerald-400' : 'bg-slate-500'}`} />
                )}
              </div>

              {/* Text Content */}
              <div className="flex-1 min-w-0 border-b border-[var(--wireframe)] pb-3 pt-1 group-last:border-0">
                <div className="flex justify-between items-baseline mb-1">
                  <h3 className="text-[var(--text-primary)] font-medium truncate pr-2 tracking-wide">
                    {contact.name}
                  </h3>
                  <span className="text-[11px] text-[var(--text-secondary)] font-mono shrink-0">
                    {contact.time}
                  </span>
                </div>
                <p className="text-sm text-[var(--text-secondary)] truncate">
                  {contact.lastMessage}
                </p>
              </div>
            </div>
          ))}
          {contacts.length === 0 && (
            <div className="flex flex-col items-center justify-center h-full text-[var(--text-secondary)] opacity-50">
              <MessageSquare size={48} className="mb-4" />
              <p className="tracking-widest">暂无联系人</p>
            </div>
          )}
        </div>
      )}

      {activeTab === 'moments' && <StarNetworkMoments actionType={actionType} setActionType={setActionType} />}
      {activeTab === 'notifications' && <StarNetworkNotifications actionType={actionType} setActionType={setActionType} />}

      {/* Bottom Navigation */}
      <div className="flex items-center justify-around py-3 border-t border-[var(--wireframe)] bg-[var(--bubble-bg)] shrink-0 pb-4 sm:pb-3 relative z-10">
        <button 
          onClick={() => setActiveTab('chat')}
          className={`flex flex-col items-center gap-1 flex-1 transition-colors ${activeTab === 'chat' ? 'text-[var(--accent-color)]' : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'}`}
        >
          <MessageSquare size={22} className={activeTab === 'chat' ? 'fill-[var(--accent-color)]/20' : ''} />
          <span className="text-[10px] tracking-widest">私聊</span>
        </button>
        <button 
          onClick={() => setActiveTab('moments')}
          className={`flex flex-col items-center gap-1 flex-1 transition-colors ${activeTab === 'moments' ? 'text-[var(--accent-color)]' : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'}`}
        >
          <Globe size={22} className={activeTab === 'moments' ? 'fill-[var(--accent-color)]/20' : ''} />
          <span className="text-[10px] tracking-widest">星网动态</span>
        </button>
        <button 
          onClick={() => setActiveTab('notifications')}
          className={`flex flex-col items-center gap-1 flex-1 transition-colors ${activeTab === 'notifications' ? 'text-[var(--accent-color)]' : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'}`}
        >
          <Bell size={22} className={activeTab === 'notifications' ? 'fill-[var(--accent-color)]/20' : ''} />
          <span className="text-[10px] tracking-widest">通知</span>
        </button>
      </div>
    </div>
  );
};
