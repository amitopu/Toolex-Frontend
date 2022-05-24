import React from "react";
import "./Banner.css";

const Banner = () => {
    return (
        <div className="banner bg-fixed h-[500px] relative text-white">
            <div className="h-[500px] w-1/2 absolute top-0 bg-gradient-to-r from-black to-transparent"></div>
            <div className="absolute top-[25%] left-[15%]">
                <h1 className="text-4xl select-none">
                    Making every <br /> Day better.
                </h1>
                <p className="text-sm lg:w-4/12 md:w-5/12 w-1/2 selection:text-white selection:bg-red-700">
                    With over 20 years of experience, Toolex has earned a legacy
                    of operational excellence while building its future on
                    innovation. Our talented team is committed to creating
                    products that ensure the comfort, well-being, convenience
                    and safety of consumers. Working together, we are Making
                    every day better.
                </p>
            </div>
        </div>
    );
};

export default Banner;
