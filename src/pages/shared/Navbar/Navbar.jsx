import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";

const Navbar = () => {
  const { user, logOut, loading } = useContext(AuthContext);
  const handleMouseEnter = (event) => {
    if (user) {
      event.target.title = user.displayName;
    }
  };

  const handleMouseLeave = (event) => {
    event.target.title = "";
  };
  const items = (
    <div className="space-x-2 flex flex-col md:flex-row">
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/viewTouristSpot">All Tourist Spot</NavLink>
      </li>
      <li>
        <NavLink to="/addTouristSpot">Add Tourist Spot</NavLink>
      </li>
      <li>
        <NavLink to="/myList">My List</NavLink>
      </li>
    </div>
  );

  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {items}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">Travel Tribe</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{items}</ul>
      </div>
      <div className="navbar-end">
        {loading ? (
          <span className="loading loading-ring loading-lg font-bold"></span>
        ) : user ? (
          <>
            <div className="flex flex-row gap-6">
              <div>
                <img
                  src={user.photoURL}
                  className="rounded-full w-10 h-10 object-cover mt-2"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                />
              </div>
              <div>
                <Link>
                  <button
                    onClick={logOut}
                    className="rounded-2xl py-3 px-10 font-bold"
                  >
                    Sign Out
                  </button>
                </Link>
              </div>
            </div>
          </>
        ) : (
          <>
            <Link to="/login">
              <button className="rounded-2xl py-3 px-10 font-bold">
                Login
              </button>
            </Link>
            <Link to="/register">
              <button className="rounded-2xl py-3 px-10 font-bold">
                Register
              </button>
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
