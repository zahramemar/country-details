import React, { useState, useEffect } from "react";
import { getCountry } from "./utils";
import CountrySelect from "./Select";
import Info from "./Info";

export default function Components({ options }) {
  const [selectedOption, setSelectedOption] = useState("");
  const [detail, setDetail] = useState("");

  useEffect(() => {
    if (selectedOption !== "") {
      getCountry(selectedOption).then(setDetail);
    }
  }, [selectedOption]);

  return (
    <div id="main-container">
      {detail && (
        <div id="flag-container">
          <img src={detail[0].flag} alt="flag" />
        </div>
      )}
      <div id="info-container">
        <CountrySelect
          options={options}
          onChange={evt => setSelectedOption(evt.value)}
          value={selectedOption}
        />
        <Info result={detail} />
      </div>
    </div>
  );
}
