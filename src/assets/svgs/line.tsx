import { SVGProps } from "react";
type Props = {
  size?: string;
  color?: string;
  className?: string;
} & SVGProps<SVGSVGElement>;
export const Line = ({ size = "77", color='#1FBE58', className }: Props) => {
  return (
    <svg
      width={size}
      height="6"
      viewBox="0 0 77 6"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M0.333333 3C0.333333 4.47276 1.52724 5.66667 3 5.66667C4.47276 5.66667 5.66667 4.47276 5.66667 3C5.66667 1.52724 4.47276 0.333333 3 0.333333C1.52724 0.333333 0.333333 1.52724 0.333333 3ZM71.3333 3C71.3333 4.47276 72.5272 5.66667 74 5.66667C75.4728 5.66667 76.6667 4.47276 76.6667 3C76.6667 1.52724 75.4728 0.333333 74 0.333333C72.5272 0.333333 71.3333 1.52724 71.3333 3ZM3 3.5L74 3.5V2.5L3 2.5V3.5Z"
        fill={color}
      />
    </svg>
  );
};
