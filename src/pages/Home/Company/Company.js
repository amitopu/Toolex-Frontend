import React from "react";
import AnimatedButton from "../../../shared/AnimatedButton/AnimatedButton";

const Company = () => {
    return (
        <div className="my-12">
            <div className="md:flex md:justify-between lg:px-16 md:px-8 px-4  text-left">
                <div className="md:w-fit">
                    <h1 className="lg:text-4xl text-3xl md:text-left text-center">
                        Our Company
                    </h1>
                    <p className="w-auto mx-auto">
                        Toolex a global tools manufacturing leader providing
                        manufacturing tools with cutting edge technology to make
                        every craftmans day better providing smooth experience
                        in manufacturing to our customers around the globe. We
                        are actively working in 15 countries and we have our
                        partners in 45 countries.{" "}
                    </p>
                </div>
                <div className="hidden md:block lg:h-[120px] md:h-[150px] w-[3px] bg-gray-300 my-7 mx-[40px]"></div>
                <div className="md:hidden block h-[2px] w-[250px] bg-gray-300 mx-auto my-5"></div>
                <div className="md:w-fit">
                    <h1 className="lg:text-4xl text-3xl md:text-left text-center">
                        Our Culture
                    </h1>
                    <p className="w-auto mx-auto">
                        Our diverse team of talented employees in 15 countries
                        is driven by a commitment to innovation, operational
                        excellence, and sustainability as we live our values to
                        Be Inclusive, Be Inventive, and Get Results the Right
                        Way.
                    </p>
                </div>
            </div>
            <AnimatedButton
                to={"/about"}
                text={"Get To Know More"}
            ></AnimatedButton>
        </div>
    );
};

export default Company;
