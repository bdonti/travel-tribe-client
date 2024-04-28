import { useLoaderData } from "react-router-dom";
import Spot from "../Spot/Spot";
import { useState } from "react";

const Spots = () => {
  const spots = useLoaderData();

  const [sortByAverageCost, setSortByAverageCost] = useState(false);

  const handleSortByAverageCost = () => {
    setSortByAverageCost(!sortByAverageCost);
  };

  let sortedSpots = [...spots];

  if (sortByAverageCost) {
    sortedSpots.sort((a, b) => a.averageCost - b.averageCost);
  }

  return (
    <div>
      <div className="flex justify-center mb-5">
        <button className="btn btn-accent" onClick={handleSortByAverageCost}>
          {sortByAverageCost ? "Show Original Data" : "Sort By Average Cost"}
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {sortedSpots.map((spot) => (
          <Spot key={spot._id} spot={spot}></Spot>
        ))}
      </div>
    </div>
  );
};

export default Spots;
