import type { PropsWithChildren } from 'react';

interface ContainerProps {
  className?: string;
}

export default function Container({ children, className = '' }: PropsWithChildren<ContainerProps>) {
  return <div className={`mx-auto w-full max-w-[1200px] px-5 sm:px-8 lg:px-12 ${className}`}>{children}</div>;
}
