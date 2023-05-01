import { createBrowserRouter } from "react-router-dom";
import Home from "../Components/Home";
import CardSlider from "../Components/CardSlider/CardSlider";

const route = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      {
        path: "/",
        element: <CardSlider />,
      },
    ],
  },
]);

export default route;
