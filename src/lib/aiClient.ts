export async function callAI(
  messages: { role: 'user' | 'model' | 'system', content: string }[],
  temperature = 0.7,
  maxTokens = 1000
): Promise<string> {
  try {
    // @ts-ignore
    const stContext = window.SillyTavern?.getContext?.();
    if (stContext && stContext.generateRaw) {
      // SillyTavern's generateRaw usually takes an array of {role, content}
      const response = await stContext.generateRaw(messages);
      return response || '';
    }
    return '（AI 未连接或 SillyTavern 环境未就绪）';
  } catch (error) {
    console.error('AI Error:', error);
    throw error;
  }
}
