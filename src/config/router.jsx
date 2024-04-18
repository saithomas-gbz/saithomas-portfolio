import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../screens/Home";

const router = createBrowserRouter([
  { 
    path: "/", 
    element: <Home /> 
  },
]);

const Routes = () => {
  return (
    <RouterProvider router={router} />
  )
};


export default Routes;