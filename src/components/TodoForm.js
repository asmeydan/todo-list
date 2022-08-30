import React, { useEffect, useRef, useState } from 'react';

const TodoForm = (props) => {
  const [ input, setInput] = useState('');

  const inputRef = useRef(null);

  useEffect(()=> {
    inputRef.current.focus()
  })

  const handleChange = (e)=> {
    setInput(e.target.value)
  }

  const handleSubmit = (e)=> {
    e.preventDefault();

    props.onSubmit({
      id: Math.floor( Math.random() * 10000),
      text: input
    })
    
    setInput("");
  }

  return (
    <div className=' text-center'>
      <form className='inline-block rounded p-[4px] form-input'>
        <input className='bg-slate-900 h-10 w-60 rounded p-2 text-white' type="text" placeholder='Add a todo' value={input} onChange={handleChange} ref={inputRef} />
        <button className='py-px px-2 font-bold' onClick={handleSubmit}>
          Add todo
        </button>
      </form>
    </div>
  )
}

export default TodoForm