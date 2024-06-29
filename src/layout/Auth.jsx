import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Nav from "./Nav";

function Auth() {

    return (
        <>
            <Nav/>
            <div className="w-full flex justify-center">
                <Outlet />
            </div>
        </>
    );
}

export default Auth;
