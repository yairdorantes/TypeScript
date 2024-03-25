"use client";
import TaskForm from "@/components/TaskForm";
import TaskList from "@/components/TaskList";
import { Task } from "@/interfaces/TaskInterface";
import { useState } from "react";

export default function Home() {
  const [tasks, setTasks] = useState<Task[]>([
    { id: 1, title: "react", description: "descripbing", completed: false },
  ]);

  const addTask = (task: Task) =>
    setTasks([...tasks, { ...task, id: tasks.length + 1, completed: false }]);
  const deleteTask = (id: number) => {
    console.log(id);
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <main className="">
      <TaskForm addTask={addTask} />
      <TaskList delTask={deleteTask} tasks={tasks} />
    </main>
  );
}
