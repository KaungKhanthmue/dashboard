import { useState, useEffect } from "react";

const useApiGet = (url) => {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);

    const fetchDataGet = async () => {
        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error(`Error: ${response.statusText}`);
            }
            const data = await response.json();
            setData(data);
        } catch (err) {
            setError(err);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchDataGet();
    }, [url]);

    return {
        loading,
        data,
        error,
        refetch: fetchDataGet
    };
};

export default useApiGet;
