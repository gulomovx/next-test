'use client'
import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';

function Form() {
  const [name, setName] = useState("");

  const handleSubmit = (event:any) => {
    event.preventDefault();
    alert(`The name you entered was: ${name}`)
  }

  return (
    <form className=' mt-24 text-center ' onSubmit={handleSubmit}>
      <label>Enter your name:
        <input 
          type="text" 
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <input className='bg-blue-400 flex p-2 mt-4 mx-auto rounded-lg ' type="submit" />
    </form>
  )
}
export default Form