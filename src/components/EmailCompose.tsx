import React, { useState } from 'react';
import { X, Send, Save, Wand2 } from 'lucide-react';
import { dataStore } from '../lib/dataStore';
import { callAI } from '../lib/aiClient';
import { fillTemplate } from '../lib/promptUtils';
import { Email } from '../types';

interface EmailComposeProps {
  onClose: () => void;
  initialData?: Partial<Email>;
}

export const EmailCompose: React.FC<EmailComposeProps> = ({ onClose, initialData }) => {
  const [to, setTo] = useState(initialData?.to || '');
  const [subject, setSubject] = useState(initialData?.subject || '');
  const [body, setBody] = useState(initialData?.body || '');
  const [isGenerating, setIsGenerating] = useState(false);

  const handleGenerateContent = async () => {
    if (!subject && !body) {
      alert('请先输入主题或部分正文，以便 AI 了解您的意图。');
      return;
    }

    setIsGenerating(true);
    try {
      const settings = dataStore.getGlobalSettings();
      const templates = dataStore.getPromptTemplates();
      const template = templates.emailCompose;

      const systemPrompt = fillTemplate(template.systemPrompt, {
        userName: settings.userName,
      });
      const userPrompt = fillTemplate(template.userPrompt, {
        userName: settings.userName,
        recipientName: to || '未知收件人',
        emailSubject: subject || '无主题',
      });

      const result = await callAI([
        { role: 'system', content: systemPrompt },
        { role: 'user', content: userPrompt }
      ]);
      
      setBody(result);
    } catch (error) {
      console.error(error);
      alert('生成内容失败');
    } finally {
      setIsGenerating(false);
    }
  };

  const handleSaveDraft = () => {
    const newEmail: Email = {
      id: Date.now(),
      from: dataStore.getGlobalSettings().userName,
      to,
      subject,
      body,
      snippet: body.substring(0, 50) + '...',
      time: new Date().toLocaleTimeString('zh-CN', { hour: '2-digit', minute: '2-digit' }),
      isRead: true,
      status: 'draft',
      type: 'system'
    };
    
    const emails = dataStore.getEmails();
    dataStore.saveEmails([newEmail, ...emails]);
    onClose();
  };

  const handleSend = () => {
    const newEmail: Email = {
      id: Date.now(),
      from: dataStore.getGlobalSettings().userName,
      to,
      subject,
      body,
      snippet: body.substring(0, 50) + '...',
      time: new Date().toLocaleTimeString('zh-CN', { hour: '2-digit', minute: '2-digit' }),
      isRead: true,
      status: 'sent',
      type: 'system'
    };
    
    const emails = dataStore.getEmails();
    dataStore.saveEmails([newEmail, ...emails]);
    onClose();
  };

  return (
    <div className="absolute inset-0 z-[70] bg-[var(--bg-base)] flex flex-col animate-in slide-in-from-bottom duration-300">
      <div className="flex justify-between items-center px-4 py-3 border-b border-[var(--wireframe)] bg-[var(--bubble-bg)] shrink-0">
        <div className="flex items-center gap-3">
          <button onClick={onClose} className="text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors">
            <X size={20} />
          </button>
          <h3 className="text-[var(--text-primary)] font-medium tracking-widest text-sm">写邮件</h3>
        </div>
        <div className="flex items-center gap-2">
          <button 
            onClick={handleSaveDraft}
            className="flex items-center gap-1 text-xs text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors px-3 py-1.5 rounded border border-[var(--wireframe)]"
          >
            <Save size={14} /> 存草稿
          </button>
          <button 
            onClick={handleSend}
            disabled={!to || !subject || !body}
            className="flex items-center gap-1 text-xs text-[var(--bg-base)] bg-[var(--accent-color)] hover:opacity-90 transition-opacity px-3 py-1.5 rounded disabled:opacity-50"
          >
            <Send size={14} /> 发送
          </button>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-4 flex flex-col gap-4">
        <div className="flex items-center border-b border-[var(--wireframe)] pb-2">
          <span className="text-[var(--text-secondary)] text-sm w-16">收件人:</span>
          <input 
            type="text" 
            value={to}
            onChange={(e) => setTo(e.target.value)}
            className="flex-1 bg-transparent text-[var(--text-primary)] outline-none text-sm"
            placeholder="输入收件人..."
          />
        </div>
        <div className="flex items-center border-b border-[var(--wireframe)] pb-2">
          <span className="text-[var(--text-secondary)] text-sm w-16">主题:</span>
          <input 
            type="text" 
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            className="flex-1 bg-transparent text-[var(--text-primary)] outline-none text-sm"
            placeholder="输入主题..."
          />
        </div>
        
        <div className="flex justify-end">
          <button 
            onClick={handleGenerateContent}
            disabled={isGenerating}
            className="flex items-center gap-1 text-xs text-[var(--accent-color)] hover:text-[var(--text-primary)] transition-colors px-3 py-1.5 rounded bg-[var(--accent-color)]/10 disabled:opacity-50"
          >
            <Wand2 size={14} /> {isGenerating ? 'AI 生成中...' : 'AI 辅助撰写'}
          </button>
        </div>

        <textarea 
          value={body}
          onChange={(e) => setBody(e.target.value)}
          className="flex-1 bg-transparent text-[var(--text-primary)] outline-none text-sm resize-none"
          placeholder="在此输入正文..."
        />
      </div>
    </div>
  );
};
