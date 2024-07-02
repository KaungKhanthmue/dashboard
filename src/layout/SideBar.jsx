import React, { memo, useContext } from "react";
import { NavLink } from "react-router-dom";
import HomeContext from "../context/HomeContext";

const SideBar = memo(() => {
  const { sideOnOffValue, setSideOnOffValue } = useContext(HomeContext);



  return (
    <div className="">
      <div className="">
        <div
          className={
            sideOnOffValue
              ? "sidebar w-[3.0rem] overflow-hidden h-[831px] bg-gray-700 border-r hover:shadow-lg"
              : "sidebar overflow-hidden border-r w-[250px] h-[831px] bg-gray-700 hover:shadow-lg"
          }
        >
          <div className="flex flex-col justify-between pb-6">
            <div>
              <ul className="space-y-2 tracking-wide">
                <li className="min-w-max">
                  <NavLink
                    to="user"
                    className={({ isActive }) =>
                      isActive
                        ? "relative flex items-center space-x-4 bg-gradient-to-r from-sky-600 to-cyan-400 px-4 py-3 text-white"
                        : "relative flex items-center space-x-4 rounded-md px-4 py-3 text-gray-600"
                    }
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        className="fill-current text-gray-600 group-hover:text-cyan-600"
                        fillRule="evenodd"
                        d="M2 5a2 2 0 012-2h8a2 2 0 012 2v10a2 2 0 002 2H4a2 2 0 01-2-2V5zm3 1h6v4H5V6zm6 6H5v2h6v-2z"
                        clipRule="evenodd"
                      />
                      <path
                        className="fill-current text-gray-300 group-hover:text-cyan-300"
                        d="M15 7h1a2 2 0 012 2v5.5a1.5 1.5 0 01-3 0V7z"
                      />
                    </svg>
                    <span className="text-white">UserList</span>
                  </NavLink>
                </li>
                <li className="min-w-max">
                  <NavLink
                    to="category"
                    className={({ isActive }) =>
                      isActive
                        ? "relative flex items-center space-x-4 bg-gradient-to-r from-sky-600 to-cyan-400 px-4 py-3 text-white"
                        : "relative flex items-center space-x-4 rounded-md px-4 py-3 text-gray-600"
                    }
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        className="fill-current text-gray-600 group-hover:text-cyan-600"
                        fillRule="evenodd"
                        d="M2 5a2 2 0 012-2h8a2 2 0 012 2v10a2 2 0 002 2H4a2 2 0 01-2-2V5zm3 1h6v4H5V6zm6 6H5v2h6v-2z"
                        clipRule="evenodd"
                      />
                      <path
                        className="fill-current text-gray-300 group-hover:text-cyan-300"
                        d="M15 7h1a2 2 0 012 2v5.5a1.5 1.5 0 01-3 0V7z"
                      />
                    </svg>
                    <span className="text-white">Category</span>
                  </NavLink>
                </li>
                <li className="min-w-max">
                  <NavLink
                    to="post"
                    className={({ isActive }) =>
                      isActive
                        ? "relative flex items-center space-x-4 bg-gradient-to-r from-sky-600 to-cyan-400 px-4 py-3 text-white"
                        : "relative flex items-center space-x-4 px-4 py-3 text-gray-600"
                    }
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        className="fill-current text-gray-300 group-hover:text-cyan-300"
                        fillRule="evenodd"
                        d="M2 6a2 2 0 012-2h4l2 2h4a2 2 0 012 2v1H8a3 3 0 00-3 3v1.5a1.5 1.5 0 01-3 0V6z"
                        clipRule="evenodd"
                      />
                      <path
                        className="fill-current text-gray-600 group-hover:text-cyan-600"
                        d="M6 12a2 2 0 012-2h8a2 2 0 012 2v2a2 2 0 01-2 2H2h2a2 2 0 002-2v-2z"
                      />
                    </svg>
                    <span className="text-white">Post</span>
                  </NavLink>
                </li>
              </ul>
            </div>
            <div className="w-max -mb-3">
              <NavLink
                to="x"
                className={({ isActive }) =>
                  isActive
                    ? "relative flex items-center space-x-4 bg-gradient-to-r from-sky-600 to-cyan-400 px-4 py-3 text-white"
                    : "relative flex items-center space-x-4 rounded-md px-4 py-3 text-gray-600"
                }
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 group-hover:fill-cyan-600"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-white">Settings</span>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

export default SideBar;
