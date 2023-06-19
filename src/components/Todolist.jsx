import SingleTodo from "./SingleTodo";
import { Droppable } from "react-beautiful-dnd";
import data from "../DataBase/db";
import { useState } from "react";

const Todolist = ({ todolist, todocol }) => {
  const [todoAdd,setTodoAdd] = useState(false)
  const todo = data.todo;

  const totalTodos = todocol.map((items) =>
    todo.find((todo) => todo.id === items)
  );

  return (
    <>
      <div className="w-[31rem]  relative  bg-[#F5F5F5] rounded-2xl p-5 " >
        <div className="flex justify-between">
          <div className="flex gap-3 items-center">
            <span
              className="rounded-full  w-2 h-2"
              style={{ background: `${todolist.color}` }}
            ></span>
            <span className="text-[#0D062D] font-medium text-base leading-5">
              {todolist.name}
            </span>
            <div className="w-[20px] h-[20px] rounded-full bg-[#E0E0E0] flex items-center justify-center font-medium text-xs text-[#625F6D]">
              {todolist.todo.length}
            </div>
          </div>
          <button style={{display:`${todolist.add?'block':'none'}`}}>
            <img
              src="images/icons/add-btn-purple.png"
              className="w-[20px] h-[20px]"
              alt=""
            />
          </button>
        </div>
        <div className="border mt-5 mb-7" style={{ borderBlockColor: `${todolist.color}` }}></div>

        <div className=" h-full overflow-auto overflow-hidden ">
          <Droppable droppableId={todolist.id}>
            {(provided) => (
              <div
                className="flex flex-col gap-5"
                ref={provided.innerRef}
                {...provided.droppableProps}
              >
                {totalTodos.map((todo, index) => (
                  <SingleTodo todo={todo} key={index} index={index} />
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </div>
      </div>
    </>
  );
};

export default Todolist;
