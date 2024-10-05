import { Plus } from "lucide-react";
import Card from "./components/Card";
import SearchItem from "./components/SearchItem";
import Title from "./components/Title";
import Modal from "./components/Modal";
import { useContext, useEffect, useState } from "react";
import { Button } from "./components/ui/button";
import { DarkModeContext } from "./context/DarkModeContext";
import clsx from "clsx";

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

const App = () => {
  const [toggleModal, setToggleModal] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const { darkMode } = useContext(DarkModeContext);
  const [data, setData] = useState<JobWithCompany[]>([]);
  const [filteredData, setFilteredData] = useState<JobWithCompany[]>([]);
  const [filters, setFilters] = useState({ title: "", location: "" });
  const [selectedJobTypes, setSelectedJobTypes] = useState<Type[]>([]);
  const [affiche, setAffiche] = useState(6);

  useEffect(() => {
    const getJob = async () => {
      const res = await fetch("http://localhost:4000/api/jobs");
      const jobs = await res.json();

      const formattedJobs = jobs.map((job: any) => ({
        ...job,
        jobType: Type[job.jobType as keyof typeof Type],
        postedDate: new Date(job.postedDate),
      }));

      setData(formattedJobs);
      setFilteredData(formattedJobs);
    };
    getJob();
  }, []);

  const handleToggleModal = () => {
    setToggleModal(!toggleModal);
  };

  const handleFilterChange = (
    title: string,
    location: string,
    jobTypes: Type[]
  ) => {
    setFilters({ title, location });
    setSelectedJobTypes(jobTypes);
  };

  useEffect(() => {
    const filtered = data.filter(
      (job) =>
        job.title.toLowerCase().includes(filters.title.toLowerCase()) &&
        job.location.country
          .toLowerCase()
          .includes(filters.location.toLowerCase()) &&
        (selectedJobTypes.length === 0 ||
          selectedJobTypes.includes(job.jobType))
    );
    setFilteredData(filtered);
  }, [filters, data, selectedJobTypes]);

  const handleAfficheCard = () => {
    setAffiche((prev) => prev + 3);
  };

  return (
    <main
      className={clsx(
        " xl:bg-[url(desktop/bg-pattern-header.svg)] lg:bg-[url(desktop/bg-pattern-header.svg)] md:bg-[url(tablet/bg-pattern-header.svg)] bg-[url(tablet/bg-pattern-header.svg)] bg-no-repeat w-full min-h-screen xl:px-32 md:px-6 px-4 mx-auto xl:py-6 md:py-6 py-6 relative",
        darkMode ? "bg-slate-700" : "bg-slate-100"
      )}
    >
      <div className="w-full space-y-8 md:py-6 py-4">
        <div>
          <Title />
        </div>
        <div>
          <SearchItem
            setOpenModal={setOpenModal}
            openModal={openModal}
            onFilterChange={handleFilterChange}
            title={filters.title}
            location={{ country: filters.location }}
            jobType={selectedJobTypes}
          />
        </div>
        <div
          onClick={handleToggleModal}
          className={clsx(
            "size-14 cursor-pointer rounded-lg flex items-center justify-center",
            darkMode ? "bg-slate-500 shadow-md" : "bg-white"
          )}
        >
          <div
            className={clsx(
              "size-8 rounded-full flex items-center justify-center",
              darkMode ? "bg-purple-400" : "bg-rose-300"
            )}
          >
            <Plus className="text-white" />
          </div>
        </div>

        <div className="flex items-center justify-center w-full xl:py-12 md:py-14 lg:py-14 py-8">
          <div className="grid w-full grid-cols-1 md:grid-cols-[1fr,1fr] lg:grid-cols-[1fr,1fr,1fr] lg:gap-x-12 xl:grid-cols-3 gap-x-4 gap-y-12">
            {filteredData.slice(0, affiche).map((item) => (
              <Card key={item.jobId} job={item} />
            ))}
          </div>
        </div>
        <div
          onClick={handleAfficheCard}
          className="flex items-center justify-center"
        >
          <Button className="bg-blue-700 hover:bg-blue-500 hover:scale-105">Learn More</Button>
        </div>
      </div>

      {toggleModal && (
        <div
          onClick={() => setToggleModal(!toggleModal)}
          className="fixed bg-black bottom-0 left-0 cursor-pointer w-full h-full bg-opacity-50 flex items-center justify-center"
        >
          <Modal>
            <h1>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Lorem
              ipsum, dolor sit amet consectetur adipisicing elit. Dicta quisquam
              laudantium, fugiat aut ullam totam nemo officiis eveniet! Laborum
              veniam aliquam aliquid iusto nulla, totam iure omnis magni
              asperiores quis soluta vero, dignissimos repudiandae
              necessitatibus in maxime iste velit tempore fuga sint sapiente eos
              explicabo voluptate corporis. Rem neque ducimus eligendi soluta.
              Consectetur ea qui unde impedit aliquam facilis soluta, incidunt
              repellendus sapiente nihil placeat ab iste magni perferendis et
              cum, quia fugiat consequatur provident neque distinctio corrupti
              voluptatum porro! Sequi odio libero beatae? Fuga possimus quod,
              alias ex, aut facere eligendi iusto non enim consectetur impedit
              corrupti labore sequi!
            </h1>
          </Modal>
        </div>
      )}

      {openModal && (
        <div
          onClick={() => setOpenModal(!openModal)}
          className="fixed bg-black bottom-0 left-0 md:hidden cursor-pointer w-full h-full bg-opacity-50 flex items-center justify-center"
        >
          <Modal>
            <div className="divide-y space-y-6">
              <div className="flex items-center space-x-4 px-2">
                <img src="desktop/icon-location.svg" alt="" />
                <input
                  type="text"
                  className="placeholder:text-sm bg-transparent placeholder:text-slate-400 h-[39px] outline-none p-2"
                  placeholder="Filter by location..."
                />
              </div>
              <div className="flex flex-col items-center pt-8 space-y-8">
                <div className="flex items-center space-x-4 w-[100%]">
                  <div className="bg-slate-600 size-5">
                    <input
                      type="checkbox"
                      className="bg-transparent rounded-lg size-5"
                    />
                  </div>
                  <p
                    className={clsx(
                      "text-sm font-bold ",
                      darkMode ? "text-white" : ""
                    )}
                  >
                    Full Time
                  </p>
                </div>
                <Button className="w-full h-12 hover:bg-[#5964e0] hover:scale-110 text-sm bg-[#5964e0] font-normal">
                  Search
                </Button>
              </div>
            </div>
          </Modal>
        </div>
      )}
    </main>
  );
};

export default App;
