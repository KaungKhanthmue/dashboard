import React, { memo } from 'react'

const CategoryTable= memo(({ apiLoading, data }) => {
  return (
    <>
                    <table className="table-auto w-full">
                  <thead className="text-xs font-semibold uppercase text-gray-400 bg-gray-50">
                    <tr>
                    <th className="p-2 whitespace-nowrap">
                        <div className="font-semibold text-center flex justify-start items-center h-full">
                          ID
                        </div>
                      </th>
                      <th className="p-2 whitespace-nowrap">
                        <div className="font-semibold text-left flex justify-start items-center h-full">
                          Name
                        </div>
                      </th>
                      <th className="p-2 whitespace-nowrap">
                        <div className="font-semibold text-center flex justify-start items-center h-full">
                          Updated_at
                        </div>
                      </th>
                      <th className="p-2 whitespace-nowrap">
                        <div className="font-semibold text-center flex justify-start items-center h-full">
                          Created_at
                        </div>
                      </th>
                    </tr>
                  </thead>
                  <tbody className="text-sm divide-y divide-gray-100">
                    {apiLoading ? (
                      <tr>
                        <td colSpan="7" className="p-2 text-center">
                          Loading...
                        </td>
                      </tr>
                    ) : (
                      data.data.map((category) => (
                        <tr key={category.id}>
                         <td className="p-2 whitespace-nowrap">
                            <div className="text-left">{category.id}</div>
                          </td>
                          <td className="p-2 whitespace-nowrap">
                            <div className="text-left">{category.name}</div>
                          </td>
                          <td className="p-2 whitespace-nowrap">
                            <div className="text-left">{category.updated_at}</div>
                          </td>
                          <td className="p-2 whitespace-nowrap">
                            <div className="text-left">{category.created_at}</div>
                          </td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
    </>
  )
})

export default CategoryTable