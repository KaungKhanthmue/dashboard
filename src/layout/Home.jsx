import React, { useState } from "react";
import SideBar from "./SideBar";
import { Outlet } from "react-router-dom";
import HomeContext from "./HomeContext";
import Nav from "./Nav";

function NavHome() {
    const [sideOnOffValue, setSideOnOffValue] = useState(false);

    return (
        <HomeContext.Provider value={{ sideOnOffValue, setSideOnOffValue }}>
            <Nav/>
            <div className="w-full flex">
                <SideBar />
                <Outlet />
            </div>
        </HomeContext.Provider>
    );
}

export default NavHome;
