interface InputTaskProps {
    value?: string;
    setState: (value: string) => void;
    placeholder?: string;
}


const InputTask = ({ value, setState, placeholder }: InputTaskProps) => {
    return (
        <input
            value={value}
            onChange={(e) => setState(e.target.value)}
            className='border border-slate-300 outline-none py-2 px-4 rounded-md'
            placeholder={placeholder}
            required
            type="text" />
    )
}

export default InputTask
