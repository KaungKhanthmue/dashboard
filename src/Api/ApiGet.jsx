import axios from "axios";
import { useState, useEffect } from "react";

const useApiGet = (url) => {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);

    const fetchDataGet = async () => {
        try {
            const token = localStorage.getItem('ACCESS_TOKEN');
            const response = await axios.get(url, {
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json'
                }
            });
            const data = response.data;
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
