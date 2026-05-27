import type { PropsWithChildren } from 'react';

interface ButtonProps {
  className?: string;
}

export default function Button({ children, className = '' }: PropsWithChildren<ButtonProps>) {
  return (
    <button
      type="button"
      className={`inline-flex items-center justify-center bg-[#f5ebc7] px-6 py-2.5 text-sm font-medium text-[#df7e3a] transition duration-300 hover:-translate-y-0.5 hover:scale-[1.02] hover:opacity-90 hover:shadow-md ${className}`}
    >
      {children}
    </button>
  );
}
