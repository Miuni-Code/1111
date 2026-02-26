import React, { useState, useEffect } from 'react';
import { 
  Wifi, Battery, X, Package, Calendar, Bookmark, 
  Cast, Search, Navigation, MessageSquare, Settings
} from 'lucide-react';
import { Modal } from './Modal';
import { StarNetwork } from './StarNetwork';
import { dataStore } from '../lib/dataStore';
import { GlobalSettings, PromptTemplates } from '../types';

interface MainInterfaceProps {
  onLock: () => void;
  toggleTheme: () => void;
  isDarkMode: boolean;
}

export const MainInterface: React.FC<MainInterfaceProps> = ({ onLock, toggleTheme, isDarkMode }) => {
  const [activeModule, setActiveModule] = useState<{title: string, desc: string} | null>(null);
  const [time, setTime] = useState(new Date());
  const [showSettings, setShowSettings] = useState(false);
  const [showUserPersona, setShowUserPersona] = useState(false);
  const [settings, setSettings] = useState<GlobalSettings>(dataStore.getGlobalSettings());
  const [templates, setTemplates] = useState<PromptTemplates>(dataStore.getPromptTemplates());

  useEffect(() => {
    // Try to fetch user info from SillyTavern context
    try {
      // @ts-ignore
      const stContext = window.SillyTavern?.getContext?.();
      if (stContext) {
        setSettings(prev => ({
          ...prev,
          userName: stContext.name1 || prev.userName,
          userPersona: stContext.persona || prev.userPersona,
          avatarUrl: stContext.avatarUrl || prev.avatarUrl
        }));
      }
    } catch (e) {
      console.error("Failed to fetch SillyTavern context", e);
    }
  }, []);

  useEffect(() => {
    dataStore.saveGlobalSettings(settings);
  }, [settings]);

  useEffect(() => {
    dataStore.savePromptTemplates(templates);
  }, [templates]);

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const handleSettingsUpdated = () => {
      setSettings(dataStore.getGlobalSettings());
    };
    window.addEventListener('settingsUpdated', handleSettingsUpdated);
    return () => window.removeEventListener('settingsUpdated', handleSettingsUpdated);
  }, []);

  useEffect(() => {
    if (settings.customFontUrl) {
      const newStyle = document.createElement('style');
      newStyle.id = 'custom-font-style';
      newStyle.appendChild(document.createTextNode(`
        @font-face {
          font-family: 'CustomFont';
          src: url('${settings.customFontUrl}');
        }
        :root {
          --custom-font: 'CustomFont', "PingFang SC", "Microsoft YaHei", "Outfit", "Noto Sans SC", sans-serif;
        }
      `));
      const oldStyle = document.getElementById('custom-font-style');
      if (oldStyle) {
        document.head.removeChild(oldStyle);
      }
      document.head.appendChild(newStyle);
    } else {
      const oldStyle = document.getElementById('custom-font-style');
      if (oldStyle) {
        document.head.removeChild(oldStyle);
      }
    }
  }, [settings.customFontUrl]);

  const openModal = (title: string, desc: string) => {
    setActiveModule({ title, desc });
  };

  return (
    <div 
      className="absolute inset-0 flex items-center justify-center p-4 overflow-hidden"
      style={{ fontSize: `${settings.fontSizeScale}rem` }}
    >
      <div className="bokeh bokeh-1" />
      <div className="bokeh bokeh-2" />
      <div className="scanlines" />

      {/* Main Container */}
      {activeModule?.title === '星网回路' ? (
        <div className="absolute inset-0 z-50 w-full h-full bg-[var(--bg-base)] animate-in slide-in-from-right duration-300">
          <StarNetwork onBack={() => setActiveModule(null)} settings={settings} />
        </div>
      ) : (
        <div className="relative z-10 w-full h-full glass-card rounded-2xl flex flex-col overflow-hidden animate-in fade-in zoom-in-95 duration-500">
        
        {/* Top Bar */}
        <div className="flex justify-between items-center p-4 border-b border-[var(--wireframe)] bg-[var(--bubble-bg)] shrink-0">
          <div className="flex items-center gap-4 text-[var(--text-secondary)] font-mono text-sm">
            <span>{time.getFullYear()}/{String(time.getMonth() + 1).padStart(2, '0')}/{String(time.getDate()).padStart(2, '0')} {time.toLocaleDateString('zh-CN', { weekday: 'short' })}</span>
          </div>
          <div className="flex items-center gap-4 text-[var(--text-secondary)]">
            <button onClick={() => setShowSettings(true)} className="hover:text-[var(--text-primary)] transition-colors" title="系统设置">
              <Settings size={18} />
            </button>
            <button onClick={toggleTheme} className="hover:text-[var(--text-primary)] transition-colors text-xs border border-[var(--wireframe)] px-2 py-1 rounded">
              {isDarkMode ? 'LIGHT' : 'DARK'}
            </button>
            <Wifi size={16} />
            <Battery size={16} />
            <button onClick={onLock} className="hover:text-[var(--accent-color)] transition-colors ml-2">
              <X size={20} />
            </button>
          </div>
        </div>

        {/* Content Grid */}
        <div className="flex-1 p-4 overflow-y-auto">
          <div className="flex flex-col gap-4 min-h-full">
            
            {/* Profile & Goal */}
            <div className="flex flex-col gap-4">
              <div className="glass-card p-4 flex flex-col items-center text-center clip-corner shrink-0 relative overflow-hidden">
                {settings.profileBgUrl && (
                  <img 
                    src={settings.profileBgUrl} 
                    alt="Profile Background" 
                    className="absolute inset-0 w-full h-full object-cover opacity-50 mix-blend-luminosity pointer-events-none"
                    referrerPolicy="no-referrer"
                  />
                )}
                <div className="w-20 h-20 rounded-full border-2 border-[var(--accent-color)] p-1 mb-3 relative z-10">
                  <img 
                    src={settings.avatarUrl || undefined} 
                    alt="Avatar" 
                    className="w-full h-full rounded-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute bottom-0 right-0 w-3 h-3 bg-emerald-400 rounded-full border-2 border-[var(--card-bg)]" />
                </div>
                <div className="cursor-pointer group relative z-10 flex flex-col items-center" onClick={() => setShowUserPersona(true)}>
                  <h2 className="text-lg text-[var(--text-primary)] font-light tracking-widest mb-1 group-hover:text-[var(--accent-color)] transition-colors">{settings.userName}</h2>
                  <div className="text-xs border border-[var(--wireframe)] px-2 py-1 text-[var(--accent-color)] rounded-sm group-hover:border-[var(--accent-color)] transition-colors">
                    {settings.tag}
                  </div>
                </div>
              </div>

              <button 
                onClick={() => openModal('即达', '购物消费与物资运输网络')}
                className="glass-card w-full h-24 flex flex-col items-center justify-center gap-2 group hover:bg-[var(--bubble-bg)] transition-all clip-corner-br shrink-0 relative overflow-hidden"
              >
                {settings.moduleBgs['即达'] && (
                  <img src={settings.moduleBgs['即达']} alt="bg" className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:opacity-70 transition-opacity duration-500 mix-blend-luminosity" referrerPolicy="no-referrer" />
                )}
                <div className="relative z-10 flex flex-col items-center justify-center gap-2">
                  <Package className="text-[var(--accent-color)]" size={20} />
                  <span className="text-xl text-[var(--text-primary)] tracking-widest font-light text-glow mt-1">即达</span>
                </div>
              </button>
            </div>

            {/* Main Feature & Actions */}
            <div className="flex flex-col gap-4">
              <button 
                onClick={() => openModal('星网回路', '跨星系加密量子通讯网络')}
                className="glass-card w-full h-32 relative overflow-hidden group clip-corner shrink-0"
              >
                {settings.moduleBgs['星网回路'] && (
                  <img 
                    src={settings.moduleBgs['星网回路']} 
                    alt="Communication" 
                    className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-500 mix-blend-luminosity"
                    referrerPolicy="no-referrer"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-base)] via-transparent to-transparent opacity-80" />
                <div className="absolute bottom-4 right-4 flex items-center gap-2">
                  <MessageSquare className="text-[var(--accent-color)]" size={18} />
                  <span className="text-xl text-[var(--text-primary)] tracking-widest font-light text-glow">星网回路</span>
                </div>
              </button>

              <div className="grid grid-cols-2 gap-4 h-24 shrink-0">
                <button 
                  onClick={() => openModal('轨迹管理', '日常任务与行程安排规划')}
                  className="glass-card flex flex-col items-center justify-center gap-2 group hover:bg-[var(--bubble-bg)] clip-corner-br relative overflow-hidden"
                >
                  {settings.moduleBgs['轨迹管理'] && (
                    <img src={settings.moduleBgs['轨迹管理']} alt="bg" className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:opacity-70 transition-opacity duration-500 mix-blend-luminosity" referrerPolicy="no-referrer" />
                  )}
                  <div className="relative z-10 flex flex-col items-center gap-1">
                    <Calendar className="text-[var(--accent-color)] group-hover:scale-110 transition-transform" size={18} />
                    <span className="text-sm text-[var(--text-primary)] tracking-widest font-light text-glow whitespace-nowrap">轨迹管理</span>
                  </div>
                </button>
                <button 
                  onClick={() => openModal('记忆锚点', '个人备忘录与记事簿系统')}
                  className="glass-card flex flex-col items-center justify-center gap-2 group hover:bg-[var(--bubble-bg)] clip-corner relative overflow-hidden"
                >
                  {settings.moduleBgs['记忆锚点'] && (
                    <img src={settings.moduleBgs['记忆锚点']} alt="bg" className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:opacity-70 transition-opacity duration-500 mix-blend-luminosity" referrerPolicy="no-referrer" />
                  )}
                  <div className="relative z-10 flex flex-col items-center gap-1">
                    <Bookmark className="text-[var(--accent-color)] group-hover:scale-110 transition-transform" size={18} />
                    <span className="text-sm text-[var(--text-primary)] tracking-widest font-light text-glow whitespace-nowrap">记忆锚点</span>
                  </div>
                </button>
              </div>
            </div>

            {/* Stats & Secondary Features */}
            <div className="grid grid-cols-2 gap-4">
              <button 
                onClick={() => openModal('远程视域', '全息网络直播与沉浸式媒体')}
                className="glass-card col-span-2 flex items-center justify-between p-4 group hover:bg-[var(--bubble-bg)] clip-corner shrink-0 min-h-[80px] relative overflow-hidden"
              >
                {settings.moduleBgs['远程视域'] && (
                  <img src={settings.moduleBgs['远程视域']} alt="bg" className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:opacity-70 transition-opacity duration-500 mix-blend-luminosity" referrerPolicy="no-referrer" />
                )}
                <div className="relative z-10 flex items-center justify-between w-full">
                  <Cast className="text-[var(--accent-color)]" size={20} />
                  <span className="text-xl text-[var(--text-primary)] tracking-widest font-light text-glow">远程视域</span>
                </div>
              </button>

              <button 
                onClick={() => openModal('星网索引', '全星系浏览器与信息查询')}
                className="glass-card col-span-1 flex flex-col items-center justify-center gap-3 group hover:bg-[var(--bubble-bg)] clip-corner-br shrink-0 min-h-[120px] relative overflow-hidden"
              >
                {settings.moduleBgs['星网索引'] && (
                  <img src={settings.moduleBgs['星网索引']} alt="bg" className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:opacity-70 transition-opacity duration-500 mix-blend-luminosity" referrerPolicy="no-referrer" />
                )}
                <div className="relative z-10 flex flex-col items-center justify-center gap-3">
                  <Search className="text-[var(--accent-color)] group-hover:animate-pulse" size={24} />
                  <span className="text-xl text-[var(--text-primary)] tracking-widest font-light text-glow" style={{ writingMode: 'vertical-rl' }}>星网索引</span>
                </div>
              </button>

              <button 
                onClick={() => openModal('星途', '星际地图导航与交通出行')}
                className="glass-card col-span-1 relative overflow-hidden group clip-corner shrink-0 min-h-[120px]"
              >
                {settings.moduleBgs['星途'] && (
                  <img 
                    src={settings.moduleBgs['星途']} 
                    alt="Navigation" 
                    className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:opacity-70 transition-opacity duration-500 mix-blend-luminosity"
                    referrerPolicy="no-referrer"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-base)] to-transparent opacity-90" />
                <div className="absolute bottom-4 left-0 right-0 flex flex-col items-center gap-2">
                  <Navigation className="text-[var(--accent-color)]" size={18} />
                  <span className="text-xl text-[var(--text-primary)] tracking-widest font-light text-glow">星途</span>
                </div>
              </button>
            </div>

          </div>
        </div>
        </div>
      )}

      {activeModule && activeModule.title !== '星网回路' && (
        <Modal
          isOpen={true}
          onClose={() => setActiveModule(null)}
          title={activeModule.title}
        >
          <div className="flex flex-col items-center justify-center py-16 text-center">
            <div className="w-16 h-16 rounded-full border border-[var(--wireframe)] flex items-center justify-center mb-6 animate-pulse">
              <div className="w-8 h-8 bg-[var(--accent-color)] rounded-full opacity-50" />
            </div>
            <h3 className="text-2xl font-light tracking-widest text-[var(--text-primary)] mb-4 text-glow">
              {activeModule.title} 系统加载中
            </h3>
            <p className="text-sm font-mono text-[var(--text-secondary)] mb-8 max-w-md">
              {activeModule.desc}
              <br /><br />
              正在建立安全量子连接并同步数据...
            </p>
            
            <div className="w-full max-w-xs h-1 bg-[var(--wireframe)] overflow-hidden">
              <div className="h-full bg-[var(--accent-color)] w-1/3 animate-[slideRight_2s_ease-in-out_infinite]" />
            </div>
          </div>
        </Modal>
      )}

      {showSettings && (
        <Modal
          isOpen={true}
          onClose={() => setShowSettings(false)}
          title="系统设置"
        >
          <div className="flex flex-col gap-6 py-4 text-[var(--text-primary)] max-h-[60vh] overflow-y-auto pr-2 custom-scrollbar">
            
            {/* Profile Settings */}
            <div className="space-y-4">
              <h4 className="text-sm font-bold tracking-widest border-b border-[var(--wireframe)] pb-2">外观设置</h4>
              <div>
                <label className="block text-xs text-[var(--text-secondary)] mb-1">自定义字体 URL (TTF/WOFF)</label>
                <input type="text" value={settings.customFontUrl} onChange={e => setSettings({...settings, customFontUrl: e.target.value})} className="w-full bg-[var(--bubble-bg)] border border-[var(--wireframe)] rounded px-3 py-2 text-sm outline-none focus:border-[var(--accent-color)]" placeholder="留空使用默认字体" />
              </div>
              <div>
                <label className="block text-xs text-[var(--text-secondary)] mb-1">全局字体大小缩放 ({settings.fontSizeScale}x)</label>
                <input 
                  type="range" 
                  min="0.8" 
                  max="1.5" 
                  step="0.05" 
                  value={settings.fontSizeScale} 
                  onChange={e => setSettings({...settings, fontSizeScale: parseFloat(e.target.value)})} 
                  className="w-full accent-[var(--accent-color)]" 
                />
              </div>
            </div>

            {/* Module Background Settings */}
            <div className="space-y-4">
              <h4 className="text-sm font-bold tracking-widest border-b border-[var(--wireframe)] pb-2">模块背景图 (URL)</h4>
              {Object.keys(settings.moduleBgs).map(moduleName => (
                <div key={moduleName}>
                  <label className="block text-xs text-[var(--text-secondary)] mb-1">{moduleName}</label>
                  <input 
                    type="text" 
                    value={settings.moduleBgs[moduleName as keyof typeof settings.moduleBgs]} 
                    onChange={e => setSettings({
                      ...settings, 
                      moduleBgs: { ...settings.moduleBgs, [moduleName]: e.target.value }
                    })} 
                    className="w-full bg-[var(--bubble-bg)] border border-[var(--wireframe)] rounded px-3 py-2 text-sm outline-none focus:border-[var(--accent-color)]" 
                    placeholder="留空则无背景"
                  />
                </div>
              ))}
            </div>

          </div>
        </Modal>
      )}

      {showUserPersona && (
        <Modal
          isOpen={true}
          onClose={() => setShowUserPersona(false)}
          title="用户人设设定"
        >
          <div className="flex flex-col gap-6 py-4 text-[var(--text-primary)] max-h-[60vh] overflow-y-auto pr-2 custom-scrollbar">
            <div className="space-y-4">
              <div>
                <label className="block text-xs text-[var(--text-secondary)] mb-1">名称</label>
                <input type="text" value={settings.userName} onChange={e => setSettings({...settings, userName: e.target.value})} className="w-full bg-[var(--bubble-bg)] border border-[var(--wireframe)] rounded px-3 py-2 text-sm outline-none focus:border-[var(--accent-color)]" />
              </div>
              <div>
                <label className="block text-xs text-[var(--text-secondary)] mb-1">标签</label>
                <input type="text" value={settings.tag} onChange={e => setSettings({...settings, tag: e.target.value})} className="w-full bg-[var(--bubble-bg)] border border-[var(--wireframe)] rounded px-3 py-2 text-sm outline-none focus:border-[var(--accent-color)]" />
              </div>
              <div>
                <label className="block text-xs text-[var(--text-secondary)] mb-1">头像 URL</label>
                <input type="text" value={settings.avatarUrl} onChange={e => setSettings({...settings, avatarUrl: e.target.value})} className="w-full bg-[var(--bubble-bg)] border border-[var(--wireframe)] rounded px-3 py-2 text-sm outline-none focus:border-[var(--accent-color)]" />
              </div>
              <div>
                <label className="block text-xs text-[var(--text-secondary)] mb-1">头像背景图 URL</label>
                <input type="text" value={settings.profileBgUrl} onChange={e => setSettings({...settings, profileBgUrl: e.target.value})} className="w-full bg-[var(--bubble-bg)] border border-[var(--wireframe)] rounded px-3 py-2 text-sm outline-none focus:border-[var(--accent-color)]" placeholder="留空则无背景" />
              </div>
              <div>
                <label className="block text-xs text-[var(--text-secondary)] mb-1">详细人设 (User Persona)</label>
                <textarea 
                  value={settings.userPersona || ''} 
                  onChange={e => setSettings({...settings, userPersona: e.target.value})} 
                  className="w-full bg-[var(--bubble-bg)] border border-[var(--wireframe)] rounded px-3 py-2 text-sm outline-none focus:border-[var(--accent-color)] min-h-[100px] resize-y" 
                  placeholder="描述你的身份、性格、背景等，AI将根据此设定与你交互..."
                />
              </div>
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
};
