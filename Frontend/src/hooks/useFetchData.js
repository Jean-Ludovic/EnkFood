import { useEffect, useState } from "react";

const useFetchData = (url) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch(url);

        if (!response.ok) {
          console.error("Erreur HTTP:", response.status, response.statusText);
          setIsLoading(false);
          return;
        }

        const json = await response.json();
        console.log("Réponse API:", json);

        // Ton backend renvoie { data: [...] }
        const value = json.data ?? json;

        setData(Array.isArray(value) ? value : [value]);
      } catch (error) {
        console.error("Erreur réseau:", error);
      } finally {
        setIsLoading(false);
      }
    };

    getData();
  }, [url]);

  return [data, setData, isLoading];
};

export default useFetchData;
