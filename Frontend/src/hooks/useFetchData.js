import React, { useEffect, useState } from "react";

const useFetchData = (url) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      fetch(url)
        .then((reponse) => {
          if (reponse.ok) {
            reponse.json().then((data) => {
              Array.isArray ? setData(data) : setData([data]);
              setIsLoading(false);
            });
          }
        })
        .catch((e) => console.log(e));
    };
    getData();
  }, []);

  return [data, setData, isLoading];
};

export default useFetchData;
