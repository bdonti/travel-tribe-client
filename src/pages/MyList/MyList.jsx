import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { useLoaderData } from "react-router-dom";

const MyList = () => {
  const { user } = useContext(AuthContext);
  const loadedSpots = useLoaderData();

  const spots = loadedSpots.filter((spots) => spots.email === user.email);
  console.log(spots);
  return (
    <div className="overflow-x-auto">
      <table className="table">
        {/* head */}
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
          {/* row 1 */}
          {spots.map((spot) => (
            <tr key={spot._id}>
              <td>
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img src={spot.url} alt="Avatar Tailwind CSS Component" />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">{spot.touristsSpotName}</div>
                    <div className="text-sm opacity-50">{spot.countryName}</div>
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
                <button className="btn btn-info btn-xs">Update</button>
              </th>
              <th>
                <button className="btn btn-warning btn-xs">Delete</button>
              </th>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyList;
