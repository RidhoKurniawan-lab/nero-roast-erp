import React from "react";

export default function SelectInput({
    label,
    children,
    icon,
    errors,
    name,
    ...props
}) {
    return (
        <>  
            {label &&
                <label
                htmlFor="species"
                className="block text-sm font-medium text-stone-700 mb-1.5"
            >
                {label + " "}
                <span className="text-red-500">*</span>
            </label>}
            <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    {icon && (
                        <i className={`left-3 text-stone-400 ${icon}`}></i>
                    )}
                </div>
                <select
                    {...props}
                    className={`w-full pl-10 pr-3 py-2.5 border border-stone-300 rounded-lg text-sm text-stone-700 focus:outline-none focus:border-amber-700 focus:ring-2 focus:ring-amber-700/10 transition-all appearance-none bg-white ${props.className}`}
                    required
                >
                    <option value="" disabled selected hidden>
                        {props.default}
                    </option>
                    {children}
                </select>
                <i className="fas fa-chevron-down absolute right-3 top-1/2 -translate-y-1/2 text-stone-400 text-xs pointer-events-none"></i>
            </div>
            {errors?.[name] && (
                <p className="mt-1 text-sm text-red-500">{errors[name]}</p>
            )}
        </>
    );
}
