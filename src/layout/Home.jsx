import React, { useContext, useState } from "react";
import SideBar from "./SideBar";
import { Navigate, Outlet } from "react-router-dom";
import HomeContext from "./../context/HomeContext";
import Nav from "./Nav";
import AuthContext from "../context/AuthContext";

function NavHome() {
    const [sideOnOffValue, setSideOnOffValue] = useState(false);


      const { token } = useContext(AuthContext);

      if (!token) {
        return <Navigate to="/auth/login" />;
      }
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
