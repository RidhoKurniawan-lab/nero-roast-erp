import { Link, router } from "@inertiajs/react";
import React from "react";

export default function Sidebar({isOpen, toggleSidebar}) {
    return (
        <>
            {/* Sidebar Overlay Mobile */}
            <div
                className={`fixed inset-0 bg-black/50 z-20 ${isOpen ? 'hidden' : ""} lg:hidden cursor-pointer`}
                onClick={toggleSidebar}
            ></div>
            <aside
                // id="sidebar"
                className={`fixed lg:static inset-y-0 left-0 w-64 bg-white border-r border-stone-200 shadow-sm z-30 transform ${isOpen ? "-translate-x-full" : ""} lg:translate-x-0 transition-transform duration-300 flex flex-col`}
            >
                {/* Sidebar Header */}
                <div className="p-5 border-b border-stone-200">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-amber-900 rounded-lg flex items-center justify-center shadow-md">
                            <i className="fas fa-mug-hot text-white"></i>
                        </div>
                        <div>
                            <h1 className="text-sm font-bold text-stone-800">
                                Kedai Kopi
                            </h1>
                            <p className="text-xs text-stone-500">
                                Admin Panel
                            </p>
                        </div>
                    </div>
                </div>

                {/* Sidebar Navigation */}
                <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
                    <p className="text-xs font-semibold text-stone-400 uppercase tracking-wider mb-3 px-2">
                        Main Menu
                    </p>

                    <Link
                        href="/dashboard"
                        className="flex items-center gap-3 px-3 py-2.5 rounded-lg bg-amber-50 text-amber-900 font-medium text-sm"
                    >
                        <i className="fas fa-th-large w-5 text-center"></i>
                        <span>Dashboard</span>
                    </Link>

                    <Link
                        href="/Beans"
                        className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-stone-600 hover:bg-stone-100 font-medium text-sm transition-colors"
                    >
                        <i className="fas fa-coffee w-5 text-center"></i>
                        <span>Green Beans</span>
                    </Link>

                    <a
                        href="#"
                        className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-stone-600 hover:bg-stone-100 font-medium text-sm transition-colors"
                    >
                        <i className="fas fa-shopping-cart w-5 text-center"></i>
                        <span>Pesanan</span>
                        <span className="ml-auto bg-amber-900 text-white text-xs rounded-full px-2 py-0.5">
                            12
                        </span>
                    </a>

                    <a
                        href="#"
                        className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-stone-600 hover:bg-stone-100 font-medium text-sm transition-colors"
                    >
                        <i className="fas fa-users w-5 text-center"></i>
                        <span>Pelanggan</span>
                    </a>

                    <p className="text-xs font-semibold text-stone-400 uppercase tracking-wider mb-3 mt-6 px-2">
                        Lainnya
                    </p>

                    <a
                        href="#"
                        className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-stone-600 hover:bg-stone-100 font-medium text-sm transition-colors"
                    >
                        <i className="fas fa-chart-bar w-5 text-center"></i>
                        <span>Analitik</span>
                    </a>

                    <a
                        href="#"
                        className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-stone-600 hover:bg-stone-100 font-medium text-sm transition-colors"
                    >
                        <i className="fas fa-cog w-5 text-center"></i>
                        <span>Pengaturan</span>
                    </a>
                </nav>

                {/* Sidebar Footer */}
                <div className="p-4 border-t border-stone-200">
                    <div className="flex items-center gap-3 px-2">
                        <img
                            src="https://ui-avatars.com/api/?name=Barista&background=78350f&color=fff&size=32"
                            alt="Avatar"
                            className="w-8 h-8 rounded-full"
                        />
                        <div className="flex-1 min-w-0">
                            <p className="text-sm font-medium text-stone-800 truncate">
                                Barista Utama
                            </p>
                            <p className="text-xs text-stone-500">Admin</p>
                        </div>
                        <button className="text-stone-400 hover:text-stone-600">
                            <i className="fas fa-sign-out-alt text-sm"></i>
                        </button>
                    </div>
                </div>
            </aside>
        </>
    );
}
