import React from "react";

const ToolCategory = () => {
    return (
        <>
            <h1 className="text-center lg:text-4xl md:text-3xl text-2xl mt-5">
                Manufacturing Units
            </h1>
            <div className="grid md:grid-cols-3 grid-cols-1 gap-5 lg:px-16 md:px-8 p-4 text-left mb-5">
                <div className="border-2 border-red-700 my-6 p-4">
                    <div>
                        <img
                            className="mx-auto"
                            src="resources/hand-tool.jpg"
                            alt=""
                        />
                    </div>
                    <p className="w-9/12 mx-auto">
                        We manufacture useful hand-tools for various purposes.
                        We maintain argonomic desing and smart grip. We use
                        lates technology to manufacture hand tools that can be
                        useful in any rough condition
                    </p>
                </div>
                <div className="border-2 border-red-700 my-6 p-4">
                    <div>
                        <img
                            className="mx-auto"
                            src="resources/power-tool.jpg"
                            alt=""
                        />
                    </div>
                    <p className="w-9/12 mx-auto">
                        This is our special manufacturing unit. We have a
                        variety of power tools that are designed to work in any
                        weather condition. We desing to ensure longevity, human
                        comfort and heavy work load.
                    </p>
                </div>
                <div className="border-2 border-red-700 my-6 p-4">
                    <div>
                        <img
                            className="mx-auto"
                            src="resources/machine-tool.jpg"
                            alt=""
                        />
                    </div>
                    <p className="w-9/12 mx-auto">
                        Machine tools section of our broad manufacturing plant
                        is the most sofisticated and hi-tech manufacturing unit
                        in the country. We are working in this field with
                        integrity for more than 20 years.
                    </p>
                </div>
            </div>
        </>
    );
};

export default ToolCategory;
