import { router } from "@inertiajs/react";
import { debounce, replace } from "lodash";
import { useCallback, useState } from "react";

export function useSearch( filter ) {
    const [search, setSearch] = useState(filter?.search || '');

    const requestSearch = useCallback(
        debounce((query) => {
            router.get(
                route('beans.index'),
                { search: query },
                { preserveState: true, replace: true, only: ["beans"] },
            );
        }, 500),
        []
    );

    const handleSearchChange = (e) => {
        const value = e.target.value;

        setSearch(value);

        requestSearch(value)
    }

    return { search, handleSearchChange };
}
