import { createBrowserRouter } from "react-router-dom";
import Home from "../Components/Home";
import CardSlider from "../Components/CardSlider/CardSlider";
import Booking from "../Pages/Booking";
import LoginSignUp from "../Layout/LoginSignUp";
import Login from "../Components/Login";
import Register from "../Components/Register";

const route = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      {
        path: "/",
        element: <CardSlider />,
      },
      {
        path: "/categories/:id",
        element: <Booking />,
        loader: ({ params }) =>
          fetch(`http://localhost:5010/categories/${params.id}`),
      },
    ],
  },
  {
    path: "/loginSignUp",
    element: <LoginSignUp />,
    children: [
      {
        path: "",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
    ],
  },
]);

export default route;
