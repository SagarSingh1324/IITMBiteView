
import {ButtonHTMLAttributes, ReactNode} from 'react';
import { twMerge } from 'tailwind-merge';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
  children: ReactNode;
}

export default function Button({children, className, ...props}: ButtonProps) {
  return (
    <button className= {twMerge("bg-blue-500 border border-black rounded", className)} {...props}>
      {children} 
    </button>
  );
}

