import { useDroppable } from "@dnd-kit/core";
import TaskCard from "./TaskCard";
import { Column as ColumnInterface, Task as TaskInterface } from "./types";
import React from "react";

type ColumnProps = {
  tasks: TaskInterface[];
  column: ColumnInterface;
};

function Column({ column, tasks }: ColumnProps) {
  console.log("re rendered columns")
  // To connect this component to DnD context, provide an ID
  const { setNodeRef } = useDroppable({
    id: String(column.id), // Ensure ID is a string
  });

  return (
    <div className="flex flex-col w-80 rounded-lg bg-neutral-800 p-4">
      <h2 className="mb-4 font-semibold text-neutral-50">{column.title}</h2>
      <div ref={setNodeRef} className="flex flex-1 flex-col gap-4">
        {tasks.length === 0 ? (
          <p className="text-neutral-400">No tasks available</p>
        ) : (
          tasks.map((item) => <TaskCard key={item.id} task={item} />)
        )}
      </div>
    </div>
  );
}

export default Column;
