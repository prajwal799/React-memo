import { useState } from "react";

const TodoInput = ({onsubmit}) => {
    const [title , setTitle] = useState("");
    const handleAdd = () => {
       onsubmit && onsubmit(title);
       setTitle("");
    }
    return(
        <>
        <input placeholder="Add Something"  value={title} onChange={(e) => setTitle(e.target.value)} />
        <button onClick={() => handleAdd()}>Add</button>
        </>
    )
}
export default TodoInput;