import React from "react";
import SideBar from './SideBar'
import UserTable from "./UserTable";
import Form from "./../component/Form";
import Context from "./../component/Context";
import { useState } from "react";

function Body() {
  const [nameValue,setNameValue] = useState("");
  const [emailValue,setEmailValue] = useState("");
  const [passwordValue,setPasswordValue] = useState("");
  const [listValue,setListValue] = useState([]);
  const [detail ,setDetail] = useState('false');
  return (
    <Context.Provider 
    value={{nameValue,setNameValue,emailValue,setEmailValue,passwordValue,setPasswordValue,listValue,setListValue,detail,setDetail}}
    >
      <div className="w-full h-[600px] flex ">
        {/* <SideBar/> */}
        {/* <UserTable/> */}
        <Form/>
      </div>
    </Context.Provider>
  );
}
export default Body;
