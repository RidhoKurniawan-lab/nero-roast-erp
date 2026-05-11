import React from "react";
import AuthenticatedLayout from "@/Layout/AuthenticatedLayout";
import { route } from "ziggy-js";

const Show = ({ bean }) => {
    return (
        <div>
            {/* Breadcrumb */}
            <nav className="flex items-center gap-2 text-sm text-stone-500 mb-6">
                <a href="#" className="hover:text-amber-900 transition-colors">
                    Beans
                </a>
                <i className="fas fa-chevron-right text-xs"></i>
                <span className="text-stone-800 font-medium">Detail Beans</span>
            </nav>

            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-6">
                <div>
                    <h1 className="text-2xl font-bold text-stone-800">
                        Detail Beans
                    </h1>
                    <p className="text-sm text-stone-500 mt-1">
                        Complete information on beans specifications
                    </p>
                </div>
                <div className="flex items-center gap-2">
                    <a
                        href={route("beans.index")}
                        className="inline-flex items-center gap-2 px-4 py-2.5 border border-stone-300 text-stone-700 hover:bg-stone-100 text-sm font-medium rounded-lg transition-colors"
                    >
                        <i className="fas fa-arrow-left text-xs"></i>
                        Back
                    </a>
                    <a
                        href={route("beans.edit", bean.id)}
                        className="inline-flex items-center gap-2 px-4 py-2.5 bg-amber-900 hover:bg-amber-800 text-white text-sm font-medium rounded-lg transition-colors shadow-sm"
                    >
                        <i className="fas fa-edit text-xs"></i>
                        Edit
                    </a>
                </div>
            </div>

            {/* Main Card */}
            <div className="bg-white rounded-xl border border-stone-200 shadow-sm">
                {/* Card Header */}
                <div className="px-6 py-5 border-b border-stone-200 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                    <div className="flex items-center gap-3">
                        <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center">
                            <i className="fas fa-coffee text-amber-900 text-lg"></i>
                        </div>
                        <div>
                            <h2
                                className="font-semibold text-stone-800 text-lg"
                                id="displayName"
                            >
                                {bean.name}
                            </h2>
                            <p className="text-xs text-stone-500">
                                ID: KPG-2024-001
                            </p>
                        </div>
                    </div>
                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-green-50 text-green-700 text-xs font-medium rounded-full">
                        <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span>
                        Tersedia
                    </span>
                </div>

                {/* Content Body */}
                <div className="p-6">
                    {/* Section: Informasi Dasar */}
                    <div className="mb-8">
                        <h3 className="text-sm font-semibold text-amber-900 uppercase tracking-wider mb-4 flex items-center gap-2">
                            <i className="fas fa-info-circle text-xs"></i>
                            Basic Information
                        </h3>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                            {/* Name */}
                            <div className="md:col-span-2">
                                <label className="block text-xs font-medium text-stone-500 mb-1">
                                    Name of Beans
                                </label>
                                <p className="text-sm font-medium text-stone-800 bg-stone-50 rounded-lg px-4 py-2.5 border border-stone-200">
                                    <i className="fas fa-mug-hot text-amber-700 mr-2"></i>
                                    <span id="displayName2">{bean.name}</span>
                                </p>
                            </div>

                            {/* Species */}
                            <div>
                                <label className="block text-xs font-medium text-stone-500 mb-1">
                                    Species
                                </label>
                                <p className="text-sm font-medium text-stone-800 bg-stone-50 rounded-lg px-4 py-2.5 border border-stone-200">
                                    <i className="fas fa-seedling text-amber-700 mr-2"></i>
                                    <span id="displaySpecies">
                                        {bean.species}
                                    </span>
                                </p>
                            </div>

                            {/* Variety */}
                            <div>
                                <label className="block text-xs font-medium text-stone-500 mb-1">
                                    Varietas
                                </label>
                                <p className="text-sm font-medium text-stone-800 bg-stone-50 rounded-lg px-4 py-2.5 border border-stone-200">
                                    <i className="fas fa-leaf text-amber-700 mr-2"></i>
                                    <span id="displayVariety">
                                        {bean.variety}
                                    </span>
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Section: Asal Daerah (Origin) */}
                    <div className="mb-8">
                        <h3 className="text-sm font-semibold text-amber-900 uppercase tracking-wider mb-4 flex items-center gap-2">
                            <i className="fas fa-map-marker-alt text-xs"></i>
                            Origin
                        </h3>

                        {/* Origin Path Visualization */}
                        <div className="mb-4 p-4 bg-stone-50 border border-stone-200 rounded-lg">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center flex-shrink-0">
                                    <i className="fas fa-globe-asia text-amber-900"></i>
                                </div>
                                <div className="flex-1 min-w-0">
                                    <p className="text-sm text-stone-800">
                                        <span id="displayCountry">
                                            {bean.origin_country}
                                        </span>
                                        <i className="fas fa-chevron-right text-xs text-stone-400 mx-2"></i>
                                        <span id="displayRegion">
                                            {bean.origin_region}
                                        </span>
                                        <span id="displaySubOriginWrapper">
                                            <i className="fas fa-chevron-right text-xs text-stone-400 mx-2"></i>
                                            <span id="displaySubOrigin">
                                                {bean.sub_origin}
                                            </span>
                                        </span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Section: Detail Produksi & Grade */}
                    <div className="mb-8">
                        <h3 className="text-sm font-semibold text-amber-900 uppercase tracking-wider mb-4 flex items-center gap-2">
                            <i className="fas fa-cogs text-xs"></i>
                            Production & Grade Details
                        </h3>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                            {/* Processing Method */}
                            <div>
                                <label className="block text-xs font-medium text-stone-500 mb-1">
                                    Process Method
                                </label>
                                <p className="text-sm font-medium text-stone-800 bg-stone-50 rounded-lg px-4 py-2.5 border border-stone-200">
                                    <i className="fas fa-water text-amber-700 mr-2"></i>
                                    <span id="displayProcessingMethod">
                                        {bean.processing_method}
                                    </span>
                                </p>
                            </div>

                            {/* Grade */}
                            <div>
                                <label className="block text-xs font-medium text-stone-500 mb-1">
                                    Grade
                                </label>
                                <p className="text-sm font-medium text-stone-800 bg-stone-50 rounded-lg px-4 py-2.5 border border-stone-200">
                                    <span
                                        id="displayGrade"
                                        className="inline-flex items-center gap-1.5 px-2.5 py-0.5 bg-amber-100 text-amber-900 rounded-full text-xs font-semibold"
                                    >
                                        <i className="fas fa-star"></i>
                                        Grade {bean.grade}
                                    </span>
                                </p>
                            </div>

                            {/* Altitude Range */}
                            <div>
                                <label className="block text-xs font-medium text-stone-500 mb-1">
                                    Height
                                </label>
                                <p className="text-sm font-medium text-stone-800 bg-stone-50 rounded-lg px-4 py-2.5 border border-stone-200">
                                    <i className="fas fa-mountain text-amber-700 mr-2"></i>
                                    <span id="displayAltitudeMin">{bean.altitude_min}</span> -{" "}
                                    <span id="displayAltitudeMax">{bean.altitude_max}</span>{" "}
                                    mdpl
                                </p>
                            </div>

                            {/* Crop Year */}
                            <div>
                                <label className="block text-xs font-medium text-stone-500 mb-1">
                                    Crop Year
                                </label>
                                <p className="text-sm font-medium text-stone-800 bg-stone-50 rounded-lg px-4 py-2.5 border border-stone-200">
                                    <i className="far fa-calendar-check text-amber-700 mr-2"></i>
                                    <span id="displayCropYear">{bean.crop_year}</span>
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Section: Harga */}
                    <div className="mb-8">
                        <h3 className="text-sm font-semibold text-amber-900 uppercase tracking-wider mb-4 flex items-center gap-2">
                            <i className="fas fa-tag text-xs"></i>
                            price
                        </h3>

                        <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-xs text-amber-800 mb-1">
                                        Price Per Kg
                                    </p>
                                    <p className="text-2xl font-bold text-amber-900">
                                        Rp{" "}
                                        <span id="displayPricePerKg">
                                            {bean.price_per_kg}
                                        </span>
                                    </p>
                                </div>
                                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
                                    <i className="fas fa-money-bill-wave text-amber-900 text-lg"></i>
                                </div>
                            </div>
                            <p className="text-xs text-amber-700 mt-2">
                                Price in Rupiah per Kilogram (IDR/Kg)
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

Show.layout = (page) => <AuthenticatedLayout children={page} />;

export default Show;
