import React from "react";
import AuthenticatedLayout from "@/Layout/AuthenticatedLayout";
import TableHeader from "@/Components/TableComponent/TableHeader";
import { Link, router, usePage } from "@inertiajs/react";
import Table from "@/Components/TableComponent/Table";
import LinkButton from "@/Components/LinkButton";
import TableFooter from "@/Components/TableComponent/TableFooter";
import { route } from "ziggy-js";
import { showConfirm } from "../../Utils/swal";

const Index = () => {
    const { beans } = usePage().props;

    const tableHeader = [
        { label: "#" },
        { label: "Name" },
        { label: "Species" },
        { label: "Process" },
        { label: "Stock Status" },
        { label: "Grade", className: "text-center" },
        { label: "Crop Year" },
        { label: "Action", className: "text-center" },
    ];

    const handleDelete = (id) => {
        showConfirm(
            "Delete?",
            "Are you sure you want to delete this data?",
            "Yes, Delete",
        ).then((result) => {
            if (result.isConfirmed) {
                router.delete(route("beans.destroy", id));
            }
        });
    };

    return (
        <div className="max-w-7xl mx-auto space-y-6">
            {/* Header Section */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div>
                    <h2 className="text-xl font-bold text-stone-800">
                        Data Produk Kopi
                    </h2>
                    <p className="text-sm text-stone-500 mt-1">
                        Kelola semua produk kopi Anda
                    </p>
                </div>
                <LinkButton href={route("beans.create")} icon="fas fa-plus">
                    Add Product
                </LinkButton>
            </div>

            {/* Filter & Search Bar */}
            <div className="bg-white rounded-xl border border-stone-200 shadow-sm p-4">
                <div className="flex flex-col sm:flex-row gap-3">
                    {/* Search */}
                    <div className="relative flex-1">
                        <i className="fas fa-search absolute left-3 top-1/2 -translate-y-1/2 text-stone-400 text-sm"></i>
                        <input
                            type="text"
                            placeholder="Cari produk..."
                            className="w-full pl-10 pr-4 py-2.5 border border-stone-300 rounded-lg text-sm text-stone-700 placeholder-stone-400 focus:outline-none focus:border-amber-700 focus:ring-2 focus:ring-amber-700/10"
                        />
                    </div>

                    {/* Filter Kategori */}
                    <select className="px-4 py-2.5 border border-stone-300 rounded-lg text-sm text-stone-700 focus:outline-none focus:border-amber-700 focus:ring-2 focus:ring-amber-700/10 bg-white">
                        <option>Semua Kategori</option>
                        <option>Kopi Hitam</option>
                        <option>Kopi Susu</option>
                        <option>Manual Brew</option>
                        <option>Non Kopi</option>
                    </select>

                    {/* Filter Status */}
                    <select className="px-4 py-2.5 border border-stone-300 rounded-lg text-sm text-stone-700 focus:outline-none focus:border-amber-700 focus:ring-2 focus:ring-amber-700/10 bg-white">
                        <option>Semua Status</option>
                        <option>Tersedia</option>
                        <option>Habis</option>
                        <option>Draft</option>
                    </select>

                    {/* Filter Button */}
                    <button className="px-4 py-2.5 border border-stone-300 rounded-lg text-sm text-stone-600 hover:bg-stone-50 transition-colors flex items-center gap-2">
                        <i className="fas fa-filter text-xs"></i>
                        Filter
                    </button>
                </div>

                {/* Active Filters */}
                <div className="flex flex-wrap items-center gap-2 mt-3">
                    <span className="text-xs text-stone-500">
                        Filter aktif:
                    </span>
                    <span className="inline-flex items-center gap-1 px-3 py-1 bg-amber-50 text-amber-900 text-xs rounded-full">
                        Kopi Susu
                        <button className="hover:text-red-500">
                            <i className="fas fa-times"></i>
                        </button>
                    </span>
                    <span className="inline-flex items-center gap-1 px-3 py-1 bg-amber-50 text-amber-900 text-xs rounded-full">
                        Tersedia
                        <button className="hover:text-red-500">
                            <i className="fas fa-times"></i>
                        </button>
                    </span>
                    <button className="text-xs text-red-500 hover:text-red-700 ml-2">
                        Hapus semua
                    </button>
                </div>
            </div>

            {/* Table Card */}
            <div className="bg-white rounded-xl border border-stone-200 shadow-sm overflow-hidden">
                {/* Table Toolbar */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between px-5 py-4 border-b border-stone-200 gap-3">
                    <div className="flex items-center gap-2">
                        <button
                            className="p-2 text-stone-500 hover:text-amber-900 hover:bg-stone-100 rounded-lg transition-colors"
                            title="Refresh"
                        >
                            <i className="fas fa-sync-alt text-sm"></i>
                        </button>
                        <button
                            className="p-2 text-stone-500 hover:text-amber-900 hover:bg-stone-100 rounded-lg transition-colors"
                            title="Download"
                        >
                            <i className="fas fa-download text-sm"></i>
                        </button>
                        <button
                            className="p-2 text-stone-500 hover:text-amber-900 hover:bg-stone-100 rounded-lg transition-colors"
                            title="Print"
                        >
                            <i className="fas fa-print text-sm"></i>
                        </button>
                    </div>
                </div>

                {/* Table */}

                <Table tableHeader={tableHeader}>
                    {beans.data.map((item, index) => (
                        <tr
                            key={index}
                            className="hover:bg-stone-50 transition-colors"
                        >
                            <td className="px-5 py-4">
                                <span className="text-stone-700">
                                    {index +
                                        1 +
                                        (beans.current_page - 1) *
                                            beans.per_page}
                                </span>
                            </td>
                            <td className="px-5 py-4">
                                <div className="flex items-center gap-3">
                                    <div>
                                        <p className="font-medium text-stone-800">
                                            {item.name}
                                        </p>
                                        <p className="text-xs text-stone-500">
                                            {item.origin_region}
                                        </p>
                                    </div>
                                </div>
                            </td>
                            <td className="px-5 py-4">
                                <span className="text-stone-700">
                                    {item.species}
                                </span>
                            </td>
                            <td className="px-5 py-4">
                                <span className="font-medium text-stone-800">
                                    {item.processing_method}
                                </span>
                            </td>
                            <td className="px-5 py-4">
                                <span className="font-medium text-stone-800">
                                    {item.stock_kg} Kg
                                </span>
                            </td>
                            <td className="px-5 py-4">
                                <span className="font-medium text-stone-800 text-center">
                                    {item.grade}
                                </span>
                            </td>
                            <td className="px-5 py-4">
                                <span className="font-medium text-stone-800">
                                    {item.crop_year}
                                </span>
                            </td>

                            <td className="px-5 py-4">
                                <div className="flex items-center justify-center gap-1">
                                    <Link
                                        href={route("beans.edit", item.id)}
                                        className="p-2 text-stone-400 hover:text-amber-700 hover:bg-amber-50 rounded-lg transition-colors cursor-pointer"
                                        title="Edit"
                                    >
                                        <i className="fas fa-edit text-sm"></i>
                                    </Link>
                                    <Link
                                        href={route("beans.show", item.id)}
                                        className="p-2 text-stone-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors cursor-pointer"
                                        title="Detail"
                                    >
                                        <i className="fas fa-eye text-sm"></i>
                                    </Link>
                                    <button
                                        type="button"
                                        onClick={() => handleDelete(item.id)}
                                        className="p-2 text-stone-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors cursor-pointer"
                                    >
                                        <i className="fas fa-trash-alt text-sm"></i>
                                    </button>
                                </div>
                            </td>
                        </tr>
                    ))}
                </Table>

                {/* Table Footer / Pagination */}
                <TableFooter paginate={beans} />
            </div>
        </div>
    );
};

Index.layout = (page) => <AuthenticatedLayout children={page} />;

export default Index;
