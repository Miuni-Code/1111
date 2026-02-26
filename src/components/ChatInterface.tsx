import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, Send, Image as ImageIcon, MoreVertical, Loader2 } from 'lucide-react';
import { Contact, Message } from '../types';

interface ChatInterfaceProps {
  contact: Contact;
  onBack: () => void;
  settings?: any;
}

export const ChatInterface: React.FC<ChatInterfaceProps> = ({ contact, onBack, settings }) => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  useEffect(() => {
    // Fetch chat history from SillyTavern
    const fetchChat = () => {
      try {
        // @ts-ignore
        const stContext = window.SillyTavern?.getContext?.();
        if (stContext && stContext.chat) {
          const stMessages: Message[] = stContext.chat.map((msg: any, index: number) => ({
            id: index,
            text: msg.mes,
            sender: msg.is_user ? 'me' : 'them',
            time: '',
            read: true
          }));
          setMessages(stMessages);
          setIsTyping(stContext.isGenerating || false);
        }
      } catch (e) {
        console.error("Failed to fetch chat from SillyTavern", e);
      }
    };

    fetchChat();
    const interval = setInterval(fetchChat, 1000); // Poll for updates
    return () => clearInterval(interval);
  }, [contact]);

  const handleSend = async () => {
    if (!inputText.trim()) return;

    const text = inputText.trim();
    setInputText('');

    try {
      // @ts-ignore
      const stContext = window.SillyTavern?.getContext?.();
      if (stContext && stContext.sendMessage) {
        stContext.sendMessage(text);
      }
    } catch (e) {
      console.error("Failed to send message via SillyTavern", e);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const myAvatar = settings?.avatarUrl || `https://picsum.photos/seed/me/100/100`;
  const contactAvatar = contact.avatar || `https://picsum.photos/seed/${contact.name}/100/100`;

  return (
    <div className="flex flex-col h-full w-full bg-[var(--bg-base)] relative overflow-hidden">
      <div className="scanlines z-0" />
      
      {/* Header */}
      <div className="flex items-center justify-between px-3 sm:px-4 py-3 sm:py-4 border-b border-[var(--wireframe)] bg-[var(--bubble-bg)] shrink-0 relative z-20">
        <div className="flex items-center flex-1 min-w-0">
          <button onClick={onBack} className="p-2 -ml-2 mr-1 text-[var(--text-secondary)] hover:text-[var(--accent-color)] transition-colors shrink-0">
            <ChevronLeft size={24} />
          </button>
          
          <div className="flex items-center flex-1 min-w-0">
            <div className="w-8 h-8 rounded-full border border-[var(--wireframe)] p-0.5 bg-[var(--card-bg)] shrink-0 mr-3 relative">
              <img src={contactAvatar || undefined} alt={contact.name} className="w-full h-full rounded-full object-cover" referrerPolicy="no-referrer" />
              {contact.online && (
                <div className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full border-2 border-[var(--bg-base)] bg-emerald-400" />
              )}
            </div>
            
            <h2 className="text-lg font-medium tracking-wide text-[var(--text-primary)] truncate">
              {contact.name}
            </h2>
          </div>
        </div>
        
        <div className="flex items-center gap-1 shrink-0">
          <button className="p-2 text-[var(--text-secondary)] hover:text-[var(--accent-color)] transition-colors">
            <MoreVertical size={20} />
          </button>
        </div>
      </div>

      {/* Messages Area */}
      <div className="flex-1 overflow-y-auto p-3 sm:p-4 space-y-4 sm:space-y-6 relative z-10">
        {messages.map((msg, index) => {
          const prevMsg = index > 0 ? messages[index - 1] : null;
          const isContinuation = prevMsg && prevMsg.sender === msg.sender;
          
          return (
            <div key={msg.id} className={`flex w-full ${msg.sender === 'me' ? 'justify-end' : 'justify-start'}`}>
              {msg.sender === 'me' ? (
                <div className={`flex items-end gap-3 max-w-[85%] ${isContinuation ? 'pr-[52px]' : ''}`}>
                  <div className="flex flex-col items-end gap-1">
                    <div className="flex items-center gap-2">
                      <div className="bg-[var(--bubble-bg)] text-[var(--text-primary)] rounded-2xl rounded-tr-sm px-4 py-3 shadow-sm border border-[var(--wireframe)]">
                        <div className="text-[15px] leading-relaxed break-words whitespace-pre-wrap" dangerouslySetInnerHTML={{__html: msg.text}}></div>
                      </div>
                    </div>
                  </div>
                  {!isContinuation && (
                    <img src={myAvatar || undefined} alt="Me" className="w-9 h-9 sm:w-10 sm:h-10 rounded-full object-cover shrink-0 shadow-sm border border-[var(--wireframe)]" referrerPolicy="no-referrer" />
                  )}
                </div>
              ) : (
                <div className={`flex items-end gap-2 sm:gap-3 max-w-[85%] ${isContinuation ? 'pl-[52px]' : ''}`}>
                  {!isContinuation && (
                    <img src={contactAvatar || undefined} alt={contact.name} className="w-9 h-9 sm:w-10 sm:h-10 rounded-full object-cover shrink-0 shadow-sm border border-[var(--wireframe)]" referrerPolicy="no-referrer" />
                  )}
                  <div className="flex flex-col items-start gap-1">
                    <div className="bg-[var(--accent-color)] text-white rounded-2xl rounded-tl-sm px-4 py-3 shadow-sm">
                      <div className="text-[15px] leading-relaxed break-words whitespace-pre-wrap" dangerouslySetInnerHTML={{__html: msg.text}}></div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          );
        })}
        
        {isTyping && (
          <div className="flex w-full justify-start">
            <div className="flex items-end gap-2 sm:gap-3 max-w-[85%]">
              <img src={contactAvatar || undefined} alt={contact.name} className="w-9 h-9 sm:w-10 sm:h-10 rounded-full object-cover shrink-0 shadow-sm border border-[var(--wireframe)]" referrerPolicy="no-referrer" />
              <div className="flex flex-col items-start gap-1">
                <div className="bg-[var(--accent-color)] text-white rounded-2xl rounded-tl-sm px-4 py-3 shadow-sm flex items-center space-x-1">
                  <div className="w-2 h-2 rounded-full bg-white/70 animate-bounce" style={{ animationDelay: '0ms' }}></div>
                  <div className="w-2 h-2 rounded-full bg-white/70 animate-bounce" style={{ animationDelay: '150ms' }}></div>
                  <div className="w-2 h-2 rounded-full bg-white/70 animate-bounce" style={{ animationDelay: '300ms' }}></div>
                </div>
              </div>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Input Area */}
      <div className="p-3 sm:p-4 bg-[var(--bubble-bg)] border-t border-[var(--wireframe)] shrink-0 relative z-20">
        <div className="flex items-end gap-2">
          <button className="p-2 sm:p-3 text-[var(--text-secondary)] hover:text-[var(--accent-color)] transition-colors shrink-0">
            <ImageIcon size={22} />
          </button>
          
          <div className="flex-1 bg-[var(--bg-base)] border border-[var(--wireframe)] rounded-2xl flex items-end overflow-hidden focus-within:border-[var(--accent-color)] transition-colors">
            <textarea
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              onKeyDown={handleKeyPress}
              placeholder="输入消息..."
              className="w-full max-h-32 bg-transparent text-[var(--text-primary)] px-4 py-3 sm:py-3.5 outline-none resize-none text-[15px] leading-relaxed"
              rows={1}
              style={{ minHeight: '48px' }}
            />
          </div>
          
          <button 
            onClick={handleSend}
            disabled={!inputText.trim()}
            className="p-3 sm:p-3.5 bg-[var(--accent-color)] text-white rounded-full hover:bg-opacity-90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed shrink-0 shadow-sm"
          >
            <Send size={20} className="ml-0.5" />
          </button>
        </div>
      </div>
    </div>
  );
};
