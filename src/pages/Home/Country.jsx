import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Country = ({ country }) => {
  return (
    <Link to={`/spotsByCountry/${country.countryName}`}>
      <div className="card w-full h-72 shadow-xl image-full">
        <figure>
          <img src={country.image} alt="Country" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{country.countryName}</h2>
          <p className="font-bold text-white">{country.description}</p>
        </div>
      </div>
    </Link>
  );
};

Country.propTypes = {
  country: PropTypes.object,
};

export default Country;
