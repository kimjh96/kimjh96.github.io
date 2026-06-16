import type { PropsWithChildren } from 'react';

import Container from '@components/Container';

interface SectionProps {
  title: string;
  id?: string;
}

function Section({ title, id, children }: PropsWithChildren<SectionProps>) {
  return (
    <section id={id} className="py-24 max-[600px]:py-16 print:py-6">
      <Container>
        <header className="mb-10 flex items-baseline gap-3">
          <span className="inline-block h-5 w-1 translate-y-[2px] rounded-[2px] bg-primary" />
          <h2 className="text-heading1 text-fg">{title}</h2>
        </header>
        {children}
      </Container>
    </section>
  );
}

export default Section;
