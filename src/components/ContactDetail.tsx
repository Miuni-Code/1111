import React, { useState } from 'react';
import { X, User, Edit2, Save } from 'lucide-react';
import { Contact } from '../types';

interface ContactDetailProps {
  contact: Contact;
  onClose: () => void;
  onUpdate: (updatedContact: Contact) => void;
}

export const ContactDetail: React.FC<ContactDetailProps> = ({ contact, onClose, onUpdate }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState(contact.name);
  const [description, setDescription] = useState(contact.description || '');
  const [avatar, setAvatar] = useState(contact.avatar || '');

  const handleSave = () => {
    const updatedContact = { ...contact, name, description, avatar };
    onUpdate(updatedContact);
    setIsEditing(false);
  };

  return (
    <div className="absolute inset-0 z-[70] bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="glass-card w-full max-w-sm p-6 rounded-xl flex flex-col gap-4 animate-in fade-in zoom-in-95 duration-200 clip-corner">
        <div className="flex justify-between items-center border-b border-[var(--wireframe)] pb-2">
          <h3 className="text-lg text-[var(--text-primary)] font-light tracking-widest">
            {isEditing ? '编辑联系人' : '联系人详情'}
          </h3>
          <button onClick={onClose} className="text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors">
            <X size={20} />
          </button>
        </div>

        <div className="flex flex-col items-center gap-4 py-4">
          <div className="w-24 h-24 rounded-full border-2 border-[var(--wireframe)] p-1 bg-[var(--card-bg)] relative">
            <img src={(isEditing ? avatar || contact.avatar : contact.avatar) || undefined} alt={name} className="w-full h-full rounded-full object-cover" referrerPolicy="no-referrer" />
          </div>

          {isEditing ? (
            <div className="w-full flex flex-col gap-3">
              <div>
                <label className="block text-xs text-[var(--text-secondary)] mb-1">名称</label>
                <input 
                  type="text" 
                  value={name} 
                  onChange={e => setName(e.target.value)} 
                  className="w-full bg-[var(--bubble-bg)] border border-[var(--wireframe)] rounded px-3 py-2 text-sm text-[var(--text-primary)] outline-none focus:border-[var(--accent-color)]"
                />
              </div>
              <div>
                <label className="block text-xs text-[var(--text-secondary)] mb-1">头像 URL</label>
                <input 
                  type="text" 
                  value={avatar} 
                  onChange={e => setAvatar(e.target.value)} 
                  className="w-full bg-[var(--bubble-bg)] border border-[var(--wireframe)] rounded px-3 py-2 text-sm text-[var(--text-primary)] outline-none focus:border-[var(--accent-color)]"
                />
              </div>
              <div>
                <label className="block text-xs text-[var(--text-secondary)] mb-1">描述/设定</label>
                <textarea 
                  value={description} 
                  onChange={e => setDescription(e.target.value)} 
                  className="w-full bg-[var(--bubble-bg)] border border-[var(--wireframe)] rounded px-3 py-2 text-sm text-[var(--text-primary)] outline-none focus:border-[var(--accent-color)] min-h-[80px] resize-none"
                />
              </div>
              
              <div className="flex justify-end gap-2 mt-2">
                <button 
                  onClick={() => setIsEditing(false)} 
                  className="px-4 py-2 rounded border border-[var(--wireframe)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] text-sm transition-colors"
                >
                  取消
                </button>
                <button 
                  onClick={handleSave} 
                  className="flex items-center gap-1 px-4 py-2 rounded bg-[var(--accent-color)]/20 border border-[var(--accent-color)] text-[var(--accent-color)] hover:bg-[var(--accent-color)]/40 text-sm transition-colors"
                >
                  <Save size={14} /> 保存
                </button>
              </div>
            </div>
          ) : (
            <div className="w-full flex flex-col items-center gap-2">
              <h2 className="text-xl font-medium text-[var(--text-primary)]">{contact.name}</h2>
              <p className="text-sm text-[var(--text-secondary)] text-center whitespace-pre-wrap mt-2 bg-[var(--bubble-bg)] p-3 rounded-lg border border-[var(--wireframe)] w-full min-h-[60px]">
                {contact.description || '暂无描述'}
              </p>
              
              <button 
                onClick={() => setIsEditing(true)} 
                className="mt-4 flex items-center gap-2 px-4 py-2 rounded border border-[var(--wireframe)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bubble-bg)] text-sm transition-colors w-full justify-center"
              >
                <Edit2 size={16} /> 编辑资料
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
