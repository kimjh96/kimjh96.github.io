import { ArrowUpRight } from 'lucide-react';

import Chip from '@components/Chip';
import Section from '@components/Section';
import { projects } from '@data/resume';

function Projects() {
  return (
    <Section title="Projects" id="projects">
      <div className="flex flex-col gap-5">
        {projects.map((item) => (
          <article
            key={item.name}
            className="flex flex-col gap-4 rounded-2xl border border-solid border-border bg-card p-7 transition-[border-color] duration-150 hover:border-border-dark"
          >
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div className="flex items-center gap-3">
                {item.logo && (
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center overflow-hidden rounded-xl border border-solid border-border bg-layer">
                    <img
                      src={item.logo}
                      alt=""
                      className={`h-full w-full ${item.logoInset ? 'object-contain p-2.5' : 'object-cover'} ${item.logoDark ? 'dark:hidden' : ''}`}
                    />
                    {item.logoDark && (
                      <img
                        src={item.logoDark}
                        alt=""
                        className={`hidden h-full w-full ${item.logoInset ? 'object-contain p-2.5' : 'object-cover'} dark:block`}
                      />
                    )}
                  </div>
                )}
                <div className="flex flex-col gap-1">
                  <h3 className="text-[22px] font-bold leading-[28px] tracking-[-0.025em] text-fg">
                    {item.name}
                  </h3>
                  {item.tagline && (
                    <span className="text-[13px] font-medium tracking-[-0.005em] text-fg-tertiary">
                      {item.tagline}
                    </span>
                  )}
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                {item.links.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex h-8 items-center gap-1 rounded-full border border-solid border-border px-3 text-[13px] font-medium text-fg-secondary transition-[background-color,color,border-color] duration-150 hover:border-primary hover:bg-primary-a10 hover:text-primary"
                  >
                    {link.label}
                    <ArrowUpRight size={14} />
                  </a>
                ))}
              </div>
            </div>
            <p className="text-[15px] leading-[26px] tracking-[-0.01em] text-fg-secondary">
              {item.description}
            </p>
            {item.stack && item.stack.length > 0 && (
              <div className="flex flex-wrap gap-1.5">
                {item.stack.map((s) => (
                  <Chip key={s}>{s}</Chip>
                ))}
              </div>
            )}
          </article>
        ))}
      </div>
    </Section>
  );
}

export default Projects;
