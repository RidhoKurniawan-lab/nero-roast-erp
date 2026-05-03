import { Link } from "@inertiajs/react";
import React from "react";

export default function LinkButton({href, className, icon, children }) {
    return (
        <Link href={href}
        className={`inline-flex items-center gap-2 px-4 py-2.5 bg-amber-900 hover:bg-amber-800 text-white text-sm font-medium rounded-lg transition-colors shadow-sm ${className}`}>
            <i className={`${icon} text-xs`}></i>
            {children}
        </Link>
    );
}
