import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import Footer from "../../../shared/Footer/Footer";
import Header from "../../../shared/Header/Header";

const AdminDashboard = () => {
    const activeStyle = {
        color: "rgb(185 28 28)",
        fontWeight: "bold",
    };
    return (
        <>
            <Header></Header>
            <div className="px-4 md:px-8 lg:px-16">
                <h1 className="text-3xl font-semibold italic mt-6  text-center md:text-left">
                    Dashboard
                </h1>
                <div className="bg-red-700 h-[2px] w-full"></div>
                <div className="grid md:grid-cols-3 lg:grid-cols-4 grid-cols-1 gap-5 mb-14 mt-10">
                    <div className="p-4 md:block flex flex-wrap ml-0 w-fit justify-centeritems-center border-2 border-red-700 h-fit">
                        <button className="block md:w-40 w-fit md:px-5 p-2 md:py-3 border-2 border-red-700 text-center md:text-lg text-sm font-semibold my-2 md:my-3 mx-2">
                            <NavLink
                                to="/admindashboard/profile"
                                style={({ isActive }) =>
                                    isActive ? activeStyle : undefined
                                }
                            >
                                My Profile
                            </NavLink>
                        </button>
                        <button className="block md:w-40 w-fit md:px-5 p-2 md:py-3 border-2 border-red-700 text-center md:text-lg text-sm font-semibold my-2 md:my-3 mx-2">
                            <NavLink
                                to="/admindashboard/manageorders"
                                style={({ isActive }) =>
                                    isActive ? activeStyle : undefined
                                }
                            >
                                Manage Orders
                            </NavLink>
                        </button>
                        <button className="block md:w-40 w-fit md:px-5 p-2 md:py-3 border-2 border-red-700 text-center md:text-lg text-sm font-semibold my-2 md:my-3 mx-2">
                            <NavLink
                                to="/admindashboard/addproduct"
                                style={({ isActive }) =>
                                    isActive ? activeStyle : undefined
                                }
                            >
                                Add Product
                            </NavLink>
                        </button>
                        <button className="block md:w-40 w-fit md:px-5 p-2 md:py-3 border-2 border-red-700 text-center md:text-lg text-sm font-semibold my-2 md:my-3 mx-2">
                            <NavLink
                                to="/admindashboard/makeadmin"
                                style={({ isActive }) =>
                                    isActive ? activeStyle : undefined
                                }
                            >
                                Make Admin
                            </NavLink>
                        </button>
                        <button className="block md:w-40 w-fit md:px-5 p-2 md:py-3 border-2 border-red-700 text-center md:text-lg text-sm font-semibold my-2 md:my-3 mx-2">
                            <NavLink
                                to="/admindashboard/manageproducts"
                                style={({ isActive }) =>
                                    isActive ? activeStyle : undefined
                                }
                            >
                                Manage Products
                            </NavLink>
                        </button>
                    </div>

                    <div className="md:col-span-2 lg:col-span-3">
                        <Outlet></Outlet>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </>
    );
};

export default AdminDashboard;
