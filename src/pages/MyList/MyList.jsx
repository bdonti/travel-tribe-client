import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { useLoaderData } from "react-router-dom";
import toast from "react-hot-toast";

const MyList = () => {
  const { user } = useContext(AuthContext);
  const loadedSpots = useLoaderData();
  // const spots = loadedSpots.filter((spots) => spots.email === user.email);
  const [selectedSeason, setSelectedSeason] = useState("");
  const [spots, setSpots] = useState([]);

  const handleUpdateClick = (spotId) => {
    document.getElementById(`update_modal_${spotId}`).showModal();
  };
  const handleUpdateTouristSpot = (event, spotId) => {
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

    const updateTouristSpot = {
      url,
      touristsSpotName,
      countryName,
      location,
      description,
      averageCost,
      season,
      travelTime,
      totalVisitors,
    };

    const isModified = Object.keys(updateTouristSpot).every(
      (key) =>
        updateTouristSpot[key] ===
        spots.find((spot) => spot._id === spotId)[key]
    );
    if (isModified) {
      toast.error("Please Update Something");
      return;
    }

    fetch(`http://localhost:5000/spots/${spotId}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updateTouristSpot),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          const updatedSpots = spots.map((spot) =>
            spot._id === spotId ? { ...spot, ...updateTouristSpot } : spot
          );
          setSpots(updatedSpots);
          toast.success("Tourist Spot Updated Successfully");
        }
      });
  };

  if (loadedSpots && loadedSpots.length > 0 && user) {
    const filteredSpots = loadedSpots.filter(
      (spot) => spot.email === user.email
    );
    if (filteredSpots.length !== spots.length) {
      setSpots(filteredSpots);
    }
  }

  useEffect(() => {
    if (spots.length > 0) {
      setSelectedSeason(spots[0].season);
    }
  }, [spots]);

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
                        onSubmit={(e) => handleUpdateTouristSpot(e, spot._id)}
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
                              {spot.season}
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
