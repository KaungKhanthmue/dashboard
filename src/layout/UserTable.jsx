import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const url = "http://127.0.0.1:8000/api/user-list";
const createUrl = "http://127.0.0.1:8000/api/user-create";

export default function UserTable() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [createModelBox, setCreateModelBox] = useState(false);
  const [nameValue, setNameValue] = useState("");
  const [emailValue, setEmailValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");

  async function getUsers() {
    setLoading(true);
    const response = await fetch(url);
    const users = await response.json();
    console.log(users);
    setUsers(users.data);
    setLoading(false);
  }

  async function createUser(event) {
    event.preventDefault();
    const response = await fetch(createUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: nameValue,
        email: emailValue,
        password: passwordValue,
      }),
    });
    const user = await response.json();
    setUsers([...users, user.data]);
    setCreateModelBox(false);
  }

  function createClick() {
    setCreateModelBox(true);
  }

  function createClickOff() {
    setCreateModelBox(false);
  }

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div className="w-[100%]">
      <div className="w-full h-[100px] flex justify-end items-center container mx-auto pr-[130px]">
        <div
          className="w-[150px] h-[50px] bg-cyan-600 rounded-xl px-11 py-2 font-semibold text-xl text-white cursor-pointer"
          onClick={createClick}
        >
          Create
        </div>
      </div>
      <section className="antialiased text-gray-600 px-4 min-w-full">
        <div className="flex flex-col h-full">
          <div className="w-full max-w-7xl mx-auto bg-white shadow-lg rounded-sm border border-gray-200">
            <header className="px-5 py-4 border-b border-gray-100">
              <h2 className="font-semibold text-gray-800">Customers</h2>
            </header>
            <div className="p-3">
              <div className="overflow-x-auto">
                <table className="table-auto w-full">
                  <thead className="text-xs font-semibold uppercase text-gray-400 bg-gray-50">
                    <tr>
                      <th className="p-2 whitespace-nowrap">
                        <div className="font-semibold text-left">Name</div>
                      </th>
                      <th className="p-2 whitespace-nowrap">
                        <div className="font-semibold text-left">Email</div>
                      </th>
                      <th className="p-2 whitespace-nowrap">
                        <div className="font-semibold text-left">Spent</div>
                      </th>
                      <th className="p-2 whitespace-nowrap">
                        <div className="font-semibold text-center">Country</div>
                      </th>
                    </tr>
                  </thead>
                  <tbody className="text-sm divide-y divide-gray-100">
                    {loading ? (
                      <tr>
                        <td colSpan="4" className="p-2 text-center">
                          Loading...
                        </td>
                      </tr>
                    ) : (
                      users.map((user) => (
                        <tr key={user.id}>
                          <td className="p-2 whitespace-nowrap">
                            <div className="flex items-center">
                              <div className="w-10 h-10 flex-shrink-0 mr-2 sm:mr-3">
                                <img
                                  className="rounded-full"
                                  src={
                                    user.profile_image === null
                                      ? "https://imgs.search.brave.com/7g0K3OD6Bd1ICqg8M2B55fdctUYI_OAq-SGouvxBgro/rs:fit:500:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzA3LzUyLzEzLzM3/LzM2MF9GXzc1MjEz/MzcyOV9kejRHWURr/YUtaNnZSQ05hZFQ1/UHoyRUJlNDNTaFJv/cy5qcGc"
                                      : user.profile_image
                                  }
                                  width="40"
                                  height="40"
                                  alt={user.profile_image}
                                />
                              </div>
                              <div className="font-medium text-gray-800">
                                {user.name}
                              </div>
                            </div>
                          </td>
                          <td className="p-2 whitespace-nowrap">
                            <div className="text-left">{user.email}</div>
                          </td>
                          <td className="p-2 whitespace-nowrap">
                            <Link to={`${user.id}`}>
                              <div className="text-left font-medium text-green-500">
                                friendship
                              </div>
                            </Link>
                          </td>
                          <td className="p-2 whitespace-nowrap">
                            <div className="text-lg text-center">🇺🇸</div>
                          </td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div
        className={
          createModelBox
            ? "w-[800px] z-10 absolute top-[20%] left-[29%] rounded-md"
            : "hidden w-[800px] z-10 absolute top-[20%] left-[29%] rounded-md"
        }
      >
        <div className="bg-gray-100 bg-opacity-100 py-8">
          <form
            className="w-full max-w-xl mx-auto bg-opacity-25 p-2 rounded-md shadow-md"
            onSubmit={createUser}
          >
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="name"
              >
                Name
              </label>
              <input
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
                type="text"
                id="name"
                value={nameValue}
                onChange={(e) => setNameValue(e.target.value)}
                name="name"
                placeholder="John Doe"
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="email"
              >
                Email
              </label>
              <input
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
                type="email"
                id="email"
                value={emailValue}
                onChange={(e) => setEmailValue(e.target.value)}
                name="email"
                placeholder="john@example.com"
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="password"
              >
                Password
              </label>
              <input
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
                type="password"
                id="password"
                value={passwordValue}
                onChange={(e) => setPasswordValue(e.target.value)}
                name="password"
                placeholder="********"
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="confirm-password"
              >
                Confirm Password
              </label>
              <input
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
                type="password"
                id="confirm-password"
                name="confirm-password"
                placeholder="********"
              />
            </div>
            <button
              className="w-full bg-indigo-500 text-white text-sm font-bold py-2 px-4 rounded-md hover:bg-indigo-600 transition duration-300"
              type="submit"
            >
              Register
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
