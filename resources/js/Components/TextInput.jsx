import React from "react";

export default function TextInput({
    isPassword,
    icon,
    label,
    togglePassword,
    className,
    errors,
    isShow,
    name,
    RightText,
    ...props
})
{
    return (
        <div>
            {label && (
                <label
                    className="block text-stone-700 text-sm font-medium mb-1.5 cursor-pointer"
                    htmlFor={props.id}
                >
                    {label}
                </label>
            )}
            <div className="relative">
                {icon && (
                    <i
                        className={`absolute left-3 top-1/2 -translate-y-1/2 text-stone-400 ${icon}`}
                    ></i>
                )}
                <input
                    {...props}
                    className={`w-full ${icon ? "pl-10 pr-4" : "px-4"}  py-2.5 border border-stone-300 rounded-lg text-stone-700 placeholder-stone-400 focus:outline-none focus:border-amber-700 focus:ring-2 focus:ring-amber-700/10 transition-all text-sm ${className}`}
                />
                {isPassword && (
                    <button
                        type="button"
                        onClick={togglePassword}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-stone-400 hover:text-stone-600"
                    >
                        <i
                            className={`${isShow ? "fas fa-eye-slash" : "fas fa-eye"} text-sm cursor-pointer`}
                        ></i>
                    </button>
                )}
                {RightText && (
                    <span className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-stone-400">
                        {RightText}
                    </span>
                )}
            </div>
            {errors?.[name] &&
                <p className="mt-1 text-sm text-red-500">
                    {errors[name]}
                </p>
            }
        </div>
    );
}
