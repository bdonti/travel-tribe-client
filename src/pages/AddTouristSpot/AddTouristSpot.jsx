import { useContext, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import toast from "react-hot-toast";

const AddTouristSpot = () => {
  const [selectedSeason, setSelectedSeason] = useState("");
  const [selectedCountry, setSelectedCountry] = useState("");
  const { user } = useContext(AuthContext);
  const handleAddTouristSpot = (event) => {
    event.preventDefault();

    const form = event.target;
    const url = form.url.value;
    const touristsSpotName = form.tourists_spot_name.value;
    const countryName = form.country_name.value;
    const location = form.location.value;
    const description = form.description.value;
    const averageCost = form.avg_cost.value;
    const season = form.season.value;
    const travelTime = form.travel_time.value;
    const totalVisitors = form.total_visitors.value;
    const name = form.name.value;
    const email = form.email.value;

    const newTouristSpot = {
      url,
      touristsSpotName,
      countryName,
      location,
      description,
      averageCost,
      season,
      travelTime,
      totalVisitors,
      name,
      email,
    };
    console.log(newTouristSpot);

    fetch("http://localhost:5000/spots", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newTouristSpot),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          toast.success("Tourist Spot Added Successfully");
          form.reset();
        }
      });
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
                name="url"
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
              <select
                className="select select-bordered w-full max-w-xs"
                name="country_name"
                required
                value={selectedCountry}
                onChange={(e) => setSelectedCountry(e.target.value)}
              >
                <option disabled value="">
                  Pick Country
                </option>
                <option value="Italy">Italy</option>
                <option value="Spain">Spain</option>
                <option value="Greece">Greece</option>
                <option value="Czech Republic">Czech Republic</option>
                <option value="France">France</option>
                <option value="United Kingdom">United Kingdom</option>
                <option value="Germany">Germany</option>
                <option value="Netherlands">Netherlands</option>
              </select>
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
                type="email"
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
