import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Api from './../../Api/ApiGet'
import UserTable from './UserTable'
function UserFriendList() {
    const {id} = useParams();
    const url = `http://127.0.0.1:8000/api/user-friend/${id}`;



    const {loading,data} = Api(url);

  return (
    <div className='w-full'>
        <section className="antialiased  text-gray-600 px-4 min-w-full mt-20">
        <div className="flex flex-col  h-full">
          <div className="w-full max-w-7xl mx-auto bg-white shadow-lg rounded-sm border border-gray-200">
            <header className="px-5 py-4 border-b border-gray-100">
              <h2 className="font-semibold text-gray-800">FriendShip</h2>
            </header>
            <div className="p-3">
              <div className="overflow-x-auto">
              <UserTable apiLoading={loading} data={data}/>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default UserFriendList