import React, { useState } from 'react';
import { X, Save } from 'lucide-react';
import { dataStore } from '../lib/dataStore';

interface MomentAiSettingsPanelProps {
  onClose: () => void;
}

export const MomentAiSettingsPanel: React.FC<MomentAiSettingsPanelProps> = ({ onClose }) => {
  const [momentPrompt, setMomentPrompt] = useState(dataStore.getMomentPrompt());

  const handleSave = () => {
    dataStore.saveMomentPrompt(momentPrompt);
    onClose();
  };

  return (
    <div className="absolute inset-0 z-[60] bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="glass-card w-full max-w-lg flex flex-col rounded-xl animate-in fade-in zoom-in-95 duration-200 clip-corner">
        <div className="flex justify-between items-center px-6 py-4 border-b border-[var(--wireframe)] shrink-0">
          <h3 className="text-lg text-[var(--text-primary)] font-light tracking-widest">动态 AI 设置</h3>
          <button onClick={onClose} className="text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors">
            <X size={20} />
          </button>
        </div>

        <div className="p-6 space-y-6">
          <div>
            <label className="block text-xs text-[var(--text-secondary)] mb-1">发布动态 AI 提示词</label>
            <textarea 
              value={momentPrompt.momentPrompt}
              onChange={e => setMomentPrompt({...momentPrompt, momentPrompt: e.target.value})}
              className="w-full bg-[var(--bubble-bg)] border border-[var(--wireframe)] rounded px-3 py-2 text-sm text-[var(--text-primary)] outline-none focus:border-[var(--accent-color)] resize-none min-h-[100px]"
            />
          </div>

          <div>
            <label className="block text-xs text-[var(--text-secondary)] mb-1">从聊天记录生成提示词</label>
            <textarea 
              value={momentPrompt.momentFromChatPrompt}
              onChange={e => setMomentPrompt({...momentPrompt, momentFromChatPrompt: e.target.value})}
              className="w-full bg-[var(--bubble-bg)] border border-[var(--wireframe)] rounded px-3 py-2 text-sm text-[var(--text-primary)] outline-none focus:border-[var(--accent-color)] resize-none min-h-[100px]"
            />
          </div>

          <p className="text-[10px] text-[var(--text-secondary)]">
            可用变量：{`{{characterName}}`} {`{{characterDescription}}`} {`{{recentChatSummary}}`}
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
