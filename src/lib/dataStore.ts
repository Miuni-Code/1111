import { Contact, Message, Moment, Email, PromptTemplates, GlobalSettings } from '../types';
import { DEFAULT_PROMPT_TEMPLATES } from './promptUtils';

interface DataStore {
  getContacts(): Contact[];
  saveContacts(contacts: Contact[]): void;
  getChats(contactId: number): Message[] | null;
  saveChats(contactId: number, messages: Message[]): void;
  getMoments(): Moment[];
  saveMoments(moments: Moment[]): void;
  getEmails(): Email[];
  saveEmails(emails: Email[]): void;
  getPromptTemplates(): PromptTemplates;
  savePromptTemplates(templates: PromptTemplates): void;
  getChatPrompt(): any;
  saveChatPrompt(prompt: any): void;
  getMomentPrompt(): any;
  saveMomentPrompt(prompt: any): void;
  getEmailPrompt(): any;
  saveEmailPrompt(prompt: any): void;
  getGlobalSettings(): GlobalSettings;
  saveGlobalSettings(settings: GlobalSettings): void;
}

const INITIAL_CONTACTS: Contact[] = [
  { id: 5, name: 'Kaelen (领航员)', lastMessage: '明天几点跃迁？', time: '昨天', unread: false, type: 'user', avatar: 'https://picsum.photos/seed/k/100/100', online: true, description: '一位经验丰富的星际领航员，性格沉稳，总是能在复杂的星域中找到最安全的航线。' },
  { id: 6, name: 'Elara (机械师)', lastMessage: '引擎维护报告已提交。', time: '昨天', unread: false, type: 'user', avatar: 'https://picsum.photos/seed/e/100/100', online: false, description: '天才机械师，对各种飞船引擎了如指掌，说话直接，工作狂。' },
];

const INITIAL_MOMENTS: Moment[] = [
  { id: 1, author: 'Kaelen (领航员)', avatar: 'https://picsum.photos/seed/k/100/100', content: '刚刚穿过猎户座旋臂，星云的颜色比上次更深了。导航系统一切正常。', time: '2小时前', likes: 12, comments: [{ id: 1, author: 'Elara (机械师)', text: '注意安全。' }], image: 'https://picsum.photos/seed/nebula/400/200' },
  { id: 2, author: 'Elara (机械师)', avatar: 'https://picsum.photos/seed/e/100/100', content: '三号引擎的等离子注入器又堵了，这些便宜的配件真让人头疼。', time: '5小时前', likes: 8, comments: [] },
];

const INITIAL_EMAILS: Email[] = [
  { id: 1, from: '星际舰队指挥部', to: '指挥官', subject: '关于近期星域巡逻任务的调整', body: '指挥官，根据最新情报，边缘星域出现异常能量波动，请立即调整巡逻路线前往调查。', snippet: '指挥官，根据最新情报，边缘星域出现异常能量波动...', time: '10:00', isRead: false, status: 'inbox', type: 'system' },
  { id: 2, from: '后勤保障部', to: '指挥官', subject: '本月物资补给清单', body: '本月物资补给已抵达空间站，请查收附件中的清单并安排人员接收。', snippet: '本月物资补给已抵达空间站，请查收附件中的清单...', time: '昨天', isRead: true, status: 'inbox', type: 'update' },
];

