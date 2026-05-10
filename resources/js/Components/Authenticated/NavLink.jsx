import { Link } from "@inertiajs/react";
import React from "react";

export default function NavLink({ href, active, icon, children }) {
    return (
        <Link
            href={href}
            className={`flex items-center gap-3 px-3 py-2.5 rounded-lg font-medium text-sm ${active ? "text-amber-900 bg-amber-50" : "text-stone-600 hover:bg-stone-100 transition-colors"}`}
        >
            <i className={`${icon} w-5 text-center`}></i>
            <span>
                {children}
            </span>
        </Link>
    );
}
