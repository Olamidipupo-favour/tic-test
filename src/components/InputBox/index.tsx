import { InputHTMLAttributes, ReactNode, useRef, useState } from "react";
import { Search } from "../../assets/svgs/search";
import { TfiAngleDown } from "react-icons/tfi";

interface InputBoxProps extends InputHTMLAttributes<HTMLInputElement> {
  placeholder?: string;
  className?: string;
  hasArrow?: boolean;
  icon?: ReactNode;
  inputType?: string;
  hasSearchIcon?: boolean;
}

const InputBox = ({
  placeholder,
  className,
  hasArrow,
  icon,
  hasSearchIcon,
  inputType = "text",
  ...rest
}: InputBoxProps) => {
  const [isFocused, setIsFocused] = useState(false);
  const ref = useRef<HTMLInputElement>(null);

  const handleInputFocus = () => {
    setIsFocused(true);
  };

  const handleInputBlur = () => {
    setIsFocused(false);
  };

  return (
    <div
      className={`${className} border-[1px] rounded-lg p-3.5 flex justify-between gap-4 items-center  ${
        isFocused ? "border-primaryPurple" : "border-borderColor"
      }`}
    >
      <input
        type={inputType}
        className="border-none focus:outline-0 bg-transparent placeholder:font-groteska-regular w-full placeholder:font-base text-white"
        placeholder={placeholder}
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        {...rest}
        ref={ref}
      />
      {hasArrow && <TfiAngleDown color="#fff" />}
      {hasSearchIcon && <Search />}
      {icon}
    </div>
  );
};

export default InputBox;
