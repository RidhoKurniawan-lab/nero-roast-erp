import { router } from "@inertiajs/react";
import { debounce } from "lodash";
import { useCallback, useState } from "react";
import { route } from "ziggy-js";

export function useSearch(initialFilter) {
    const [filters, setFilters] = useState({
        search: initialFilter?.search || "",
        species: initialFilter?.species || "",
        grade: initialFilter?.grade || "",
    });
    const applySearch = useCallback(
        debounce((newFilters) => {
            router.get(route("beans.index"), newFilters, {
                preserveState: true,
                replace: true,
                only: ["beans"],
            });
        }, 500),
        [],
    );

    const applyFilter = (newFilters) => {
        router.get(route("beans.index"), newFilters, {
            preserveState: true,
            replace: true,
            only: ["beans"],
        });
    };

    const updateFilter = (key, value, isSearch = false) => {
        const newFilters = {...filters, [key]: value};
        setFilters(newFilters);

        if (isSearch) {
            applySearch(newFilters);
        } else {
            applyFilter(newFilters);
        }
    }

    const handleSearchChange = (e) => updateFilter("search", e.target.value, true);
    const handleSpeciesChange = (e) => updateFilter("species", e.target.value);
    const handleGradeChange = (e) => updateFilter("grade", e.target.value);

    const activeFilter = Object.keys(filters)
        .filter((key) => filters[key])
        .map((key) => ({
            key,
            label: key === "grade" ? `Grade: ${filters[key]}` : filters[key]
        }));

    const removeFilter = (key) => {
        updateFilter(key, "")
    }

    const clearAllFilters = () => {
        const resetFilter = { search: "", species: "", variety: ""}
        setFilters(resetFilter);
        applySearch(resetFilter);
    }

    return {
        ...filters,
        activeFilter,
        clearAllFilters,
        removeFilter,
        handleSearchChange,
        handleSpeciesChange,
        handleGradeChange,
    };
}
