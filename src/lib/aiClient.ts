import { dataStore } from './dataStore';

interface AiCallConfig {
  systemPrompt: string;
  chatHistory?: {
    role: 'user' | 'assistant';
    content: string;
  }[];
  userInput: string;
}

// 尝试使用酒馆主 API 发送请求
async function callSillyTavernAPI(config: AiCallConfig): Promise<string> {
  const context = (window as any).SillyTavern?.getContext?.();
  if (!context) throw new Error('无法获取酒馆上下文');

  const messages = [
    { role: 'system', content: config.systemPrompt },
    ...(config.chatHistory || []).map(m => ({ role: m.role, content: m.content })),
    { role: 'user', content: config.userInput },
  ];

  // 使用酒馆的 generateRaw 接口
  const generateRaw = context.generateRaw ?? (window as any).generateRaw;
  if (generateRaw) {
    const result = await generateRaw(messages, '', false, false);
    return typeof result === 'string' ? result : result?.text ?? '';
  }

  throw new Error('酒馆 generateRaw 不可用');
}

// 自定义 OpenAI 兼容 API
async function callCustomAPI(config: AiCallConfig, settings: any): Promise<string> {
  const response = await fetch(`${settings.customApiUrl}/chat/completions`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${settings.customApiKey || ''}`,
    },
    body: JSON.stringify({
      model: settings.customApiModel || 'gpt-3.5-turbo',
      messages: [
        { role: 'system', content: config.systemPrompt },
        ...(config.chatHistory || []).map(m => ({ role: m.role, content: m.content })),
        { role: 'user', content: config.userInput },
      ],
    }),
  });

  if (!response.ok) throw new Error(`API 错误: ${response.status} ${response.statusText}`);
  const data = await response.json();
  return data.choices?.[0]?.message?.content ?? '';
}

export async function callAI(config: AiCallConfig): Promise<string> {
  const settings = dataStore.getGlobalSettings();

  // 优先用自定义 API
  if (settings.apiMode === 'custom' && settings.customApiUrl) {
    return callCustomAPI(config, settings);
  }

  // 否则尝试酒馆主 API
  try {
    return await callSillyTavernAPI(config);
  } catch (e) {
    throw new Error('请在星际终端设置中配置自定义 API，或确保酒馆已连接 AI 模型。');
  }
}
