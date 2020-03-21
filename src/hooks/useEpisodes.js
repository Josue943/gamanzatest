import { apiUrl } from "../config.json";
import { useEffect, useState } from "react";

const useEpisodes = () => {
  const [episodes, setEpisodes] = useState([]);
  const urlCharacter = apiUrl + "episodes?limit=6&offset=1";
  useEffect(() => {
    const getEpisodes = async () => {
      const api = await fetch(urlCharacter);
      const res = await api.json();
      setEpisodes(res.slice(0, 8));
    };
    getEpisodes();
  }, []);
  return {
    episodes
  };
};

export default useEpisodes;
