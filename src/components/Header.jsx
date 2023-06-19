const Header = () => {
  const user = {
    name: "Anima Agraeal",
    location: "U.P,India",
    picture: "/images/pictures/users/user1.png",
  };
  return (
    <>
      <div className=" w-full h-[5.5rem] px-[3rem] flex justify-between items-center border-b-[1px] border-[#DBDBDB]">
        
        <div className="InputBox   rounded-[6px]  flex justify-content items-center bg-[#F5F5F5]">
          <img
            src="images/icons/search.png"
            alt=""
            className="w-[22px] h-[22px] mx-[1.2rem] my-[1rem]"
          />
          <input
            type="text"
            className="hidden sm:block bg-[#F5F5F5] font-normal text-sm leading-[1.1rem] w-[26.1rem] h-[2.8rem]"
            placeholder="Search for anything..."
          />
        </div>

        <div className="gap-[3.2rem] flex items-center">
          <div className="flex gap-[1.8rem]">
            <img
              src="images/icons/calendar.png"
              className="w-[24px] h-[24px]"
              alt=""
            />
            <img
              src="images/icons/message-question.png"
              className="w-[24px] h-[24px]"
              alt=""
            />
            <img
              src="images/icons/notification.png"
              className="w-[24px] h-[24px]"
              alt=""
            />
          </div>
          <div className="flex items-center">
            <div className=" hidden md:inline md:relative md:flex md:flex-col md:mr-[1.2rem]">
              <span className="font-normal text-base text-[#0D062D]">
                {user.name}
              </span>
              <span className="relative font-normal text-sm flex flex-row-reverse text-[#787486]">
                {user.location}
              </span>
            </div>
            <img
              src={user.picture}
              alt=""
              className="w-[38px] h-[38px] rounded-full"
            />
            <img
              src="images/icons/down-arrow.png"
              alt=""
              className="w-[13px] h-[6.45px] ml-[0.8rem]"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
