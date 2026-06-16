import Container from '@components/Container';
import { profile } from '@data/resume';

function Footer() {
  return (
    <footer className="border-t border-solid border-border-light pb-16 pt-10 print:hidden">
      <Container>
        <span className="text-[13px] tracking-[-0.005em] text-fg-tertiary">
          © {new Date().getFullYear()} {profile.name}
        </span>
      </Container>
    </footer>
  );
}

export default Footer;
