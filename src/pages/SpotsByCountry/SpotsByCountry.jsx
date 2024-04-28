import { useLoaderData } from "react-router-dom";
import SpotByCountry from "../SpotByCountry/SpotByCountry";

const SpotsByCountry = () => {
  const country = useLoaderData();
  const spots = country.spots;
  console.log(country);
  return (
    <div className="text-center font-bold mt-5">
      {spots.map((spot) => (
        <SpotByCountry key={spot._id} spot={spot}></SpotByCountry>
      ))}
    </div>
  );
};

export default SpotsByCountry;
