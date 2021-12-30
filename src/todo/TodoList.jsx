import React, { useMemo } from "react";
const delay = (time) => {
    const start = Date.now();
    while(Date.now() - start < time){
        continue;
    }
    return start;
}

const TodoList = ({id , title , status,ontoggle}) => {
     const time = useMemo( () => delay(200),[]);
    return (
        <>
        <div style={{display:"flex" , justifyContent:"center",gap:"1rem"}}>
           <div>{title}</div>
           <div>{status ? "Done" : "Not Done"}</div>
          <div>{time}</div>
           <button style={{width:"100px",height:"30px"}} onClick={() => ontoggle(id)} >Toggle</button>
        </div>
        </>
    )
}

const areEqual = (prevProps , nextProps) => {
      if(prevProps.status === nextProps.status){
          return true;
      }
      else{
          return false;
      }
}

export const MemoTodoWithoutComponet = React.memo(TodoList);
export const MemoisedTodo = React.memo( TodoList , areEqual);
export default TodoList;