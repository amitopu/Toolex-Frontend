import { Route, Routes } from "react-router-dom";
import "./App.css";
import AddProduct from "./pages/admin/AddProduct/AddProduct";
import AdminDashboard from "./pages/admin/AdminDashboard/AdminDashboard";
import MakeAdmin from "./pages/admin/MakeAdmin/MakeAdmin";
import ManageOrders from "./pages/admin/ManageOrders/ManageOrders";
import ManageProducts from "./pages/admin/ManageProducts/ManageProducts";
import Login from "./pages/authentication/Login/Login";
import PassReset from "./pages/authentication/PassReset/PassReset";
import Register from "./pages/authentication/Register/Register";
import RequireAuth from "./pages/authentication/RequireAuth/RequireAuth";
import Blog from "./pages/Blog/Blog";
import Home from "./pages/Home/Home";
import NotFound from "./pages/NotFound/NotFound";
import Order from "./pages/Order/Order";
import UserDashboard from "./pages/UserDashboard/UserDashboard";
import AddReview from "./pages/users/AddReview/AddReview";
import UserOrders from "./pages/users/UserOrders/UserOrders";
import UserProfile from "./pages/users/UserProfile/UserProfile";
import Spinner from "./shared/Spinner/Spinner";
function App() {
    return (
        <div className="relative selection:text-white selection:bg-red-700">
            <Routes>
                <Route path="/" element={<Home></Home>}></Route>
                <Route path="/home" element={<Home></Home>}></Route>
                <Route path="/blog" element={<Blog></Blog>}></Route>
                <Route path="/login" element={<Login></Login>}></Route>
                <Route path="/register" element={<Register></Register>}></Route>
                <Route
                    path="/resetpassword"
                    element={<PassReset></PassReset>}
                ></Route>
                <Route path="/spinner" element={<Spinner></Spinner>}></Route>

                {/* user Dashboard */}
                <Route
                    path="/userdashboard"
                    element={
                        <RequireAuth>
                            <UserDashboard></UserDashboard>
                        </RequireAuth>
                    }
                >
                    <Route
                        path="profile"
                        element={<UserProfile></UserProfile>}
                    ></Route>
                    <Route
                        path="orders"
                        element={<UserOrders></UserOrders>}
                    ></Route>
                    <Route
                        path="addreview"
                        element={<AddReview></AddReview>}
                    ></Route>
                </Route>

                {/* admin Dashboard */}
                <Route
                    path="/admindashboard"
                    element={
                        <RequireAuth>
                            <AdminDashboard></AdminDashboard>
                        </RequireAuth>
                    }
                >
                    <Route
                        path="profile"
                        element={<UserProfile></UserProfile>}
                    ></Route>
                    <Route
                        path="manageorders"
                        element={<ManageOrders></ManageOrders>}
                    ></Route>
                    <Route
                        path="addproduct"
                        element={<AddProduct></AddProduct>}
                    ></Route>
                    <Route
                        path="makeadmin"
                        element={<MakeAdmin></MakeAdmin>}
                    ></Route>
                    <Route
                        path="manageproducts"
                        element={<ManageProducts></ManageProducts>}
                    ></Route>
                </Route>

                {/* order  */}
                <Route
                    path="/order/:id"
                    element={
                        <RequireAuth>
                            <Order></Order>
                        </RequireAuth>
                    }
                ></Route>

                <Route path="*" element={<NotFound></NotFound>}></Route>
            </Routes>
        </div>
    );
}

export default App;
