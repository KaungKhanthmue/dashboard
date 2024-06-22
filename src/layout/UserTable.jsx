import React, { useEffect, useState } from "react";

const url = "https://api.github.com/users";

export default function UserTable() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true); 

  async function getUsers() {
    setLoading(true); 
    const response = await fetch(url);
    const users = await response.json();
    setUsers(users);
    setLoading(false); 
  }

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div className="w-[100%]">
      <section className="antialiased bg-gray-100 text-gray-600 px-4 min-w-full">
        <div className="flex flex-col pt-20 h-full">
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
                                  src={user.avatar_url}
                                  width="40"
                                  height="40"
                                  alt={user.login}
                                />
                              </div>
                              <div className="font-medium text-gray-800">
                                {user.login}
                              </div>
                            </div>
                          </td>
                          <td className="p-2 whitespace-nowrap">
                            <div className="text-left">alexshatov@gmail.com</div>
                          </td>
                          <td className="p-2 whitespace-nowrap">
                            <div className="text-left font-medium text-green-500">
                              $2,890.66
                            </div>
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
    </div>
  );
}
