import Container from '@components/Container';
import ThemeControl from '@components/ThemeControl';
import type { ThemePreference } from '@hooks/useThemeMode';

interface HeaderProps {
  preference: ThemePreference;
  onPreferenceChange: (preference: ThemePreference) => void;
}

function Header({ preference, onPreferenceChange }: HeaderProps) {
  return (
    <header className="sticky top-0 z-10 border-b border-solid border-border-light bg-glass backdrop-blur-[12px] backdrop-saturate-[1.8] print:hidden">
      <Container>
        <div className="flex h-16 items-center justify-between">
          <a
            href="#top"
            className="inline-flex items-center gap-2.5 text-[15px] font-bold tracking-[-0.02em] text-fg"
          >
            <span className="inline-block h-2 w-2 rounded-full bg-primary shadow-[0_0_0_4px_var(--color-primary-a10)]" />
            kimjh96
          </a>
          <ThemeControl preference={preference} onChange={onPreferenceChange} />
        </div>
      </Container>
    </header>
  );
}

export default Header;
