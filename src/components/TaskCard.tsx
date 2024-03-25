import { Task } from "@/interfaces/TaskInterface";
import Image from "next/image";

interface Props {
  task: Task;
  delTask: (id: number) => void;
}

const TaskCard = ({ task, delTask }: Props) => {
  return (
    <div className="card  border p-4 w-96 bg-base-100 shadow-xl">
      <figure className="px-10 pt-10">
        <img
          src={
            "https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
          }
          className="rounded-xl"
          alt="Shoes"
        />
      </figure>
      <h1 className="card-title">Task</h1>
      <h2 className="text-success">Title: {task.title}</h2>
      <h2>Description: {task.description}</h2>
      <h2>Completed: {task.completed}</h2>
      <div>{task.id}</div>
      <button
        className="btn btn-error w-20"
        onClick={() => task.id && delTask(task.id)}
      >
        X
      </button>
    </div>
  );
};

export default TaskCard;
