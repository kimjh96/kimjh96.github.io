import type { PropsWithChildren } from 'react';

function ImpactCard({ children }: PropsWithChildren) {
  return (
    <div className="relative rounded-r-lg border-l-[3px] border-solid border-primary bg-primary-a10 py-[14px] pl-[18px] pr-4 text-[15px] font-semibold leading-[24px] tracking-[-0.01em] text-fg">
      {children}
    </div>
  );
}

export default ImpactCard;
