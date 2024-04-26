import { Outlet } from "react-router-dom";
import Navbar from "../pages/shared/Navbar/Navbar";

const Root = () => {
  return (
    <div>
      <div className="max-w-7xl mx-auto min-h-screen">
        <Navbar></Navbar>
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Root;
