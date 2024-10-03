
import {ButtonHTMLAttributes, ReactNode} from 'react';
import { twMerge } from 'tailwind-merge';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
  children: ReactNode;
}

export default function PurplePillBtn({children, className, ...props}: ButtonProps) {
  return (
    <button className= {twMerge("text-white bg-purple-700 hover:bg-purple-800 focus:outline-none focus:ring-4 focus:ring-purple-300 font-medium rounded-full text-sm px-5 py-2.5 text-center dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900", className)} {...props}>
      {children} 
    </button>
  );
}
