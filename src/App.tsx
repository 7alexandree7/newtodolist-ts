import { useState } from 'react'
import AddTasks from './components/AddTasks/AddTasks'
import TaskList from './components/taskList/TaskList'
import type TaskType from './interfaces/Tasks/Tasks'


function App() {

  const [tasks, setTasks] = useState<TaskType[]>([

    {
      id: 1,
      title: "Estudar React",
      description: "Estudar React para melhorar habilidades de desenvolvimento web.",
      isCompleted: false
    },

    {
      id: 2,
      title: "Fazer compras",
      description: "Comprar frutas, verduras e laticínios.",
      isCompleted: false
    },

    {
      id: 3,
      title: "Ler um livro",
      description: "Ler pelo menos 30 páginas do livro atual.",
      isCompleted: false
    },
  ])

  return (
    <div className='bg-slate-500 w-screen h-screen flex flex-col items-center p-6'>
      <div className='w-[500px]'>
        <h1 className='text-3xl text-slate-100 font-bold text-center'>Gerenciador de Tarefas</h1>
        <AddTasks />
        <TaskList />
      </div>

    </div>
  )
}

export default App  
