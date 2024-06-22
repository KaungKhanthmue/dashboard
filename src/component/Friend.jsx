import React, { useContext } from "react";
import SideBar from './../layout/SideBar.jsx'
import UserTable from "./../layout/UserTable.jsx";
import SideOnOff from "../layout/SideOnOff.jsx";

function Friend() {
  const {sideOnOffValue,setSideOnOffValue} = useContext(SideOnOff)
  function side() {
    setSideOnOffValue(() => false);
  }
  return (
    <>
      <div className="w-full " onClick={side}>
        {/* <SideBar/> */}
        <UserTable/>
      </div>
    </>
  );
}
export default Friend;
