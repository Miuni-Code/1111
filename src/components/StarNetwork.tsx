import React, { useState, useEffect, useRef } from 'react';
import { MessageSquare, Globe, Bell, Shield, Cloud, ChevronLeft, Plus, UserPlus, Image as ImageIcon, Search, Edit2, UserMinus, PlusSquare, Edit3, FileText, Trash2, Send, CheckSquare, Users, RefreshCw, Settings, Upload, BookUser, X } from 'lucide-react';
import { ChatInterface } from './ChatInterface';
import { StarNetworkMoments } from './StarNetworkMoments';
import { StarNetworkNotifications } from './StarNetworkNotifications';
import { dataStore } from '../lib/dataStore';
import { getCharacterList, getCharacterDetail, parseTavernCharacterCard, saveCharacter, deleteCharacter, getStoredCharacters } from '../lib/characterClient';
import { callAI } from '../lib/aiClient';
import { fillTemplate } from '../lib/promptUtils';
import { CharacterInfo, Contact, CharacterDetail } from '../types';

interface StarNetworkProps {
  onBack: () => void;
  settings?: any;
}

export const StarNetwork: React.FC<StarNetworkProps> = ({ onBack, settings }) => {
  const [activeTab, setActiveTab] = useState('chat');
  const [contacts, setContacts] = useState<Contact[]>(() => dataStore.getContacts());
  const [bgImage, setBgImage] = useState<string | null>(null);
  const [showMenu, setShowMenu] = useState(false);
  
  const [actionType, setActionType] = useState<string | null>(null);
  const [inputValue, setInputValue] = useState('');
  const [activeChatId, setActiveChatId] = useState<number | null>(null);
  const [selectedContactId, setSelectedContactId] = useState<number | null>(null);
  const [characterList, setCharacterList] = useState<CharacterInfo[]>([]);
  const [selectedCharacter, setSelectedCharacter] = useState<string>('');
  const [importedChars, setImportedChars] = useState<CharacterDetail[]>(() => getStoredCharacters());
  const [showCharManager, setShowCharManager] = useState(false);

  const initialized = useRef(false);

  useEffect(() => {
    initialized.current = true;
  }, []);

  useEffect(() => {
    if (initialized.current) {
      dataStore.saveContacts(contacts);
    }
  }, [contacts]);

  useEffect(() => {
    if (actionType === 'add') {
      getCharacterList().then(setCharacterList);
    }
    setInputValue('');
    setSelectedContactId(null);
    setSelectedCharacter('');
  }, [actionType]);

  const [isGenerating, setIsGenerating] = useState(false);

  const handleActionSubmit = async () => {
    if (actionType === 'add') {
      if (selectedCharacter) {
        setIsGenerating(true);
        try {
          const charDetail = await getCharacterDetail(selectedCharacter);
          if (charDetail) {
            const newContact: Contact = {
              id: Date.now(),
              name: charDetail.name,
              lastMessage: charDetail.firstMessage || '已添加为好友',
              time: '刚刚',
              unread: true,
              type: 'user',
              avatar: charDetail.avatar,
              online: true,
              description: charDetail.description
            };
            setContacts([newContact, ...contacts]);
            
            if (charDetail.firstMessage) {
              dataStore.saveChats(newContact.id, [{
                id: Date.now(),
                text: charDetail.firstMessage,
                sender: 'them',
                time: new Date().toLocaleTimeString('zh-CN', { hour: '2-digit', minute: '2-digit' }),
                read: false
              }]);
            }
          }
        } finally {
          setIsGenerating(false);
        }
      } else if (inputValue.trim()) {
        const newContact: Contact = {
          id: Date.now(),
          name: inputValue.trim(),
          lastMessage: '已添加为好友',
          time: '刚刚',
          unread: false,
          type: 'user',
          avatar: `https://picsum.photos/seed/${Date.now()}/100/100`,
          online: true
        };
        setContacts([newContact, ...contacts]);
      }
    } else if (actionType === 'delete' && selectedContactId) {
      setContacts(contacts.filter(c => c.id !== selectedContactId));
    } else if (actionType === 'editName' && selectedContactId && inputValue.trim()) {
      setContacts(contacts.map(c => c.id === selectedContactId ? { ...c, name: inputValue.trim() } : c));
    } else if (actionType === 'bg') {
      setBgImage(inputValue.trim() || null);
    } else if (actionType === 'momentBg') {
      const currentSettings = dataStore.getGlobalSettings();
      currentSettings.moduleBgs = { ...currentSettings.moduleBgs, '星网动态': inputValue.trim() || '' };
      dataStore.saveGlobalSettings(currentSettings);
      window.dispatchEvent(new Event('settingsUpdated'));
    } else if (actionType === 'clearRead') {
      const emails = dataStore.getEmails();
      const updatedEmails = emails.map(e =>
        (e.status === 'inbox' || !e.status) ? { ...e, isRead: true } : e
      );
      dataStore.saveEmails(updatedEmails);
      window.dispatchEvent(new Event('emailsUpdated'));
    }
    setActionType(null);
  };

  const handleUpdateContact = (updatedContact: Contact) => {
    setContacts(contacts.map(c => c.id === updatedContact.id ? updatedContact : c));
  };

  const handleDeleteContact = (id: number) => {
    setContacts(contacts.filter(c => c.id !== id));
  };

  const activeContact = contacts.find(c => c.id === activeChatId);

  if (activeChatId && activeContact) {
    return (
      <ChatInterface 
        contact={activeContact} 
        onBack={() => setActiveChatId(null)} 
        onUpdateContact={handleUpdateContact}
        onDeleteContact={handleDeleteContact}
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
        
        <div className="relative">
          <button 
            onClick={() => setShowMenu(!showMenu)} 
            className="p-2 text-[var(--text-secondary)] hover:text-[var(--accent-color)] transition-colors"
          >
            <Plus size={24} />
          </button>
          
          {showMenu && (
            <>
              <div className="fixed inset-0 z-40" onClick={() => setShowMenu(false)} />
              <div className="absolute right-0 top-full mt-3 w-44 bg-[var(--bg-base)] rounded-xl z-50 flex flex-col shadow-2xl border border-[var(--wireframe)] animate-in fade-in zoom-in-95 duration-200">
                {/* Triangle pointer */}
                <div className="absolute -top-2 right-3 w-4 h-4 bg-[var(--bg-base)] border-t border-l border-[var(--wireframe)] transform rotate-45" />
                
                <div className="relative z-10 flex flex-col py-2">
                  {activeTab === 'chat' && (
                    <>
                      <button onClick={() => { setActionType('add'); setShowMenu(false); }} className="flex items-center gap-3 px-4 py-3 hover:bg-[var(--bubble-bg)] text-[var(--text-primary)] text-[15px] text-left transition-colors">
                        <UserPlus size={20} className="text-[var(--text-primary)]" strokeWidth={1.5} /> 添加好友
                      </button>
                      <button onClick={() => { setShowCharManager(true); setShowMenu(false); }} className="flex items-center gap-3 px-4 py-3 hover:bg-[var(--bubble-bg)] text-[var(--text-primary)] text-[15px] text-left transition-colors">
                        <BookUser size={20} className="text-[var(--text-primary)]" strokeWidth={1.5} /> 角色卡管理
                      </button>
                      <button onClick={() => { setActionType('delete'); setShowMenu(false); }} className="flex items-center gap-3 px-4 py-3 hover:bg-[var(--bubble-bg)] text-[var(--text-primary)] text-[15px] text-left transition-colors">
                        <UserMinus size={20} className="text-[var(--text-primary)]" strokeWidth={1.5} /> 删除好友
                      </button>
                      <button onClick={() => { setActionType('search'); setShowMenu(false); }} className="flex items-center gap-3 px-4 py-3 hover:bg-[var(--bubble-bg)] text-[var(--text-primary)] text-[15px] text-left transition-colors">
                        <Search size={20} className="text-[var(--text-primary)]" strokeWidth={1.5} /> 搜索好友
                      </button>
                      <button onClick={() => { setActionType('editName'); setShowMenu(false); }} className="flex items-center gap-3 px-4 py-3 hover:bg-[var(--bubble-bg)] text-[var(--text-primary)] text-[15px] text-left transition-colors">
                        <Edit2 size={20} className="text-[var(--text-primary)]" strokeWidth={1.5} /> 修改昵称
                      </button>
                      <div className="h-px bg-[var(--wireframe)] my-1 mx-4" />
                      <button onClick={() => { setActionType('bg'); setShowMenu(false); }} className="flex items-center gap-3 px-4 py-3 hover:bg-[var(--bubble-bg)] text-[var(--text-primary)] text-[15px] text-left transition-colors">
                        <ImageIcon size={20} className="text-[var(--text-primary)]" strokeWidth={1.5} /> 设置背景
                      </button>
                    </>
                  )}
                  {activeTab === 'moments' && (
                    <>
                      <button onClick={() => { setActionType('publishMoment'); setShowMenu(false); }} className="flex items-center gap-3 px-4 py-3 hover:bg-[var(--bubble-bg)] text-[var(--text-primary)] text-[15px] text-left transition-colors">
                        <Edit2 size={20} className="text-[var(--text-primary)]" strokeWidth={1.5} /> 发布动态
                      </button>
                      <button onClick={() => { window.dispatchEvent(new Event('refreshMoments')); setShowMenu(false); }} className="flex items-center gap-3 px-4 py-3 hover:bg-[var(--bubble-bg)] text-[var(--text-primary)] text-[15px] text-left transition-colors">
                        <RefreshCw size={20} className="text-[var(--text-primary)]" strokeWidth={1.5} /> 刷新星网
                      </button>
                      <div className="h-px bg-[var(--wireframe)] my-1 mx-4" />
                      <button onClick={() => { setActionType('momentBg'); setShowMenu(false); }} className="flex items-center gap-3 px-4 py-3 hover:bg-[var(--bubble-bg)] text-[var(--text-primary)] text-[15px] text-left transition-colors">
                        <ImageIcon size={20} className="text-[var(--text-primary)]" strokeWidth={1.5} /> 设置动态背景
                      </button>
                      <button onClick={() => { setActionType('momentSettings'); setShowMenu(false); }} className="flex items-center gap-3 px-4 py-3 hover:bg-[var(--bubble-bg)] text-[var(--text-primary)] text-[15px] text-left transition-colors">
                        <Settings size={20} className="text-[var(--text-primary)]" strokeWidth={1.5} /> 动态设置
                      </button>
                    </>
                  )}
                  {activeTab === 'notifications' && (
                    <>
                      <button onClick={() => { setActionType('writeEmail'); setShowMenu(false); }} className="flex items-center gap-3 px-4 py-3 hover:bg-[var(--bubble-bg)] text-[var(--text-primary)] text-[15px] text-left transition-colors">
                        <Edit3 size={20} className="text-[var(--text-primary)]" strokeWidth={1.5} /> 写邮件
                      </button>
                      <button onClick={() => { setActionType('drafts'); setShowMenu(false); }} className="flex items-center gap-3 px-4 py-3 hover:bg-[var(--bubble-bg)] text-[var(--text-primary)] text-[15px] text-left transition-colors">
                        <FileText size={20} className="text-[var(--text-primary)]" strokeWidth={1.5} /> 草稿箱
                      </button>
                      <button onClick={() => { setActionType('trash'); setShowMenu(false); }} className="flex items-center gap-3 px-4 py-3 hover:bg-[var(--bubble-bg)] text-[var(--text-primary)] text-[15px] text-left transition-colors">
                        <Trash2 size={20} className="text-[var(--text-primary)]" strokeWidth={1.5} /> 垃圾箱
                      </button>
                      <button onClick={() => { setActionType('outbox'); setShowMenu(false); }} className="flex items-center gap-3 px-4 py-3 hover:bg-[var(--bubble-bg)] text-[var(--text-primary)] text-[15px] text-left transition-colors">
                        <Send size={20} className="text-[var(--text-primary)]" strokeWidth={1.5} /> 发件箱
                      </button>
                      <div className="h-px bg-[var(--wireframe)] my-1 mx-4" />
                      <button onClick={() => { setActionType('clearRead'); setShowMenu(false); }} className="flex items-center gap-3 px-4 py-3 hover:bg-[var(--bubble-bg)] text-[var(--text-primary)] text-[15px] text-left transition-colors">
                        <CheckSquare size={20} className="text-[var(--text-primary)]" strokeWidth={1.5} /> 清空所有已读
                      </button>
                    </>
                  )}
                </div>
              </div>
            </>
          )}
        </div>
      </div>

      {/* Content Area */}
      {activeTab === 'chat' && (
        <div className="flex-1 overflow-y-auto p-2 space-y-1 relative z-10">
          {contacts.map((contact) => (
            <div 
              key={contact.id}
              onClick={() => setActiveChatId(contact.id)}
              className="flex items-center p-3 rounded-xl hover:bg-[var(--bubble-bg)] cursor-pointer transition-colors group"
            >
              {/* Avatar / Icon */}
              <div className="relative shrink-0 mr-4">
                {contact.type === 'system' ? (
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center ${contact.bgColor} border border-[var(--wireframe)] group-hover:border-[var(--accent-color)] transition-colors`}>
                    {contact.icon && <contact.icon className={contact.color} size={24} />}
                  </div>
                ) : (
                  <div className="w-12 h-12 rounded-full border border-[var(--wireframe)] group-hover:border-[var(--accent-color)] transition-colors p-0.5 bg-[var(--card-bg)]">
                    <img src={contact.avatar || undefined} alt={contact.name} className="w-full h-full rounded-full object-cover" referrerPolicy="no-referrer" />
                  </div>
                )}
                
                {/* Online Status / Unread Dot */}
                {contact.type === 'user' && (
                  <div className={`absolute bottom-0 right-0 w-3 h-3 rounded-full border-2 border-[var(--bg-base)] ${contact.online ? 'bg-emerald-400' : 'bg-slate-500'}`} />
                )}
                {contact.unread && contact.type === 'system' && (
                  <div className="absolute top-0 right-0 w-3 h-3 rounded-full border-2 border-[var(--bg-base)] bg-rose-500 animate-pulse" />
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

      {/* Action Modal Overlay */}
      {actionType && !['writeEmail', 'drafts', 'trash', 'outbox'].includes(actionType) && (
        <div className="absolute inset-0 z-[60] bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="glass-card w-full max-w-sm p-6 rounded-xl flex flex-col gap-4 animate-in fade-in zoom-in-95 duration-200 clip-corner">
            <h3 className="text-lg text-[var(--text-primary)] font-light tracking-widest border-b border-[var(--wireframe)] pb-2">
              {actionType === 'add' && '添加好友'}
              {actionType === 'delete' && '删除好友'}
              {actionType === 'search' && '搜索好友'}
              {actionType === 'editName' && '修改昵称'}
              {actionType === 'bg' && '设置背景'}
              {actionType === 'momentBg' && '设置动态背景'}
              {actionType === 'writeEmail' && '写邮件'}
              {actionType === 'drafts' && '草稿箱'}
              {actionType === 'trash' && '垃圾箱'}
              {actionType === 'outbox' && '发件箱'}
              {actionType === 'clearRead' && '清空所有已读'}
            </h3>
            
            <div className="py-2 flex flex-col gap-3">
              {actionType === 'add' && (
                <div className="flex flex-col gap-3">
                  <div className="flex items-center justify-between mb-1">
                    <div className="text-sm text-[var(--text-secondary)]">方式一：从角色卡选择</div>
                    <label className="cursor-pointer text-xs text-[var(--accent-color)] hover:text-[var(--text-primary)] transition-colors flex items-center gap-1 border border-[var(--wireframe)] rounded px-2 py-1 hover:border-[var(--accent-color)]">
                      <Upload size={12} />
                      导入 JSON
                      <input
                        type="file"
                        accept=".json"
                        className="hidden"
                        onChange={async (e) => {
                          const file = e.target.files?.[0];
                          if (!file) return;
                          try {
                            const text = await file.text();
                            const json = JSON.parse(text);
                            const parsed = parseTavernCharacterCard(json);
                            if (parsed) {
                              saveCharacter(parsed);
                              setImportedChars(getStoredCharacters());
                              const list = await getCharacterList();
                              setCharacterList(list);
                              setSelectedCharacter(parsed.name);
                              alert(`✓ 成功导入角色：${parsed.name}`);
                            } else {
                              alert('无法识别此文件，请确认是 SillyTavern 格式的角色卡 JSON。');
                            }
                          } catch {
                            alert('文件解析失败，请检查 JSON 格式。');
                          }
                          e.target.value = '';
                        }}
                      />
                    </label>
                  </div>
                  <select 
                    value={selectedCharacter} 
                    onChange={e => {
                      setSelectedCharacter(e.target.value);
                      setInputValue('');
                    }}
                    className="w-full bg-[var(--bubble-bg)] border border-[var(--wireframe)] rounded p-3 text-[var(--text-primary)] outline-none focus:border-[var(--accent-color)] transition-colors [&>option]:bg-[var(--bg-base)]"
                  >
                    <option value="">-- 不选择角色卡 --</option>
                    {characterList.map(c => (
                      <option key={c.name} value={c.name}>{c.name}</option>
                    ))}
                  </select>
                  
                  <div className="text-sm text-[var(--text-secondary)] mt-2 mb-1">方式二：手动创建</div>
                  <input 
                    type="text" 
                    value={inputValue} 
                    onChange={e => {
                      setInputValue(e.target.value);
                      setSelectedCharacter('');
                    }} 
                    placeholder="输入好友名称" 
                    className="w-full bg-[var(--bubble-bg)] border border-[var(--wireframe)] rounded p-3 text-[var(--text-primary)] outline-none focus:border-[var(--accent-color)] transition-colors placeholder:text-[var(--text-secondary)]"
                  />
                </div>
              )}

              {actionType === 'search' && (
                <input 
                  type="text" 
                  value={inputValue} 
                  onChange={e => setInputValue(e.target.value)} 
                  placeholder="输入搜索关键词" 
                  className="w-full bg-[var(--bubble-bg)] border border-[var(--wireframe)] rounded p-3 text-[var(--text-primary)] outline-none focus:border-[var(--accent-color)] transition-colors placeholder:text-[var(--text-secondary)]"
                  autoFocus
                />
              )}
              
              {(actionType === 'delete' || actionType === 'editName') && (
                <select 
                  value={selectedContactId || ''} 
                  onChange={e => setSelectedContactId(Number(e.target.value))}
                  className="w-full bg-[var(--bubble-bg)] border border-[var(--wireframe)] rounded p-3 text-[var(--text-primary)] outline-none focus:border-[var(--accent-color)] transition-colors [&>option]:bg-[var(--bg-base)]"
                >
                  <option value="" disabled>选择一个好友</option>
                  {contacts.filter(c => c.type === 'user').map(c => (
                    <option key={c.id} value={c.id}>{c.name}</option>
                  ))}
                </select>
              )}
              
              {actionType === 'editName' && selectedContactId && (
                <input 
                  type="text" 
                  value={inputValue} 
                  onChange={e => setInputValue(e.target.value)} 
                  placeholder="输入新昵称" 
                  className="w-full bg-[var(--bubble-bg)] border border-[var(--wireframe)] rounded p-3 text-[var(--text-primary)] outline-none focus:border-[var(--accent-color)] transition-colors placeholder:text-[var(--text-secondary)]"
                  autoFocus
                />
              )}
              
              {(actionType === 'bg' || actionType === 'momentBg') && (
                <input 
                  type="text" 
                  value={inputValue} 
                  onChange={e => setInputValue(e.target.value)} 
                  placeholder="输入图片URL (留空清除)" 
                  className="w-full bg-[var(--bubble-bg)] border border-[var(--wireframe)] rounded p-3 text-[var(--text-primary)] outline-none focus:border-[var(--accent-color)] transition-colors placeholder:text-[var(--text-secondary)]"
                  autoFocus
                />
              )}

              {['clearRead'].includes(actionType) && (
                <p className="text-[var(--text-secondary)] text-sm">确认清空所有已读邮件吗？此操作不可恢复。</p>
              )}
            </div>
            
            <div className="flex justify-end gap-3 mt-2">
              <button 
                onClick={() => setActionType(null)} 
                className="px-4 py-2 rounded border border-[var(--wireframe)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bubble-bg)] transition-colors"
              >
                取消
              </button>
              <button 
                onClick={handleActionSubmit} 
                disabled={
                  (actionType === 'add' && !inputValue.trim() && !selectedCharacter) || 
                  ((actionType === 'delete' || actionType === 'editName') && !selectedContactId) || 
                  (actionType === 'editName' && !inputValue.trim()) ||
                  isGenerating
                }
                className="px-4 py-2 rounded bg-[var(--accent-color)]/20 border border-[var(--accent-color)] text-[var(--accent-color)] hover:bg-[var(--accent-color)]/40 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isGenerating ? '生成中...' : '确认'}
              </button>
            </div>
          </div>
        </div>
      )}
      {showCharManager && (
        <div className="absolute inset-0 z-[60] bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="glass-card w-full max-w-sm p-6 rounded-xl flex flex-col gap-4 animate-in fade-in zoom-in-95 duration-200 clip-corner max-h-[80vh]">
            <div className="flex justify-between items-center border-b border-[var(--wireframe)] pb-2">
              <h3 className="text-lg text-[var(--text-primary)] font-light tracking-widest">角色卡管理</h3>
              <button onClick={() => setShowCharManager(false)} className="text-[var(--text-secondary)] hover:text-[var(--text-primary)]">
                <X size={20} />
              </button>
            </div>
            <div className="flex-1 overflow-y-auto space-y-2">
              {importedChars.length === 0 ? (
                <p className="text-sm text-[var(--text-secondary)] text-center py-6">暂无导入的角色卡<br /><span className="text-xs">在「添加好友」中导入 JSON 文件</span></p>
              ) : importedChars.map(char => (
                <div key={char.name} className="flex items-center gap-3 p-3 rounded-lg bg-[var(--bubble-bg)] border border-[var(--wireframe)]">
                  <img src={char.avatar || `https://picsum.photos/seed/${char.name}/40/40`} alt={char.name} className="w-10 h-10 rounded-full object-cover shrink-0" referrerPolicy="no-referrer" />
                  <div className="flex-1 min-w-0">
                    <p className="text-sm text-[var(--text-primary)] font-medium truncate">{char.name}</p>
                    <p className="text-xs text-[var(--text-secondary)] truncate">{char.description?.slice(0, 40) || '无描述'}</p>
                  </div>
                  <button
                    onClick={() => {
                      deleteCharacter(char.name);
                      setImportedChars(getStoredCharacters());
                    }}
                    className="text-rose-400 hover:text-rose-300 shrink-0 p-1"
                  >
                    <Trash2 size={16} />
                  </button>
                </div>
              ))}
            </div>
            <p className="text-[10px] text-[var(--text-secondary)] text-center">删除角色卡不影响已添加的联系人</p>
          </div>
        </div>
      )}
    </div>
  );
};
