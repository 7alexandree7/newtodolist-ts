//import React from 'react'
import { ChevronRightIcon, TrashIcon } from 'lucide-react'
import type TaskType from '../../interfaces/Tasks/Tasks'
import { useNavigate } from 'react-router-dom'

interface TasklistProps {
    tasks: TaskType[]
    onTaskClick: (taskId: string) => void
    onTaskDelete: (taskId: string ) => void         
}


const TaskList = ({ tasks, onTaskClick, onTaskDelete }: TasklistProps) => {

    const navigate = useNavigate()

    const onSeeDetailsClick = (task: TaskType) =>  {
        const query = new URLSearchParams()  
        query.set("title", task.title)
        query.set("description", task.description)
        navigate(`/task?${query.toString()}`)
    }

    return (
        <ul className='bg-slate-200 p-6 rounded-md space-y-4 mt-4 shadow list-none'>
            {tasks.map((task) => (
                <li key={task.id} className='flex w-full gap-4'>
                    <button
                        onClick={() => onTaskClick(task.id)}
                        className={`${task.isCompleted && 'line-through'} bg-slate-400 text-white p-2 rounded-md flex-1 cursor-pointer text-left pl-2`}>
                        {task.title}                     
                    </button>
                    <button
                    onClick={() => onSeeDetailsClick(task)}
                        className='bg-slate-400 text-white  p-2 rounded-md cursor-pointer'>
                        <ChevronRightIcon />
                    </button>
                    <button
                        onClick={() => onTaskDelete(task.id)}
                        className='bg-slate-400 text-white  p-2 rounded-md cursor-pointer'>
                        <TrashIcon />
                    </button>
                </li>

            ))}
        </ul>
    )
}

export default TaskList
