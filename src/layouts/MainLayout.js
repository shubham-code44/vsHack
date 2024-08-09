import React from 'react';
import {Outlet} from 'react-router-dom';
import Navbar from "../Components/navbar";
import Footer from "../pages/footer/Footer"
import {Box} from "@mui/material";

const MainLayout = () => {
    return (
        <div>
            <Navbar/>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default MainLayout;
