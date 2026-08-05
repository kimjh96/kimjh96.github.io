import Section from '@components/Section';
import { certifications, education } from '@data/resume';

function Education() {
  return (
    <Section title="Education" id="education">
      <ul className="flex flex-col gap-3">
        {education.map((e) => (
          <li
            key={e.school}
            className="grid grid-cols-[200px_1fr] gap-8 py-1 max-[720px]:grid-cols-1 max-[720px]:gap-1"
          >
            <div className="text-[13px] font-semibold tracking-[-0.005em] text-fg-tertiary [font-feature-settings:'tnum']">
              {e.period}
            </div>
            <div className="flex flex-col gap-1">
              <div className="text-[16px] font-bold tracking-[-0.02em] text-fg">{e.school}</div>
              <div className="text-[14px] tracking-[-0.01em] text-fg-secondary">{e.major}</div>
            </div>
          </li>
        ))}
      </ul>

      <div className="mt-8 border-t border-border-light pt-8 print:mt-5 print:pt-5">
        <h3 className="mb-5 text-[15px] font-bold tracking-[-0.02em] text-fg-secondary">
          Certification
        </h3>
        <ul className="flex flex-col gap-3">
          {certifications.map((certification) => (
            <li
              key={certification.name}
              className="grid grid-cols-[200px_1fr] gap-8 py-1 max-[720px]:grid-cols-1 max-[720px]:gap-1"
            >
              <div className="text-[13px] font-semibold tracking-[-0.005em] text-fg-tertiary [font-feature-settings:'tnum']">
                {certification.acquiredAt}
              </div>
              <div className="text-[16px] font-bold tracking-[-0.02em] text-fg">
                {certification.name}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}

export default Education;
