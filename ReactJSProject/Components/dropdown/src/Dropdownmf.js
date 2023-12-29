import React, { useEffect, useState } from "react";

export default function Dropdownmf() {
  const data = [
    {
      name: "Vegetables",
      items: ["Bendi", "LadyFingers", "Bengan"],
    },
    {
      name: "Vehicles",
      items: ["Pulser", "Shift"],
    },
    {
      name: "Courses",
      items: ["Java", "React js", "Node js"],
    },
  ];

  const [info, setinfo] = useState("");
  const [veg, setveg] = useState("");
  const [vehicle, setvehicle] = useState("");
  const [course, setcourse] = useState("");
  let loadinfo = "";

  const onpump = (e) => {
    loadinfo = data.find((s) => s.name === e.target.value).name;

    console.log("The loaded values are " + loadinfo);

    if (loadinfo == "Vegetables")
      setveg(data.find((s) => s.name === e.target.value).items);
    if (loadinfo == "Vehicles")
      setvehicle(data.find((s) => s.name === e.target.value).items);
    if (loadinfo == "Courses")
      setcourse(data.find((s) => s.name === e.target.value).items);

    setinfo(loadinfo);
  };

  // console.log("The vegetables values are " + veg);
  //console.log("The vehicles values are " + vehicle);
  //console.log("The course values are " + course);

  return (
    <div>
      <div>
        <select name="stores" onChange={onpump}>
          <option>Vegetables</option>
          <option>Vehicles</option>
          <option>Courses</option>
        </select>
      </div>
      <div>
        <label>Vegetables : </label>
        <select name="vegetables" value={veg}>
          {veg && veg.map((result) => <option value={result}>{result}</option>)}
        </select>
      </div>
      <div>
        <label>Vehicles : </label>
        <select name="Vehicles" value={vehicle}>
          {vehicle &&
            vehicle.map((vres) => <option value={vres}>{vres}</option>)}
        </select>
      </div>
      <div>
        <label>Technology: </label>
        <select name="Technology" value={course}>
          {course && course.map((cres) => <option value={cres}>{cres}</option>)}
        </select>
      </div>
    </div>
  );
}
