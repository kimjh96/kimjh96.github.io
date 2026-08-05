import type { PropsWithChildren } from 'react';

function ImpactCard({ children }: PropsWithChildren) {
  return (
    <div className="border-l-2 border-solid border-primary py-1 pl-4 text-[15px] font-semibold leading-[24px] tracking-[-0.01em] text-fg">
      {children}
    </div>
  );
}

export default ImpactCard;
