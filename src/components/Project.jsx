const Project = ({ name, toggle,dotcol }) => {
  return (
    <button
      className={`relative w-56 h-10 rounded-md flex justify-between items-center px-4 mx-auto  ${
        toggle ? "bg-[#5030E514]" : ""
      }`}
    >
      <span
        className={`flex items-center gap-4  ${
          toggle
            ? "font-semibold text-base text-[#0D062D]"
            : "font-medium text-[#787486]"
        }`}
      >
        {" "}
        <div className="rounded-full  w-2 h-2" style={{background:`${dotcol}`}}></div>
        {name}
      </span>
      {toggle ? <span>...</span> : <></>}
    </button>
  );
};

export default Project;
