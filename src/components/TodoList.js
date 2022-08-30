import React, { useState} from 'react';
import Todo from './Todo';
import TodoForm from './TodoForm';

const TodoList = () => {
  const [ todos, setTodos] = useState([]);

  const addTodo = (todo)=> {
    const newTodos = [todo, ...todos]

    setTodos(newTodos);
    console.log(todo, ...todos)
  }

  const updateTodo = (todoId, newValue)=> {
    if(!newValue.text || /^\s*$/.test(newValue.text)) {
      return
    }
    setTodos((prev)=> prev.map((item)=> (item.id === todoId ? newValue : item)))
  }

  const removeTodo = (id)=> {
    const removeArr = [...todos].filter((todo)=> todo.id !== id)

    setTodos(removeArr )
  }

  const completeTodo = (id)=> {
    let updatedTodos = todos.map((todo)=>{
      if(todo.id === id) {
        todo.isComplete = !todo.isComplete
      }
      return todo
    })
    setTodos(updatedTodos)
  }


  return (
    <div className=' bg-slate-900 mt-10 w-[520px] min-h-[500px] rounded-xl'>
      <h1 className=' text-white text-center text-3xl font-bold py-4'>
         To Do List
      </h1>
      <TodoForm onSubmit={addTodo}/>
      <Todo todos={todos} completeTodo={completeTodo} removeTodo={removeTodo} updateTodo={updateTodo}/>
    </div>
  )
}

export default TodoList