import { apiUrl } from "../config.json";
import { useEffect, useState } from "react";

const useHome = () => {
  const [characters, setCharacters] = useState([]);
  const [deaths, setDeaths] = useState([]);
  const [count, setCount] = useState([]);
  const urlCharacter = apiUrl + "characters?limit=6&offset=1";
  const urlDeaths = apiUrl + "deaths?limit=5";
  const urlCounts = apiUrl + "death-count";

  useEffect(() => {
    const getCharacters = async () => {
      const api = await fetch(urlCharacter);
      const res = await api.json();
      setCharacters(res);
    };
    getCharacters();
  }, []);

  useEffect(() => {
    const getDeaths = async () => {
      const api = await fetch(urlDeaths);
      const res = await api.json();
      setDeaths(res.slice(0, 3));
      console.log(res);
      const c = await fetch(urlCounts);
      const resc = await c.json();
      setCount(resc[0].deathCount);
    };
    getDeaths();
  }, []);

  return {
    characters,
    deaths,
    count
  };
};

export default useHome;
