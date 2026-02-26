import React, { useState, useEffect } from 'react';
import { Heart, MessageCircle, Share2, MoreHorizontal, Send, Edit2, Trash2, Settings, Plus, RefreshCw, Loader2 } from 'lucide-react';
import { dataStore } from '../lib/dataStore';
import { callAI } from '../lib/aiClient';
import { fillTemplate } from '../lib/promptUtils';
import { Moment, GlobalSettings } from '../types';
import { MomentAiSettingsPanel } from './MomentAiSettingsPanel';
import { PublishMomentModal } from './PublishMomentModal';

interface StarNetworkMomentsProps {
  actionType: string | null;
  setActionType: (type: string | null) => void;
}

export const StarNetworkMoments: React.FC<StarNetworkMomentsProps> = ({ actionType, setActionType }) => {
  const [moments, setMoments] = useState<Moment[]>([]);
  const [newComment, setNewComment] = useState<{ momentId: number; text: string } | null>(null);
  const [activeMomentMenu, setActiveMomentMenu] = useState<number | null>(null);
  const [settings, setSettings] = useState<GlobalSettings>(dataStore.getGlobalSettings());
  const [showSettings, setShowSettings] = useState(false);
  const [showPublish, setShowPublish] = useState(false);
  const [isRefreshing, setIsRefreshing] = useState(false);
  useEffect(() => {
    const handleRefreshEvent = () => {
      handleRefresh();
    };
    window.addEventListener('refreshMoments', handleRefreshEvent);
    return () => window.removeEventListener('refreshMoments', handleRefreshEvent);
  }, []);

  useEffect(() => {
    const handleSettingsUpdated = () => {
      setSettings(dataStore.getGlobalSettings());
    };
    window.addEventListener('settingsUpdated', handleSettingsUpdated);
    return () => window.removeEventListener('settingsUpdated', handleSettingsUpdated);
  }, []);

  useEffect(() => {
    if (actionType === 'publishMoment') {
      setShowPublish(true);
      setActionType(null);
    } else if (actionType === 'momentSettings') {
      setShowSettings(true);
      setActionType(null);
    }
  }, [actionType, setActionType]);

  useEffect(() => {
    setMoments(dataStore.getMoments());

    const handleMomentsUpdated = () => {
      setMoments(dataStore.getMoments());
    };

    window.addEventListener('momentsUpdated', handleMomentsUpdated);
    return () => window.removeEventListener('momentsUpdated', handleMomentsUpdated);
  }, []);

  useEffect(() => {
    if (moments.length > 0) {
      dataStore.saveMoments(moments);
    }
  }, [moments]);

  const handleLike = (id: number) => {
    setMoments(moments.map(m => {
      if (m.id === id) {
        return {
          ...m,
          likes: m.isLiked ? m.likes - 1 : m.likes + 1,
          isLiked: !m.isLiked
        };
      }
      return m;
    }));
  };

  const handleDeleteMoment = (id: number) => {
    setMoments(moments.filter(m => m.id !== id));
    setActiveMomentMenu(null);
  };

  const handleAddComment = (momentId: number) => {
    if (!newComment || !newComment.text.trim()) return;
    
    setMoments(moments.map(m => {
      if (m.id === momentId) {
        return {
          ...m,
          comments: [...m.comments, { id: Date.now(), author: '我', text: newComment.text.trim() }]
        };
      }
      return m;
    }));
    setNewComment(null);
  };

  const handleRefresh = async () => {
    setIsRefreshing(true);
    try {
      const contacts = dataStore.getContacts().filter(c => c.type === 'user');
      if (contacts.length === 0) {
        setIsRefreshing(false);
        return;
      }
      
      const randomContact = contacts[Math.floor(Math.random() * contacts.length)];
      const chats = (dataStore.getChats(randomContact.id) || []).slice(-10);
      const chatContext = chats.map(c => `${c.sender === 'me' ? '我' : randomContact.name}: ${c.text}`).join('\n');
      
      const templates = dataStore.getPromptTemplates();
      const momentTemplate = templates.momentFromChat || {
        systemPrompt: '你是 {{characterName}}，正在发一条星网动态（类似朋友圈）。',
        userPrompt: '根据以下最近的聊天内容，以 {{characterName}} 的口吻生成一条生动的动态文字（50-100字，用第一人称，可以加1-2个emoji，符合角色性格）：\n{{recentChatSummary}}'
      };
      
      const systemPrompt = fillTemplate(momentTemplate.systemPrompt, {
        characterName: randomContact.name,
        characterDescription: randomContact.description || '',
      });
      
      const userInput = fillTemplate(momentTemplate.userPrompt, {
        characterName: randomContact.name,
        recentChatSummary: chatContext || '无最近对话',
        characterDescription: randomContact.description || '',
      });
      
      const content = await callAI([
        { role: 'system', content: systemPrompt },
        { role: 'user', content: userInput }
      ]);
      
      if (content) {
        const newMoment: Moment = {
          id: Date.now(),
          author: randomContact.name,
          avatar: randomContact.avatar,
          content: content.trim(),
          time: '刚刚',
          likes: 0,
          comments: [],
          isLiked: false
        };
        setMoments(prev => [newMoment, ...prev]);
      }
    } catch (error) {
      console.error('Failed to generate moment:', error);
      // Fallback to shuffle if generation fails
      setMoments(prev => {
        const myMoments = prev.filter(m => m.author === '我');
        const othersMoments = prev.filter(m => m.author !== '我');
        for (let i = othersMoments.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [othersMoments[i], othersMoments[j]] = [othersMoments[j], othersMoments[i]];
        }
        return [...myMoments, ...othersMoments];
      });
    } finally {
      setIsRefreshing(false);
    }
  };

  const handlePublish = (newMoment: Omit<Moment, 'id' | 'time' | 'likes' | 'comments'>) => {
    const moment: Moment = {
      ...newMoment,
      id: Date.now(),
      time: '刚刚',
      likes: 0,
      comments: []
    };
    setMoments([moment, ...moments]);
  };

  return (
    <div className="flex-1 overflow-y-auto relative z-10 pb-20">
      {/* Cover Image Area */}
      <div className="relative h-48 mb-16">
        <img 
          src={settings.moduleBgs?.['星网动态'] || "https://picsum.photos/seed/cover/800/400"} 
          alt="Cover" 
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute -bottom-8 right-4 flex items-end">
          <span className="text-white text-lg font-medium mr-4 drop-shadow-md tracking-widest">{settings.userName}</span>
          <div className="w-20 h-20 rounded-xl border-2 border-[var(--bg-base)] bg-[var(--card-bg)] overflow-hidden shadow-lg">
            <img 
              src={settings.avatarUrl || undefined} 
              alt="My Avatar" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </div>

      {/* Moments Feed */}
      <div className="px-4 space-y-6">
        {isRefreshing ? (
          <div className="flex justify-center py-10">
            <Loader2 className="animate-spin text-[var(--accent-color)]" size={24} />
          </div>
        ) : moments.map((moment) => (
          <div key={moment.id} className="flex gap-3 border-b border-[var(--wireframe)] pb-6 last:border-0">
            {/* Avatar */}
            <div className="w-10 h-10 rounded-lg overflow-hidden shrink-0 border border-[var(--wireframe)]">
              <img src={moment.avatar || undefined} alt={moment.author} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
            </div>

            {/* Content */}
            <div className="flex-1 min-w-0">
              <h3 className="text-[var(--accent-color)] font-medium text-sm mb-1">{moment.author}</h3>
              <p className="text-[var(--text-primary)] text-sm mb-2 leading-relaxed">{moment.content}</p>
              
              {moment.image && (
                <div className="mb-3 rounded-lg overflow-hidden border border-[var(--wireframe)] max-w-[80%]">
                  <img src={moment.image || undefined} alt="Moment attachment" className="w-full h-auto object-cover" referrerPolicy="no-referrer" />
                </div>
              )}

              <div className="flex justify-between items-center mb-3">
                <span className="text-xs text-[var(--text-secondary)] font-mono">{moment.time}</span>
                <div className="flex gap-4 text-[var(--text-secondary)]">
                  <button 
                    onClick={() => handleLike(moment.id)}
                    className={`flex items-center gap-1 text-xs transition-colors ${moment.isLiked ? 'text-rose-400' : 'hover:text-[var(--accent-color)]'}`}
                  >
                    <Heart size={14} className={moment.isLiked ? 'fill-rose-400' : ''} />
                    {moment.likes > 0 && moment.likes}
                  </button>
                  <button 
                    onClick={() => setNewComment({ momentId: moment.id, text: '' })}
                    className="flex items-center gap-1 text-xs hover:text-[var(--accent-color)] transition-colors"
                  >
                    <MessageCircle size={14} />
                  </button>
                  <div className="relative">
                    {moment.author === '我' && (
                      <button 
                        onClick={() => setActiveMomentMenu(activeMomentMenu === moment.id ? null : moment.id)}
                        className="flex items-center gap-1 text-xs hover:text-[var(--accent-color)] transition-colors"
                      >
                        <MoreHorizontal size={14} />
                      </button>
                    )}
                    {activeMomentMenu === moment.id && moment.author === '我' && (
                      <>
                        <div className="fixed inset-0 z-40" onClick={() => setActiveMomentMenu(null)} />
                        <div className="absolute right-0 top-full mt-1 w-28 bg-[var(--bg-base)] rounded-lg z-50 flex flex-col shadow-xl border border-[var(--wireframe)] overflow-hidden">
                          <button onClick={() => setActiveMomentMenu(null)} className="flex items-center gap-2 px-3 py-2 text-xs text-left hover:bg-[var(--bubble-bg)] text-[var(--text-primary)]">
                            <Edit2 size={12} /> 修改动态
                          </button>
                          <button onClick={() => handleDeleteMoment(moment.id)} className="flex items-center gap-2 px-3 py-2 text-xs text-left hover:bg-[var(--bubble-bg)] text-rose-500">
                            <Trash2 size={12} /> 删除动态
                          </button>
                        </div>
                      </>
                    )}
                  </div>
                </div>
              </div>

              {/* Comments Section */}
              {moment.comments && moment.comments.length > 0 && (
                <div className="bg-[var(--bubble-bg)] rounded p-2 space-y-1">
                  {moment.comments.map(comment => (
                    <div key={comment.id} className="text-xs leading-relaxed">
                      <span className="text-[var(--accent-color)] font-medium">{comment.author}: </span>
                      <span className="text-[var(--text-primary)]">{comment.text}</span>
                    </div>
                  ))}
                </div>
              )}

              {/* Comment Input */}
              {newComment?.momentId === moment.id && (
                <div className="mt-2 flex items-center gap-2">
                  <input
                    type="text"
                    value={newComment.text}
                    onChange={(e) => setNewComment({ ...newComment, text: e.target.value })}
                    placeholder="评论..."
                    className="flex-1 bg-[var(--bubble-bg)] border border-[var(--wireframe)] rounded px-3 py-1.5 text-xs text-[var(--text-primary)] outline-none focus:border-[var(--accent-color)] transition-colors"
                    autoFocus
                    onKeyDown={(e) => {
                      if (e.key === 'Enter') handleAddComment(moment.id);
                    }}
                  />
                  <button 
                    onClick={() => handleAddComment(moment.id)}
                    disabled={!newComment.text.trim()}
                    className="p-1.5 rounded bg-[var(--accent-color)]/20 text-[var(--accent-color)] disabled:opacity-50"
                  >
                    <Send size={14} />
                  </button>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {showSettings && <MomentAiSettingsPanel onClose={() => setShowSettings(false)} />}
      {showPublish && <PublishMomentModal onClose={() => setShowPublish(false)} onPublish={handlePublish} />}
    </div>
  );
};
