import { useEffect, useState } from "react";
import { Draggable } from "react-beautiful-dnd";
import data from "../DataBase/db";

const SingleTodo = ({ todo, index }) => {
  const [viewers, setViewers] = useState([]);

  const users = data.users;

  useEffect(() => {
    const TotalViewers = todo.viewers.map((items) =>
      users.find((user) => user.id === items)
    );
    setViewers(TotalViewers);
  }, []);

  return (
    <Draggable draggableId={`${todo.id}`} index={index}>
      {(provided) => (
        <div
          className="w-full rounded-2xl p-5 bg-white"
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <div className="flex justify-between mb-1">
            <span className="bg-orange-200 p-[0.38rem] rounded font-medium text-xs text-[#D58D49] leading-[0.91rem]">
              {todo.status}
            </span>
            <button>...</button>
          </div>
          <div className="flex justify-between mb-2">
            <span className=" font-semibold text-lg leading-[1.4rem]">
              {todo.name}
            </span>
          </div>
          <div className="mb-7 flex  gap-3">
            {todo.contentType === "text" ? (
              <span className="font-normal text-xs text-[#787486]">
                {todo.content}
              </span>
            ) : todo.contentType === "image" ? (
              <img
                src={todo.content}
                alt=""
                className=" relative  rounded-lg"
              />
            ) : (
              todo.content.map((image, index) => (
                <img
                  src={image}
                  alt=""
                  key={index}
                  className=" relative w-full rounded-lg"
                />
              ))
            )}
          </div>
          <div className="flex justify-between items-center">
            <div className="flex ">
              <img
                src={viewers[0]?.picture}
                className={`w-[24px] h-[24px] relative z-20 `}
                alt=""
              />
              {viewers[1] !== undefined ? (
                <img
                  src={viewers[1]?.picture}
                  className={`w-[24px] h-[24px] relative z-10 right-2`}
                  alt=""
                />
              ) : (
                <></>
              )}

              {viewers[2] !== undefined ? (
                <img
                  src={viewers[2]?.picture}
                  className={`w-[24px] h-[24px] relative z-0 right-4`}
                  alt=""
                />
              ) : (
                <></>
              )}
            </div>
            <div className="flex gap-4">
              <span className="font-medium text-xs leading-[0.91rem] text-[#787486] flex gap-1">
                <img
                  src="images/icons/messages.png"
                  className="w-[14.33px] h-[14.37px]"
                  alt=""
                />
                {todo.comments}comments
              </span>
              <span className="font-medium text-xs leading-[0.91rem] text-[#787486] flex gap-1">
                <img
                  src="images/icons/folder.png"
                  className="w-[14.33px] h-[14.37px]"
                  alt=""
                />
                {todo.files} files
              </span>
            </div>
          </div>
        </div>
      )}
    </Draggable>
  );
};

export default SingleTodo;
