import { DarkModeContext } from "@/context/DarkModeContext";
import clsx from "clsx";
import { ReactNode, useContext } from "react";

const Modal = ({ children }: { children: ReactNode }) => {
  const { darkMode } = useContext(DarkModeContext);
  return (
    <div>
      <div
        onClick={(e) => e.stopPropagation()}
        className={clsx(
          " cursor-none p-6 xl:mx-96 lg:mx-40 md:mx-28 mx-8 min-h-12 rounded-xl",
          darkMode ? "bg-gray-700" : "bg-slate-50"
        )}
      >
        {children}
      </div>
    </div>
  );
};

export default Modal;
