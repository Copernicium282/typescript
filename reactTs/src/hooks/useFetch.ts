import { useState, useEffect } from "react";

interface FetchState<T> {
    data: T | null;
    loading: boolean;
    error: string | null;
}

export function useFetch<T>(url: string): FetchState<T> {
    const [state, setState] = useState<FetchState<T>>({
        data: null,
        loading: true,
        error: null,
    });

    useEffect(() => {
        const abortController = new AbortController();

        const fetchData = async () => {
            try {
                const response = await fetch(url, { signal: abortController.signal });
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const data = (await response.json()) as T;
                setState({ data, loading: false, error: null });
            } catch (error) {
                if (error instanceof Error) {
                    if (error.name === "AbortError") return;
                    setState({ data: null, loading: false, error: error.message });
                }
            }
        };

        fetchData();

        return () => abortController.abort();
    }, [url]);

    return state;
}