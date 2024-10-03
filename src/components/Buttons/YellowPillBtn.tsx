
import {ButtonHTMLAttributes, ReactNode} from 'react';
import { twMerge } from 'tailwind-merge';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
  children: ReactNode;
}

export default function YellowPillBtn({children, className, ...props}: ButtonProps) {
  return (
    <button className= {twMerge("text-white bg-yellow-400 hover:bg-yellow-500 focus:outline-none focus:ring-4 focus:ring-yellow-300 font-medium rounded-full text-sm px-5 py-2.5 text-center dark:focus:ring-yellow-900", className)} {...props}>
      {children} 
    </button>
  );
}
