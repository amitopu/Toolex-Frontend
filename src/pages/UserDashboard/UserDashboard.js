import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { NavLink, Outlet } from "react-router-dom";
import auth from "../../firebase.init";
import Footer from "../../shared/Footer/Footer";
import Header from "../../shared/Header/Header";

const UserDashboard = () => {
    const [user] = useAuthState(auth);
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
                <div className="grid md:grid-cols-4 lg:grid-cols-5 grid-cols-1 mb-14 mt-10">
                    <div className="col-span-1">
                        <div className="p-4 md:block flex flex-wrap mx-auto w-fit justify-centeritems-center border-2 border-red-700">
                            <button className="block md:w-40 w-fit md:px-5 p-2 md:py-3 border-2 border-red-700 text-center md:text-lg text-sm font-semibold md:my-3 mx-2">
                                <NavLink
                                    to={`/userdashboard/profile/${user?.uid}`}
                                    style={({ isActive }) =>
                                        isActive ? activeStyle : undefined
                                    }
                                >
                                    My Profile
                                </NavLink>
                            </button>
                            <button className="block md:w-40 w-fit md:px-5 p-2 md:py-3 border-2 border-red-700 text-center md:text-lg text-sm font-semibold md:my-3 mx-2">
                                <NavLink
                                    to={`/userdashboard/orders/${user?.uid}`}
                                    style={({ isActive }) =>
                                        isActive ? activeStyle : undefined
                                    }
                                >
                                    My Orders
                                </NavLink>
                            </button>
                            <button className="block md:w-40 w-fit md:px-5 p-2 md:py-3 border-2 border-red-700 text-center md:text-lg text-sm font-semibold md:my-3 mx-2">
                                <NavLink
                                    to="/userdashboard/addreview"
                                    style={({ isActive }) =>
                                        isActive ? activeStyle : undefined
                                    }
                                >
                                    Add Review
                                </NavLink>
                            </button>
                        </div>
                    </div>
                    <div className="md:col-span-3 lg:col-span-4">
                        <Outlet></Outlet>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </>
    );
};

export default UserDashboard;
