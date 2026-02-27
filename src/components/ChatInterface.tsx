import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, Send, MoreVertical, Edit2, UserMinus, Image as ImageIcon, Trash, Smile, Plus, MessageSquareDashed, Ban, UserCircle, ImagePlus, Loader2, Settings } from 'lucide-react';
import { dataStore } from '../lib/dataStore';
import { callAI } from '../lib/aiClient';
import { fillTemplate } from '../lib/promptUtils';
import { Contact, Message } from '../types';
import { ChatAiSettingsPanel } from './ChatAiSettingsPanel';

interface ChatInterfaceProps {
  contact: Contact;
  onBack: () => void;
  onUpdateContact: (updatedContact: Contact) => void;
  onDeleteContact: (id: number) => void;
  settings?: any;
}

/**
 * 将 AI 的长回复拆分成多条消息，模拟网络聊天节奏。
 * 优先按空行段落拆分；其次按句末标点拆分；最后二分。
 * 最多返回 4 条，每条最短 4 个字。
 */
function splitIntoMessages(text: string): string[] {
  const clean = text.trim();

  // 1. 按空行拆段落
  const byParagraph = clean.split(/\n{2,}/).map(s => s.trim()).filter(s => s.length >= 4);
  if (byParagraph.length >= 2) return byParagraph.slice(0, 4);

  // 2. 按句末标点 + 换行 或 连续空格拆句
  const bySentence = clean
    .split(/(?<=[。！？…～」』])\n|(?<=[！？。])\s{2,}/)
    .map(s => s.trim())
    .filter(s => s.length >= 4);
  if (bySentence.length >= 2) return bySentence.slice(0, 4);

  // 3. 文本较短或无法拆分，直接单条返回
  if (clean.length < 60) return [clean];

  // 4. 强制二分：在中间找合适的句末标点断开
  const mid = Math.floor(clean.length / 2);
  const breakPoints = ['。', '！', '？', '～', '\n'];
  for (let offset = 0; offset < 30; offset++) {
    for (const bp of breakPoints) {
      const idx = clean.indexOf(bp, mid - offset);
      if (idx !== -1 && idx < clean.length - 4) {
        return [clean.slice(0, idx + 1).trim(), clean.slice(idx + 1).trim()].filter(s => s.length >= 4);
      }
    }
  }

  return [clean];
}

