import { useState, useEffect, useCallback } from "react";

export const useFetch = (url, data, setData) => {
  const [loading, setLoading] = useState(null);
  const [error, setError] = useState(null);

  const fetchData = useCallback(async () => {
    setLoading(true);
    try {
      const response = await fetch(url);
      const { data, message } = await response.json();
      if (message) {
        setError(message);
        setLoading(false);
        return;
      }
      setLoading(false);
      setData(data);
      setError(null);
    } catch (error) {
      setLoading(false);
      setError(`Could not fetch data `);
      console.log(error);
    }
  }, []);

  useEffect(() => {
    if (data.length < 1) {
      fetchData();
    }
  }, [url]);

  return { loading, error };
};
