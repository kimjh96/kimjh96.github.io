import { useEffect, useState } from 'react';

const STORAGE_KEY = 'kimjh96-theme';
const MEDIA_QUERY = '(prefers-color-scheme: dark)';

// index.html 인라인 스크립트 / index.css 토큰과 일치해야 하는 theme-color 메타값
const THEME_COLOR = {
  light: '#FFFFFF',
  dark: '#12161C'
} as const;

export type ThemePreference = 'system' | 'light' | 'dark';
type ResolvedMode = 'light' | 'dark';

function readStored(): ThemePreference {
  if (typeof window === 'undefined') return 'system';
  const stored = window.localStorage.getItem(STORAGE_KEY);
  return stored === 'light' || stored === 'dark' || stored === 'system' ? stored : 'system';
}

function readSystem(): ResolvedMode {
  if (typeof window === 'undefined') return 'light';
  return window.matchMedia(MEDIA_QUERY).matches ? 'dark' : 'light';
}

export default function useThemeMode() {
  const [preference, setPreferenceState] = useState<ThemePreference>(() => readStored());
  const [systemMode, setSystemMode] = useState<ResolvedMode>(() => readSystem());

  // 'system'이면 OS 설정을 따르고, 'light'/'dark'면 사용자가 고정한 값을 쓴다.
  const mode: ResolvedMode = preference === 'system' ? systemMode : preference;

  useEffect(() => {
    document.documentElement.dataset.theme = mode;
    document.querySelector('meta[name="theme-color"]')?.setAttribute('content', THEME_COLOR[mode]);
  }, [mode]);

  useEffect(() => {
    const mq = window.matchMedia(MEDIA_QUERY);
    const handleChange = (event: MediaQueryListEvent) => {
      setSystemMode(event.matches ? 'dark' : 'light');
    };
    mq.addEventListener('change', handleChange);
    return () => mq.removeEventListener('change', handleChange);
  }, []);

  const setPreference = (next: ThemePreference) => {
    window.localStorage.setItem(STORAGE_KEY, next);
    setPreferenceState(next);
  };

  return { preference, setPreference };
}
