import { createBrowserRouter } from "react-router-dom";

import Main from "../../Layout/Main";
import About from "../../Pages/About/About";
import Home from "../../Pages/Homepage/Home/Home";
import Reservation from "../../Pages/Reservation/Reservation/Reservation";
import Login from "../../Pages/Signup/Login/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/reservation",
        element: <Reservation />,
      },
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
]);
export default router;
