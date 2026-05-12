import React, { useState } from "react";
import AuthenticatedLayout from "@/Layout/AuthenticatedLayout";
import TableHeader from "@/Components/TableComponent/TableHeader";
import { Link, router, usePage } from "@inertiajs/react";
import Table from "@/Components/TableComponent/Table";
import LinkButton from "@/Components/LinkButton";
import TableFooter from "@/Components/TableComponent/TableFooter";
import { route } from "ziggy-js";
import { showConfirm } from "../../Utils/swal";
import { useSearch } from "../../Hook/useSearch";
import SelectInput from "@/Components/SelectInput";
import TextInput from "@/Components/TextInput";

const Index = ({ beans, filter }) => {
    const {
        search,
        species,
        grade,
        activeFilter,
        removeFilter,
        clearAllFilters,
        handleSearchChange,
        handleSpeciesChange,
        handleGradeChange,
    } = useSearch(filter);

    const tableHeader = [
        { label: "#" },
        { label: "Name" },
        { label: "Species" },
        { label: "Process" },
        { label: "Stock" },
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
            <div className="bg-white rounded-xl border border-stone-200 shadow-sm p-4 transition-all duration-500 ease-in-out">
                <div className="flex flex-col sm:flex-row gap-3">
                    {/* Search */}
                    <TextInput
                        name="search"
                        icon="fas fa-search"
                        type="text"
                        placeholder="Cari produk..."
                        value={search}
                        onChange={handleSearchChange}
                    />

                    {/* Filter Species */}
                    <SelectInput
                        name="species"
                        icon="fas fa-dna"
                        default="Select species"
                        className="pr-10"
                        value={species}
                        onChange={handleSpeciesChange}
                    >
                        <option value="Arabica">Arabica</option>
                        <option value="Robusta">Robusta</option>
                        <option value="Liberica">Liberica</option>
                        <option value="Excelsa">Excelsa</option>
                    </SelectInput>

                    {/* Filter Grade */}
                    <SelectInput
                        icon="fas fa-star"
                        name="grade"
                        default="Select Grade"
                        className="pr-10"
                        value={grade}
                        onChange={handleGradeChange}
                    >
                        <option value="1">Grade 1</option>
                        <option value="2">Grade 2</option>
                        <option value="3">Grade 3</option>
                        <option value="4">Grade 4</option>
                        <option value="5">Grade 5</option>
                        <option value="6">Grade 6</option>
                    </SelectInput>
                </div>

                {/* Active Filters */}
                {activeFilter.length > 0 && (
                    <div className="flex flex-wrap items-center gap-2 mt-3">
                        <span className="text-xs text-stone-500">
                            Active filters:
                        </span>
                        {activeFilter.map((filter) => (
                            <span
                                key={filter.key}
                                className="inline-flex items-center gap-1 px-3 py-1 bg-amber-50 text-amber-900 text-xs rounded-full"
                            >
                                {filter.label}
                                <button
                                    onClick={() => removeFilter(filter.key)}
                                    className="hover:text-red-500"
                                >
                                    <i className="fas fa-times cursor-pointer"></i>
                                </button>
                            </span>
                        ))}
                        {activeFilter.length > 0 && (
                            <button
                                onClick={clearAllFilters}
                                className="text-xs text-red-500 hover:text-red-700 ml-2 cursor-pointer"
                            >
                                Delete All
                            </button>
                        )}
                    </div>
                )}
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
                    {beans.data.length > 0 ? (
                        beans.data.map((item, index) => (
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
                                        Grade {item.grade}
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
                                            onClick={() =>
                                                handleDelete(item.id)
                                            }
                                            className="p-2 text-stone-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors cursor-pointer"
                                        >
                                            <i className="fas fa-trash-alt text-sm"></i>
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td
                                colSpan={tableHeader.length}
                                className="px-5 py-10 text-center"
                            >
                                <div className="flex flex-col items-center justify-center gap-2">
                                    <i className="fas fa-search text-stone-300 text-3xl mb-2"></i>
                                    <p className="text-stone-500 font-medium">
                                        Data Not Found
                                    </p>
                                    <p className="text-stone-400 text-sm">
                                        Please filter with different keywords or
                                        criteria.
                                    </p>
                                </div>
                            </td>
                        </tr>
                    )}
                </Table>

                {/* Table Footer / Pagination */}
                <TableFooter paginate={beans} />
            </div>
        </div>
    );
};

Index.layout = (page) => <AuthenticatedLayout children={page} />;

export default Index;
