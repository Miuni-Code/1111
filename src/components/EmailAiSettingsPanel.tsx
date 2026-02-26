import React, { useState } from 'react';
import { X, Save } from 'lucide-react';
import { dataStore } from '../lib/dataStore';

interface EmailAiSettingsPanelProps {
  onClose: () => void;
}

export const EmailAiSettingsPanel: React.FC<EmailAiSettingsPanelProps> = ({ onClose }) => {
  const [emailPrompt, setEmailPrompt] = useState(dataStore.getEmailPrompt());

  const handleSave = () => {
    dataStore.saveEmailPrompt(emailPrompt);
    onClose();
  };

  return (
    <div className="absolute inset-0 z-[60] bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="glass-card w-full max-w-lg flex flex-col rounded-xl animate-in fade-in zoom-in-95 duration-200 clip-corner">
        <div className="flex justify-between items-center px-6 py-4 border-b border-[var(--wireframe)] shrink-0">
          <h3 className="text-lg text-[var(--text-primary)] font-light tracking-widest">邮件 AI 设置</h3>
          <button onClick={onClose} className="text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors">
            <X size={20} />
          </button>
        </div>

        <div className="p-6 space-y-6">
          <div>
            <label className="block text-xs text-[var(--text-secondary)] mb-1">写邮件 AI 提示词</label>
            <textarea 
              value={emailPrompt.emailComposePrompt}
              onChange={e => setEmailPrompt({...emailPrompt, emailComposePrompt: e.target.value})}
              className="w-full bg-[var(--bubble-bg)] border border-[var(--wireframe)] rounded px-3 py-2 text-sm text-[var(--text-primary)] outline-none focus:border-[var(--accent-color)] resize-none min-h-[100px]"
            />
          </div>

          <div>
            <label className="block text-xs text-[var(--text-secondary)] mb-1">回复邮件 AI 提示词</label>
            <textarea 
              value={emailPrompt.emailReplyPrompt}
              onChange={e => setEmailPrompt({...emailPrompt, emailReplyPrompt: e.target.value})}
              className="w-full bg-[var(--bubble-bg)] border border-[var(--wireframe)] rounded px-3 py-2 text-sm text-[var(--text-primary)] outline-none focus:border-[var(--accent-color)] resize-none min-h-[100px]"
            />
          </div>

          <p className="text-[10px] text-[var(--text-secondary)]">
            可用变量：{`{{userName}}`}
          </p>
        </div>

        <div className="px-6 py-4 border-t border-[var(--wireframe)] shrink-0 flex justify-end">
          <button 
            onClick={handleSave}
            className="flex items-center gap-2 px-6 py-2 rounded bg-[var(--accent-color)]/20 border border-[var(--accent-color)] text-[var(--accent-color)] hover:bg-[var(--accent-color)]/40 transition-colors"
          >
            <Save size={16} /> 保存
          </button>
        </div>
      </div>
    </div>
  );
};
