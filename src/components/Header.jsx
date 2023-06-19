const Header = () => {
  const user = {
    name: "Anima Agraeal",
    location: "U.P,India",
    picture: "/images/pictures/users/user1.png",
  };
  return (
    <>
      <div className=" w-full h-[5.5rem] px-[3rem] flex justify-between items-center border-b-[1px] border-[#DBDBDB]">
        <div className="InputBox md:mr-2 md:w-[10rem] lg:w-[26.1rem] rounded-[6px]  flex justify-content items-center bg-[#F5F5F5]">
          <img
            src="images/icons/search.png"
            alt=""
            className="w-[22px] h-[22px] mx-[1.2rem] my-[1rem]"
          />
          <input
            type="text"
            className="hidden md:block bg-[#F5F5F5] font-normal text-sm leading-[1.1rem] md:w-[6rem] lg:w-[26.1rem] h-[2.8rem]"
            placeholder="Search for anything..."
          />
        </div>

        <div className="  gap-[3.2rem] flex items-center">
          <div className="flex gap-[1.8rem]">
            <button>
              <img
                src="images/icons/calendar.png"
                className="w-[24px] h-[24px]"
                alt=""
              />
            </button>
            <button>
              <img
                src="images/icons/message-question.png"
                className="w-[24px] h-[24px]"
                alt=""
              />
            </button>

            <button>
              <img
                src="images/icons/notification.png"
                className="w-[24px] h-[24px]"
                alt=""
              />
            </button>
          </div>
          <div className="flex items-center">
            <dibuttonv className=" hidden xl:block xl:relative xl:flex flex-col md:mr-[1.2rem]">
              <span className="font-normal text-base text-[#0D062D]">
                {user.name}
              </span>
              <span className="relative font-normal text-sm flex flex-row-reverse text-[#787486]">
                {user.location}
              </span>
            </dibuttonv>
            <button>
               <img
              src={user.picture}
              alt=""
              className="w-[38px] h-[38px] rounded-full"
            />
            </button>
           
            <button>
              <img
              src="images/icons/down-arrow.png"
              alt=""
              className="w-[13px] h-[6.45px] ml-[0.8rem]"
            />
            </button>
            
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
