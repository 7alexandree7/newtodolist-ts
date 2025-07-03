import  { useState } from 'react'

interface AddTasksProps {
  onAddTaskSubmit: (title: string, description: string) => void;
}

const AddTasks = ({ onAddTaskSubmit }: AddTasksProps) => {

  const [title, setTitle] = useState<string>('');
  const [description, setDescription] = useState<string>('');

  return (
    <div className="bg-slate-200 rounded-md shadow p-6 space-y-4 flex flex-col w-full mt-6">
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className='border border-slate-300 outline-none py-2 px-4 rounded-md'
        placeholder="Add a new task"
        required
        type="text" />

      <input
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="py-2 px-4 border border-slate-300 outline-none rounded-md"
        placeholder="add a new description"
        required
        type="text" />

      <button
        onClick={() => onAddTaskSubmit(title, description)}
        className="bg-slate-500 text-white px-4 py-2 rounded-md cursor-pointer font-medium">
        Adicionar
      </button>

    </div>
  )
}

export default AddTasks
