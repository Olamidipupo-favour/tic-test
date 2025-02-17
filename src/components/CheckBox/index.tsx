import React, { useState } from 'react';

const CustomCheckbox: React.FC = () => {
  const [isChecked, setIsChecked] = useState(false);

  const toggleCheckbox = () => {
    setIsChecked((prevState) => !prevState);
  };

  return (
    <label className="flex items-center space-x-2 cursor-pointer">
      <div className="w-6 h-6 rounded border border-gray-400 flex items-center justify-center bg-white focus-within:border-primaryGreen">
        {isChecked && (
          <svg
            className="w-4 h-4 text-secondaryGreen"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M4.293 8.293a1 1 0 011.414-1.414l4 4a1 1 0 001.414 0l8-8a1 1 0 111.414 1.414l-9 9a1 1 0 01-1.414 0l-5-5a1 1 0 00-1.414 0z"
            />
          </svg>
        )}
      </div>
      <span>Custom Checkbox Label</span>
      <input
        type="checkbox"
        className="hidden"
        checked={isChecked}
        onChange={toggleCheckbox}
      />
    </label>
  );
};

export default CustomCheckbox;
