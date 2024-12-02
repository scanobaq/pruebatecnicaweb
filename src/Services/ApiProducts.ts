import { useFetchGet } from "../hooks/useFetchGet";
import { FetchApiInterface } from "../Interfaces/FetchApiInterface";
import { Product } from "../Interfaces/ProductInterface";

export const FetchApi = ({ url, method, body, headers }: FetchApiInterface) => {
  const data = useFetchGet({ url, method, body, headers }) as Product[];

  try {
    if (!data) {
      return [] as Product[];
    }
    return data;
  } catch (error) {
    console.error("Error in FetchApi:", error);
    throw error;
  }
};
