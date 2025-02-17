import { Link } from "react-router-dom";
import { ReactNode } from "react";

type ButtonProps = {
  className?: String;
  children: ReactNode | string;
  color?: string;
  bgColor?: string;
  size?: string;
  hoverBgColor?: string;
  onClick?: (prop: any) => void;
  as?: string;
  to?: string;
  borderRadius?: string;
  disabled?: boolean;
  border?: boolean;
  borderColor?: string;
  width?: string;
};
export const Button = ({
  className,
  children,
  color = "text-white",
  bgColor = "bg-primary",
  size = "sm",
  hoverBgColor = "",
  onClick,
  as,
  to = "/",
  borderRadius = "rounded-md",
  disabled,
  border = false,
  borderColor = "border-primary",
  width,
  ...rest
}:ButtonProps) => {
  if (as === "link")
    return (
      <Link
        to={to}
        className={`${className} flex justify-center font-poppins items-center gap-2`}
      >
        {children}
      </Link>
    );
  return (
    <button
      {...rest}
      disabled={disabled}
      onClick={onClick}
      className={` ${className} ${
        size === "sm"
          ? "h-10 w-[120px]"
          : size === "md"
          ? "h-10 w-[140px]"
          : "h-[40px] w-auto"
      } px-3 font-medium ${borderRadius} ${
        border ? `border ${borderColor}` : ""
      } ${
        disabled ? "disabled:cursor-not-allowed" : "disabled:cursor-pointer"
      } flex gap-3 ${width} font-medium items-center justify-center font-roboto ${bgColor} ${color}  duration-100 ${hoverBgColor} `}
    >
      {children}
    </button>
  );
};
