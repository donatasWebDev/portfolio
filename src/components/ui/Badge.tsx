import React from 'react';
interface BadgeProps {
  children: ReactNode;
  variant?: 'default' | 'outline' | 'success' | 'warning';
  className?: string;
}
export function Badge({
  children,
  variant = 'default',
  className = ''
}: BadgeProps) {
  const variants = {
    default: 'bg-zinc-800 text-zinc-300',
    outline: 'border border-zinc-700 text-zinc-400',
    success: 'bg-emerald-950/30 text-emerald-400 border border-emerald-900/50',
    warning: 'bg-amber-950/30 text-amber-400 border border-amber-900/50'
  };
  return <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${variants[variant]} ${className}`}>
      {children}
    </span>;
}