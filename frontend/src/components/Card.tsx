import { DarkModeContext } from "@/context/DarkModeContext";
import clsx from "clsx";
import { motion } from "framer-motion";
import { useContext } from "react";
import { formatDistanceToNow } from "date-fns";
import TimeAgo from "react-time-ago";
import en from "javascript-time-ago/locale/en";

import TimeAgoLibrary from "javascript-time-ago";
TimeAgoLibrary.addDefaultLocale(en);

interface JobWithCompany {
  jobId: string;
  title: string;
  description: string;
  jobType: Type;
  image: string;
  location: {
    locationId: string;
    country: string;
  };
  postedDate: Date;
  requirements: string[];
  responsibilities: string[];
  company: {
    companyId: string;
    name: string;
  };
}

enum Type {
  FULL_TIME = "FULL_TIME",
  PART_TIME = "PART_TIME",
}

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

interface CardProps {
  job: JobWithCompany;
}

const Card = ({ job }: CardProps) => {
  const { darkMode } = useContext(DarkModeContext);
  const timeAgo = formatDistanceToNow(new Date(job.postedDate));

  return (
    <motion.div
      className={clsx(
        "md:w-[350px] lg:w-[290px] xl:w-[330px] px-6 pt-12 py-6 rounded-lg space-y-8 relative",
        darkMode ? "bg-slate-900" : "bg-white"
      )}
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      transition={{ duration: 0.5 }}
    >
      <div className="flex flex-col space-y-3">
        <div className="flex items-center space-x-3">
          <span className="text-sm text-slate-400">
            <TimeAgo date={new Date(job.postedDate)} />
          </span>
          <div className="size-1.5 rounded-full bg-slate-500"></div>
          <span className="text-sm text-slate-400">
            {" "}
            {job.jobType === "FULL_TIME" ? "Full Time" : "Part Time"}{" "}
          </span>
        </div>
        <strong
          className={clsx("cursor-pointer", darkMode ? "text-white" : "")}
        >
          {job.title}
        </strong>
        <span className="text-sm text-slate-400">{job.company.name}</span>
      </div>
      <div className="text-xs text-gray-500 pt-2">
        <span className="text-xs text-blue-700 font-semibold">
          {job.location.country}
        </span>
      </div>
      <div className="size-12 rounded-2xl bg-slate-800 absolute flex items-center justify-center bottom-[193px]">
        <img src={job.image} alt={job.title} />
      </div>
    </motion.div>
  );
};

export default Card;
