import React from 'react'

type InputProps = {
    placeholder: string
    type: string
    className?: string
    icon?: React.ReactNode
}

const Input = ({ placeholder, icon, className = '', type }: InputProps) => {
    return (
        <div className="relative">
            <input
                type={type}
                placeholder={placeholder}
                className={`bg-white text-black  py-5 pl-12 w-full ${className}`}
            />

            {icon && (
                <div className="absolute top-1/2 left-4  -translate-y-1/2">
                    {icon}
                </div>
            )}
        </div>
    )
}

export default Input
