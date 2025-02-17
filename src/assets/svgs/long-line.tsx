import { SVGProps } from "react";
type Props = {
  size?: string;
  color?: string;
  className?: string;
} & SVGProps<SVGSVGElement>;
export const LongLine = ({
  size = "77",
  color = "#1FBE58",
  className,
}: Props) => {
  return (
    <svg
      width="1546"
      height="6"
      viewBox="0 0 146 6"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0.113249 3L3 5.88675L5.88675 3L3 0.113249L0.113249 3ZM1245.89 3L1243 0.113249L1240.11 3L1243 5.88675L1245.89 3ZM3 3.5H1243V2.5H3V3.5Z"
        fill="white"
      />
    </svg>
  );
};
