import Chip from '@components/Chip';
import ImpactCard from '@components/ImpactCard';
import Section from '@components/Section';
import { experiences } from '@data/resume';

function Experience() {
  return (
    <Section title="Experience" id="experience">
      <ol className="flex flex-col gap-14">
        {experiences.map((exp) => (
          <li
            key={`${exp.company}-${exp.period}`}
            className="grid grid-cols-[200px_1fr] gap-8 max-[720px]:grid-cols-1 max-[720px]:gap-4"
          >
            <div className="flex flex-col gap-1 pt-1">
              <div className="text-[13px] font-semibold tracking-[-0.005em] text-fg-tertiary [font-feature-settings:'tnum']">
                {exp.period}
              </div>
              <div className="text-[13px] tracking-[-0.005em] text-fg-tertiary">{exp.location}</div>
            </div>
            <div className="flex flex-col gap-4">
              <div className="flex flex-wrap items-baseline gap-2">
                <h3 className="text-[18px] font-bold leading-[26px] tracking-[-0.02em] text-fg">
                  {exp.role}
                </h3>
                <span className="text-[15px] font-semibold tracking-[-0.015em] text-primary">
                  @ {exp.company}
                </span>
              </div>
              {exp.summary && (
                <p className="text-[15px] leading-[24px] tracking-[-0.01em] text-fg-secondary">
                  {exp.summary}
                </p>
              )}
              {exp.isPlaceholder && (
                <div className="inline-flex w-fit items-center gap-2 rounded-lg bg-layer px-3 py-2 text-[13px] tracking-[-0.005em] text-fg-tertiary">
                  · 작성 예정
                </div>
              )}
              {exp.impacts && exp.impacts.length > 0 && (
                <div className="flex flex-col gap-2">
                  {exp.impacts.map((impact, i) => (
                    <ImpactCard key={i}>{impact.text}</ImpactCard>
                  ))}
                </div>
              )}
              {exp.bullets && exp.bullets.length > 0 && (
                <ul className="flex flex-col gap-2 pl-0">
                  {exp.bullets.map((b, i) => (
                    <li
                      key={i}
                      className="relative pl-4 text-[15px] leading-[24px] tracking-[-0.01em] text-fg-secondary before:absolute before:left-1 before:top-[10px] before:h-1 before:w-1 before:rounded-full before:bg-fg-disabled before:content-['']"
                    >
                      {b}
                    </li>
                  ))}
                </ul>
              )}
              {exp.stack && exp.stack.length > 0 && (
                <div className="mt-1 flex flex-wrap gap-1.5">
                  {exp.stack.map((s) => (
                    <Chip key={s}>{s}</Chip>
                  ))}
                </div>
              )}
            </div>
          </li>
        ))}
      </ol>
    </Section>
  );
}

export default Experience;
