import React, { useState, useEffect } from 'react';
import { Mail, MailOpen, AlertCircle, CheckCircle, Clock, Trash2, Edit3, Send, FileText, ArrowLeft, Loader2, Settings } from 'lucide-react';
import { dataStore } from '../lib/dataStore';
import { callAI } from '../lib/aiClient';
import { fillTemplate } from '../lib/promptUtils';
import { Email } from '../types';
import { EmailCompose } from './EmailCompose';
import { EmailAiSettingsPanel } from './EmailAiSettingsPanel';

interface StarNetworkNotificationsProps {
  actionType: string | null;
  setActionType: (type: string | null) => void;
}

export const StarNetworkNotifications: React.FC<StarNetworkNotificationsProps> = ({ actionType, setActionType }) => {
  const [notifications, setNotifications] = useState<Email[]>([]);
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  
  // Inline reply state
  const [replyingToId, setReplyingToId] = useState<number | null>(null);
  const [inlineReplyText, setInlineReplyText] = useState('');

  useEffect(() => {
    const loadEmails = () => setNotifications(dataStore.getEmails());
    loadEmails();
    window.addEventListener('emailsUpdated', loadEmails);
    return () => window.removeEventListener('emailsUpdated', loadEmails);
  }, []);

  useEffect(() => {
    if (notifications.length > 0) {
      dataStore.saveEmails(notifications);
    }
  }, [notifications]);

  const handleMarkAsRead = (id: number) => {
    setNotifications(notifications.map(n => n.id === id ? { ...n, isRead: true } : n));
  };

  const handleDelete = (id: number) => {
    setNotifications(notifications.filter(n => n.id !== id));
    if (selectedId === id) setSelectedId(null);
  };

  const handleGenerateReply = async (email: Email) => {
    setIsGenerating(true);
    setReplyingToId(email.id);
    try {
      const settings = dataStore.getGlobalSettings();
      const promptSettings = dataStore.getEmailPrompt();

      const systemPrompt = fillTemplate(promptSettings.emailReplyPrompt, {
        userName: settings.userName,
        userPersona: settings.userPersona || '',
      });
      const userPrompt = `发件人: ${email.from}\n主题: ${email.subject}\n内容: ${email.body}\n\n请以${settings.userName}的身份生成一封回复。`;

      const result = await callAI({
        systemPrompt,
        userInput: userPrompt
      });
      
      setInlineReplyText(result);
    } catch (error) {
      console.error(error);
      alert('生成回复失败');
    } finally {
      setIsGenerating(false);
    }
  };

  const handleSendInlineReply = (emailId: number) => {
    if (!inlineReplyText.trim()) return;
    
    setNotifications(notifications.map(n => {
      if (n.id === emailId) {
        return {
          ...n,
          isReplied: true,
          replies: [
            ...(n.replies || []),
            {
              id: Date.now(),
              text: inlineReplyText.trim(),
              time: new Date().toLocaleTimeString('zh-CN', { hour: '2-digit', minute: '2-digit' })
            }
          ]
        };
      }
      return n;
    }));
    
    setReplyingToId(null);
    setInlineReplyText('');
  };

  const getIcon = (type: string, isRead: boolean) => {
    if (type === 'alert') return <AlertCircle size={20} className="text-rose-400" />;
    if (type === 'update') return <CheckCircle size={20} className="text-emerald-400" />;
    return isRead ? <MailOpen size={20} className="text-[var(--text-secondary)]" /> : <Mail size={20} className="text-[var(--accent-color)]" />;
  };

  const currentFolder = actionType || 'inbox';
  
  const filteredNotifications = notifications.filter(n => {
    if (currentFolder === 'drafts') return n.status === 'draft';
    if (currentFolder === 'trash') return n.status === 'trash';
    if (currentFolder === 'outbox') return n.status === 'sent';
    return n.status === 'inbox' || !n.status;
  });

  const getFolderTitle = () => {
    if (currentFolder === 'drafts') return '草稿箱';
    if (currentFolder === 'trash') return '垃圾箱';
    if (currentFolder === 'outbox') return '发件箱';
    return '收件箱';
  };

  return (
    <div className="flex-1 flex flex-col overflow-hidden relative z-10">
      {actionType === 'writeEmail' && (
        <EmailCompose 
          onClose={() => {
            setActionType(null);
            setNotifications(dataStore.getEmails()); // refresh
          }} 
        />
      )}

      {/* Header Tools */}
      <div className="flex justify-between items-center px-4 py-3 border-b border-[var(--wireframe)] bg-[var(--bubble-bg)] shrink-0">
        <div className="flex items-center gap-2">
          {currentFolder !== 'inbox' && currentFolder !== 'writeEmail' && (
            <button onClick={() => setActionType(null)} className="text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors">
              <ArrowLeft size={18} />
            </button>
          )}
          <h3 className="text-[var(--text-primary)] font-medium tracking-widest text-sm">{getFolderTitle()}</h3>
        </div>
        <div className="flex items-center gap-3">
          {currentFolder === 'inbox' && (
            <button 
              onClick={() => setNotifications(notifications.map(n => n.status === 'inbox' || !n.status ? { ...n, isRead: true } : n))}
              className="text-xs text-[var(--accent-color)] hover:text-[var(--text-primary)] transition-colors"
            >
              全部标为已读
            </button>
          )}
          <button 
            onClick={() => setShowSettings(true)}
            className="text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
          >
            <Settings size={16} />
          </button>
        </div>
      </div>

      {/* List */}
      <div className="flex-1 overflow-y-auto p-2 space-y-2 pb-20">
        {filteredNotifications.map((notification) => (
          <div 
            key={notification.id}
            onClick={() => {
              setSelectedId(selectedId === notification.id ? null : notification.id);
              if (!notification.isRead) handleMarkAsRead(notification.id);
            }}
            className={`p-3 rounded-xl border transition-all cursor-pointer group ${
              selectedId === notification.id 
                ? 'bg-[var(--card-bg)] border-[var(--accent-color)] shadow-md' 
                : 'bg-[var(--bubble-bg)] border-[var(--wireframe)] hover:border-[var(--accent-color)]/50'
            } ${!notification.isRead ? 'border-l-4 border-l-[var(--accent-color)]' : ''}`}
          >
            <div className="flex gap-3 items-start">
              <div className="shrink-0 mt-1">
                {getIcon(notification.type, notification.isRead)}
              </div>
              
              <div className="flex-1 min-w-0">
                <div className="flex justify-between items-baseline mb-1">
                  <span className={`text-sm truncate pr-2 ${!notification.isRead ? 'text-[var(--text-primary)] font-medium' : 'text-[var(--text-secondary)]'}`}>
                    {currentFolder === 'outbox' || currentFolder === 'drafts' ? `To: ${notification.to}` : notification.from}
                  </span>
                  <span className="text-[10px] text-[var(--text-secondary)] font-mono shrink-0 flex items-center gap-1">
                    <Clock size={10} />
                    {notification.time}
                  </span>
                </div>
                
                <h4 className={`text-sm truncate mb-1 ${!notification.isRead ? 'text-[var(--text-primary)]' : 'text-[var(--text-secondary)]'}`}>
                  {notification.subject}
                </h4>
                
                <p className={`text-xs leading-relaxed ${selectedId === notification.id ? 'text-[var(--text-primary)]' : 'text-[var(--text-secondary)] line-clamp-2'}`}>
                  {selectedId === notification.id ? notification.body : notification.snippet}
                </p>

                {/* Expanded Actions */}
                {selectedId === notification.id && (
                  <div className="mt-4 pt-3 border-t border-[var(--wireframe)] animate-in fade-in slide-in-from-top-2 duration-200">
                    {/* Previous Replies */}
                    {notification.replies && notification.replies.length > 0 && (
                      <div className="mb-4 space-y-2">
                        {notification.replies.map(reply => (
                          <div key={reply.id} className="bg-[var(--bg-base)] rounded p-2 text-xs border border-[var(--wireframe)]">
                            <div className="flex justify-between text-[var(--text-secondary)] mb-1">
                              <span>我</span>
                              <span>{reply.time}</span>
                            </div>
                            <p className="text-[var(--text-primary)] whitespace-pre-wrap">{reply.text}</p>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Inline Reply Area */}
                    {replyingToId === notification.id ? (
                      <div className="space-y-2">
                        <textarea 
                          value={inlineReplyText}
                          onChange={e => setInlineReplyText(e.target.value)}
                          placeholder="输入回复内容..."
                          className="w-full bg-[var(--bg-base)] border border-[var(--wireframe)] rounded px-3 py-2 text-sm text-[var(--text-primary)] outline-none focus:border-[var(--accent-color)] resize-none min-h-[80px]"
                          autoFocus
                        />
                        <div className="flex justify-end gap-2">
                          <button 
                            onClick={(e) => { e.stopPropagation(); setReplyingToId(null); setInlineReplyText(''); }}
                            className="px-3 py-1.5 rounded border border-[var(--wireframe)] text-xs text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
                          >
                            取消
                          </button>
                          <button 
                            onClick={(e) => { e.stopPropagation(); handleSendInlineReply(notification.id); }}
                            disabled={!inlineReplyText.trim()}
                            className="px-3 py-1.5 rounded bg-[var(--accent-color)] text-white text-xs hover:bg-[var(--accent-color)]/90 transition-colors disabled:opacity-50 flex items-center gap-1"
                          >
                            <Send size={12} /> 发送
                          </button>
                        </div>
                      </div>
                    ) : (
                      <div className="flex justify-end gap-3">
                        <button 
                          onClick={(e) => { e.stopPropagation(); handleDelete(notification.id); }}
                          className="flex items-center gap-1 text-xs text-rose-400 hover:text-rose-300 transition-colors px-3 py-1.5 rounded bg-rose-400/10"
                        >
                          <Trash2 size={14} /> 删除
                        </button>
                        <button 
                          onClick={(e) => { e.stopPropagation(); setReplyingToId(notification.id); setInlineReplyText(''); }}
                          className="flex items-center gap-1 text-xs text-[var(--text-primary)] hover:text-[var(--accent-color)] transition-colors px-3 py-1.5 rounded border border-[var(--wireframe)] hover:border-[var(--accent-color)]"
                        >
                          <Edit3 size={14} /> 回复
                        </button>
                        <button 
                          onClick={(e) => { e.stopPropagation(); handleGenerateReply(notification); }}
                          disabled={isGenerating}
                          className="flex items-center gap-1 text-xs text-[var(--accent-color)] hover:text-white transition-colors px-3 py-1.5 rounded bg-[var(--accent-color)]/20 disabled:opacity-50"
                        >
                          {isGenerating ? <Loader2 size={14} className="animate-spin" /> : <Mail size={14} />} 
                          {isGenerating ? '生成中...' : 'AI 生成回复'}
                        </button>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
        
        {filteredNotifications.length === 0 && (
          <div className="flex flex-col items-center justify-center h-40 text-[var(--text-secondary)] opacity-50">
            {currentFolder === 'drafts' ? <FileText size={48} className="mb-4" /> :
             currentFolder === 'trash' ? <Trash2 size={48} className="mb-4" /> :
             currentFolder === 'outbox' ? <Send size={48} className="mb-4" /> :
             <MailOpen size={48} className="mb-4" />}
            <p className="tracking-widest">{getFolderTitle()}为空</p>
          </div>
        )}
      </div>

      {showSettings && <EmailAiSettingsPanel onClose={() => setShowSettings(false)} />}
    </div>
  );
};
