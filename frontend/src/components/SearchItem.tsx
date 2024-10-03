import { SearchIcon } from "lucide-react";
import { Button } from "./ui/button";
import { useContext } from "react";
import { DarkModeContext } from "@/contexts/DarkModeContext";
import clsx from "clsx";

interface Props {
  setOpenModal: (open: boolean) => void;
  openModal: boolean;
}
const SearchItem = ({ openModal, setOpenModal }: Props) => {
  const { darkMode } = useContext(DarkModeContext);
  return (
    <div className="md:pt-3 pt-5 relative">
      <div
        className={clsx(
          "w-full rounded-lg h-[70px] items-center grid grid-cols-1 xl:grid-cols-[1.5fr,1fr,1fr] lg:grid-cols-[1.5fr,1fr,1fr] md:grid-cols-[1.5fr,1fr,1fr] py-3 px-3 relative",
          darkMode ? "bg-slate-800" : "bg-white"
        )}
      >
        <div className="flex items-center space-x-3">
          <img
            src="desktop/icon-search.svg"
            className="size-6 md:block hidden"
            alt=""
          />
          <input
            type="text"
            className={clsx(
              "md:placeholder:text-sm placeholder:text-xs placeholder:text-slate-400 w-[70%] xl:w-[70%] lg:w-[90%] md:w-[90%] h-[39px] outline-none p-2",
              darkMode ? "bg-slate-800" : ""
            )}
            placeholder="Filter by title, companies, expertise..."
          />
          <div onClick={() => setOpenModal(!openModal)}>
            <img
              src="mobile/icon-filter.svg"
              className="md:hidden size-5"
              alt=""
            />
          </div>
          <Button className=" hover:bg-[#5964e0] md:hidden size-12 hover:scale-110 text-sm bg-[#5964e0] font-normal">
            <SearchIcon className="size-24" />
          </Button>
        </div>
        <div className="h-full w-[1.4px] xl:block md:block lg:block hidden bg-slate-200 absolute xl:left-[450px] lg:left-[400px] md:left-[280px]"></div>
        <div className="hidden xl:block md:block lg:block">
          <div className="flex items-center space-x-4 px-2">
            <img src="desktop/icon-location.svg" alt="" />
            <input
              type="text"
              className={clsx(
                "placeholder:text-sm  placeholder:text-slate-400 h-[39px] outline-none p-2",
                darkMode ? "bg-slate-800" : ""
              )}
              placeholder="Filter by location..."
            />
          </div>
        </div>
        <div className=" xl:block md:block lg:block hidden h-full w-[1.4px] bg-slate-200 xl:left-[765px] lg:left-[670px] md:left-[490px] absolute"></div>
        <div className="hidden xl:block md:block lg:block min-w-full">
          <div className=" w-[100%]">
            <div className="flex items-center lg:space-x-6 space-x-1 w-full">
              <div className="flex items-center space-x-3 xl:space-x-4 xl:px-6 w-[100%]">
                <input type="checkbox" className=" cursor-pointer size-5" />
                <p
                  className={clsx(
                    "text-sm font-semibold lg:block xl:block md:hidden hidden",
                    darkMode ? "text-white" : ""
                  )}
                >
                  Full Time Only
                </p>
                <p className="text-sm font-semibold lg:hidden">Full Time</p>
              </div>
              <Button className="xl:w-40 hover:bg-[#7880dd] hover:scale-110 text-sm bg-[#5964e0] font-normal">
                Search
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchItem;