export const dataStore: DataStore = {
  getContacts: () => {
    const data = localStorage.getItem('st_contacts');
    return data ? JSON.parse(data) : INITIAL_CONTACTS;
  },
  saveContacts: (c) => localStorage.setItem('st_contacts', JSON.stringify(c)),
  
  getChats: (contactId) => {
    const data = localStorage.getItem(`st_chats_${contactId}`);
    return data ? JSON.parse(data) : null;
  },
  saveChats: (contactId, messages) => localStorage.setItem(`st_chats_${contactId}`, JSON.stringify(messages)),
  
  getMoments: () => {
    const data = localStorage.getItem('st_moments');
    return data ? JSON.parse(data) : INITIAL_MOMENTS;
  },
  saveMoments: (m) => localStorage.setItem('st_moments', JSON.stringify(m)),
  
  getEmails: () => {
    const data = localStorage.getItem('st_emails');
    return data ? JSON.parse(data) : INITIAL_EMAILS;
  },
  saveEmails: (e) => localStorage.setItem('st_emails', JSON.stringify(e)),
  
  getPromptTemplates: () => {
    const data = localStorage.getItem('st_prompt_templates');
    return data ? JSON.parse(data) : DEFAULT_PROMPT_TEMPLATES;
  },
  savePromptTemplates: (t) => localStorage.setItem('st_prompt_templates', JSON.stringify(t)),

  getChatPrompt: () => {
    const data = localStorage.getItem('st_prompt_chatReply');
    return data ? JSON.parse(data) : {
      systemPrompt: '你扮演{{characterName}}，{{characterDescription}}。请保持角色，用第一人称回复，回复风格自然简短。',
      userPromptPrefix: ''
    };
  },
  saveChatPrompt: (p) => localStorage.setItem('st_prompt_chatReply', JSON.stringify(p)),

  getMomentPrompt: () => {
    const data = localStorage.getItem('st_prompt_moment');
    return data ? JSON.parse(data) : {
      momentPrompt: '你是{{characterName}}，{{characterDescription}}。请以你的身份发一条星网动态（类似朋友圈），语气自然，50-100字，可带1-2个emoji，第一人称。',
      momentFromChatPrompt: '你是{{characterName}}，{{characterDescription}}。根据以下近期聊天内容，以你的身份发一条星网动态，50-100字：\n{{recentChatSummary}}'
    };
  },
  saveMomentPrompt: (p) => localStorage.setItem('st_prompt_moment', JSON.stringify(p)),

  getEmailPrompt: () => {
    const data = localStorage.getItem('st_prompt_email');
    return data ? JSON.parse(data) : {
      emailReplyPrompt: '你是指挥官{{userName}}。请为以下邮件生成一封回复（100-200字，第一人称，正式的星际通讯风格）：\n发件人：{{sender}}\n主题：{{subject}}\n内容：{{emailContent}}',
      emailComposePrompt: '你是指挥官{{userName}}。请生成一封邮件正文（150-300字，正式星际通讯风格，署名{{userName}}）：\n收件人：{{recipientName}}\n主题：{{emailSubject}}'
    };
  },
  saveEmailPrompt: (p) => localStorage.setItem('st_prompt_email', JSON.stringify(p)),

  getGlobalSettings: () => {
    const data = localStorage.getItem('st_global_settings');
    const parsed = data ? JSON.parse(data) : {};
    return {
      userName: parsed.userName || '生菜来来',
      userPersona: parsed.userPersona || '一名普通的星际旅行者，对未知充满好奇。',
      avatarUrl: parsed.avatarUrl || 'https://picsum.photos/seed/avatar/200/200',
      apiMode: parsed.apiMode || 'gemini',
      apiPresets: parsed.apiPresets || [],
      customApiUrl: parsed.customApiUrl || '',
      customApiKey: parsed.customApiKey || '',
      customApiModel: parsed.customApiModel || '',
      profileBgUrl: parsed.profileBgUrl || '',
      tag: parsed.tag || '深空观察者',
      customFontUrl: parsed.customFontUrl || '',
      fontSizeScale: parsed.fontSizeScale || 1,
      moduleBgs: parsed.moduleBgs || {
        '即达': '',
        '星网回路': 'https://picsum.photos/seed/communication/600/400',
        '轨迹管理': '',
        '记忆锚点': '',
        '远程视域': '',
        '星网索引': '',
        '星途': 'https://picsum.photos/seed/navigation/300/400'
      }
    };
  },
  saveGlobalSettings: (s) => localStorage.setItem('st_global_settings', JSON.stringify(s)),
};
