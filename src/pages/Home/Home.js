import React from "react";
import Footer from "../../shared/Footer/Footer";
import Header from "../../shared/Header/Header";
import Banner from "./Banner/Banner";
import BusinessDetails from "./BusinessDetails/BusinessDetails";
import Company from "./Company/Company";
import ToolCategory from "./ToolCategory/ToolCategory";

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Banner></Banner>
            <Company></Company>
            <ToolCategory></ToolCategory>
            <BusinessDetails></BusinessDetails>
            <Footer></Footer>
        </div>
    );
};

export default Home;
