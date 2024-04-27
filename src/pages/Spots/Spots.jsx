import { useLoaderData } from "react-router-dom";
import Spot from "../Spot/Spot";

const Spots = () => {
  const spots = useLoaderData();
  return (
    <div>
      <h1>Total Spots: {spots.length}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {spots.map((spot) => (
          <Spot key={spot._id} spot={spot}></Spot>
        ))}
      </div>
    </div>
  );
};

export default Spots;
