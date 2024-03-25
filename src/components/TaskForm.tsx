import { Task } from "@/interfaces/TaskInterface";
import { ChangeEvent, FormEvent, useRef, useState } from "react";
import { FaCirclePlus } from "react-icons/fa6";
type HandleInputChange = ChangeEvent<HTMLInputElement | HTMLTextAreaElement>;

interface Props {
  addTask: (task: Task) => void;
}
const initialState = {
  title: "",
  description: "",
};

const TaskForm = ({ addTask }: Props) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [task, setTask] = useState<Task>(initialState);

  const handleInputChange = ({
    target: { name, value },
  }: HandleInputChange) => {
    console.log(name, value);
    setTask({ ...task, [name]: value });
  };
  const handleNewTask = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addTask(task);
    setTask(initialState);
    inputRef.current?.focus();
  };

  return (
    <form onSubmit={handleNewTask} className="mb-10">
      <input
        ref={inputRef}
        autoFocus
        type="text"
        name="title"
        placeholder="create a task title"
        className="input input-bordered w-full max-w-xs"
        value={task.title}
        onChange={handleInputChange}
      />
      <input
        type="text"
        name="description"
        placeholder="create description"
        value={task.description}
        className="input input-bordered w-full max-w-xs"
        onChange={handleInputChange}
      />
      <button className="btn btn-success">
        save
        <FaCirclePlus className="w-5 h-5 " />
      </button>
    </form>
  );
};

export default TaskForm;
