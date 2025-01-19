import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "../layouts/MainLayouts";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import DashboardLayout from "../layouts/DashboardLayout";
import AddProduct from "../pages/Dashboard/User/AddProduct";
import MyProfile from "../pages/Dashboard/User/MyProfile";
import MyProducts from "../pages/Dashboard/User/MyProducts";
import ProductReview from "../pages/Dashboard/Moderators/ProductReview";
import ReportContent from "../pages/Dashboard/Moderators/ReportContent";
import ManageUsers from "../pages/Dashboard/Admin/ManageUsers";
import ProductDetails from "../components/ProductDetails/ProductDetails";
import ProductUpdate from "../components/Dashboard/UpdatedPages/ProductUpdate";
import AllProducts from "../pages/AllProducts/AllProducts";
import PrivateRoute from "./PrivateRoute";
import Statistics from "../pages/Dashboard/Admin/Statistics";

const Routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayouts />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/product-details/:id",
        element: (
          <PrivateRoute>
            <ProductDetails />,
          </PrivateRoute>
        ),
      },
      {
        path: "/all-products",
        element: <AllProducts />,
      },
    ],
  },
  {
    path: "login",
    element: <Login />,
  },
  {
    path: "register",
    element: <Register />,
  },
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    children: [
      {
        path: "my-profile",
        element: <MyProfile />,
      },
      {
        path: "add-product",
        element: <AddProduct />,
      },
      {
        path: "my-product",
        element: <MyProducts />,
      },
      {
        path: "my-product/:id",
        element: <ProductUpdate />,
      },
      {
        path: "product-review",
        element: <ProductReview />,
      },
      {
        path: "report-contents",
        element: <ReportContent />,
      },
      {
        path: "manage-users",
        element: <ManageUsers />,
      },
      {
        path: "statistics",
        element: <Statistics />,
      },
    ],
  },
]);

export default Routes;
