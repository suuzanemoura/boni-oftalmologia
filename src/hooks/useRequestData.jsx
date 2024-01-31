"use client";

import { useEffect, useState } from "react";

export const useRequestData = (path) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);

  const requestData = async (path) => {
    try {
      setIsLoading(true);
      const response = await fetch(path, { cache: "no-store" }).then((res) =>
        res.json(),
      );
      setData(response);
      setIsLoading(false);
      setLoaded(true);
    } catch (error) {
      setError(true);
    }
  };

  useEffect(() => {
    requestData(path);
  }, [path]);

  return [data, isLoading, loaded, error];
};
