import React, { memo, useContext, useEffect, useState } from "react";
import useApiGet from "../Api/ApiGet";
import HomeContext from "../context/HomeContext";

const Nav= memo(()=> {
  const { sideOnOffValue, setSideOnOffValue } = useContext(HomeContext);

  const toggleSidebar = () => {
    setSideOnOffValue(prev => !prev);
  };
  const url = "http://127.0.0.1:8000/api/auth-user";
  const { loading: apiLoading, data, refetch } = useApiGet(url);
  const [user, setUser] = useState({});

  useEffect(() => {
    if (data && data.data) {
      setUser(data.data);
    }
  }, [data]);

  return (
    <div className="w-full h-[70px] bg-black text-white flex items-center justify-between px-4">
      <div className="w-10 h-10 bg-red-900 text-center" onClick={toggleSidebar}>Nav</div>
      <div>
        {apiLoading ? (
          <span>Loading...</span>
        ) : user ? (
          <span>{user.name}</span>
        ) : (
          <span>No user data</span>
        )}
      </div>
    </div>
  );
})

export default Nav;
