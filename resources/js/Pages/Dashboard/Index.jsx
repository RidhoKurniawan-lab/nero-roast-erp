import React from "react";
import AuthenticatedLayout from "@/Layout/AuthenticatedLayout";

const Index = () => {
    return (
        <>
            {/* Page Title */}
            <div className="mb-6">
                <h2 className="text-xl font-bold text-stone-800">Dashboard</h2>
                <p className="text-sm text-stone-500 mt-1">
                    Ringkasan bisnis kopi Anda hari ini
                </p>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                {/* Card 1 */}
                <div className="bg-white rounded-xl p-4 shadow-sm border border-stone-200 hover:shadow-md transition-shadow">
                    <div className="flex items-center justify-between mb-3">
                        <div className="w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center">
                            <i className="fas fa-coffee text-amber-900"></i>
                        </div>
                        <span className="text-xs font-medium text-green-600 bg-green-50 px-2 py-1 rounded-full">
                            +12%
                        </span>
                    </div>
                    <p className="text-2xl font-bold text-stone-800">1,234</p>
                    <p className="text-xs text-stone-500 mt-1">
                        Produk Terjual
                    </p>
                </div>

                {/* Card 2 */}
                <div className="bg-white rounded-xl p-4 shadow-sm border border-stone-200 hover:shadow-md transition-shadow">
                    <div className="flex items-center justify-between mb-3">
                        <div className="w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center">
                            <i className="fas fa-shopping-bag text-amber-900"></i>
                        </div>
                        <span className="text-xs font-medium text-green-600 bg-green-50 px-2 py-1 rounded-full">
                            +8%
                        </span>
                    </div>
                    <p className="text-2xl font-bold text-stone-800">456</p>
                    <p className="text-xs text-stone-500 mt-1">Pesanan Baru</p>
                </div>

                {/* Card 3 */}
                <div className="bg-white rounded-xl p-4 shadow-sm border border-stone-200 hover:shadow-md transition-shadow">
                    <div className="flex items-center justify-between mb-3">
                        <div className="w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center">
                            <i className="fas fa-users text-amber-900"></i>
                        </div>
                        <span className="text-xs font-medium text-amber-600 bg-amber-50 px-2 py-1 rounded-full">
                            +5%
                        </span>
                    </div>
                    <p className="text-2xl font-bold text-stone-800">89</p>
                    <p className="text-xs text-stone-500 mt-1">
                        Pelanggan Aktif
                    </p>
                </div>

                {/* Card 4 */}
                <div className="bg-white rounded-xl p-4 shadow-sm border border-stone-200 hover:shadow-md transition-shadow">
                    <div className="flex items-center justify-between mb-3">
                        <div className="w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center">
                            <i className="fas fa-dollar-sign text-amber-900"></i>
                        </div>
                        <span className="text-xs font-medium text-red-600 bg-red-50 px-2 py-1 rounded-full">
                            -2%
                        </span>
                    </div>
                    <p className="text-2xl font-bold text-stone-800">
                        Rp 12.4M
                    </p>
                    <p className="text-xs text-stone-500 mt-1">Pendapatan</p>
                </div>
            </div>

            {/* Recent Orders Table */}
            <div className="bg-white rounded-xl shadow-sm border border-stone-200 overflow-hidden">
                {/* Table Header */}
                <div className="flex items-center justify-between px-5 py-4 border-b border-stone-200">
                    <h3 className="font-semibold text-stone-800">
                        Pesanan Terbaru
                    </h3>
                    <a
                        href="#"
                        className="text-sm text-amber-900 hover:text-amber-700 font-medium"
                    >
                        Lihat Semua
                    </a>
                </div>

                {/* Table */}
                <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                        <thead>
                            <tr className="bg-stone-50 text-stone-600 text-xs uppercase">
                                <th className="text-left px-5 py-3 font-semibold">
                                    Order ID
                                </th>
                                <th className="text-left px-5 py-3 font-semibold">
                                    Pelanggan
                                </th>
                                <th className="text-left px-5 py-3 font-semibold">
                                    Produk
                                </th>
                                <th className="text-left px-5 py-3 font-semibold">
                                    Total
                                </th>
                                <th className="text-left px-5 py-3 font-semibold">
                                    Status
                                </th>
                                <th className="text-left px-5 py-3 font-semibold">
                                    Aksi
                                </th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-stone-100">
                            {/* Row 1 */}
                            <tr className="hover:bg-stone-50 transition-colors">
                                <td className="px-5 py-3 font-medium text-stone-800">
                                    #KK-001
                                </td>
                                <td className="px-5 py-3 text-stone-600">
                                    Budi Santoso
                                </td>
                                <td className="px-5 py-3 text-stone-600">
                                    Kopi Gayo
                                </td>
                                <td className="px-5 py-3 font-medium text-stone-800">
                                    Rp 75.000
                                </td>
                                <td className="px-5 py-3">
                                    <span className="bg-green-50 text-green-700 text-xs px-2 py-1 rounded-full font-medium">
                                        Selesai
                                    </span>
                                </td>
                                <td className="px-5 py-3">
                                    <button className="text-stone-400 hover:text-amber-900 transition-colors">
                                        <i className="fas fa-ellipsis-v"></i>
                                    </button>
                                </td>
                            </tr>

                            {/* Row 2 */}
                            <tr className="hover:bg-stone-50 transition-colors">
                                <td className="px-5 py-3 font-medium text-stone-800">
                                    #KK-002
                                </td>
                                <td className="px-5 py-3 text-stone-600">
                                    Ani Wijaya
                                </td>
                                <td className="px-5 py-3 text-stone-600">
                                    Latte Art
                                </td>
                                <td className="px-5 py-3 font-medium text-stone-800">
                                    Rp 45.000
                                </td>
                                <td className="px-5 py-3">
                                    <span className="bg-amber-50 text-amber-700 text-xs px-2 py-1 rounded-full font-medium">
                                        Proses
                                    </span>
                                </td>
                                <td className="px-5 py-3">
                                    <button className="text-stone-400 hover:text-amber-900 transition-colors">
                                        <i className="fas fa-ellipsis-v"></i>
                                    </button>
                                </td>
                            </tr>

                            {/* Row 3 */}
                            <tr className="hover:bg-stone-50 transition-colors">
                                <td className="px-5 py-3 font-medium text-stone-800">
                                    #KK-003
                                </td>
                                <td className="px-5 py-3 text-stone-600">
                                    Cahyo Prasetyo
                                </td>
                                <td className="px-5 py-3 text-stone-600">
                                    Espresso
                                </td>
                                <td className="px-5 py-3 font-medium text-stone-800">
                                    Rp 30.000
                                </td>
                                <td className="px-5 py-3">
                                    <span className="bg-red-50 text-red-700 text-xs px-2 py-1 rounded-full font-medium">
                                        Batal
                                    </span>
                                </td>
                                <td className="px-5 py-3">
                                    <button className="text-stone-400 hover:text-amber-900 transition-colors">
                                        <i className="fas fa-ellipsis-v"></i>
                                    </button>
                                </td>
                            </tr>

                            {/* Row 4 */}
                            <tr className="hover:bg-stone-50 transition-colors">
                                <td className="px-5 py-3 font-medium text-stone-800">
                                    #KK-004
                                </td>
                                <td className="px-5 py-3 text-stone-600">
                                    Dewi Lestari
                                </td>
                                <td className="px-5 py-3 text-stone-600">
                                    Cappuccino
                                </td>
                                <td className="px-5 py-3 font-medium text-stone-800">
                                    Rp 40.000
                                </td>
                                <td className="px-5 py-3">
                                    <span className="bg-green-50 text-green-700 text-xs px-2 py-1 rounded-full font-medium">
                                        Selesai
                                    </span>
                                </td>
                                <td className="px-5 py-3">
                                    <button className="text-stone-400 hover:text-amber-900 transition-colors">
                                        <i className="fas fa-ellipsis-v"></i>
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                {/* Table Footer */}
                <div className="flex items-center justify-between px-5 py-3 border-t border-stone-200 text-sm">
                    <p className="text-stone-500">
                        Menampilkan 4 dari 24 pesanan
                    </p>
                    <div className="flex gap-2">
                        <button className="px-3 py-1.5 border border-stone-300 rounded-lg text-stone-600 hover:bg-stone-50 text-xs font-medium">
                            Sebelumnya
                        </button>
                        <button className="px-3 py-1.5 bg-amber-900 text-white rounded-lg hover:bg-amber-800 text-xs font-medium">
                            1
                        </button>
                        <button className="px-3 py-1.5 border border-stone-300 rounded-lg text-stone-600 hover:bg-stone-50 text-xs font-medium">
                            2
                        </button>
                        <button className="px-3 py-1.5 border border-stone-300 rounded-lg text-stone-600 hover:bg-stone-50 text-xs font-medium">
                            Selanjutnya
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

Index.layout = (page) => <AuthenticatedLayout children={page} />;

export default Index;
