import { useState } from "react";
import { GoChevronDown } from "react-icons/go";

export default function Select({
  label,
  options,
  value,
  onChange,
  placeholder = "Select",
  bg = "bg-[#F4F4F4]",
  icon,
  className,
}:any) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };

  const handleOptionClick = (option:any) => {
    onChange(option); // Pass the selected option to React Hook Form
    setIsOpen(false);
  };

  return (
    <div className="relative w-full">
      {label && (
        <label className="block font-medium text-sm mb-1">{label}</label>
      )}

      <div
        className={`${bg} ${className} relative  rounded-md ${
          icon ? "pl-12 pr-4" : "px-4 "
        } py-3 flex items-center justify-between cursor-pointer `}
        onClick={toggleDropdown}
      >
        {icon && (
          <span className="absolute left-3 top-1/2 transform -translate-y-1/2">
            {icon}
          </span>
        )}
        <span className="text-gray-400">{value || placeholder}</span>
        <GoChevronDown size={20} color="#fff" />
      </div>
      {isOpen && (
        <div className="absolute select-drop mt-1 w-full max-h-60 overflow-y-auto z-20 bg-white border  rounded-md shadow-lg p-2">
          {options.map((option:any) => (
            <div
              key={option}
              className={`px-4 py-2 cursor-pointer mt-2 rounded-lg hover:bg-primary hover:text-white ${
                value === option ? "bg-white text-[#A8AEBF]" : "text-[#A8AEBF]"
              }`}
              onClick={() => handleOptionClick(option)}
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
