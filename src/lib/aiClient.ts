import { dataStore } from './dataStore';

interface AiCallConfig {
  systemPrompt: string;
  chatHistory?: {
    role: 'user' | 'assistant';
    content: string;
  }[];
  userInput: string;
}

export async function callAI(config: AiCallConfig): Promise<string> {
  const settings = dataStore.getGlobalSettings();
  
  if (settings.apiMode === 'gemini') {
    throw new Error('Gemini 模式在酒馆扩展中不可用，请在设置中切换为自定义 API');
  } else if (settings.apiMode === 'custom' && settings.customApiUrl) {
    const response = await fetch(`${settings.customApiUrl}/chat/completions`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${settings.customApiKey}`
      },
      body: JSON.stringify({
        model: settings.customApiModel || 'gpt-3.5-turbo',
        messages: [
          { role: 'system', content: config.systemPrompt },
          ...(config.chatHistory || []).map(m => ({
            role: m.role,
            content: m.content
          })),
          { role: 'user', content: config.userInput }
        ]
      })
    });
    
    if (!response.ok) {
      throw new Error(`API 错误: ${response.statusText}`);
    }
    
    const data = await response.json();
    return data.choices?.[0]?.message?.content || '';
  } else {
    throw new Error('请先在设置中配置 API');
  }
}
