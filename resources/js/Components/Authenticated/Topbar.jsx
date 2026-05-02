import React from "react";

export default function Topbar({ toggleSidebar }) {
    return (
        <header className="bg-white border-b border-stone-200 shadow-sm">
            <div className="flex items-center justify-between px-4 lg:px-6 py-3">
                {/* Left: Toggle + Search */}
                <div className="flex items-center gap-4 flex-1">
                    <button
                        onClick={toggleSidebar}
                        className="lg:hidden text-stone-600 hover:text-amber-900 cursor-pointer"
                    >
                        <i className="fas fa-bars text-xl"></i>
                    </button>

                    <div className="hidden sm:flex items-center bg-stone-100 rounded-lg px-3 py-2 flex-1 max-w-md">
                        <i className="fas fa-search text-stone-400 text-sm"></i>
                        <input
                            type="text"
                            placeholder="Cari pesanan, produk..."
                            className="bg-transparent border-none outline-none text-sm ml-2 w-full text-stone-700 placeholder-stone-400"
                        />
                    </div>
                </div>

                {/* Right: Actions */}
                <div className="flex items-center gap-3">
                    <button className="relative text-stone-500 hover:text-amber-900 transition-colors">
                        <i className="fas fa-bell text-lg"></i>
                        <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">
                            3
                        </span>
                    </button>

                    <button className="sm:hidden text-stone-500 hover:text-amber-900">
                        <i className="fas fa-search text-lg"></i>
                    </button>
                </div>
            </div>

            {/* Search Mobile */}
            <div id="searchMobile" className="hidden px-4 pb-3 sm:hidden">
                <div className="flex items-center bg-stone-100 rounded-lg px-3 py-2">
                    <i className="fas fa-search text-stone-400 text-sm"></i>
                    <input
                        type="text"
                        placeholder="Cari..."
                        className="bg-transparent border-none outline-none text-sm ml-2 w-full text-stone-700"
                    />
                </div>
            </div>
        </header>
    );
}
