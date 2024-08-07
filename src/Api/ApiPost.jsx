import { useState } from "react";

const useApiPost = (url) => {
    const [dataform, setDataForm] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    const fetchData = async (form) => {
        setLoading(true);
        setError(null);
    const token = localStorage.getItem('ACCESS_TOKEN');
        try {
            const response = await fetch(url, {
                method: "POST",
                headers: {
                    'Authorization': `Bearer ${token}`,
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(form),
            });
            const result = await response.json();
            setDataForm(result);
        } catch (error) {
            setError(error);
        } finally {
            setLoading(false);
        }
    };

    return {
        dataform,
        error,
        loading,
        fetchData,
    };
};

export default useApiPost;
