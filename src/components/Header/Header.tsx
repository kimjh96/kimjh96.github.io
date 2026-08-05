import Container from '@components/Container';
import ThemeControl from '@components/ThemeControl';
import type { ThemePreference } from '@hooks/useThemeMode';

interface HeaderProps {
  preference: ThemePreference;
  onPreferenceChange: (preference: ThemePreference) => void;
}

function Header({ preference, onPreferenceChange }: HeaderProps) {
  return (
    <header className="absolute inset-x-0 top-0 z-10 print:hidden">
      <Container>
        <div className="flex h-16 items-center justify-end">
          <ThemeControl preference={preference} onChange={onPreferenceChange} />
        </div>
      </Container>
    </header>
  );
}

export default Header;
