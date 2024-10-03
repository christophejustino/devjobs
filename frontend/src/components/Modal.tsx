import { ReactNode } from "react";

const Modal = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <div
        onClick={(e) => e.stopPropagation()}
        className=" cursor-none p-6 xl:mx-96 lg:mx-40 md:mx-28 mx-8 min-h-12 bg-slate-50 rounded-xl "
      >
        {children}
      </div>
    </div>
  );
};

export default Modal;
