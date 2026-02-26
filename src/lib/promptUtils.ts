import { PromptTemplate, PromptTemplates } from '../types';

export const DEFAULT_PROMPT_TEMPLATES: PromptTemplates = {
  chatReply: {
    id: 'chatReply',
    name: '聊天 AI 回复',
    description: '生成角色的聊天回复',
    systemPrompt: '你是{{characterName}}。{{characterDescription}}\n\n你正在通过星际通讯系统与{{userName}}交谈。请完全沉浸在角色中，用第一人称、自然的聊天风格回复，不要跳出角色，不要加旁白或动作描述。',
    userPrompt: '{{userInput}}',
    variables: ['characterName', 'characterDescription', 'userName', 'userInput'],
    isDefault: true,
  },
  momentFromChat: {
    id: 'momentFromChat',
    name: '根据聊天生成动态',
    description: '基于最近的聊天记录生成星网动态',
    systemPrompt: '你是 {{characterName}}，正在发一条星网动态（类似朋友圈）。',
    userPrompt: '根据以下最近的聊天内容，以 {{characterName}} 的口吻生成一条生动的动态文字（50-100字，用第一人称，可以加1-2个emoji，符合角色性格）：\n{{recentChatSummary}}',
    variables: ['characterName', 'recentChatSummary'],
    isDefault: true,
  },
  momentFreeStyle: {
    id: 'momentFreeStyle',
    name: '自由生成动态',
    description: '角色扮演自由生成星网动态',
    systemPrompt: '你是 {{characterName}}，{{characterDescription}}。',
    userPrompt: '发一条符合当前世界观和你角色性格的星网动态，不超过100字。',
    variables: ['characterName', 'characterDescription'],
    isDefault: true,
  },
  emailCompose: {
    id: 'emailCompose',
    name: '生成邮件正文',
    description: '根据主题和收件人生成邮件正文',
    systemPrompt: '你是指挥官 {{userName}}，正在撰写一封星际通讯邮件。风格正式，符合科幻世界观。',
    userPrompt: '请根据以下主题生成一封完整的邮件正文（150-300字，第一人称，署名为 {{userName}}）：\n主题：{{emailSubject}}\n收件人：{{recipientName}}',
    variables: ['userName', 'emailSubject', 'recipientName'],
    isDefault: true,
  },
  emailReply: {
    id: 'emailReply',
    name: '生成邮件回复',
    description: '根据收到的邮件生成回复',
    systemPrompt: '你是{{userName}}的通讯系统 AI 助手。',
    userPrompt: '请为以下邮件以{{userName}}的名义生成一封回复（100-200字，正式星际通讯风格）：\n发件人：{{sender}}\n主题：{{subject}}\n内容：{{content}}',
    variables: ['userName', 'sender', 'subject', 'content'],
    isDefault: true,
  }
};

export function fillTemplate(template: string, variables: Record<string, string>): string {
  let result = template;
  for (const [key, value] of Object.entries(variables)) {
    result = result.replace(new RegExp(`{{${key}}}`, 'g'), value);
  }
  return result;
}
