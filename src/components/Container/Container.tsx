import type { PropsWithChildren } from 'react';

function Container({ children }: PropsWithChildren) {
  return (
    <div className="mx-auto w-full max-w-[840px] px-6 max-[600px]:px-5 print:max-w-full print:px-0">
      {children}
    </div>
  );
}

export default Container;
