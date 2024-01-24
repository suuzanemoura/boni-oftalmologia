import { useState } from "react";

export const useRequestData = () => {
  const [isLoading, setIsLoading] = useState(false);

  const requestData = async (path) => {
    try {
      setIsLoading(true);
      const data = await fetch(path).then((res) => res.json());
      setIsLoading(false);
      return data;
    } catch (error) {
      setIsLoading(false);
      return error.response;
    }
  };
  return { isLoading, requestData };
};
