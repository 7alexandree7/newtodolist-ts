import { useState } from 'react'
import InputTask from '../Input/InputTask';

interface AddTasksProps {
  onAddTaskSubmit: (title: string, description: string) => void;
}

const AddTasks = ({ onAddTaskSubmit }: AddTasksProps) => {

  const [title, setTitle] = useState<string>('');
  const [description, setDescription] = useState<string>('');

  return (
    <div className="bg-slate-200 rounded-md shadow p-6 space-y-4 flex flex-col w-full mt-6">

      <InputTask value={title} setState={setTitle}  placeholder='Adicionar Tarefa'/>
      <InputTask value={description} setState={setDescription}  placeholder='Descrição da Tarefa'/>

      <button
        onClick={() => {
          onAddTaskSubmit(title, description)
          setTitle('')
          setDescription('')
        }}
        className="bg-slate-500 text-white px-4 py-2 rounded-md cursor-pointer font-medium">
        Adicionar
      </button>

    </div>
  )
}

export default AddTasks
