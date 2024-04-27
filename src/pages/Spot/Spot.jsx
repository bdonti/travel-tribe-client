import PropTypes from "prop-types";

const Spot = ({ spot }) => {
  const { url, touristsSpotName, averageCost, totalVisitors, season } = spot;
  return (
    <div className="card w-full shadow-xl image-full">
      <figure>
        <img src={url} alt="Tourist Spot" />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-4xl">{touristsSpotName}</h2>
        <div className="flex flex-col justify-center">
          <p className="font-bold text-2xl inline">Average Cost </p>
          <span>{averageCost}</span> <br />
          <p className="font-bold text-2xl inline">Total Visitor per year </p>
          <span>{totalVisitors}</span> <br />
          <p className="font-bold text-2xl inline">Seasonality </p>
          <span>{season}</span>
        </div>
        <div className="card-actions justify-center">
          <button className="btn btn-primary">View Details</button>
        </div>
      </div>
    </div>
  );
};

Spot.propTypes = {
  spot: PropTypes.object,
};

export default Spot;
