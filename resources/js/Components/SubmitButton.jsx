import React from "react";

export default function SubmitButton({
    icon,
    children,
    loading,
    className,
    ...props
}) {
    return (
        <button
            type="submit"
            className={`w-full py-2.5 bg-amber-900 hover:bg-amber-800 text-white font-semibold rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-amber-900/20 flex items-center justify-center gap-2 text-sm cursor-pointer ${loading ? 'cursor-not-allowed opacity-70' : '', className}`}
        >
            {icon && !loading && (
                <i className={`fas fa-arrow-right text-xs ${icon}`}></i>
            )}
            {loading &&
                <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
            }
            {children}
        </button>
    );
}
