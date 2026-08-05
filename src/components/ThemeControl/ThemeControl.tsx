import { Monitor, Moon, Sun } from 'lucide-react';

import type { ThemePreference } from '@hooks/useThemeMode';

interface ThemeControlProps {
  preference: ThemePreference;
  onChange: (preference: ThemePreference) => void;
}

const themeOptions = {
  system: { label: '시스템', next: 'light', icon: Monitor },
  light: { label: '라이트', next: 'dark', icon: Sun },
  dark: { label: '다크', next: 'system', icon: Moon }
} as const;

function ThemeControl({ preference, onChange }: ThemeControlProps) {
  const { label, next, icon: Icon } = themeOptions[preference];
  const nextLabel = themeOptions[next].label;

  return (
    <button
      type="button"
      onClick={() => onChange(next)}
      aria-label={`현재 ${label} 모드, ${nextLabel} 모드로 전환`}
      title={`${nextLabel} 모드로 전환`}
      className="inline-flex h-9 w-9 items-center justify-center rounded-full text-fg-tertiary transition-[background-color,color] duration-150 hover:bg-layer hover:text-fg"
    >
      <Icon size={18} />
    </button>
  );
}

export default ThemeControl;
