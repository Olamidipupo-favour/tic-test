import { SVGProps } from "react";
type Props = {
  size?: number;
  className?: string;
  color?: string;
} & SVGProps<SVGSVGElement>;
export const BarStick = ({ size = 60, className, color = "#FFF8FE" }: Props) => {
  return (
    <svg
      width={size}
      height="20"
      viewBox="0 0 60 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <rect y="8" width="60" height="4" rx="2" fill={color} />
      <rect width="4" height="20" rx="2" fill={color} />
    </svg>
  );
};
