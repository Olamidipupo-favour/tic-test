import { ModalProps } from "../types";
function Modal({ className, open, children, cancel }: ModalProps) {
  return (
    <>
      <div
        onClick={cancel}
        className={` bg-slate-600 bg-opacity-[0.15] duration-100 backdrop-filter backdrop-blur-xl flex justify-center items-center px-3 h-screen w-full fixed z-[70] inset-0 ${
          !open ? "hidden" : ""
        } `}
      >
        <div
          onClick={(e) => e.stopPropagation()}
          className={` min-h-40 rounded-2xl p-3 sm:p-8 ${className}`}
        >
          {children}
        </div>
      </div>
    </>
  );
}

export default Modal;
