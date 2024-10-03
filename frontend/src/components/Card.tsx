import { DarkModeContext } from "@/contexts/DarkModeContext";
import clsx from "clsx";
import { useContext, useState } from "react";

const Card = () => {
  const { darkMode } = useContext(DarkModeContext);
  return (
    <div
      className={clsx(
        "md:w-[350px] lg:w-[290px] xl:w-[330px] px-6 pt-12 py-6 rounded-lg space-y-8 relative",
        darkMode ? "bg-slate-900" : "bg-white"
      )}
    >
      <div className=" flex flex-col space-y-2">
        <span className="text-sm text-slate-400">20h ago . Full Time</span>
        <strong className={clsx("cursor-pointer", darkMode ? "text-white" : "")}>Midlevel Back End Engineer</strong>
        <span className="text-sm text-slate-400">Scoot</span>
      </div>
      <div>
        <span className="text-xs text-blue-700 font-semibold">Russia</span>
      </div>
      <div className="size-12 rounded-2xl bg-slate-800 absolute flex items-center justify-center bottom-[184px]">
        <img src="maker.svg" alt="" />
      </div>
    </div>
  );
};

export default Card;
