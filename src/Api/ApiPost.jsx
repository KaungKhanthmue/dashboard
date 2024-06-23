import { useState } from "react";

const useApiPost = (url) => {
    const [dataform, setDataForm] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    const fetchData = async (form) => {
        setLoading(true);
        setError(null);
        
        try {
            const response = await fetch(url, {
                method: "POST",
                headers: {
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
