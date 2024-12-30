import { useState } from 'react'

import './index.css'
import { Task, Column as ColumnInterface } from './types'
import Column from './Column'
import { DndContext } from '@dnd-kit/core';

function App() {

  const INITIAL_TASKS: Task[] = [

    {
      id: 1,
      title: "Fix Login Bug",
      description: "Resolve the issue preventing users from logging in.",
      status: "IN_PROGRESS",
    },
    {
      id: 2,
      title: "Write Documentation",
      description: "Create a user guide for the new feature.",
      status: "PENDING",
    },
    {
      id: 3,
      title: "Design Home Page",
      description: "Create a responsive design for the home page.",
      status: "COMPLETED",
    },
    {
      id: 4,
      title: "Implement Search Feature",
      description: "Add search functionality to the application.",
      status: "IN_PROGRESS",
    },
    {
      id: 5,
      title: "Optimize Database",
      description: "Improve database query performance.",
      status: "PENDING",
    },
    {
      id: 6,
      title: "Set Up CI/CD Pipeline",
      description: "Automate builds and deployments using CI/CD.",
      status: "IN_PROGRESS",
    },
    {
      id: 7,
      title: "Create Test Cases",
      description: "Write unit tests for the user authentication module.",
      status: "PENDING",
    },
    {
      id: 8,
      title: "Fix CSS Issues",
      description: "Resolve layout problems in the profile page.",
      status: "COMPLETED",
    },
    {
      id: 9,
      title: "Conduct Security Audit",
      description: "Identify vulnerabilities in the current system.",
      status: "PENDING",
    },
    {
      id: 10,
      title: "Prepare Sprint Report",
      description: "Summarize the progress made during this sprint.",
      status: "COMPLETED",
    },


  ]

  //  const uniqueStatuses = Array.from(new Set(INITIAL_TASKS.map(task => task.status)));
  // console.log(uniqueStatuses);

  const columns: ColumnInterface[] = [
    { id: "PENDING", title: "Pending" },
    { id: "IN_PROGRESS", title: "In Progress" },
    { id: "COMPLETED", title: "Completed" },
  ]



  const [tasks, setTasks] = useState(INITIAL_TASKS)
  console.log('app re rendered')

  function handleDragAndDrop(event: any) {
    console.log('im working now')
    const { active, over } = event;
    if (!over) return;// if we over some thing that is not droppable do nothing 
    console.log(active.id)
    console.log(over.id)

    const taskId = active.id as number;

    const newStatus = over.id as Task['status'];

    setTasks((prev) => prev.map(item => item.id !== taskId ? item : { ...item, status: newStatus }))
  }

  console.log(tasks)












  return (
    <>

      <div className="p-4 border-teal-300 border-4">
        <div className="flex gap-4  border-red-300 border-4">
          <DndContext onDragEnd={handleDragAndDrop}>
            {
              columns.map(item => <Column key={item.id} column={item} tasks={tasks.filter(task => item.id === task.status)} />)
            }
          </DndContext>
        </div>
      </div>
    </>
  )
}

export default App
