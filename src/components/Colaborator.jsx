const Colaborator = ({ users }) => {
  return (
    <div className="relative flex -gap- justify-around items-center">
      <img
        // eslint-disable-next-line react/prop-types
        src={users[0].picture}
        alt=""
        className={`w-[38px] h-[38px] relative z-0 left-8`}
      />
      <img
        // eslint-disable-next-line react/prop-types
        src={users[1].picture}
        alt=""
        className={`w-[38px] h-[38px] relative z-10 left-6`}
      />
      <img
        // eslint-disable-next-line react/prop-types
        src={users[3].picture}
        alt=""
        className={`w-[38px] h-[38px] relative z-20 left-4`}
      />
      <img
        // eslint-disable-next-line react/prop-types
        src={users[4].picture}
        alt=""
        className={`w-[38px] h-[38px] relative z-30 left-2`}
      />

      {
        // eslint-disable-next-line react/prop-types
        users.length > 4 ? (
          <div className=" w-[38px] h-[38px] z-50 rounded-full flex items-center justify-center bg-[#F4D7DA] text-[#D25B68] font-medium text-sm ">
            +{users.length - 5}
          </div>
        ) : (
          <></>
        )
      }
    </div>
  );
};

export default Colaborator;
