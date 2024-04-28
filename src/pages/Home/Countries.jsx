import { useEffect, useState } from "react";
import Country from "./Country";

const Countries = () => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/countries")
      .then((res) => res.json())
      .then((data) => {
        setCountries(data);
      });
  }, []);

  return (
    <div>
      <h2 className="text-center font-bold text-4xl my-10">Countries</h2>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {countries.map((country) => (
          <Country key={country._id} country={country}></Country>
        ))}
      </div>
    </div>
  );
};

export default Countries;
