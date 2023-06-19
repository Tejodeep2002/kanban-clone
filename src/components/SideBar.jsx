import Project from "./Project";

const SideBar = () => {
  return (
    <>
      <div className=" w-16 sm:w-80 h-screen border-r border-[#DBDBDB]">
        <div className=" top-0 relative w-auto h-[5.5rem] flex items-center justify-center border-b-[1px] border-[#DBDBDB] ">
          <img
            src="/images/logo.svg"
            alt=""
            className="w-[24px] h-[24px] mr-2"
          />
          <span className="hidden sm:inline font-semibold text-xl text-[#0D062D]">
            Project M.
          </span>
          <button>
            <img
              src="/images/icons/arrow.png"
              alt=""
              className=" hidden sm:inline w-[26px] h-[20px] ml-[2.9rem] "
            />
          </button>
        </div>

        <div className="relative flex flex-col gap-6 p-5">
          <button className="flex gap-4 text-medium text-base text-[#787486]">
            <img src="/images/icons/home.png" alt="" />
            <span className="hidden sm:inline">Home</span>
          </button>
          <button className="flex gap-4 text-medium text-base text-[#787486]">
            <img src="/images/icons/messages.png" alt="" />
            <span className="hidden sm:inline">Messages</span>
          </button>
          <button className="flex gap-4 text-medium text-base text-[#787486]">
            <img src="/images/icons/tasks.png" alt="" />
            <span className="hidden sm:inline">Tasks</span>
          </button>
          <button className="flex gap-4 text-medium text-base text-[#787486]">
            <img src="/images/icons/members.png" alt="" />
            <span className="hidden sm:inline">Members</span>
          </button>
          <button className="flex gap-4 text-medium text-base text-[#787486]">
            <img src="/images/icons/settings.png" alt="" />
            <span className="hidden sm:inline">Settings</span>
          </button>
        </div>
        <div className="w-7 sm:w-56 border-t border-[#DBDBDB] mx-auto"></div>
        <div className=" hidden sm:block sm:flex sm:justify-between px-6 mt-8">
          <span className="  text-xs font-bold text-[#787486]">
            MY PROJECTS
          </span>
          <img
            src="/images/icons/add-btn.png"
            alt=""
            className="w-[20px] h-[20px]"
          />
        </div>
        <div className=" hidden sm:block mt-5 flex flex-col gap-2 m-auto">
          <Project name={"Mobile App"} toggle={true} dotcol={"#7AC555"} />
          <Project
            name={"Website Redesign"}
            toggle={false}
            dotcol={"#FFA500"}
          />
          <Project name={"Design System"} toggle={false} dotcol={"#E4CCFD"} />
          <Project name={"Wireframes"} toggle={false} dotcol={"#76A5EA"} />
        </div>

        <div className="relative hidden sm:block sm:flex  sm:flex-col sm:items-center   sm:mx-auto">
          <div className="relative -bottom-8 rounded-full w-16 h-16 bg-[#f5f5f5]  flex justify-center items-center ">
            <img
              src="/images/icons/lamp-on.png"
              alt=""
              className="z-20 rounded-full "
              styles={{ filter: "drop-shadow(5px 5px 10px #76A5EA)" }}
            />
          </div>
          <div className=" px-5 py-5  w-52 h-52 rounded-2xl bg-[#f5f5f5] flex flex-col justify-center items-center">
            <div className="flex flex-col justify-center items-center gap-3 ">
              <div className="font-medium leading-[1.1rem] text-sm">
                Thoughts Time
              </div>
              <div className="w-[10.4rem] font-normal text-xs leading-[0.9rem] text-[#787486]">
                <p>
                  We don’t have any notice for you, till then you can share your
                  thoughts with your peers.
                </p>
              </div>
              <input
                type="text"
                className="w-[10.4rem] h-[2.5rem] font-normal text-sm text-black px-6 rounded "
                placeholder="Write a message"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SideBar;
