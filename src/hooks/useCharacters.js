import { apiUrl } from "../config.json";
import { useEffect, useState } from "react";

const useCharacters = () => {
  const [characters, setCharacters] = useState([]);
  const url = apiUrl + "characters?limit=6&offset=1";
  useEffect(() => {
    const getCharacters = async () => {
      const api = await fetch(url);
      const res = await api.json();
      setCharacters(res);
    };
    getCharacters();
  }, []);
  return {
    characters
  };
};

export default useCharacters;
