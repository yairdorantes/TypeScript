import { Task } from "@/interfaces/TaskInterface";

interface Props {
  tasks: Task[];
}

const page = ({ tasks }: Props) => {
  return (
    <>
      {tasks.map((task) => (
        <div key={task.id}>
          <h1>Task</h1>
          <h2>Title: {task.title}</h2>
          <h2>Description: {task.description}</h2>
          <h2>Completed: {task.completed}</h2>
        </div>
      ))}
    </>
  );
};

export default page;
