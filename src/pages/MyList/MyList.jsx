import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { useLoaderData } from "react-router-dom";

const MyList = () => {
  const { user } = useContext(AuthContext);
  const loadedSpots = useLoaderData();
  const spots = loadedSpots.filter((spots) => spots.email === user.email);
  const [selectedSeason, setSelectedSeason] = useState("");

  const handleUpdateClick = (spotId) => {
    document.getElementById(`update_modal_${spotId}`).showModal();
  };
  const handleUpdateTouristSpot = () => {};

  return (
    <div className="flex justify-center items-center mt-10">
      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr>
              <th>Tourist Spot Name</th>
              <th>Average Cost</th>
              <th>Total Visitors Per Year</th>
              <th>Seasonality</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {spots.map((spot) => (
              <tr key={spot._id}>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src={spot.url}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{spot.touristsSpotName}</div>
                      <div className="text-sm opacity-50">
                        {spot.countryName}
                      </div>
                    </div>
                  </div>
                </td>
                <td>
                  <p>{spot.averageCost} £</p>
                </td>
                <td>
                  <p>{spot.totalVisitors} £</p>
                </td>
                <td>
                  <p>{spot.season}</p>
                </td>
                <th>
                  <button
                    className="btn btn-info btn-xs"
                    onClick={() => handleUpdateClick(spot._id)}
                  >
                    Update
                  </button>
                  <dialog
                    id={`update_modal_${spot._id}`}
                    className="modal modal-bottom sm:modal-middle"
                  >
                    <div className="modal-box">
                      <div className="flex justify-between">
                        <h3 className="font-bold text-lg py-4">Update</h3>
                        <form method="dialog">
                          <button className="btn">X</button>
                        </form>
                      </div>
                      <form
                        onSubmit={handleUpdateTouristSpot}
                        className="card-body"
                      >
                        <div className="form-control">
                          <label className="label">
                            <span className="label-text">Image URL</span>
                          </label>
                          <input
                            type="text"
                            placeholder="Image URL"
                            className="input input-bordered"
                            name="url"
                            defaultValue={spot.url}
                          />
                        </div>
                        <div className="form-control">
                          <label className="label">
                            <span className="label-text">
                              Tourists Spot Name
                            </span>
                          </label>
                          <input
                            type="text"
                            placeholder="Tourists Spot Name"
                            className="input input-bordered"
                            name="tourists_spot_name"
                            defaultValue={spot.touristsSpotName}
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
                            defaultValue={spot.countryName}
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
                            defaultValue={spot.location}
                          />
                        </div>
                        <div className="form-control">
                          <label className="label">
                            <span className="label-text">
                              Short Description
                            </span>
                          </label>
                          <textarea
                            type="text"
                            placeholder="Description"
                            className="textarea textarea-bordered textarea-md w-full max-w-xs"
                            name="description"
                            defaultValue={spot.description}
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
                            defaultValue={spot.averageCost}
                          />
                        </div>
                        <div className="form-control">
                          <label className="label">
                            <span className="label-text">Seasonality</span>
                          </label>
                          <select
                            className="select select-bordered w-full max-w-xs"
                            name="season"
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
                            defaultValue={spot.travelTime}
                          />
                        </div>
                        <div className="form-control">
                          <label className="label">
                            <span className="label-text">
                              Total Visitors Per Year
                            </span>
                          </label>
                          <input
                            type="number"
                            placeholder="Total Visitors"
                            className="input input-bordered"
                            name="total_visitors"
                            defaultValue={spot.totalVisitors}
                          />
                        </div>
                        <div className="form-control mt-6">
                          <button className="btn btn-primary">Update</button>
                        </div>
                      </form>
                      <div className="modal-action"></div>
                    </div>
                  </dialog>
                </th>
                <th>
                  <button className="btn btn-warning btn-xs">Delete</button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyList;
