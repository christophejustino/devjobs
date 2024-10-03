const Title = () => {
  return (
    <div>
      <div className="flex items-cente justify-between">
        <div>
          <span className="text-2xl text-white font-semibold">devjobs</span>
        </div>
        <div className="flex items-center space-x-2">
          <img src="desktop/icon-sun.svg" alt="" />
          <div className="bg-slate-50 cursor-pointer w-12 h-6 rounded-full flex items-center p-1">
            <div className="bg-[#5964e0] size-4 rounded-full"> </div>
          </div>
          <img src="desktop/icon-moon.svg" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Title;
