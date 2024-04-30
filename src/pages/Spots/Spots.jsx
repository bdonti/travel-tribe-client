import { useLoaderData } from "react-router-dom";
import Spot from "../Spot/Spot";
import { useState } from "react";

const Spots = () => {
  const spots = useLoaderData();
  const [sortedSpots, setSortedSpots] = useState(spots);

  const handleAscendingOrder = () => {
    const sorted = [...sortedSpots].sort(
      (a, b) => a.averageCost - b.averageCost
    );
    setSortedSpots(sorted);
  };

  const handleDescendingOrder = () => {
    const sorted = [...sortedSpots].sort(
      (a, b) => b.averageCost - a.averageCost
    );
    setSortedSpots(sorted);
  };

  return (
    <div>
      <div className="flex justify-center mb-5">
        <details className="dropdown">
          <summary className="m-1 btn">Sort by Average Cost</summary>
          <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
            <li>
              <button onClick={handleAscendingOrder} className="btn">
                Low to High
              </button>
            </li>
            <li>
              <button onClick={handleDescendingOrder} className="btn">
                High to Low
              </button>
            </li>
          </ul>
        </details>
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
