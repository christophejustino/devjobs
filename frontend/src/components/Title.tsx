import { DarkModeContext } from "@/context/DarkModeContext";
import clsx from "clsx";
import { useContext } from "react";

const Title = () => {
  const { darkMode, setDarkMode } = useContext(DarkModeContext);

  const handleDarkMode = () => {
    setDarkMode(!darkMode);
  };
  return (
    <div>
      <div className="flex items-cente justify-between">
        <div>
          <span
            className={clsx(
              "text-2xl text-white font-semibold",
              darkMode ? "text-slate-700" : ""
            )}
          >
            devjobs
          </span>
        </div>
        <div className="flex items-center space-x-2">
          <img src="desktop/icon-sun.svg" alt="" />
          <div
            onClick={handleDarkMode}
            className={clsx(
              "bg-slate-50 cursor-pointer w-12 h-6 rounded-full flex items-center p-1",
              darkMode ? "bg-slate-400" : ""
            )}
          >
            <div
              className={clsx(
                "bg-[#5964e0] size-4 rounded-full",
                darkMode ? "translate-x-6" : "translate-x-0"
              )}
            >
              {" "}
            </div>
          </div>
          <img src="desktop/icon-moon.svg" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Title;
