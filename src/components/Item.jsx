import { useState } from "react";

export default function Item({item,todo,setTodo,todos,setTodos,updateCompletedTodos,totalTodos,setTotalTodos}){
    const [isChecked,setIsChecked] = useState(item.done)
    function handleDelete(){
        setTodos(todos.filter((todoItem)=>todoItem !== item));
        setTotalTodos(totalTodos-1)
        setTodo({id:todo.id-1})

    }
    function completed(todo){
        const updatedArray = todos.map((element)=> element.name=== todo ? {...element,done:!element.done}: element);
        setTodos(updatedArray);
        updateCompletedTodos(updatedArray.filter((todo)=>todo.done).length)
    }

    function handleTick(todo){
       setIsChecked(!isChecked);
       const updatedArray = todos.map((element)=> element.name=== todo ? {...element,done:!element.done}: element);
       setTodos(updatedArray);
       updateCompletedTodos(updatedArray.filter((todo)=>todo.done).length)
    }
    const isCompleted = item.done ? "completed" : "";
    const checked = isChecked ? "checked" : ""
    return (
        <div className="item-component" key={item.id}>
                <span className={`${isCompleted}`} onClick={()=>completed(item.name)}>
                    <p>{item.id}.{item.name}</p>
                </span>
                <span onClick={()=>handleTick(item.name)} className={`check-icon-container ${checked}`}>
                        <i title="mark as completed?" className={`fa-solid fa-check `}></i>
                </span>
                <button onClick={()=>handleDelete(item.name)}>Delete</button>
        </div>
    )
}