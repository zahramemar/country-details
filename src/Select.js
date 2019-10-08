import React from "react";
import Select from "react-select";

export default function CountrySelect({ options, onChange, value }) {
  console.log("option", options, "value", value);
  return (
    <Select
      placeholder="Choose country"
      value={value}
      onChange={onChange}
      options={options}
    />
  );
}
