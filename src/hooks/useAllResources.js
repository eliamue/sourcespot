import { useEffect, useState } from "react";
import { fetchAllResources } from "../services/apiService";

export const useAllResources = () => {
  const [loading, setLoading] = useState(true);
  const [resources, setResources] = useState([]);

  useEffect(() => {
    fetchAllResources()
      .then((res) => setResources(res))
      .finally(() => setLoading(false));
  }, []);

  return { loading, resources };
};