export const ChatInterface: React.FC<ChatInterfaceProps> = ({ contact, onBack, onUpdateContact, onDeleteContact, settings }) => {
  const [messages, setMessages] = useState<Message[]>(() => {
    const savedMessages = dataStore.getChats(contact.id);
    if (savedMessages !== null) {
      return savedMessages;
    } else if (contact.lastMessage) {
      return [{ id: 1, text: contact.lastMessage, sender: 'them', time: contact.time, read: true }];
    }
    return [];
  });
  
  const [isTyping, setIsTyping] = useState(false);
  const [aiError, setAiError] = useState<string | null>(null);

  const [inputValue, setInputValue] = useState('');
  const [showMenu, setShowMenu] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editName, setEditName] = useState(contact.name);
  const [chatBg, setChatBg] = useState<string | null>(null);
  const [contactAvatar, setContactAvatar] = useState(contact.avatar);
  const [actionType, setActionType] = useState<string | null>(null);
  const [actionInput, setActionInput] = useState('');
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const [customEmojiUrl, setCustomEmojiUrl] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const myAvatar = settings?.avatarUrl || "https://picsum.photos/seed/me/100/100";
  const commonEmojis = ['😀', '😂', '🥰', '😎', '😭', '😡', '👍', '🙏', '🎉', '❤️'];

  const currentContactId = useRef(contact.id);

  useEffect(() => {
    if (contact.id !== currentContactId.current) {
      currentContactId.current = contact.id;
      const savedMessages = dataStore.getChats(contact.id);
      if (savedMessages !== null) {
        setMessages(savedMessages);
      } else if (contact.lastMessage) {
        setMessages([{ id: 1, text: contact.lastMessage, sender: 'them', time: contact.time, read: true }]);
      } else {
        setMessages([]);
      }
    }
  }, [contact.id, contact.lastMessage, contact.time]);

  useEffect(() => {
    if (currentContactId.current === contact.id) {
      dataStore.saveChats(contact.id, messages);
    }
  }, [messages, contact.id]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = () => {
    if (!inputValue.trim()) return;
    
    const newMessage = {
      id: Date.now(),
      text: inputValue.trim(),
      sender: 'me',
      time: new Date().toLocaleTimeString('zh-CN', { hour: '2-digit', minute: '2-digit' }),
      read: false
    };
    
    setMessages([...messages, newMessage]);
    setInputValue('');
    
    // Simulate read status update after 1 second
    setTimeout(() => {
      setMessages(prev => prev.map(m => m.id === newMessage.id ? { ...m, read: true } : m));
    }, 1000);
  };

  const handleReceiveReply = async () => {
    if (isTyping) return;
    setIsTyping(true);
    setAiError(null);
    try {
      const chatPrompt = dataStore.getChatPrompt();
      const aiSettings = contact.chatAiSettings || {
        systemPrompt: '',
        userPromptPrefix: '',
        overrideName: contact.name,
        overrideDescription: contact.description || '一个神秘的星际联系人',
        overridePersonality: '',
        overrideDialogueExamples: '',
        worldInfoExtra: ''
      };
      
      const globalSettings = dataStore.getGlobalSettings();
      let systemPrompt = fillTemplate(chatPrompt.systemPrompt, {
        characterName: aiSettings.overrideName || contact.name,
        characterDescription: aiSettings.overrideDescription || contact.description || '一个神秘的星际联系人',
        userName: globalSettings.userName || '指挥官',
        userPersona: globalSettings.userPersona || '',
      });

      if (aiSettings.overridePersonality) {
        systemPrompt += `\n\n【性格设定】\n${aiSettings.overridePersonality}`;
      }
      if (aiSettings.overrideDialogueExamples) {
        systemPrompt += `\n\n【对话示例】\n${aiSettings.overrideDialogueExamples}`;
      }
      if (aiSettings.worldInfoExtra) {
        systemPrompt += `\n\n【世界观补充】\n${aiSettings.worldInfoExtra}`;
      }

      // 告知 AI 用换行段落分隔多条消息
      systemPrompt += '\n\n【回复格式】用自然的网络聊天风格，如果要表达多个意思，用两个换行（空行）分段，每段相当于单独发出的一条消息，单段不超过80字。';

      const chatHistory = messages.slice(-12).map(m => ({
        role: m.sender === 'me' ? 'user' : 'assistant' as 'user' | 'assistant',
        content: m.text
      }));

      const lastUserMsg = [...messages].reverse().find(m => m.sender === 'me');
      const baseInput = lastUserMsg?.text || '你好';
      const userInput = chatPrompt.userPromptPrefix
        ? `${chatPrompt.userPromptPrefix}\n${baseInput}`
        : baseInput;

      const replyText = await callAI({
        systemPrompt,
        chatHistory,
        userInput
      });

      const parts = splitIntoMessages(replyText);

      // 逐条显示，中间插入「正在输入」动画
      setIsTyping(false);
      for (let i = 0; i < parts.length; i++) {
        if (i > 0) {
          setIsTyping(true);
          // 延时模拟打字速度：基础 500ms + 每字 25ms + 随机抖动
          const delay = 500 + parts[i].length * 25 + Math.random() * 300;
          await new Promise(r => setTimeout(r, delay));
          setIsTyping(false);
          await new Promise(r => setTimeout(r, 80)); // 避免闪烁
        }
        setMessages(prev => [...prev, {
          id: Date.now() + i,
          text: parts[i],
          sender: 'them',
          time: new Date().toLocaleTimeString('zh-CN', { hour: '2-digit', minute: '2-digit' }),
          read: true,
        }]);
      }
    } catch (error: any) {
      console.error('AI Reply Error:', error);
      setAiError('连接星网失败，请稍后重试。');
      setIsTyping(false);
      setTimeout(() => setAiError(null), 3000);
    }
  };

  const handleSendCustomEmoji = () => {
    if (!customEmojiUrl.trim()) return;
    const newMessage = {
      id: Date.now(),
      text: `[自定义表情]`,
      sender: 'me',
      time: new Date().toLocaleTimeString('zh-CN', { hour: '2-digit', minute: '2-digit' }),
      read: false,
      image: customEmojiUrl.trim()
    };
    setMessages([...messages, newMessage]);
    setCustomEmojiUrl('');
    setShowEmojiPicker(false);
    setTimeout(() => {
      setMessages(prev => prev.map(m => m.id === newMessage.id ? { ...m, read: true } : m));
    }, 1000);
  };

  const handleActionSubmit = () => {
    if (actionType === 'bg') {
      setChatBg(actionInput.trim() || null);
    } else if (actionType === 'avatar') {
      setContactAvatar(actionInput.trim() || contact.avatar);
    } else if (actionType === 'block') {
      onDeleteContact(contact.id);
      onBack();
    } else if (actionType === 'sendImage' && actionInput.trim()) {
      const newMessage = {
        id: Date.now(),
        text: `[图片] ${actionInput.trim()}`,
        sender: 'me',
        time: new Date().toLocaleTimeString('zh-CN', { hour: '2-digit', minute: '2-digit' }),
        read: false,
        image: actionInput.trim()
      };
      setMessages([...messages, newMessage]);
      setTimeout(() => {
        setMessages(prev => prev.map(m => m.id === newMessage.id ? { ...m, read: true } : m));
      }, 1000);
    }
    setActionType(null);
    setActionInput('');
  };

  const handleSaveEdit = () => {
    if (editName.trim() && editName !== contact.name) {
      onUpdateContact({ ...contact, name: editName.trim() });
    }
    setIsEditing(false);
    setShowMenu(false);
  };

  const handleDelete = () => {
    onDeleteContact(contact.id);
    onBack();
  };

  return (
    <div className="flex flex-col h-full w-full bg-[var(--bg-base)] relative overflow-hidden animate-in slide-in-from-right-full duration-300">
      {chatBg && (
        <div 
          className="absolute inset-0 z-0 opacity-30"
          style={{ backgroundImage: `url(${chatBg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
        />
      )}
      
      {/* Header */}
      <div className="flex items-center justify-between px-3 sm:px-4 py-3 sm:py-4 border-b border-[var(--wireframe)] bg-[var(--bubble-bg)] shrink-0 relative z-20">
        <div className="flex items-center flex-1 min-w-0">
          <button onClick={onBack} className="p-2 -ml-2 mr-1 text-[var(--text-secondary)] hover:text-[var(--accent-color)] transition-colors shrink-0">
            <ChevronLeft size={24} />
          </button>
          
          <div className="flex items-center flex-1 min-w-0">
            {contact.type === 'system' ? (
              <div className={`w-8 h-8 rounded-full flex items-center justify-center ${contact.bgColor} border border-[var(--wireframe)] shrink-0 mr-3`}>
                {contact.icon && <contact.icon className={contact.color} size={16} />}
              </div>
            ) : (
              <div className="w-8 h-8 rounded-full border border-[var(--wireframe)] p-0.5 bg-[var(--card-bg)] shrink-0 mr-3 relative">
                <img src={contactAvatar} alt={contact.name} className="w-full h-full rounded-full object-cover" referrerPolicy="no-referrer" />
                {contact.online && (
                  <div className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full border-2 border-[var(--bg-base)] bg-emerald-400" />
                )}
              </div>
            )}
            
            {isEditing ? (
              <div className="flex items-center flex-1 mr-2">
                <input 
                  type="text" 
                  value={editName}
                  onChange={(e) => setEditName(e.target.value)}
                  className="bg-[var(--bg-base)] border border-[var(--accent-color)] rounded px-2 py-1 text-sm text-[var(--text-primary)] w-full outline-none"
                  autoFocus
                  onBlur={handleSaveEdit}
                  onKeyDown={(e) => e.key === 'Enter' && handleSaveEdit()}
                />
              </div>
            ) : (
              <h2 className="text-lg font-medium tracking-wide text-[var(--text-primary)] truncate">
                {contact.name}
              </h2>
            )}
          </div>
        </div>
        
        {contact.type === 'user' && (
          <div className="relative shrink-0 ml-2">
            <button 
              onClick={() => setShowMenu(!showMenu)}
              className="p-2 text-[var(--text-secondary)] hover:text-[var(--accent-color)] transition-colors"
            >
              <MoreVertical size={20} />
            </button>
            
            {showMenu && (
              <>
                <div className="fixed inset-0 z-40" onClick={() => setShowMenu(false)} />
                <div className="absolute right-0 top-full mt-3 w-36 bg-[var(--bg-base)] rounded-xl z-50 flex flex-col shadow-2xl border border-[var(--wireframe)] animate-in fade-in zoom-in-95 duration-200">
                  {/* Triangle pointer */}
                  <div className="absolute -top-2 right-3 w-4 h-4 bg-[var(--bg-base)] border-t border-l border-[var(--wireframe)] transform rotate-45" />
                  
                  <div className="relative z-10 flex flex-col py-2">
                    <button 
                      onClick={() => { setIsEditing(true); setShowMenu(false); }} 
                      className="flex items-center gap-3 px-4 py-3 hover:bg-[var(--bubble-bg)] text-[var(--text-primary)] text-[15px] text-left transition-colors"
                    >
                      <Edit2 size={18} className="text-[var(--text-primary)]" strokeWidth={1.5} /> 修改备注
                    </button>
                    <button 
                      onClick={() => { setActionType('avatar'); setShowMenu(false); }} 
                      className="flex items-center gap-3 px-4 py-3 hover:bg-[var(--bubble-bg)] text-[var(--text-primary)] text-[15px] text-left transition-colors"
                    >
                      <UserCircle size={18} className="text-[var(--text-primary)]" strokeWidth={1.5} /> 修改头像
                    </button>
                    <button 
                      onClick={() => { setActionType('bg'); setShowMenu(false); }} 
                      className="flex items-center gap-3 px-4 py-3 hover:bg-[var(--bubble-bg)] text-[var(--text-primary)] text-[15px] text-left transition-colors"
                    >
                      <ImageIcon size={18} className="text-[var(--text-primary)]" strokeWidth={1.5} /> 修改聊天背景
                    </button>
                    <button 
                      onClick={() => { 
                        setMessages([]); 
                        dataStore.saveChats(contact.id, []);
                        setShowMenu(false); 
                      }} 
                      className="flex items-center gap-3 px-4 py-3 hover:bg-[var(--bubble-bg)] text-[var(--text-primary)] text-[15px] text-left transition-colors"
                    >
                      <Trash size={18} className="text-[var(--text-primary)]" strokeWidth={1.5} /> 清空聊天记录
                    </button>
                    <div className="h-px bg-[var(--wireframe)] my-1 mx-4" />
                    <button 
                      onClick={() => { setActionType('aiSettings'); setShowMenu(false); }} 
                      className="flex items-center gap-3 px-4 py-3 hover:bg-[var(--bubble-bg)] text-[var(--text-primary)] text-[15px] text-left transition-colors"
                    >
                      <Settings size={18} className="text-[var(--text-primary)]" strokeWidth={1.5} /> AI 回复设置
                    </button>
                    <div className="h-px bg-[var(--wireframe)] my-1 mx-4" />
                    <button 
                      onClick={() => { setActionType('block'); setShowMenu(false); }} 
                      className="flex items-center gap-3 px-4 py-3 hover:bg-[var(--bubble-bg)] text-rose-500 text-[15px] text-left transition-colors"
                    >
                      <Ban size={18} className="text-rose-500" strokeWidth={1.5} /> 拉黑
                    </button>
                    <button 
                      onClick={handleDelete} 
                      className="flex items-center gap-3 px-4 py-3 hover:bg-[var(--bubble-bg)] text-rose-500 text-[15px] text-left transition-colors"
                    >
                      <UserMinus size={18} className="text-rose-500" strokeWidth={1.5} /> 删除好友
                    </button>
                  </div>
                </div>
              </>
            )}
          </div>
        )}
      </div>

      {/* Messages Area */}
      <div className="flex-1 overflow-y-auto p-4 space-y-6 relative z-10 flex flex-col">
        {messages.map((msg, idx) => {
          const prevMsg = messages[idx - 1];
          // 同发送方连续消息：只有首条显示头像，其余靠边对齐
          const isContinuation = prevMsg && prevMsg.sender === msg.sender;
          
          return (
            <div key={msg.id} className={`flex w-full ${msg.sender === 'me' ? 'justify-end' : 'justify-start'}`}>
              {msg.sender === 'me' ? (
                <div className={`flex items-end gap-3 max-w-[85%] ${isContinuation ? 'pr-[52px]' : ''}`}>
                  <div className="flex flex-col items-end gap-1">
                    <div className="flex items-center gap-2">
                      {msg.read && <span className="text-[11px] text-[var(--text-secondary)]">已读</span>}
                      <div className="bg-[var(--bubble-bg)] text-[var(--text-primary)] rounded-2xl rounded-tr-sm px-4 py-3 shadow-sm border border-[var(--wireframe)]">
                        {msg.image ? (
                          <img src={msg.image} alt="Sent image" className="max-w-full rounded-lg max-h-48 object-cover" />
                        ) : (
                          <p className="text-[15px] leading-relaxed break-words whitespace-pre-wrap">{msg.text.replace('[图片] ', '')}</p>
                        )}
                      </div>
                    </div>
                  </div>
                  {!isContinuation && (
                    <img src={myAvatar} alt="Me" className="w-9 h-9 sm:w-10 sm:h-10 rounded-full object-cover shrink-0 shadow-sm border border-[var(--wireframe)]" referrerPolicy="no-referrer" />
                  )}
                </div>
              ) : (
                <div className={`flex items-end gap-2 sm:gap-3 max-w-[85%] ${isContinuation ? 'pl-[52px]' : ''}`}>
                  {!isContinuation && (
                    <img src={contactAvatar} alt={contact.name} className="w-9 h-9 sm:w-10 sm:h-10 rounded-full object-cover shrink-0 shadow-sm border border-[var(--wireframe)]" referrerPolicy="no-referrer" />
                  )}
                  <div className="flex flex-col items-start gap-1">
                    <div className="bg-[var(--accent-color)] text-white rounded-2xl rounded-tl-sm px-4 py-3 shadow-sm">
                      {msg.image ? (
                        <img src={msg.image} alt="Received image" className="max-w-full rounded-lg max-h-48 object-cover" />
                      ) : (
                        <p className="text-[15px] leading-relaxed break-words whitespace-pre-wrap">{msg.text}</p>
                      )}
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
              <img src={contactAvatar} alt={contact.name} className="w-9 h-9 sm:w-10 sm:h-10 rounded-full object-cover shrink-0 shadow-sm border border-[var(--wireframe)]" referrerPolicy="no-referrer" />
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
        
        {aiError && (
          <div className="flex justify-center my-2">
            <div className="bg-red-500/10 border border-red-500/30 text-red-400 text-xs px-3 py-1.5 rounded-full">
              {aiError}
            </div>
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* Input Area */}
      <div className="p-2 sm:p-4 bg-transparent shrink-0 relative z-20">
        <div className="flex items-center gap-2 sm:gap-3">
          <div className="flex-1 bg-[var(--bubble-bg)] border border-[var(--wireframe)] rounded-full flex items-center px-3 sm:px-4 py-1.5 sm:py-2 shadow-sm focus-within:border-[var(--accent-color)] transition-all relative">
            <input 
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' && !e.shiftKey) {
                  e.preventDefault();
                  handleSend();
                }
              }}
              placeholder=""
              className="flex-1 bg-transparent text-[15px] text-[var(--text-primary)] outline-none h-8 min-w-0"
            />
            <div className="flex items-center gap-2 sm:gap-3 ml-1 sm:ml-2 text-[var(--text-secondary)] shrink-0">
              <button 
                onClick={() => setShowEmojiPicker(!showEmojiPicker)}
                className="hover:text-[var(--accent-color)] transition-colors p-1"
                title="发送表情"
              >
                <Smile size={22} strokeWidth={1.5} />
              </button>
              <button 
                onClick={() => setActionType('sendImage')}
                className="hover:text-[var(--accent-color)] transition-colors p-1"
                title="发送图片"
              >
                <Plus size={24} strokeWidth={1.5} />
              </button>
            </div>

            {/* Emoji Picker Popup */}
            {showEmojiPicker && (
              <>
                <div className="fixed inset-0 z-40" onClick={() => setShowEmojiPicker(false)} />
                <div className="absolute bottom-full right-0 mb-2 w-64 bg-[var(--bg-base)] rounded-xl z-50 flex flex-col shadow-2xl border border-[var(--wireframe)] animate-in fade-in zoom-in-95 duration-200 p-3">
                  <h4 className="text-xs text-[var(--text-secondary)] mb-2">常用表情</h4>
                  <div className="grid grid-cols-5 gap-2 mb-3">
                    {commonEmojis.map(emoji => (
                      <button 
                        key={emoji}
                        onClick={() => {
                          setInputValue(prev => prev + emoji);
                          setShowEmojiPicker(false);
                        }}
                        className="text-2xl hover:bg-[var(--bubble-bg)] rounded p-1 transition-colors"
                      >
                        {emoji}
                      </button>
                    ))}
                  </div>
                  <div className="h-px bg-[var(--wireframe)] mb-3" />
                  <h4 className="text-xs text-[var(--text-secondary)] mb-2">自定义表情 (URL)</h4>
                  <div className="flex gap-2">
                    <input 
                      type="text" 
                      value={customEmojiUrl}
                      onChange={e => setCustomEmojiUrl(e.target.value)}
                      placeholder="图片URL"
                      className="flex-1 bg-[var(--bubble-bg)] border border-[var(--wireframe)] rounded px-2 py-1 text-sm text-[var(--text-primary)] outline-none focus:border-[var(--accent-color)]"
                    />
                    <button 
                      onClick={handleSendCustomEmoji}
                      disabled={!customEmojiUrl.trim()}
                      className="px-3 py-1 bg-[var(--accent-color)] text-white rounded text-sm disabled:opacity-50"
                    >
                      发送
                    </button>
                  </div>
                </div>
              </>
            )}
          </div>
          <button 
            onClick={handleReceiveReply}
            disabled={isTyping}
            className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[var(--bubble-bg)] border border-[var(--wireframe)] flex items-center justify-center text-[var(--text-secondary)] hover:text-[var(--accent-color)] transition-colors shrink-0 shadow-sm disabled:opacity-50"
            title="AI 回复"
          >
            {isTyping
              ? <Loader2 size={20} strokeWidth={1.5} className="animate-spin" />
              : <MessageSquareDashed size={20} strokeWidth={1.5} />
            }
          </button>
          <button 
            onClick={handleSend}
            disabled={!inputValue.trim()}
            className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[var(--accent-color)] text-white flex items-center justify-center hover:bg-[var(--accent-color)]/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed shrink-0 shadow-sm"
          >
            <Send size={18} className="ml-0.5" />
          </button>
        </div>
      </div>

      {/* Action Modal Overlay */}
      {actionType === 'aiSettings' ? (
        <ChatAiSettingsPanel 
          contact={contact} 
          onClose={() => setActionType(null)} 
          onUpdateContact={onUpdateContact} 
        />
      ) : actionType && (
        <div className="absolute inset-0 z-[60] bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="glass-card w-full max-w-sm p-6 rounded-xl flex flex-col gap-4 animate-in fade-in zoom-in-95 duration-200 clip-corner">
            <h3 className="text-lg text-[var(--text-primary)] font-light tracking-widest border-b border-[var(--wireframe)] pb-2">
              {actionType === 'bg' && '设置聊天背景'}
              {actionType === 'avatar' && '修改好友头像'}
              {actionType === 'block' && '确认拉黑'}
              {actionType === 'sendImage' && '发送图片'}
            </h3>
            
            <div className="py-2 flex flex-col gap-3">
              {(actionType === 'bg' || actionType === 'avatar' || actionType === 'sendImage') && (
                <input 
                  type="text" 
                  value={actionInput} 
                  onChange={e => setActionInput(e.target.value)} 
                  placeholder={actionType === 'sendImage' ? "输入图片URL" : "输入图片URL (留空清除/恢复默认)"} 
                  className="w-full bg-[var(--bubble-bg)] border border-[var(--wireframe)] rounded p-3 text-[var(--text-primary)] outline-none focus:border-[var(--accent-color)] transition-colors placeholder:text-[var(--text-secondary)]"
                  autoFocus
                />
              )}
              {actionType === 'block' && (
                <p className="text-[var(--text-primary)]">确定要将此联系人加入黑名单吗？加入后将无法收到对方的消息。</p>
              )}
            </div>
            
            <div className="flex justify-end gap-3 mt-2">
              <button 
                onClick={() => { setActionType(null); setActionInput(''); }} 
                className="px-4 py-2 rounded border border-[var(--wireframe)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bubble-bg)] transition-colors"
              >
                取消
              </button>
              <button 
                onClick={handleActionSubmit} 
                className={`px-4 py-2 rounded transition-colors ${
                  actionType === 'block' 
                    ? 'bg-rose-500/20 border border-rose-500 text-rose-500 hover:bg-rose-500/40' 
                    : 'bg-[var(--accent-color)]/20 border border-[var(--accent-color)] text-[var(--accent-color)] hover:bg-[var(--accent-color)]/40'
                }`}
              >
                确认
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
