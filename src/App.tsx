import { useState } from 'react'
import AddTasks from './components/AddTasks/AddTasks'
import TaskList from './components/taskList/TaskList'
import type TaskType from './interfaces/Tasks/Tasks'
import { v4 as uuidv4 } from 'uuid'


function App() {
  
  const [tasks, setTasks] = useState<TaskType[]>([

    {
      id: uuidv4(),
      title: "Estudar React",
      description: "Estudar React para melhorar habilidades de desenvolvimento web.",
      isCompleted: false
    },

    {
      id: uuidv4(),
      title: "Fazer compras",
      description: "Comprar frutas, verduras e laticínios.",
      isCompleted: true
    },

    {
      id: uuidv4(),
      title: "Ler um livro",
      description: "Ler pelo menos 30 páginas do livro atual.",
      isCompleted: false
    },
  ])


  const onTaskClick = (taskId: string) => {
    const newTasks: TaskType[] = tasks.map((task) => {
      if (task.id === taskId) {
        return {
          ...task,
          isCompleted: !task.isCompleted
        }
      }
      return task
    })
    setTasks(newTasks)
  }

  const onTaskDelete = (taskId: string) => {
    const newTasks = tasks.filter((task) => task.id !== taskId)
    setTasks(newTasks)
  }


  const onAddTaskSubmit = (title: string, description: string) => {

    if (!title.trim() || !description.trim()) return

    const newTasks: TaskType = {
      id: uuidv4(),
      title: title,
      description: description,
      isCompleted: false
    }
    setTasks([...tasks, newTasks])
  }



  return (
    <div className='bg-slate-500 w-screen h-screen flex flex-col items-center p-6'>
      <div className='w-[500px]'>
        <h1 className='text-3xl text-slate-100 font-bold text-center'>Gerenciador de Tarefas</h1>
        <AddTasks onAddTaskSubmit={onAddTaskSubmit} />
        <TaskList tasks={tasks} onTaskClick={onTaskClick} onTaskDelete={onTaskDelete} />
      </div>

    </div>
  )
}

export default App  
