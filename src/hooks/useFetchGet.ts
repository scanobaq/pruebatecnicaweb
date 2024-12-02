import { useEffect, useState } from "react";
import { FetchApiInterface } from "../Interfaces/FetchApiInterface";
export const useFetchGet = ({
  url,
  method,
  body,
  headers,
}: FetchApiInterface) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url, { method, body, headers });
        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }
        const data = await response.json();
        setData(data);
      } catch (error) {
        console.error("Error fetching products:", error);
        throw error;
      }
    };
    fetchData();
  }, []);

  return data;
};
