import React from "react";
import Convertor from "./Convertor";

const InfoComp = ({ country }) => {
  return (
    <>
      <p>
        Name: <span id="capital">{country.name}</span>
      </p>
      <p>
        Capital: <span id="capital">{country.capital}</span>
      </p>
      <p>
        Population: <span id="population">{country.population}</span>
      </p>
      <p>
        Currencies: <span id="currencies">{country.currencies[0].name}</span>
      </p>
      <p>
        Currencies Code: <span id="region">{country.currencies[0].code}</span>
      </p>
    </>
  );
};

export default ({ result }) => (
  <>
    <div>{result !== "" ? <InfoComp country={result[0]} /> : ""}</div>
    <div>{result !== "" ? <Convertor result={result} /> : ""}</div>
  </>
);
