import Colaborator from "./Colaborator";
import Header from "./Header";
import Todolist from "./Todolist";
import { DragDropContext } from "react-beautiful-dnd";
import { useEffect, useState } from "react";
import data from "../DataBase/db";

const TodoSection = () => {
  const [todoList, setTodoList] = useState(data.todoList);
  const [column1, setColumn1] = useState(data.todoList.col1.todo);
  const [column2, setColumn2] = useState(data.todoList.col2.todo);
  const [column3, setColumn3] = useState(data.todoList.col3.todo);

  const users = data.users;

  // const totalList = data.todoListPosition.map((items) =>
  //   todoList.find((todo) => todo.id === items)
  // );
  // console.log(totalList);

  useEffect(()=>{

  })
  const onDragEnd = (result) => {
    const { source, destination, draggableId } = result;

    console.log(result);
    //If user to drop in an unknown destination
    if (!destination) return;

    //if the user drags and drops back in the same position
    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    )
      return;

    let add;
    let col1 = column1;
    let col2 = column2;
    let col3 = column3;

    //If the user drops within the same column but in diffrent position

    if (source.droppableId === "col1") {
      add = col1[source.index];
      col1.splice(source.index, 1);
    } else if (source.droppableId === "col2") {
      add = col2[source.index];
      col2.splice(source.index, 1);
    } else if (source.droppableId === "col3") {
      add = col3[source.index];
      col3.splice(source.index, 1);
    }

    if (destination.droppableId === "col1") {
      col1.splice(destination.index, 0, add);
    } else if (destination.droppableId === "col2") {
      col2.splice(destination.index, 0, add);
    } else if (destination.droppableId === "col3") {
      col3.splice(destination.index, 0, add);
    }

    setColumn1(col1);
    setColumn2(col2);
    setColumn3(col3);

    return;

    //If the user moves from on column to another column
  };

  return (
    <>
      <div className=" w-full h-full  overflow-hidden ">
        <Header />
        <DragDropContext onDragEnd={onDragEnd}>
          <div className="relative h-screen px-6 py-[2.6rem] md:px-12 overflow-y-auto">
            <div className="w-full flex   justify-between">
              <div className="flex items-center">
                <span className="font-semibold text-[1.5rem] lg:text-[2.9rem] leading-[2.9rem] mr-[1.4rem]">
                  Mobile App
                </span>
                <img
                  src="images/icons/pencil.png"
                  className="w-[30px] h-[30px] mr-[0.9rem]"
                  alt=""
                />
                <img
                  src="images/icons/link.png"
                  className="w-[30px] h-[30px]"
                  alt=""
                />
              </div>
              <div className=" flex items-center gap-[0.5rem]">
                <img
                  src="images/icons/add-btn-purple.png"
                  className=" hidden lg:inline w-[15px] h-[15px]"
                  alt=""
                />
                <span className=" hidden lg:inline -mr-3  text-[#5030E5] font-medium text-base leading-5">
                  Invite
                </span>
                <Colaborator users={users} />
              </div>
            </div>
            <div className=" w-full flex mt-10 justify-between">
              <div className=" w-full flex gap-3">
                <button className="w-[7.7rem] h-[2.5rem]  flex items-center justify-center gap-[0.5rem] border border-[#787486] rounded-md ">
                  <img
                    src="images/icons/filter.png"
                    alt=""
                    className="w-[11.47px] h-[13.2px]"
                  />
                  <span className="text-[#787486] font-medium text-base leading-[1.2rem] mr-[0.2rem]">
                    Filter
                  </span>
                  <img
                    src="images/icons/down-arrow-2.png"
                    className="w-[11.56px] h-[5.73px]"
                    alt=""
                  />
                </button>
                <button className="w-[7.7rem] h-[2.5rem]  flex items-center justify-center gap-[0.5rem] border border-[#787486] rounded-md ">
                  <img
                    src="images/icons/calendar-2.png"
                    alt=""
                    className="w-[16px] h-[16px]"
                  />
                  <span className="text-[#787486] font-medium text-base leading-[1.2rem] mr-[0.2rem]">
                    Today
                  </span>
                  <img
                    src="images/icons/down-arrow-2.png"
                    className="w-[11.56px] h-[5.73px]"
                    alt=""
                  />
                </button>
              </div>
              <div className=" hidden md:block md:flex md:ml-2 md:gap-5 md:items-center">
                <button className="w-[6.1rem] h-[2.5rem]  flex items-center justify-center gap-[0.5rem] border border-[#787486] rounded-md ">
                  <img
                    src="images/icons/members.png"
                    alt=""
                    className="w-[16px] h-[16px]"
                  />
                  <span>Share</span>
                </button>
                <div className="border border-[#787486] h-7 "></div>
                <button className="w-[40px] h-[40px]">
                  <img src="images/icons/option-purple.png" alt="" />
                </button>
                <button className="w-[21px] h-[21px]">
                  <img src="images/icons/option.png" alt="" />
                </button>
              </div>
            </div>

            <div className="w-full mt-[2.7rem] flex flex-col lg:flex-row gap-4  ">
              {/* todo list */}
              <Todolist todolist={todoList.col1} todocol={column1} />
              <Todolist todolist={todoList.col2} todocol={column2} />
              <Todolist todolist={todoList.col3} todocol={column3} />
            </div>
          </div>
        </DragDropContext>
      </div>
    </>
  );
};

export default TodoSection;
