import {
  closestCorners,
  DndContext,
  TouchSensor,
  useSensor,
  useSensors,
  PointerSensor,
  KeyboardSensor,
} from "@dnd-kit/core";
import { useState } from "react";
import { tasksList } from "./utils";
import "./styles.css";
import { Column } from "./Components/Column/Column";
import { Input } from "./Components/Input/Input";
import { arrayMove, sortableKeyboardCoordinates } from "@dnd-kit/sortable";

export default function App() {
  const [tasks, setTasks] = useState(tasksList);

  const getTaskPos = (id: any) =>
    tasks.findIndex((task: any) => task.id === id);

  const handleDragEnd = (event: any) => {
    const { active, over } = event;

    if (active.id === over.id) return;

    setTasks((tasks) => {
      const originalPos = getTaskPos(active.id);
      const newPos = getTaskPos(over.id);
      return arrayMove(tasks, originalPos, newPos);
    });
  };

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(TouchSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  const addTasks = (title: string) => {
    setTasks((tasks) => [...tasks, { id: tasks.length + 1, title }]);
  };

  return (
    <div className="App">
      <h1>My Tasks</h1>
      <DndContext
        sensors={sensors}
        onDragEnd={handleDragEnd}
        collisionDetection={closestCorners}
      >
        <Input onSubmit={addTasks} />
        <Column tasks={tasks} />
      </DndContext>
    </div>
  );
}
