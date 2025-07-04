import { ChevronLeftIcon } from "lucide-react"
import { useSearchParams } from "react-router-dom"
import { Link } from "react-router-dom"

const TaskPage = () => {

  const [searchParams] = useSearchParams()
  console.log(searchParams)

  const title: string | null = searchParams.get("title")
  const description: string | null = searchParams.get("description")

  return (
    <div className="h-screen w-screen bg-slate-500 p-6 m-auto flex justify-center">
      <div className="w-[500px] space-y-4">
        <div className="flex w-full items-center justify-center position: relative mb-6">
          <Link to="/"
            className="absolute left-0 bottom-0 cursor-pointer text-slate-300">
            <ChevronLeftIcon  height={28} width={28}/>
          </Link>
          <h1 className="text-2xl text-slate-300 font-bold text-center">Detalhes da Tarefa</h1>
        </div>
        <div className="bg-slate-200 p-4 rounded-md">
          <h2 className="text-xl text-slate-600 font-bold">Título: {title}</h2>
          <p className="text-slate-600  font-semibold mt-2">Descrição: {description}</p>
        </div>
      </div>
    </div>
  )
}

export default TaskPage