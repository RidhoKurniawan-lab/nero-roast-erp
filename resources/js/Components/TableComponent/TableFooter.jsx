import React from "react";
import { usePagination } from "../../Hook/usePagination";
import { Link } from "@inertiajs/react";

export default function TableFooter({ paginate }) {
    const { from, to, total, getLabel, getVisibleLinks } =
        usePagination(paginate);

    return (
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between px-5 py-4 border-t border-stone-200 gap-4">
            <p className="text-sm text-stone-500">
                Menampilkan {from}-{to} dari {total} data
            </p>

            <div className="flex items-center gap-1">
                {getVisibleLinks().map((link) => {
                    const label = getLabel(link.label);

                    if (link.active) {
                        return (
                            <button
                                key={link.label}
                                className="px-3.5 py-2 bg-amber-900 text-white rounded-lg text-sm font-medium"
                            >
                                {label}
                            </button>
                        );
                    }

                    // disable preveus and next 
                    if (!link.url) {
                        return (
                            <button
                                key={link.label}
                                className="px-3.5 py-2 border border-gray-100 rounded-lg text-gray-300 text-sm transition-colors"
                            >
                                {label}
                            </button>
                        );
                    }

                    return (
                        <Link
                            key={link.label}
                            href={link.url}
                            className="px-3.5 py-2 border border-stone-300 rounded-lg text-stone-600 hover:bg-stone-50 text-sm transition-colors"
                        >
                            {label}
                        </Link>
                    );
                })}
            </div>
        </div>
    );
}
