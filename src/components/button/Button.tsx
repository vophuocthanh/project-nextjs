import React from 'react';
import { twMerge } from 'tailwind-merge';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
}

const Button = ({ children, className = '', ...props }: ButtonProps) => {
  return (
    <button
      className={twMerge(
        'flex items-center justify-center font-semibold p-2.5',
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
4;
