//import React from 'react'
import type TaskType from '../../interfaces/Tasks/Tasks'

interface TasklistProps {
    tasks: TaskType[]
}

const TaskList = ({ tasks }: TasklistProps) => {

    console.log(tasks)

    return (
        <ul className='space-y-4 mt-4'>
            {tasks.map((task) => (
                <li key={task.id} className='bg-slate-400 text-white p-2 rounded-md'>{task.title}</li>

            ))}
        </ul>
    )
}

export default TaskList
