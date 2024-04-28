import { Outlet } from "react-router-dom";
import Navbar from "../pages/shared/Navbar/Navbar";
import { Toaster } from "react-hot-toast";
import Footer from "../pages/shared/Footer/Footer";

const Root = () => {
  return (
    <div>
      <div className="max-w-7xl mx-auto min-h-screen">
        <Navbar></Navbar>
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
      <Toaster position="top-right" reverseOrder={false} />
    </div>
  );
};

export default Root;
