import { Task } from "@/interfaces/TaskInterface";
import TaskCard from "./TaskCard";

interface Props {
  tasks: Task[];
  delTask: (id: number) => void;
}

const TaskList = ({ tasks, delTask }: Props) => {
  return (
    <div className="flex justify-center flex-wrap">
      {tasks.map((task) => (
        <TaskCard delTask={delTask} task={task} key={task.id} />
      ))}
    </div>
  );
};

export default TaskList;
