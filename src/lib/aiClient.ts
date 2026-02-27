import { dataStore } from './dataStore';

interface AiCallConfig {
  systemPrompt: string;
  chatHistory?: { role: 'user' | 'assistant'; content: string }[];
  userInput: string;
}

// 酒馆主 API
async function callTavernAPI(config: AiCallConfig): Promise<string> {
  const ctx = (window as any).SillyTavern?.getContext?.();
  if (!ctx?.generateRaw) throw new Error('酒馆 API 不可用');
  const messages = [
    { role: 'system', content: config.systemPrompt },
    ...(config.chatHistory || []).map(m => ({ role: m.role, content: m.content })),
    { role: 'user', content: config.userInput },
  ];
  const result = await ctx.generateRaw(messages, '', false, false);
  return typeof result === 'string' ? result : result?.text ?? '';
}

// Gemini REST API（不依赖 process）
async function callGeminiAPI(config: AiCallConfig, apiKey: string): Promise<string> {
  const model = 'gemini-2.0-flash';
  const contents = [
    ...(config.chatHistory || []).map(m => ({
      role: m.role === 'assistant' ? 'model' : 'user',
      parts: [{ text: m.content }],
    })),
    { role: 'user', parts: [{ text: config.userInput }] },
  ];
  const response = await fetch(
    `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${apiKey}`,
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        contents,
        systemInstruction: { parts: [{ text: config.systemPrompt }] },
      }),
    }
  );
  if (!response.ok) throw new Error(`Gemini API 错误: ${response.status}`);
  const data = await response.json();
  return data.candidates?.[0]?.content?.parts?.[0]?.text ?? '';
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
  if (settings.apiMode === 'custom' && settings.customApiUrl) {
    return callCustomAPI(config, settings);
  }
  if (settings.apiMode === 'gemini' && (settings as any).geminiApiKey) {
    return callGeminiAPI(config, (settings as any).geminiApiKey);
  }
  return callTavernAPI(config);
}
