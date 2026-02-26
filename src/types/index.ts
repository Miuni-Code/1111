export interface Contact {
  id: number;
  name: string;
  lastMessage: string;
  time: string;
  unread: boolean;
  type: 'user' | 'group' | 'bot';
  avatar: string;
  online: boolean;
  description?: string; // Character card description
  chatAiSettings?: {
    systemPrompt: string;
    userPromptPrefix: string;
    overrideName: string;
    overrideDescription: string;
    overridePersonality: string;
    overrideDialogueExamples: string;
    worldInfoExtra: string;
  };
}

export interface Message {
  id: number;
  text: string;
  sender: 'me' | 'them';
  time: string;
  read: boolean;
  image?: string;
}

export interface Moment {
  id: number;
  author: string;
  avatar: string;
  content: string;
  time: string;
  likes: number;
  isLiked?: boolean;
  comments: { id: number; author: string; text: string }[];
  image?: string;
}

export interface Email {
  id: number;
  from: string;
  to: string;
  subject: string;
  body: string;
  snippet: string;
  time: string;
  isRead: boolean;
  status: 'inbox' | 'draft' | 'sent' | 'trash';
  type: 'system' | 'alert' | 'update' | 'personal';
  replies?: { id: number; text: string; time: string }[];
  isReplied?: boolean;
}

export interface PromptTemplate {
  id: string;
  name: string;
  description: string;
  systemPrompt: string;
  userPrompt: string;
  variables: string[];
  isDefault: boolean;
}

export interface PromptTemplates {
  chatReply: PromptTemplate;
  momentFromChat: PromptTemplate;
  momentFreeStyle: PromptTemplate;
  emailCompose: PromptTemplate;
  emailReply: PromptTemplate;
  [key: string]: PromptTemplate;
}

export interface GlobalSettings {
  userName: string;
  userPersona?: string;
  avatarUrl: string;
  apiMode: string;
  customApiUrl?: string;
  customApiKey?: string;
  customApiModel?: string;
  apiPresets?: { id: string; name: string; url: string; key: string }[];
  profileBgUrl?: string;
  tag?: string;
  customFontUrl?: string;
  fontSizeScale?: number;
  moduleBgs: {
    [key: string]: string;
  };
}

export interface CharacterInfo {
  name: string;
  avatar: string;
  description: string;
}

export interface CharacterDetail {
  name: string;
  avatar: string;
  description: string;
  personality?: string;
  scenario?: string;
  firstMessage?: string;
  mesExample?: string;
  systemPrompt?: string;
  creatorNotes?: string;
}
