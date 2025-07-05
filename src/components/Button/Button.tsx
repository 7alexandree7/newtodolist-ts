import type React from "react";

type ButtonProps = {
    children?: React.ReactNode;
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
};

const Button = ({ children, onClick }: ButtonProps) => {

    return (
        <button
            onClick={onClick}
            type="button"
            className="bg-slate-400 text-white  p-2 rounded-md cursor-pointer"
        >
            {children}
        </button>
    )
}

export default Button
