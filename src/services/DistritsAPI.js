import { useState, useEffect } from "react";

const DistritsAPI = () => {
  const [distritsData, setDistritsData] = useState({});

  const baseUrl = `https://api.ipma.pt/open-data/distrits-islands`;

  useEffect(() => {
    fetch(`${baseUrl}`)
      .then((response) => response.json())
      .then((distritsData) => setDistritsData(distritsData));
  }, [baseUrl]);

  return {
    distritsData,
  };
};

export default DistritsAPI;
