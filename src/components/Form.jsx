import React, { useState, useEffect } from 'react';
import Header from './Header';
import Item from './Item';
import Footer from './Footer';

export default function Form() {
    const [todo, setTodo] = useState({id:1,name:"",done:false});
    const [todos, setTodos] = useState([]);
    const [totalTodos,setTotalTodos] = useState(0);
    const [completedTodos,setCompletedTodos] = useState(0)
    function handleSubmit(e) {
        e.preventDefault();
        if(todo.name==""){
            return alert("Please enter something and add....")
        }
        setTodos([...todos, todo]);
        setTodo({...todo,id:todo.id+1,name:""});
        setTotalTodos(totalTodos+1)
    }
    function updateCompletedTodos(count) {
        setCompletedTodos(count);
      };
    return (
        <div className="parent">
            <Header />
            <div className='child'>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        value={todo.name}
                        onChange={(e) => setTodo({...todo,name:e.target.value})}
                        placeholder='Add a task...'
                    />
                    <button type='submit'>Add</button>
                </form>
                {todos.map((item) => <Item
                                        key={item.id}  
                                        item={item}
                                        todo={todo}
                                        setTodo={setTodo}
                                        todos={todos}  
                                        setTodos={setTodos} 
                                        updateCompletedTodos={updateCompletedTodos}
                                        totalTodos={totalTodos}
                                        setTotalTodos={setTotalTodos}
                                     />
                   )}
            </div>
            <Footer totalTodos={totalTodos} completedTodos={completedTodos} />
        </div>
    );
}
