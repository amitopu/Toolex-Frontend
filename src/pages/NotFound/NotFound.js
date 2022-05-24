import React from "react";
import Footer from "../../shared/Footer/Footer";
import Header from "../../shared/Header/Header";

const NotFound = () => {
    return (
        <>
            <Header></Header>
            <div className="flex flex-wrap lg:p-16 md:p-8 p-4 justify-center items-center">
                <div>
                    <img src="/resources/404.png" alt="" />
                </div>
                <div className="text-4xl text-red-700 font-logo">
                    404 <br />
                    Not Found!!
                </div>
            </div>
            <Footer></Footer>
        </>
    );
};

export default NotFound;
