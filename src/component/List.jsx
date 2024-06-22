import React, { useContext, useEffect } from 'react';
import Context from './Context';

function List() {
  const { 
    listValue, setListValue, 
    detail, setDetail 
  } = useContext(Context);

  function detailList(id) {
    const clickList = setListValue(listValue.filter((list) => list.id === id));
    setDetail(true);
    
  }


  return (
    <>
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
                    {listValue.map((list) => (
                      <tr key={list.id}>
                        <td className="p-2 whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="w-10 h-10 flex-shrink-0 mr-2 sm:mr-3">
                              <img
                                className="rounded-full"
                                src=""
                                alt="avatar"
                                width="40"
                                height="40"
                              />
                            </div>
                            <div className="font-medium text-gray-800">
                              {list.name}
                            </div>
                          </div>
                        </td>
                        <td className="p-2 whitespace-nowrap">
                          <div className="text-left">{list.email}</div>
                        </td>
                        <td className="p-2 whitespace-nowrap">
                          <div className="text-left font-medium text-green-500">
                            {list.password}
                          </div>
                        </td>
                        <td className="p-2 whitespace-nowrap" onClick={() => detailList(list.id)}>
                          <div className="text-lg text-center">🇺🇸</div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>
      {detail === true && (
        <div className="w-full h-[100px] bg-slate-600">
          <p></p>
        </div>
      )}
    </>
  );
}

export default List;
