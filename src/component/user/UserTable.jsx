import React, { memo } from 'react'
import { Link } from 'react-router-dom'

const UserTable = memo(({ apiLoading, data }) => {
  return (
    <>
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
              <div className="font-semibold text-left">Friends</div>
            </th>
            <th className="p-2 whitespace-nowrap">
              <div className="font-semibold text-center">Country</div>
            </th>
          </tr>
        </thead>
        <tbody className="text-sm divide-y divide-gray-100">
          {apiLoading ? (
            <tr>
              <td colSpan="4" className="p-2 text-center">
                Loading...
              </td>
            </tr>
          ) : (
            data.data.map((user) => (
              <tr key={user.id}>
                <td className="p-2 whitespace-nowrap">
                  <div className="flex items-center">
                    <div className="w-10 h-10 flex-shrink-0 mr-2 sm:mr-3">
                      <img
                        className="rounded-full"
                        src={
                          user.user_image === null
                            ? "https://imgs.search.brave.com/7g0K3OD6Bd1ICqg8M2B55fdctUYI_OAq-SGouvxBgro/rs:fit:500:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzA3LzUyLzEzLzM3/LzM2MF9GXzc1MjEz/MzcyOV9kejRHWURr/YUtaNnZSQ05hZFQ1/UHoyRUJlNDNTaFJv/cy5qcGc"
                            : user.user_image.path
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
    </>
  )
});

export default UserTable;
