import {
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import React from "react";
import { Task } from "../Task/Task";
import "./column.css";

export const Column = ({ tasks }: any) => {
  return (
    <div className="column">
      <SortableContext items={tasks} strategy={verticalListSortingStrategy}>
        {tasks.length
          ? tasks.map((task: any) => (
              <Task key={task.id} id={task.id} title={task.title} />
            ))
          : null}
      </SortableContext>
    </div>
  );
};
