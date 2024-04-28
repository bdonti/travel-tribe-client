import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const SpotByCountry = ({ spot }) => {
  return (
    <div className="hero mb-5">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img src={spot.url} className="max-w-sm rounded-lg shadow-2xl" />
        <div>
          <div>
            <h1 className="text-5xl font-bold">{spot.touristsSpotName}</h1>
            <h1 className="text-2xl font-bold">{spot.countryName}</h1>
          </div>
          <h1 className="text-2xl font-bold">Region: {spot.location}</h1>
          <p className="py-6">{spot.description}</p>
          <div className="flex justify-center items-center gap-6 mb-6">
            <p>Average Cost: {spot.averageCost} pounds</p>
            <p>Seasonality: {spot.season}</p>
          </div>
          <Link to={`/touristSpot/${spot._id}`}>
            <button className="btn btn-primary">View Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

SpotByCountry.propTypes = {
  spot: PropTypes.object,
};

export default SpotByCountry;
