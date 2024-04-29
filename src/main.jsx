import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Root from "./layouts/Root";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import AuthProvider from "./providers/AuthProvider";
import AddTouristSpot from "./pages/AddTouristSpot/AddTouristSpot";
import PrivateRoute from "./routes/PrivateRoute";
import Spots from "./pages/Spots/Spots";
import SpotInfo from "./pages/SpotInfo/SpotInfo";
import MyList from "./pages/MyList/MyList";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import SpotsByCountry from "./pages/SpotsByCountry/SpotsByCountry";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/viewTouristSpot",
        element: <Spots></Spots>,
        loader: () =>
          fetch("https://tourism-management-server-kappa.vercel.app/spots"),
      },
      {
        path: "/myList",
        element: (
          <PrivateRoute>
            <MyList></MyList>
          </PrivateRoute>
        ),
        loader: () =>
          fetch("https://tourism-management-server-kappa.vercel.app/spots"),
      },
      {
        path: "/addTouristSpot",
        element: (
          <PrivateRoute>
            <AddTouristSpot></AddTouristSpot>
          </PrivateRoute>
        ),
      },
      {
        path: "/touristSpot/:id",
        element: (
          <PrivateRoute>
            <SpotInfo></SpotInfo>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://tourism-management-server-kappa.vercel.app/spots/${params.id}`
          ),
      },
      {
        path: "/spotsByCountry/:countryName",
        element: <SpotsByCountry></SpotsByCountry>,
        loader: ({ params }) =>
          fetch(
            `https://tourism-management-server-kappa.vercel.app/spots-by-country/${params.countryName}`
          ),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
