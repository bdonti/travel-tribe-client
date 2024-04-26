import { useContext, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";

const AddTouristSpot = () => {
  const [selectedSeason, setSelectedSeason] = useState("");
  const { user } = useContext(AuthContext);
  const handleAddTouristSpot = (event) => {
    event.preventDefault();
  };
  return (
    <div className="hero">
      <div className="hero-content w-full">
        <div className="card w-full max-w-sm shadow-2xl">
          <form onSubmit={handleAddTouristSpot} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Image URL</span>
              </label>
              <input
                type="text"
                placeholder="Image URL"
                className="input input-bordered"
                name="name"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Tourists Spot Name</span>
              </label>
              <input
                type="text"
                placeholder="Tourists Spot Name"
                className="input input-bordered"
                name="tourists_spot_name"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Country Name</span>
              </label>
              <input
                type="text"
                placeholder="Country Name"
                className="input input-bordered"
                name="country_name"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Location</span>
              </label>
              <input
                type="text"
                placeholder="Location"
                className="input input-bordered"
                name="location"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Short Description</span>
              </label>
              <textarea
                type="text"
                placeholder="Description"
                className="textarea textarea-bordered textarea-md w-full max-w-xs"
                name="description"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Average Cost</span>
              </label>
              <input
                type="number"
                placeholder="Average Cost"
                className="input input-bordered"
                name="avg_cost"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Seasonality</span>
              </label>
              <select
                className="select select-bordered w-full max-w-xs"
                name="season"
                required
                value={selectedSeason}
                onChange={(e) => setSelectedSeason(e.target.value)}
              >
                <option disabled value="">
                  Pick Season
                </option>
                <option value="Winter">Winter</option>
                <option value="Spring">Spring</option>
                <option value="Summer">Summer</option>
                <option value="Autumn">Autumn</option>
              </select>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Travel Time</span>
              </label>
              <input
                type="number"
                placeholder="Travel Time (in days)"
                className="input input-bordered"
                name="travel_time"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Total Visitors Per Year</span>
              </label>
              <input
                type="number"
                placeholder="Total Visitors"
                className="input input-bordered"
                name="total_visitors"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">User Email</span>
              </label>
              <input
                type="text"
                placeholder="User Email"
                className="input input-bordered"
                name="email"
                defaultValue={user?.email}
                disabled
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">User Name</span>
              </label>
              <input
                type="text"
                placeholder="User Name"
                className="input input-bordered"
                name="name"
                defaultValue={user?.displayName}
                disabled
                required
              />
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Add Tourist Spot</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddTouristSpot;
