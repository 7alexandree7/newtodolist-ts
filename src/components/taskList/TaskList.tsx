//import React from 'react'
import { ChevronRightIcon } from 'lucide-react'
import type TaskType from '../../interfaces/Tasks/Tasks'

interface TasklistProps {
    tasks: TaskType[]
    onTaskClick: (taskId: number) => void
}

const TaskList = ({ tasks, onTaskClick }: TasklistProps) => {

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
                        className='bg-slate-400 text-white  p-2 rounded-md cursor-pointer'>
                        <ChevronRightIcon />
                    </button>
                </li>



            ))}
        </ul>
    )
}

export default TaskList
