import React, { useState } from "react";
import TodoInput from "./TodoInput";
import {v4 as uuid} from "uuid"
import TodoList, { MemoisedTodo, MemoTodoWithoutComponet } from "./TodoList";

const Todo = () => {
 const [data ,setData] = useState(() => (
      new Array(5).fill(0).map((_ , i) => ({
          id : i,
          title : `${i} is an Element`,
          status : false 
      }))
 ));

 const ontoggle = React.useCallback((id) => {
     const updateData = data.map((item) => (
             item.id === id ? {...item , status : !item.status} :item
     ));
     setData(updateData , [])
 },[data]);
//  const ontoggle = (id) => {
     
//       setData((prev) => (
//       ))
//  }
    const onsubmit = (title) => {
        setData([
            ...data , {
                title : title,
                id : uuid(),
                status : false
            }

        ])
    }   
 return(
        <>
        <TodoInput onsubmit={onsubmit} />
        {
            data.map((item) => (
               <MemoTodoWithoutComponet key={item.id} ontoggle={ontoggle} id={item.id} title={item.title} status={item.status} />
            ))
        }
        </>
    )
}
export default Todo;