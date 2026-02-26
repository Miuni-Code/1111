import React, { useState, useEffect } from 'react';
import { X, Send, Loader2 } from 'lucide-react';
import { dataStore } from '../lib/dataStore';
import { callAI } from '../lib/aiClient';
import { fillTemplate } from '../lib/promptUtils';
import { Moment, Contact } from '../types';

interface PublishMomentModalProps {
  onClose: () => void;
  onPublish: (moment: Omit<Moment, 'id' | 'time' | 'likes' | 'comments'>) => void;
}

export const PublishMomentModal: React.FC<PublishMomentModalProps> = ({ onClose, onPublish }) => {
  const [activeTab, setActiveTab] = useState<'custom' | 'ai'>('custom');
  
  // Custom Tab State
  const [content, setContent] = useState('');
  const [imageUrl, setImageUrl] = useState('');

  // AI Tab State
  const [aiSource, setAiSource] = useState<'manual' | 'chat'>('manual');
  const [aiTopic, setAiTopic] = useState('');
  const [selectedContactId, setSelectedContactId] = useState<number | ''>('');
  const [aiGeneratedContent, setAiGeneratedContent] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [contacts, setContacts] = useState<Contact[]>([]);

  useEffect(() => {
    setContacts(dataStore.getContacts());
  }, []);

  const handlePublishCustom = () => {
    if (!content.trim()) return;
    onPublish({
      author: '我',
      avatar: dataStore.getGlobalSettings().avatarUrl,
      content: content.trim(),
      image: imageUrl.trim() || undefined
    });
    onClose();
  };

  const handlePublishAi = () => {
    if (!aiGeneratedContent.trim()) return;
    onPublish({
      author: '我',
      avatar: dataStore.getGlobalSettings().avatarUrl,
      content: aiGeneratedContent.trim()
    });
    onClose();
  };

  const handleGenerateAi = async () => {
    setIsGenerating(true);
    try {
      const promptSettings = dataStore.getMomentPrompt();
      const settings = dataStore.getGlobalSettings();
      
      let systemPrompt = '';
      let userInput = '';

      if (aiSource === 'manual') {
        systemPrompt = fillTemplate(promptSettings.momentPrompt, {
          characterName: settings.userName,
          characterDescription: settings.tag || '深空观察者'
        });
        userInput = `请根据以下主题生成动态：${aiTopic}`;
      } else {
        if (!selectedContactId) return;
        const contact = contacts.find(c => c.id === Number(selectedContactId));
        if (!contact) return;

        const chats = dataStore.getChats(contact.id);
        const recentChats = chats.slice(-10).map(m => `${m.sender === 'me' ? '我' : contact.name}: ${m.text}`).join('\n');

        systemPrompt = fillTemplate(promptSettings.momentFromChatPrompt, {
          characterName: settings.userName,
          characterDescription: settings.tag || '深空观察者',
          recentChatSummary: recentChats
        });
        userInput = '请生成动态。';
      }

      const result = await callAI([
        { role: 'system', content: systemPrompt },
        { role: 'user', content: userInput }
      ]);

      setAiGeneratedContent(result);
    } catch (error) {
      console.error('Failed to generate moment:', error);
      setAiGeneratedContent('生成失败，请重试。');
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div className="absolute inset-0 z-[60] bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="glass-card w-full max-w-lg flex flex-col rounded-xl animate-in fade-in zoom-in-95 duration-200 clip-corner">
        <div className="flex justify-between items-center px-6 py-4 border-b border-[var(--wireframe)] shrink-0">
          <h3 className="text-lg text-[var(--text-primary)] font-light tracking-widest">发布动态</h3>
          <button onClick={onClose} className="text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors">
            <X size={20} />
          </button>
        </div>

        <div className="flex border-b border-[var(--wireframe)]">
          <button 
            className={`flex-1 py-3 text-sm font-medium transition-colors ${activeTab === 'custom' ? 'text-[var(--accent-color)] border-b-2 border-[var(--accent-color)]' : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'}`}
            onClick={() => setActiveTab('custom')}
          >
            自定义发布
          </button>
          <button 
            className={`flex-1 py-3 text-sm font-medium transition-colors ${activeTab === 'ai' ? 'text-[var(--accent-color)] border-b-2 border-[var(--accent-color)]' : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'}`}
            onClick={() => setActiveTab('ai')}
          >
            AI 生成
          </button>
        </div>

        <div className="p-6 space-y-4">
          {activeTab === 'custom' ? (
            <>
              <textarea 
                value={content}
                onChange={e => setContent(e.target.value)}
                placeholder="分享你的星际动态..."
                className="w-full bg-[var(--bubble-bg)] border border-[var(--wireframe)] rounded px-3 py-2 text-sm text-[var(--text-primary)] outline-none focus:border-[var(--accent-color)] resize-none min-h-[120px]"
              />
              <input 
                type="text"
                value={imageUrl}
                onChange={e => setImageUrl(e.target.value)}
                placeholder="配图 URL (可选，留空则无图)"
                className="w-full bg-[var(--bubble-bg)] border border-[var(--wireframe)] rounded px-3 py-2 text-sm text-[var(--text-primary)] outline-none focus:border-[var(--accent-color)]"
              />
              <div className="flex justify-end pt-2">
                <button 
                  onClick={handlePublishCustom}
                  disabled={!content.trim()}
                  className="flex items-center gap-2 px-6 py-2 rounded bg-[var(--accent-color)] text-white hover:bg-[var(--accent-color)]/90 transition-colors disabled:opacity-50"
                >
                  <Send size={16} /> 发布
                </button>
              </div>
            </>
          ) : (
            <>
              <div className="space-y-4">
                <div>
                  <label className="block text-xs text-[var(--text-secondary)] mb-1">生成来源</label>
                  <select 
                    value={aiSource}
                    onChange={(e: any) => setAiSource(e.target.value)}
                    className="w-full bg-[var(--bubble-bg)] border border-[var(--wireframe)] rounded px-3 py-2 text-sm text-[var(--text-primary)] outline-none focus:border-[var(--accent-color)]"
                  >
                    <option value="manual">手动输入主题</option>
                    <option value="chat">从最近聊天记录生成</option>
                  </select>
                </div>

                {aiSource === 'manual' ? (
                  <textarea 
                    value={aiTopic}
                    onChange={e => setAiTopic(e.target.value)}
                    placeholder="描述你想发布的动态主题..."
                    className="w-full bg-[var(--bubble-bg)] border border-[var(--wireframe)] rounded px-3 py-2 text-sm text-[var(--text-primary)] outline-none focus:border-[var(--accent-color)] resize-none min-h-[80px]"
                  />
                ) : (
                  <select 
                    value={selectedContactId}
                    onChange={e => setSelectedContactId(Number(e.target.value))}
                    className="w-full bg-[var(--bubble-bg)] border border-[var(--wireframe)] rounded px-3 py-2 text-sm text-[var(--text-primary)] outline-none focus:border-[var(--accent-color)]"
                  >
                    <option value="" disabled>选择联系人</option>
                    {contacts.map(c => (
                      <option key={c.id} value={c.id}>{c.name}</option>
                    ))}
                  </select>
                )}

                <button 
                  onClick={handleGenerateAi}
                  disabled={isGenerating || (aiSource === 'manual' ? !aiTopic.trim() : !selectedContactId)}
                  className="w-full py-2 rounded border border-[var(--accent-color)] text-[var(--accent-color)] hover:bg-[var(--accent-color)]/10 transition-colors disabled:opacity-50 flex justify-center items-center gap-2"
                >
                  {isGenerating ? <Loader2 size={16} className="animate-spin" /> : 'AI 生成预览'}
                </button>

                {aiGeneratedContent && (
                  <div className="pt-4 border-t border-[var(--wireframe)]">
                    <label className="block text-xs text-[var(--text-secondary)] mb-1">生成结果 (可编辑)</label>
                    <textarea 
                      value={aiGeneratedContent}
                      onChange={e => setAiGeneratedContent(e.target.value)}
                      className="w-full bg-[var(--bubble-bg)] border border-[var(--wireframe)] rounded px-3 py-2 text-sm text-[var(--text-primary)] outline-none focus:border-[var(--accent-color)] resize-none min-h-[100px]"
                    />
                    <div className="flex justify-end pt-4">
                      <button 
                        onClick={handlePublishAi}
                        disabled={!aiGeneratedContent.trim()}
                        className="flex items-center gap-2 px-6 py-2 rounded bg-[var(--accent-color)] text-white hover:bg-[var(--accent-color)]/90 transition-colors disabled:opacity-50"
                      >
                        <Send size={16} /> 发布生成内容
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
