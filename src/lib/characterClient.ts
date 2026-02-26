import { CharacterInfo, CharacterDetail } from '../types';

/**
 * 解析 SillyTavern 标准角色卡 JSON（同时兼容 V1 和 V2 格式）
 * V2 格式：核心数据在 json.data 内，顶层也保留了部分字段
 * V1 格式：数据直接在顶层
 */
export function parseTavernCharacterCard(json: any): CharacterDetail | null {
  try {
    // V2 格式优先读 data 子对象，V1 直接读顶层
    const d = json.data || json;
    if (!d.name) return null;

    return {
      name: d.name,
      avatar: '',           // JSON 内不含可用的头像 URL，需用户事后手动设置
      description: d.description || '',
      personality: d.personality || '',
      scenario: d.scenario || '',
      firstMessage: d.first_mes || '',
      mesExample: d.mes_example || '',
      systemPrompt: d.system_prompt || '',
      creatorNotes: d.creator_notes || d.creatorcomment || '',
    };
  } catch (e) {
    console.error('Failed to parse character card:', e);
    return null;
  }
}

/** 从 localStorage 读取用户已导入的角色卡列表 */
export function getStoredCharacters(): CharacterDetail[] {
  try {
    const data = localStorage.getItem('st_imported_characters');
    return data ? JSON.parse(data) : [];
  } catch {
    return [];
  }
}

/** 保存或更新一张角色卡（同名覆盖） */
export function saveCharacter(char: CharacterDetail): void {
  const chars = getStoredCharacters();
  const idx = chars.findIndex(c => c.name === char.name);
  if (idx >= 0) chars[idx] = char;
  else chars.push(char);
  localStorage.setItem('st_imported_characters', JSON.stringify(chars));
}

/** 删除一张角色卡 */
export function deleteCharacter(name: string): void {
  const chars = getStoredCharacters().filter(c => c.name !== name);
  localStorage.setItem('st_imported_characters', JSON.stringify(chars));
}

// 内置默认角色（始终存在，可被同名导入覆盖）
const DEFAULT_CHARACTERS: CharacterDetail[] = [
  {
    name: 'Kaelen (领航员)',
    avatar: 'https://picsum.photos/seed/k/100/100',
    description: '一位经验丰富的星际领航员，性格沉稳，总是能在复杂的星域中找到最安全的航线。',
    personality: '沉稳、冷静、专业',
    scenario: '在星际飞船的舰桥上',
    firstMessage: '指挥官，航线已设定，随时可以跃迁。',
  },
  {
    name: 'Elara (机械师)',
    avatar: 'https://picsum.photos/seed/e/100/100',
    description: '天才机械师，对各种飞船引擎了如指掌，说话直接，工作狂。',
    personality: '直率、暴躁、技术宅',
    scenario: '在引擎室里修理设备',
    firstMessage: '别碰那个阀门！你想把我们都炸上天吗？',
  },
  {
    name: 'Nova (AI助手)',
    avatar: 'https://picsum.photos/seed/nova/100/100',
    description: '飞船的中央人工智能，拥有高度的逻辑分析能力，偶尔会表现出人类的情感。',
    personality: '理性、高效、偶尔幽默',
    scenario: '在全息投影仪中',
    firstMessage: '系统自检完成，所有子系统运行正常。'
  }
];

export async function getCharacterList(): Promise<CharacterInfo[]> {
  const stored = getStoredCharacters();
  // 合并：stored 同名优先覆盖默认
  const all = [...DEFAULT_CHARACTERS];
  stored.forEach(s => {
    const i = all.findIndex(a => a.name === s.name);
    if (i >= 0) all[i] = s;
    else all.push(s);
  });
  return all.map(c => ({ name: c.name, avatar: c.avatar, description: c.description }));
}

export async function getCharacterDetail(name: string): Promise<CharacterDetail | null> {
  const stored = getStoredCharacters().find(c => c.name === name);
  if (stored) return stored;
  return DEFAULT_CHARACTERS.find(c => c.name === name) || null;
}
