import { router } from "@inertiajs/react";
import { debounce, replace } from "lodash";
import { useCallback, useState } from "react";
import { route } from "ziggy-js";

export function useSearch(filter) {
    const [search, setSearch] = useState(filter?.search || "");
    const [species, setSpecies] = useState(filter?.species || "");
    const [grade, setGrade] = useState(filter?.grade || "");

    const requestSearch = useCallback(
        debounce((query) => {
            router.get(
                route("beans.index"),
                { search: query, species: species, grade: grade},
                { preserveState: true, replace: true, only: ["beans"] },
            );
        }, 500),
        [],
    );

    const handleSearchChange = (e) => {
        const value = e.target.value;

        setSearch(value);

        requestSearch(value);
    };

    const handleSpeciesFilter = (e) => {
        const value = e.target.value;
        setSpecies(value);

        router.get(
            route("beans.index"),
            { search: search, species: value, grade: grade },
            { preserveState: true, replace: true, only: ["beans"] },
        );
    };

    const handleGradeFilter = (e) => {
        const value = e.target.value;
        setGrade(value);

        router.get(
            route("beans.index"),
            { search: search, species: species, grade: value },
            { preserveState: true, replace: true, only: ["beans"] },
        );
    };

    // active filter
    const activeFilter = [
        search && {
            key: "search",
            label: search,
        },
        species && {
            key: "species",
            label: species,
        },
        grade && {
            key: "grade",
            label: "Grade: " + grade,
        },
    ].filter(Boolean);

    // remove filter
    const removeFilter = (key) => {
        let newSearch = search;
        let newSpecies = species;
        let newGrade = grade;

        if (key === "search") {
            newSearch = "";
            setSearch("");
        }
        if (key === "species") {
            newSpecies = "";
            setSpecies("");
        }
        if (key === "grade") {
            newGrade = "";
            setGrade("");
        }

        router.get(
            route("beans.index"),
            {
                search: newSearch,
                species: newSpecies,
                grade: newGrade,
            },
            {
                preserveState: true,
                replace: true,
                only: ["beans"],
            },
        );
    };

    // clear all filter
    const clearAllFilters = () => {
        setSearch("");
        setSpecies("");
        setGrade("")

        router.get(
            route("beans.index"),
            {},
            {
                preserveState: true,
                replace: true,
                only: ["beans"],
            },
        );
    };

    return {
        search,
        species,
        grade,
        activeFilter,
        clearAllFilters,
        removeFilter,
        handleSearchChange,
        handleSpeciesFilter,
        handleGradeFilter
    };
}
