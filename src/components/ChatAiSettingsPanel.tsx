import React, { useState, useEffect } from 'react';
import { X, Save, RefreshCw, Download } from 'lucide-react';
import { Contact } from '../types';
import { dataStore } from '../lib/dataStore';

interface ChatAiSettingsPanelProps {
  contact: Contact;
  onClose: () => void;
  onUpdateContact: (updatedContact: Contact) => void;
}

export const ChatAiSettingsPanel: React.FC<ChatAiSettingsPanelProps> = ({ contact, onClose, onUpdateContact }) => {
  const [chatPrompt, setChatPrompt] = useState(dataStore.getChatPrompt());
  const [aiSettings, setAiSettings] = useState(contact.chatAiSettings || {
    systemPrompt: '',
    userPromptPrefix: '',
    overrideName: contact.name,
    overrideDescription: contact.description || '',
    overridePersonality: '',
    overrideDialogueExamples: '',
    worldInfoExtra: ''
  });

  const handleResetPrompt = () => {
    setChatPrompt({
      systemPrompt: '你扮演{{characterName}}，{{characterDescription}}。请保持角色，用第一人称回复，回复风格自然简短。',
      userPromptPrefix: ''
    });
  };

  const handleLoadFromCard = () => {
    setAiSettings(prev => ({
      ...prev,
      overrideDescription: contact.description || ''
    }));
  };

  const handleSave = () => {
    dataStore.saveChatPrompt(chatPrompt);
    onUpdateContact({
      ...contact,
      chatAiSettings: aiSettings
    });
    onClose();
  };

  return (
    <div className="absolute inset-0 z-[60] bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="glass-card w-full max-w-lg h-[80vh] flex flex-col rounded-xl animate-in fade-in zoom-in-95 duration-200 clip-corner">
        <div className="flex justify-between items-center px-6 py-4 border-b border-[var(--wireframe)] shrink-0">
          <h3 className="text-lg text-[var(--text-primary)] font-light tracking-widest">AI 回复设置</h3>
          <button onClick={onClose} className="text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors">
            <X size={20} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-6 space-y-8 custom-scrollbar">
          {/* 区块一：提示词模板 */}
          <div className="space-y-4">
            <div className="flex justify-between items-center border-b border-[var(--wireframe)] pb-2">
              <h4 className="text-sm font-bold tracking-widest text-[var(--text-primary)]">回复提示词</h4>
              <button onClick={handleResetPrompt} className="text-xs text-[var(--accent-color)] hover:text-[var(--text-primary)] transition-colors flex items-center gap-1">
                <RefreshCw size={12} /> 重置默认
              </button>
            </div>
            
            <div>
              <label className="block text-xs text-[var(--text-secondary)] mb-1">系统提示词</label>
              <textarea 
                value={chatPrompt.systemPrompt}
                onChange={e => setChatPrompt({...chatPrompt, systemPrompt: e.target.value})}
                className="w-full bg-[var(--bubble-bg)] border border-[var(--wireframe)] rounded px-3 py-2 text-sm text-[var(--text-primary)] outline-none focus:border-[var(--accent-color)] resize-none min-h-[80px]"
              />
            </div>
            
            <div>
              <label className="block text-xs text-[var(--text-secondary)] mb-1">用户提示词前缀 (可选)</label>
              <textarea 
                value={chatPrompt.userPromptPrefix}
                onChange={e => setChatPrompt({...chatPrompt, userPromptPrefix: e.target.value})}
                placeholder="留空则直接发送用户消息"
                className="w-full bg-[var(--bubble-bg)] border border-[var(--wireframe)] rounded px-3 py-2 text-sm text-[var(--text-primary)] outline-none focus:border-[var(--accent-color)] resize-none min-h-[60px]"
              />
            </div>
            
            <p className="text-[10px] text-[var(--text-secondary)]">
              可用变量：{`{{characterName}}`} 角色名  {`{{characterDescription}}`} 角色描述<br />
              {`{{userName}}`} 用户名称  {`{{userPersona}}`} 用户人设（在系统设置中配置）
            </p>
          </div>

          {/* 区块二：角色设定 */}
          <div className="space-y-4">
            <div className="flex justify-between items-center border-b border-[var(--wireframe)] pb-2">
              <h4 className="text-sm font-bold tracking-widest text-[var(--text-primary)]">角色设定</h4>
              <button onClick={handleLoadFromCard} className="text-xs text-[var(--accent-color)] hover:text-[var(--text-primary)] transition-colors flex items-center gap-1">
                <Download size={12} /> 从联系人角色卡读取
              </button>
            </div>

            <div>
              <label className="block text-xs text-[var(--text-secondary)] mb-1">角色名称</label>
              <input 
                type="text"
                value={aiSettings.overrideName}
                onChange={e => setAiSettings({...aiSettings, overrideName: e.target.value})}
                className="w-full bg-[var(--bubble-bg)] border border-[var(--wireframe)] rounded px-3 py-2 text-sm text-[var(--text-primary)] outline-none focus:border-[var(--accent-color)]"
              />
            </div>

            <div>
              <label className="block text-xs text-[var(--text-secondary)] mb-1">角色描述</label>
              <textarea 
                value={aiSettings.overrideDescription}
                onChange={e => setAiSettings({...aiSettings, overrideDescription: e.target.value})}
                className="w-full bg-[var(--bubble-bg)] border border-[var(--wireframe)] rounded px-3 py-2 text-sm text-[var(--text-primary)] outline-none focus:border-[var(--accent-color)] resize-none min-h-[80px]"
              />
            </div>

            <div>
              <label className="block text-xs text-[var(--text-secondary)] mb-1">角色性格</label>
              <textarea 
                value={aiSettings.overridePersonality}
                onChange={e => setAiSettings({...aiSettings, overridePersonality: e.target.value})}
                placeholder="留空则不覆盖"
                className="w-full bg-[var(--bubble-bg)] border border-[var(--wireframe)] rounded px-3 py-2 text-sm text-[var(--text-primary)] outline-none focus:border-[var(--accent-color)] resize-none min-h-[60px]"
              />
            </div>

            <div>
              <label className="block text-xs text-[var(--text-secondary)] mb-1">对话示例</label>
              <textarea 
                value={aiSettings.overrideDialogueExamples}
                onChange={e => setAiSettings({...aiSettings, overrideDialogueExamples: e.target.value})}
                placeholder="示例：\nUser: 你好\nAssistant: 你好，我是..."
                className="w-full bg-[var(--bubble-bg)] border border-[var(--wireframe)] rounded px-3 py-2 text-sm text-[var(--text-primary)] outline-none focus:border-[var(--accent-color)] resize-none min-h-[80px]"
              />
            </div>
          </div>

          {/* 区块三：世界书补充 */}
          <div className="space-y-4">
            <div className="border-b border-[var(--wireframe)] pb-2">
              <h4 className="text-sm font-bold tracking-widest text-[var(--text-primary)]">世界书补充</h4>
              <p className="text-[10px] text-[var(--text-secondary)] mt-1">在此填写补充的世界观背景信息，将作为额外的系统提示词注入</p>
            </div>

            <textarea 
              value={aiSettings.worldInfoExtra}
              onChange={e => setAiSettings({...aiSettings, worldInfoExtra: e.target.value})}
              placeholder="填写额外的世界观设定、场景背景等..."
              className="w-full bg-[var(--bubble-bg)] border border-[var(--wireframe)] rounded px-3 py-2 text-sm text-[var(--text-primary)] outline-none focus:border-[var(--accent-color)] resize-none min-h-[80px]"
            />
          </div>
        </div>

        <div className="px-6 py-4 border-t border-[var(--wireframe)] shrink-0 flex justify-end">
          <button 
            onClick={handleSave}
            className="flex items-center gap-2 px-6 py-2 rounded bg-[var(--accent-color)]/20 border border-[var(--accent-color)] text-[var(--accent-color)] hover:bg-[var(--accent-color)]/40 transition-colors"
          >
            <Save size={16} /> 保存设置
          </button>
        </div>
      </div>
    </div>
  );
};
