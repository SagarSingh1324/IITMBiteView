
import {ButtonHTMLAttributes, ReactNode} from 'react';
import { twMerge } from 'tailwind-merge';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
  children: ReactNode;
}

export default function GradMonoBtn({children, className, ...props}: ButtonProps) {
  return (
    <button className= {twMerge("text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center", className)} {...props}>
      {children} 
    </button>
  );
}
