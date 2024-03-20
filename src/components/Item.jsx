import { useState } from "react";
import '../styles/item.css'
export default function Item({
  item,
  todo,
  setTodo,
  todos,
  setTodos,
  updateCompletedTodos,
  totalTodos,
  setTotalTodos
}) {
  const [isChecked, setIsChecked] = useState(item.done);
  const [isEditing, setIsEditing] = useState(false);
  const [editedTodo, setEditedTodo] = useState(item.name);

  function handleDelete() {
    setTodos(todos.filter((todoItem) => todoItem !== item));
    setTotalTodos(totalTodos - 1);
    setTodo({ id: todo.id - 1 });
  }

  function completed(todo) {
    const updatedArray = todos.map((element) =>
      element.name === todo ? { ...element, done: !element.done } : element
    );
    setTodos(updatedArray);
    updateCompletedTodos(updatedArray.filter((todo) => todo.done).length);
  }

  function handleTick(todo) {
    setIsChecked(!isChecked);
    const updatedArray = todos.map((element) =>
      element.name === todo ? { ...element, done: !element.done } : element
    );
    setTodos(updatedArray);
    updateCompletedTodos(updatedArray.filter((todo) => todo.done).length);
  }

  function handleEdit() {
    setIsEditing(true);
  }

  function handleSaveEdit() {
    const updatedArray = todos.map((element) =>
      element.name === item.name ? { ...element, name: editedTodo } : element
    );
    setTodos(updatedArray);
    setIsEditing(false);
  }

  const isCompleted = item.done ? "completed" : "";
  const checked = isChecked ? "checked" : "";

  return (
    <div className="item-component" key={item.id}>
      <span className={`${isCompleted}`} onClick={() => completed(item.name)}>
        {isEditing ? (
          <input
            type="text"
            value={editedTodo}
            onChange={(e) => setEditedTodo(e.target.value)}
            onBlur={handleSaveEdit}
            autoFocus
            className="edited-input"
          />
        ) : (
          <p>{item.id}.{item.name}</p>
        )}
      </span>
      <span onClick={() => handleTick(item.name)} className={`check-icon-container ${checked}`}>
        <i title="mark as completed?" className={`fa-solid fa-check `}></i>
      </span>
      <span className="edit-icon" onClick={handleEdit}>
        <i className="fa-solid fa-pen-to-square"></i>
      </span>
      <button onClick={() => handleDelete(item.name)}>Delete</button>
    </div>
  );
}
