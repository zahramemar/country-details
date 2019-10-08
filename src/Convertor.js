import React, { useState, useEffect } from "react";
import { countriesCur } from "./utils";

const convert = (value, { rates }, currency) =>
  (value / rates.SEK) * rates[currency];

export default function Convertor({ result }) {
  const [currency, setCurrency] = useState(0);
  const [converted, setConverted] = useState(0);
  const [currencies, setCurrencies] = useState("");
  const [value, setValue] = useState(0);

  useEffect(() => {
    const setup = async () => setCurrencies(await countriesCur());
    setup();
    if (result !== "") setCurrency(result[0].currencies[0].code);
  }, [result]);

  return (
    <>
      <input
        placeholder="inter in SEK"
        type="number"
        value={value}
        onChange={e => setValue(e.target.value)}
      />
      <button
        type="button"
        onClick={() => setConverted(convert(value, currencies, currency))}
      >
        convert
      </button>
      <span>{converted}</span>
    </>
  );
}
