import React, { useState, useEffect } from "react";
import "./App.css";
import ReactDOM from "react-dom";
import { getData } from "./utils";
import Components from "./Components-ui";

export default function App() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const data = await getData();
      const options = data.map(obj => ({
        value: obj.name,
        label: obj.name
      }));

      setCountries(options);
    }
    fetchData();
  }, []);

  return (
    <div className="App" id="main-container">
      <Components options={countries} />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
