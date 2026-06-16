import { Monitor, Moon, Sun } from 'lucide-react';

import type { ThemePreference } from '@hooks/useThemeMode';

interface ThemeControlProps {
  preference: ThemePreference;
  onChange: (preference: ThemePreference) => void;
}

const OPTIONS = [
  { value: 'system', label: '시스템 설정 따르기', Icon: Monitor },
  { value: 'light', label: '라이트 모드', Icon: Sun },
  { value: 'dark', label: '다크 모드', Icon: Moon }
] as const;

function ThemeControl({ preference, onChange }: ThemeControlProps) {
  return (
    <div className="inline-flex items-center gap-0.5 rounded-full border border-solid border-border bg-layer p-0.5">
      {OPTIONS.map(({ value, label, Icon }) => {
        const active = preference === value;

        return (
          <button
            key={value}
            type="button"
            onClick={() => onChange(value)}
            aria-label={label}
            aria-pressed={active}
            className={
              active
                ? 'inline-flex h-8 w-8 items-center justify-center rounded-full bg-surface text-fg shadow-sm transition-colors duration-150'
                : 'inline-flex h-8 w-8 items-center justify-center rounded-full text-fg-tertiary transition-colors duration-150 hover:text-fg'
            }
          >
            <Icon size={16} />
          </button>
        );
      })}
    </div>
  );
}

export default ThemeControl;
