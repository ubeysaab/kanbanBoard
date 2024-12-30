import { useDraggable } from "@dnd-kit/core";
import { Task as TaskInterface } from "./types";



type TaskCardProps = {
  task:TaskInterface
}
import React from 'react'

function TaskCard({task}:TaskCardProps) {

  const {attributes, listeners, setNodeRef, transform} = useDraggable({
    id: task.id,
  });

const style =
transform ? {transform:`translate(${transform.x}px, ${transform.y}px)`} :undefined  


  return (
    <div   ref={setNodeRef} {...listeners} {...attributes} className="cursor-grab border-2 border-gray-200 p-2 rounded-md" style ={style}>
      <b className="text-fuchsia-300">{task.title}</b>
      <p className="text-white">{task.description}</p>
    </div>
  )
}

export default TaskCard