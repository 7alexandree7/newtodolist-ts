//import { useState } from 'react'
import AddTasks from './components/AddTasks/AddTasks'
import TaskList from './components/taskList/TaskList'

function App() {

  return (
    <div>
      <h1>Gerenciador de Tarefas</h1>
      <AddTasks />
      <TaskList />
    </div>
  )
}

export default App
