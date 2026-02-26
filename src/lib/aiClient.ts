import { GoogleGenAI } from '@google/genai';
import { dataStore } from './dataStore';

interface AiCallConfig {
  systemPrompt: string;
  chatHistory?: {
    role: 'user' | 'assistant';
    content: string;
  }[];
  userInput: string;
  customApi?: {
    apiurl: string;
    key: string;
    model: string;
  };
}

export async function callAI(config: AiCallConfig): Promise<string> {
  const settings = dataStore.getGlobalSettings();
  
  if (settings.apiMode === 'gemini') {
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      throw new Error('GEMINI_API_KEY is not set');
    }
    
    const ai = new GoogleGenAI({ apiKey });
    
    let contents: any[] = [];
    if (config.chatHistory && config.chatHistory.length > 0) {
      contents = config.chatHistory.map(msg => ({
        role: msg.role === 'assistant' ? 'model' : 'user',
        parts: [{ text: msg.content }]
      }));
    }
    
    contents.push({
      role: 'user',
      parts: [{ text: config.userInput }]
    });

    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: contents,
      config: {
        systemInstruction: config.systemPrompt,
      }
    });
    
    return response.text || '';
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
      throw new Error(`Custom API error: ${response.statusText}`);
    }
    
    const data = await response.json();
    return data.choices?.[0]?.message?.content || '';
  } else {
    throw new Error('API mode not supported or missing configuration');
  }
}
