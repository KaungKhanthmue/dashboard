import React, { useState } from "react";
import SideBar from "./SideBar";
import { Outlet } from "react-router-dom";
import SideOnOff from "./SideOnOff";

function NavHome() {
    const [sideOnOffValue, setSideOnOffValue] = useState(false);

    return (
        <SideOnOff.Provider value={{ sideOnOffValue, setSideOnOffValue }}>
            <div className="w-full flex">
                <SideBar />
                <Outlet />
            </div>
        </SideOnOff.Provider>
    );
}

export default NavHome;
