import { Moon, Sun } from 'lucide-react';

import type { ThemePreference } from '@hooks/useThemeMode';

interface ThemeControlProps {
  mode: 'light' | 'dark';
  onChange: (preference: ThemePreference) => void;
}

function ThemeControl({ mode, onChange }: ThemeControlProps) {
  const nextMode = mode === 'dark' ? 'light' : 'dark';
  const Icon = mode === 'dark' ? Sun : Moon;

  return (
    <button
      type="button"
      onClick={() => onChange(nextMode)}
      aria-label={`${nextMode === 'dark' ? '다크' : '라이트'} 모드로 전환`}
      className="inline-flex h-9 w-9 items-center justify-center rounded-full text-fg-tertiary transition-[background-color,color] duration-150 hover:bg-layer hover:text-fg"
    >
      <Icon size={18} />
    </button>
  );
}

export default ThemeControl;
