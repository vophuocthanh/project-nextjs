import React from 'react';
import { twMerge } from 'tailwind-merge';
import { Spinner } from '../loading';

interface ButtonProps
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  children: React.ReactNode;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'primary' | 'secondary';
  isLoading?: boolean;
}

const variantsClasses = {
  primary: 'bg-primary text-white',
  secondary: 'bg-secondary text-white',
};

const sizeClasses = {
  sm: 'text-[10px]',
  md: 'text-base',
  lg: 'text-lg',
};

const Button = ({
  children,
  className = '',
  size = 'md',
  variant = 'primary',
  isLoading = false,
  ...props
}: ButtonProps) => {
  const child = !!isLoading ? (
    <Spinner className='border-white' size='sm' />
  ) : (
    children
  );
  return (
    <button
      className={twMerge(
        'flex items-center justify-center gap-2 p-2.5 disabled:opacity-50 disabled:cursor-not-allowed',
        variantsClasses[variant],
        sizeClasses[size],
        className,
        isLoading ? 'opacity-50 pointer-events-none' : ''
      )}
      {...props}
    >
      {child}
    </button>
  );
};

export default Button;
4;
