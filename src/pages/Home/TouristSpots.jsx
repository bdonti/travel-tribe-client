import { useEffect, useState } from "react";
import TouristSpot from "./TouristSpot";

const TouristSpots = () => {
  const [spots, setSpots] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/spots")
      .then((res) => res.json())
      .then((data) => {
        setSpots(data);
      });
  }, []);

  const sixSpots = spots.slice(0, 6);

  return (
    <div>
      <h2 className="text-center font-bold text-4xl mt-10">Tourist Spots</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {sixSpots.map((spot) => (
          <TouristSpot key={spot._id} spot={spot}></TouristSpot>
        ))}
      </div>
    </div>
  );
};

export default TouristSpots;
