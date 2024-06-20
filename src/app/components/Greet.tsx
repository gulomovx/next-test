import React from "react"
const Greet = ({ name }: { name: string }) =>{
    if (name) return <h1 className="text-2xl mt-4">Hello {name}</h1>
  return (
    <button className='bg-slate-200 p-2'>Login</button>
  )
}

export default Greet