import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
function UserFriendList() {
    const {id} = useParams();
    const url = `http://127.0.0.1:8000/api/user-friend/${id}`;
    // const url = "http://127.0.0.1:8000/api/user-friend/01j0bq4rnvdyq5j5k8s8rseeej";


    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    async function getUsers() {
        setLoading(true);
        const response = await fetch(url);
        const users = await response.json();
        setUsers(users.data);
        console.log(users.data);
        setLoading(false);
      }
    useEffect(() => {
        getUsers();
    }, []);
  return (
    <div className='w-full'>
        <section className="antialiased  text-gray-600 px-4 min-w-full">
        <div className="flex flex-col  h-full">
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
                                  src={user.profile_image === null ? "https://imgs.search.brave.com/7g0K3OD6Bd1ICqg8M2B55fdctUYI_OAq-SGouvxBgro/rs:fit:500:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzA3LzUyLzEzLzM3/LzM2MF9GXzc1MjEz/MzcyOV9kejRHWURr/YUtaNnZSQ05hZFQ1/UHoyRUJlNDNTaFJv/cy5qcGc": user.profile_image}
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
  )
}

export default UserFriendList