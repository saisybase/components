import React, { useEffect, useState } from "react";

export default function DropdownMapFilter() {
  const [countryval, setcountry] = useState("");
  const [cityval, setcity] = useState("");

  const [info, setinfo] = useState("");

  const setloadd = (e) => {
    setcountry(e.target.value);
    const countries = data.find((s) => s.country === e.target.value);
    //setcity(country.find(s => s.country.name === e.target.value).city);
    //console.log("All counties list " + countries.city);
    setcity(countries.city);
    console.log("All ciyyval counties list " + cityval);
  };

  const data = [
    { country: "India", city: ["Mumbai", "Delhi", "Pune"] },
    {
      country: "America",
      city: ["SanFrancisco", "denvar", "NewYork"],
    },
    {
      country: "ENGLAND",
      city: ["London", "Nottingham", "Derby"],
    },
  ];

  return (
    <div className="card">
      <select name="con" value={data.country} onChange={setloadd}>
        {data.map((result) => (
          <option key={result.country}>{result.country}</option>
        ))}
      </select>
      <div className="card">
        <select name="cit" value={cityval}>
          <option>--Option1---</option>
          {cityval && cityval.map((res) => <option value={res}>{res}</option>)}
        </select>
      </div>
    </div>
  );
}
