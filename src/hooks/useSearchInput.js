import { useEffect, useState } from "react";
import { fetchAllResources } from "../services/apiService";

export const useAllResources = () => {
  const [loading, setLoading] = useState(true);
  const [searchInput, setSearchInput] = useState([]);

  useEffect(() => {
    fetchAllResources()
      .then((res) => setSearchInput(res))
      .finally(() => setLoading(false));
  }, []);

  return { loading, searchInput };
};
