import React from "react";
import AuthenticatedLayout from "@/Layout/AuthenticatedLayout";
import LinkButton from "@/Components/LinkButton";
import SubmitButton from "@/Components/SubmitButton";
import TextInput from "@/Components/TextInput";
import SelectInput from "@/Components/SelectInput";
import { route } from "ziggy-js";
import { useBeanForm } from "@/Hook/FormHook/useBeanForm";

const Edit = ({ beans, methods }) => {
    const { formData, locationData, helpers } = useBeanForm(beans);

    return (
        <div>
            {/* Breadcrumb  */}
            <nav className="flex items-center gap-2 text-sm text-stone-500 mb-6">
                <a
                    href={route("beans.index")}
                    className="hover:text-amber-900 transition-colors"
                >
                    Beans
                </a>
                <i className="fas fa-chevron-right text-xs"></i>
                <span className="text-stone-800 font-medium">Edit Beans</span>
            </nav>

            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-6">
                <div>
                    <h1 className="text-2xl font-bold text-stone-800">
                        Edit Beans
                    </h1>
                    <p className="text-sm text-stone-500 mt-1">
                        Complete the details to Change Beans
                    </p>
                </div>
                <a
                    href={route("beans.index")}
                    className="inline-flex items-center gap-2 px-4 py-2.5 border border-stone-300 text-stone-700 hover:bg-stone-100 text-sm font-medium rounded-lg transition-colors"
                >
                    <i className="fas fa-arrow-left text-xs"></i>
                    Back
                </a>
            </div>

            {/* Form Card */}
            <div className="bg-white rounded-xl border border-stone-200 shadow-sm">
                {/* Card Header */}
                <div className="px-6 py-5 border-b border-stone-200">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center">
                            <i className="fas fa-coffee text-amber-900"></i>
                        </div>
                        <div>
                            <h2 className="font-semibold text-stone-800">
                                Beans information
                            </h2>
                            <p className="text-xs text-stone-500">
                                Marked fields{" "}
                                <span className="text-red-500">*</span> must
                                filled
                            </p>
                        </div>
                    </div>
                </div>

                {/* Form Body */}
                <form
                    onSubmit={(e) => formData.submit(e, beans.id)}
                    className="p-6"
                >
                    {/* Section: Informasi Dasar */}
                    <div className="mb-8">
                        <h3 className="text-sm font-semibold text-amber-900 uppercase tracking-wider mb-4 flex items-center gap-2">
                            <i className="fas fa-info-circle text-xs"></i>
                            Basic Information
                        </h3>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                            {/* Name */}
                            <div className="md:col-span-2">
                                <TextInput
                                    label="Bean Name"
                                    name="name"
                                    icon="fas fa-seedling"
                                    type="text"
                                    id="BeanName"
                                    errors={formData.errors}
                                    value={formData.data.name}
                                    onChange={(e) =>
                                        formData.setData("name", e.target.value)
                                    }
                                    placeholder="example: Gayo Premium Beans"
                                />
                                <p className="text-xs text-stone-400 mt-1">
                                    Maximum product name 100 characters
                                </p>
                            </div>

                            {/* Species (Dropdown) */}
                            <div>
                                <SelectInput
                                    label="Species"
                                    name="species"
                                    icon="fas fa-dna"
                                    default="Select the coffee species"
                                    errors={formData.errors}
                                    value={formData.data.species}
                                    onChange={(e) =>
                                        formData.setData(
                                            "species",
                                            e.target.value,
                                        )
                                    }
                                >
                                    <option value="Arabica">Arabica</option>
                                    <option value="Robusta">Robusta</option>
                                    <option value="Liberica">Liberica</option>
                                    <option value="Excelsa">Excelsa</option>
                                </SelectInput>
                            </div>

                            {/* Variety */}
                            <div>
                                <TextInput
                                    label="Variety"
                                    name="variety"
                                    icon="fas fa-tags"
                                    type="text"
                                    id="variety"
                                    errors={formData.errors}
                                    placeholder="Examples: Typica, Bourbon, Catimor"
                                    value={formData.data.variety}
                                    onChange={(e) =>
                                        formData.setData(
                                            "variety",
                                            e.target.value,
                                        )
                                    }
                                />
                            </div>
                        </div>
                    </div>

                    {/* Section: Asal Daerah (Origin) */}
                    <div className="mb-8">
                        <h3 className="text-sm font-semibold text-amber-900 uppercase tracking-wider mb-4 flex items-center gap-2">
                            <i className="fas fa-map-marker-alt text-xs"></i>
                            Regional Origin
                        </h3>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                            {/* Negara */}
                            <div>
                                <SelectInput
                                    value={formData.data.origin_country}
                                    onChange={locationData.handleCountryChange}
                                    disabled={locationData.loading}
                                    label="Country"
                                    name="origin_country"
                                    icon="fas fa-globe"
                                    errors={formData.errors}
                                    value={formData.data.origin_country}
                                    default={
                                        locationData.loading
                                            ? "Loading..."
                                            : "Pilih Negara"
                                    }
                                >
                                    {locationData.allData.map((c, index) => (
                                        <option
                                            key={`${c.name}-${index}`}
                                            value={c.name}
                                        >
                                            {c.name}
                                        </option>
                                    ))}
                                </SelectInput>
                            </div>

                            {/* Provinsi / Negara Bagian */}
                            <div>
                                <SelectInput
                                    value={formData.data.origin_region}
                                    onChange={(e) =>
                                        formData.setData(
                                            "origin_region",
                                            e.target.value,
                                        )
                                    }
                                    disabled={
                                        locationData.loading ||
                                        locationData.availableStates.length ===
                                            0
                                    }
                                    label="State"
                                    icon="fas fa-map"
                                    name="origin_region"
                                    errors={formData.errors}
                                    value={formData.data.origin_region}
                                    onChange={(e) =>
                                        formData.setData(
                                            "origin_region",
                                            e.target.value,
                                        )
                                    }
                                    default={
                                        locationData.loading
                                            ? "Loading..."
                                            : "Pilih Provinsi"
                                    }
                                >
                                    {locationData.availableStates.map((s) => (
                                        <option key={s.name} value={s.name}>
                                            {s.name}
                                        </option>
                                    ))}
                                </SelectInput>
                                <p className="text-xs text-stone-400 mt-1">
                                    Coffee producing provinces or regions
                                </p>
                            </div>

                            {/* Gunung / Desa / Kebun */}
                            <div className="md:col-span-2">
                                <TextInput
                                    label="Mountain / Village / Garden"
                                    name="sub_origin"
                                    errors={formData.errors}
                                    icon="fas fa-location-dot"
                                    type="text"
                                    id="sub_origin"
                                    value={formData.data.sub_origin}
                                    onChange={(e) =>
                                        formData.setData(
                                            "sub_origin",
                                            e.target.value,
                                        )
                                    }
                                    placeholder="Example: Mount Puntang, Cikole Village, XYZ Estate Garden"
                                />
                                <p className="text-xs text-stone-400 mt-1">
                                    Name of a specific mountain, village, or
                                    plantation that produces coffee
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Section: Detail Produksi */}
                    <div className="mb-8">
                        <h3 className="text-sm font-semibold text-amber-900 uppercase tracking-wider mb-4 flex items-center gap-2">
                            <i className="fas fa-cogs text-xs"></i>
                            Production Details
                        </h3>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                            {/* Processing Method (Dropdown) */}
                            <div>
                                <SelectInput
                                    label="Metode Proses"
                                    icon="fas fa-cogs"
                                    default="Select Process"
                                    name="processing_method"
                                    value={formData.data.processing_method}
                                    onChange={(e) =>
                                        formData.setData(
                                            "processing_method",
                                            e.target.value,
                                        )
                                    }
                                    errors={formData.errors}
                                >
                                    {methods.map((mtd, index) => (
                                        <option key={index} value={mtd}>
                                            {mtd}
                                        </option>
                                    ))}
                                </SelectInput>
                            </div>

                            {/* Grade */}
                            <div>
                                <SelectInput
                                    label="Grade"
                                    icon="fas fa-star"
                                    name="grade"
                                    default="Select Grade"
                                    errors={formData.errors}
                                    value={formData.data.grade}
                                    onChange={(e) =>
                                        formData.setData(
                                            "grade",
                                            e.target.value,
                                        )
                                    }
                                >
                                    <option value="1">Grade 1</option>
                                    <option value="2">Grade 2</option>
                                    <option value="3">Grade 3</option>
                                    <option value="4">Grade 4</option>
                                    <option value="5">Grade 5</option>
                                    <option value="6">Grade 6</option>
                                </SelectInput>
                            </div>

                            {/* Crop Year */}
                            <div>
                                <TextInput
                                    label="Crop Year"
                                    name="crop_year"
                                    icon="fas fa-calendar"
                                    type="number"
                                    id="crop_year"
                                    errors={formData.errors}
                                    value={formData.data.crop_year}
                                    onChange={(e) =>
                                        formData.setData(
                                            "crop_year",
                                            e.target.value,
                                        )
                                    }
                                    placeholder={`Range : ${helpers.currentYear - 4} - ${helpers.currentYear}`}
                                />
                            </div>

                            {/* Altitude Range */}
                            <div>
                                <label className="block text-sm font-medium text-stone-700 mb-1.5">
                                    Height (mdpl)
                                </label>
                                <div className="grid grid-cols-2 gap-3">
                                    <TextInput
                                        name="altitude_min"
                                        RightText="mdpl"
                                        type="number"
                                        id="altitude_min"
                                        placeholder="Min"
                                        errors={formData.errors}
                                        value={formData.data.altitude_min}
                                        onChange={(e) =>
                                            formData.setData(
                                                "altitude_min",
                                                e.target.value,
                                            )
                                        }
                                    />
                                    <TextInput
                                        name="altitude_max"
                                        RightText="mdpl"
                                        type="number"
                                        id="altitude_max"
                                        placeholder="Max"
                                        errors={formData.errors}
                                        value={formData.data.altitude_max}
                                        onChange={(e) =>
                                            formData.setData(
                                                "altitude_max",
                                                e.target.value,
                                            )
                                        }
                                    />
                                </div>
                                <p className="text-xs text-stone-400 mt-1">
                                    Example: 1200 - 1600 mdpl
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Section: Stok & Harga */}
                    <div className="mb-8">
                        <h3 className="text-sm font-semibold text-amber-900 uppercase tracking-wider mb-4 flex items-center gap-2">
                            <i className="fas fa-boxes text-xs"></i>
                            Price
                        </h3>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                            {/* Price per KG */}
                            <div className="md:col-span-2">
                                <TextInput
                                    label="Price per Kg"
                                    name="price_per_kg"
                                    icon="fas fa-money-bill"
                                    type="number"
                                    id="price_per_kg"
                                    placeholder="0"
                                    errors={formData.errors}
                                    value={formData.data.price_per_kg}
                                    onChange={(e) =>
                                        formData.setData(
                                            "price_per_kg",
                                            e.target.value,
                                        )
                                    }
                                />
                            </div>
                        </div>
                    </div>
                    {/* Action Buttons */}
                    <div className="mt-8 flex flex-col sm:flex-row items-center gap-3 pt-6 border-t border-stone-200">
                        <button
                            type="reset"
                            className="w-full sm:w-auto px-6 py-2.5 border border-stone-300 text-stone-600 hover:bg-stone-50 text-sm font-medium rounded-lg transition-colors flex items-center justify-center gap-2 sm:ml-auto"
                        >
                            <i className="fas fa-undo text-xs"></i>
                            Reset Form
                        </button>
                        <SubmitButton
                            icon="fas fa-save"
                            loading={formData.processing}
                            className="sm:w-auto px-4"
                        >
                            Save Product
                        </SubmitButton>
                    </div>
                </form>
            </div>
        </div>
    );
};

Edit.layout = (page) => <AuthenticatedLayout children={page} />;

export default Edit;
