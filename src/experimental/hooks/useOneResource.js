import { useEffect, useState } from "react";
import { fetchOneResource } from "../services/apiService";

export const useOneResource = (id) => {
  const [loading, setLoading] = useState(true);
  const [resource, setResource] = useState({});

  useEffect(() => {
    fetchOneResource(id)
      .then((res) => setResource(res))
      .finally(() => setLoading(false));
  }, [id]);

  return { loading, resource };
};
