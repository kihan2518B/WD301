// import { useState } from 'react'
import React from 'react';
import './App.css';
import TaskCard from './TaskCard'; // eslint-disable-line

const App: React.FC = () => {
  // const [count, setCount] = useState(0)

  return (
    <div className=' font-serif bg-red-100'>
      <div className='pt-10 ml-20'>
        <h1 className='font-bold  '>Smarter Tasks</h1>
        <h5 className='flex'>Project:<p className='ml-2'>Final year project</p></h5>
      </div>

      <div className="flex ml-10 mt-16 h-[70vh] w-[90vw] justify-center gap-8">
        <div className='w-[40vw] h-fit flex flex-col border-4 rounded-3xl border-red-500 items-center gap-5'>
          <div className='w-full flex justify-center mt-3'>
            <h1 className='font-bold text-3xl'>Pending</h1>
          </div>
          <div className='flex flex-col justify-center items-center gap-4 pb-4'>
            <TaskCard title={"Build Website with static content"} completed={false} dueDate={"7th April"} assigneeName={"Rohit S"} />
            <TaskCard title={"Add a blog"} completed={false} dueDate={"10th April"} assigneeName={"viraj A"} />
          </div>
        </div>

        <div className='w-[40vw] h-fit flex flex-col border-4 rounded-3xl border-red-500 items-center gap-5'>
          <div className='w-full flex justify-center mt-3'>
            <h1 className='font-bold text-3xl'>Done</h1>
          </div>
          <div className='flex flex-col pb-4 gap-4 justify-center items-center '>
            <TaskCard title={"Design a mockup"} completed={true} dueDate={"20th April"} completedAtDate={"2th April"} assigneeName={"Rohit M"} />
            <TaskCard title={"Get approval from principal"} completed={true} dueDate={"1th April"} completedAtDate={"31th March"} assigneeName={"Mohan M"} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
