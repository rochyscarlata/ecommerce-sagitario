import React, { useState, useEffect } from "react";

const PaisesContainer = () => {
  const [paises, setPaises] = useState([]);

  useEffect(() => {
    const url = "https://restcountries.eu/rest/v2/all";

    fetch(url)
      .then((response) => response.json())
      .then((paisesJson) => setPaises(paisesJson))
      .catch((err) => console.log(err)); 

  }, []);


  return paises.map((item, index) => (
    <option key={index}>{item.name}</option>
  ));
};

export default PaisesContainer;
