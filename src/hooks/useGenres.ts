import useData from "./useData";

//help us shaping our data in the form of our interfaces(type) props to pass data from parent component to child
export interface Genre {
  id: number;
  name: string;
  image_background: string

  }

export interface FetchGenreResponse {
  count: number;
  results: Genre[];
}


const useGenres = () => useData<Genre>('/genres');
  



export default useGenres;