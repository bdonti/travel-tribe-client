import PropTypes from "prop-types";
import { Zoom } from "react-awesome-reveal";
import { Link } from "react-router-dom";

const Spot = ({ spot }) => {
  const { _id, url, touristsSpotName, averageCost, totalVisitors, season } =
    spot;
  return (
    <Zoom>
      <div className="card w-full shadow-xl image-full">
        <figure>
          <img src={url} alt="Tourist Spot" />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-4xl">{touristsSpotName}</h2>
          <div className="flex flex-col justify-center items-center mx-auto">
            <p className="font-bold text-2xl inline">Average Cost </p>
            <span className="font-semibold">{averageCost} £</span> <br />
            <p className="font-bold text-2xl inline">Total Visitor per year </p>
            <span className="font-semibold">{totalVisitors}</span> <br />
            <p className="font-bold text-2xl inline">Seasonality </p>
            <span className="mb-2 font-semibold">{season}</span>
          </div>
          <div className="card-actions justify-center">
            <Link to={`/touristSpot/${_id}`}>
              <button className="btn btn-primary">View Details</button>
            </Link>
          </div>
        </div>
      </div>
    </Zoom>
  );
};

Spot.propTypes = {
  spot: PropTypes.object,
};

export default Spot;
