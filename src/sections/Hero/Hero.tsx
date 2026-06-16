import { ArrowDownToLine, Mail } from 'lucide-react';

import { GithubIcon, LinkedinIcon } from '@components/BrandIcons';
import Container from '@components/Container';
import { getCareerYears, profile } from '@data/resume';

function Hero() {
  return (
    <section
      id="top"
      className="pb-24 pt-[120px] max-[600px]:pb-16 max-[600px]:pt-[72px] print:pb-6 print:pt-0"
    >
      <Container>
        <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-primary-a10 px-3 py-1.5 text-[13px] font-semibold tracking-[-0.01em] text-primary">
          <span className="h-1.5 w-1.5 rounded-full bg-primary" />
          {profile.role} · {getCareerYears()}년 차
        </div>
        <h1 className="mb-4 text-[56px] font-bold leading-[64px] tracking-[-0.04em] text-fg max-[600px]:text-[40px] max-[600px]:leading-[48px]">
          {profile.name}
        </h1>
        <p className="mb-12 max-w-[640px] text-[22px] font-medium leading-[32px] tracking-[-0.02em] text-fg-secondary max-[600px]:mb-9 max-[600px]:text-[18px] max-[600px]:leading-[28px]">
          {profile.tagline()}
        </p>

        <div className="flex flex-wrap gap-2.5">
          <a
            href={profile.resumePdf}
            download={`${profile.name}_이력서.pdf`}
            className="inline-flex h-11 items-center gap-2 rounded-full bg-fg px-[18px] text-[14px] font-semibold tracking-[-0.01em] text-background transition-opacity duration-150 hover:opacity-90 print:hidden"
          >
            <ArrowDownToLine size={16} />
            이력서 PDF
          </a>
          <a
            href={`mailto:${profile.contacts.email}`}
            className="inline-flex h-11 items-center gap-2 rounded-full border border-solid border-border px-4 text-[14px] font-medium text-fg-secondary transition-[background-color,border-color,color] duration-150 hover:border-border-dark hover:bg-layer hover:text-fg"
          >
            <Mail size={16} />
            Email
          </a>
          <a
            href={profile.contacts.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex h-11 items-center gap-2 rounded-full border border-solid border-border px-4 text-[14px] font-medium text-fg-secondary transition-[background-color,border-color,color] duration-150 hover:border-border-dark hover:bg-layer hover:text-fg"
          >
            <GithubIcon size={16} />
            GitHub
          </a>
          <a
            href={profile.contacts.linkedin}
            target="_blank"
            rel="noreferrer"
            className="inline-flex h-11 items-center gap-2 rounded-full border border-solid border-border px-4 text-[14px] font-medium text-fg-secondary transition-[background-color,border-color,color] duration-150 hover:border-border-dark hover:bg-layer hover:text-fg"
          >
            <LinkedinIcon size={16} />
            LinkedIn
          </a>
        </div>
      </Container>
    </section>
  );
}

export default Hero;
