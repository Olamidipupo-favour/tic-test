import React from 'react';
import { Link } from "react-router-dom";

interface ButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  size?: 'sm' | 'md' | 'lg';
  as?: string;
  bgColor?: string;
  color?: string;
  borderRadius?: string;
  hoverBgColor?: string;
  disabled?: boolean;
  to?: string;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  className = '',
  onClick,
  size = 'md',
  as = 'button',
  bgColor = 'bg-primary',
  color = 'text-white',
  borderRadius = 'rounded',
  hoverBgColor = 'hover:bg-primary-dark',
  disabled = false,
  to = '/',
  ...props
}) => {
  if (as === "link")
    return (
      <Link
        to={to}
        className="px-7 py-4 bg-primaryPurple  duration-100 hover:bg-[rgb(130,0,111,.8)] text-white rounded-md"
      >
        {children}
      </Link>
    );
  return (
    <button
      className={`${bgColor} ${color} ${borderRadius} ${hoverBgColor} ${className} ${
        size === 'sm' ? 'px-4 py-2' : size === 'md' ? 'px-6 py-3' : 'px-8 py-4'
      } transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed`}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};
