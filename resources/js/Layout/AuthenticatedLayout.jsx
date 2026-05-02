import React, { useState } from "react";
import Sidebar from "@/Components/Authenticated/Sidebar";
import Topbar from "../Components/Authenticated/Topbar";

export default function AuthenticatedLayout({ children }) {
    const [isOpen, setIsOpen] = useState(true);

    const toggleSidebar = () => setIsOpen(!isOpen);

    return (
        <div className="flex h-screen overflow-hidden">
            {/* Sidebar */}
            <Sidebar toggleSidebar={toggleSidebar} isOpen={isOpen} />

            {/* Main Content */}
            <div className="flex-1 flex flex-col overflow-hidden">
                {/* Top Navbar */}
                <Topbar toggleSidebar={toggleSidebar} />

                <main className="flex-1 overflow-y-auto p-4 lg:p-6 bg-stone-50">
                    {/* Content Area */}
                    {children}
                </main>
            </div>
        </div>
    );
}
