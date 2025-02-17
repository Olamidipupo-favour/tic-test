import React, { ReactNode, useState } from "react";
import { TfiAngleDown } from "react-icons/tfi";

interface AccordionItemProps {
  title: string;
  content?: any;
  withStyle?: boolean;
  children?: ReactNode
}

const AccordionItem: React.FC<AccordionItemProps> = ({
  title,
  content,
  withStyle,
  children
}) => {
  const [isOpen, setIsOpen] = useState(false);

  if (withStyle)
    return (
      <div className="mb-4">
        <div
          className="bg-black cursor-pointer border text-white border-borderColor rounded-md "
          onClick={() => setIsOpen(!isOpen)}
        >
          <div className="flex items-center justify-between p-4">
            <div className="flex gap-3 items-center">
              <div className="h-3 w-3 bg-primaryPurple rounded-full"></div>
              <h2 className="xs:text-lg text-sm font-light font-fontMont">{title}</h2>
            </div>
            <span
              className={`transform ${
                isOpen ? "rotate-180" : "rotate-0"
              } transition-transform`}
            >
              <TfiAngleDown color="#82006F"/>
            </span>
          </div>
          <div
            className={`overflow-hidden duration-300 transition-max-height ${
              isOpen ? "max-h-screen" : "max-h-0"
            } ease-in-out`}
          >
            <div className="xs:mx-10 mx-3 py-5 border-t font-fontMont border-borderColor text-sm xs:text-base font-light">{content}</div>
          </div>
        </div>
      </div>
    );

  return (
    <div className="mb-4">
      <div
        className="bg-black cursor-pointer border text-white border-borderColor rounded-md "
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex items-center justify-between p-4">
          <h2 className="xs:text-lg text-base font-normal font-fontMont">{title}</h2>
          <span
            className={`transform ${
              isOpen ? "rotate-180" : "rotate-0"
            } transition-transform`}
          >
            <TfiAngleDown />
          </span>
        </div>
        <div
          className={`overflow-hidden duration-300 transition-max-height ${
            isOpen ? "max-h-screen" : "max-h-0"
          } ease-in-out`}
        >
          <div className="p-4">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default AccordionItem;
