import { SVGProps } from "react";
type Props = {
  size?: number;
  color?: string;
  className?: string;
} & SVGProps<SVGSVGElement>;
export const Search = ({ size, color, className }: Props) => {
  return (
    <svg
      width={size ? size : "16"}
      height={size ? size : "16"}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M7.74119 1.33301C4.20232 1.33301 1.3335 4.13847 1.3335 7.59918C1.3335 11.0599 4.20232 13.8654 7.74119 13.8654C9.25475 13.8654 10.6457 13.3522 11.7422 12.494L13.8249 14.5254L13.8803 14.5721C14.0736 14.712 14.3478 14.6961 14.5227 14.5246C14.7152 14.3358 14.7148 14.0303 14.5218 13.8421L12.4636 11.8345C13.5101 10.7193 14.1489 9.23217 14.1489 7.59918C14.1489 4.13847 11.2801 1.33301 7.74119 1.33301ZM7.74119 2.29817C10.735 2.29817 13.1619 4.67151 13.1619 7.59918C13.1619 10.5269 10.735 12.9002 7.74119 12.9002C4.7474 12.9002 2.32045 10.5269 2.32045 7.59918C2.32045 4.67151 4.7474 2.29817 7.74119 2.29817Z"
        fill={color ? color : "#8F9BB3"}
      />
    </svg>
  );
};
