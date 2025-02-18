import { createBrowserRouter, Link } from "react-router-dom";
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
import error_img from "../assets/logo/404 Error-amico.svg";
import UserRoute from "./UserRoute";
import AdminRoute from "./AdminRoute";
import ModeratorRoute from "./ModeratorRoute";
import About from "../pages/About";

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
      {
        path: "/about",
        element: <About />,
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
    element: (
      <PrivateRoute>
        <DashboardLayout />,
      </PrivateRoute>
    ),
    children: [
      {
        path: "my-profile",
        element: <MyProfile />,
      },
      {
        path: "add-product",
        element: (
          <UserRoute>
            <PrivateRoute>
              <AddProduct />,
            </PrivateRoute>
          </UserRoute>
        ),
      },
      {
        path: "my-product",
        element: (
          <UserRoute>
            <PrivateRoute>
              <MyProducts />,
            </PrivateRoute>
          </UserRoute>
        ),
      },
      {
        path: "my-product/:id",
        element: (
          <UserRoute>
            <PrivateRoute>
              <ProductUpdate />,
            </PrivateRoute>
          </UserRoute>
        ),
      },
      {
        path: "product-review",
        element: (
          <ModeratorRoute>
            <PrivateRoute>
              <ProductReview />,
            </PrivateRoute>
          </ModeratorRoute>
        ),
      },
      {
        path: "report-contents",
        element: (
          <ModeratorRoute>
            <PrivateRoute>
              <ReportContent />,
            </PrivateRoute>
          </ModeratorRoute>
        ),
      },
      {
        path: "manage-users",
        element: (
          <AdminRoute>
            <PrivateRoute>
              <ManageUsers />,
            </PrivateRoute>
          </AdminRoute>
        ),
      },
      {
        path: "statistics",
        element: (
          <AdminRoute>
            <PrivateRoute>
              <Statistics />
            </PrivateRoute>
          </AdminRoute>
        ),
      },
    ],
  },
  {
    path: "*",
    element: (
      <div className="">
        <img
          className="lg:w-6/12 mx-auto object-cover"
          src={error_img}
          alt=""
        />
        <Link to={"/"} className="btn -mt-4 flex justify-center w-40 mx-auto">
          Back to Home
        </Link>
      </div>
    ),
  },
]);

export default Routes;
