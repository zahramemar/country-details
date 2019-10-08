export const getData = () =>
  fetch("https://restcountries.eu/rest/v2/all?fields=name").then(response =>
    response.json()
  );

export const countriesCur = () =>
  fetch(
    "http://data.fixer.io/api/latest?access_key=fd72675d4068f1f2d06f07a33c0dda5f"
  ).then(response => response.json());

export const getCountry = name =>
  fetch(
    "https://restcountries.eu/rest/v2/name/" + name + "?fullText=true"
  ).then(response => response.json());
