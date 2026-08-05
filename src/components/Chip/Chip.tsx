import type { PropsWithChildren } from 'react';

function Chip({ children }: PropsWithChildren) {
  return (
    <span className="inline-flex h-[26px] items-center whitespace-nowrap rounded-full border border-solid border-border bg-surface px-2.5 text-[12px] font-medium leading-none tracking-[-0.005em] text-fg-secondary print:h-[22px] print:px-2 print:text-[10px]">
      {children}
    </span>
  );
}

export default Chip;
