import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const TouristSpot = ({ spot }) => {
  const { url, touristsSpotName, location, averageCost, _id } = spot;
  return (
    <div className="card w-96 shadow-xl flex flex-col">
      <figure className="px-10 pt-10">
        <img src={url} alt="spots" className="rounded-xl w-full" />
      </figure>
      <div className="card-body text-center flex-grow flex flex-col justify-between">
        <div className="space-y-2">
          <h2 className="font-bold text-3xl text-[#298E8E]">
            {touristsSpotName}
          </h2>
          <h3 className="text-[#2E5F47]">{location}</h3>
          <h3 className="font-bold text-[#2E5F47]">{averageCost} $</h3>
        </div>
        <div className="card-actions mt-4 justify-center">
          <Link to={`/touristSpot/${_id}`}>
            <button className="btn btn-primary">View Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

TouristSpot.propTypes = {
  spot: PropTypes.object,
};

export default TouristSpot;
