import type { PropsWithChildren } from 'react';

interface ButtonProps {
  className?: string;
  href?: string;
  rel?: string;
  target?: string;
}

export default function Button({ children, className = '', href, rel, target }: PropsWithChildren<ButtonProps>) {
  const defaultColorClassName = className ? '' : 'bg-[#F5EBC7] text-[#E57B32]';
  const baseClassName =
    `inline-flex cursor-pointer items-center justify-center px-6 py-2.5 text-sm font-medium transition duration-300 hover:-translate-y-0.5 hover:scale-[1.02] hover:opacity-90 hover:shadow-md ${defaultColorClassName} ${className}`;

  if (href) {
    return (
      <a href={href} className={baseClassName} rel={rel} target={target}>
        {children}
      </a>
    );
  }

  return (
    <button
      type="button"
      className={baseClassName}
    >
      {children}
    </button>
  );
}
