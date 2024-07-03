import { useEffect, useState } from "react";
import apiClient from "../services/apiClient";
import { CanceledError } from "axios";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

//help us shaping our data in the form of our interfaces(type) props to pass data from parent component to child
export interface Genre {
  id: number;
  name: string;
}

export interface FetchGenreResponse {
  count: number;
  results: Genre[];
}

const useGenre = () => {
  //We need our useStates to help us render update our UI with our games and others
  const [genre, setGenre] = useState<Genre[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  //Create a helper function to help us fetch our code

  ///UseEffect to fetch our data

  useEffect(() => {
    //We need an instance of AbortController() to help us unsubscribe to the api, we are going to save it variable
    const controller = new AbortController();
    setIsLoading(true);

    apiClient
      .get<FetchGenreResponse>("/genres", { signal: controller.signal })
      .then((response) => {
        setIsLoading(false);
        setGenre(response.data.results);
      })
      .catch((error) => {
        if (error instanceof CanceledError) return;
        setIsLoading(true);
        setError(error.message);
        setIsLoading(false);
      });

    return () => controller.abort();
  }, []);

  return { genre, error, isLoading };
};

export default useGenre;
