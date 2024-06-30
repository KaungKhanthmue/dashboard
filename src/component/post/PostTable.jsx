import React, { memo } from 'react'
const truncate = (text, length) => {
  if (text.length > length) {
    return text.substring(0, length) + "...";
  }
  return text;
};

const imagetruncate = (image, length) => {
  if (image.length > length) {
    return image.slice(0, length);
  }
  return image;
};
const PostTable= memo(({ apiLoading, data }) => {
  return (
    <>
                    <table className="table-auto w-full">
                  <thead className="text-xs font-semibold uppercase text-gray-400 bg-gray-50">
                    <tr>
                      <th className="p-2 whitespace-nowrap">
                        <div className="font-semibold text-center flex justify-center items-center h-full">
                          User
                        </div>
                      </th>
                      <th className="p-2 whitespace-nowrap">
                        <div className="font-semibold text-center flex justify-center items-center h-full">
                          Post Description
                        </div>
                      </th>
                      <th className="p-2 whitespace-nowrap">
                        <div className="font-semibold text-center flex justify-center items-center h-full">
                          Image
                        </div>
                      </th>
                      <th className="p-2 whitespace-nowrap">
                        <div className="font-semibold text-center flex justify-center items-center h-full">
                          Status
                        </div>
                      </th>
                      <th className="p-2 whitespace-nowrap">
                        <div className="font-semibold text-center flex justify-center items-center h-full">
                          Like
                        </div>
                      </th>
                      <th className="p-2 whitespace-nowrap">
                        <div className="font-semibold text-center flex justify-center items-center h-full">
                          Comment
                        </div>
                      </th>
                      <th className="p-2 whitespace-nowrap">
                        <div className="font-semibold text-center flex justify-center items-center h-full">
                          Created
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
                      data.data.map((post) => (
                        <tr key={post.id}>
                          <td className="p-2 whitespace-nowrap">
                            <div className="flex items-center">
                              <div className="w-10 h-10 flex-shrink-0 mr-2 sm:mr-3">
                                <img
                                  className="rounded-full"
                                  src={
                                    post.user.user_image ||
                                    "https://imgs.search.brave.com/7g0K3OD6Bd1ICqg8M2B55fdctUYI_OAq-SGouvxBgro/rs:fit:500:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzA3LzUyLzEzLzM3/LzM2MF9GXzc1MjEz/MzcyOV9kejRHWURr/YUtaNnZSQ05hZFQ1/UHoyRUJlNDNTaFJv/cy5qcGc"
                                  }
                                  width="40"
                                  height="40"
                                  alt={post.user.name}
                                />
                              </div>
                              <div className="font-medium text-gray-800">
                                {post.user.name}
                              </div>
                            </div>
                          </td>
                          <td className="whitespace-nowrap w-[300px] flex justify-center p-2">
                            <div className="text-center mt-2">
                              {truncate(post.description, 20)}
                            </div>
                          </td>
                          <td className="whitespace-nowrap p-2">
                            <div className="flex justify-center w-full h-full gap-1">
                              {imagetruncate(
                                post.image.map((img) => (
                                  <img
                                    key={img.path}
                                    className="w-20 h-10"
                                    src={
                                      img.path ||
                                      "https://imgs.search.brave.com/7g0K3OD6Bd1ICqg8M2B55fdctUYI_OAq-SGouvxBgro/rs:fit:500:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzA3LzUyLzEzLzM3/LzM2MF9GXzc1MjEz/MzcyOV9kejRHWURr/YUtaNnZSQ05hZFQ1/UHoyRUJlNDNTaFJv/cy5qcGc"
                                    }
                                    alt=""
                                  />
                                )),
                                4
                              )}
                            </div>
                          </td>
                          <td className="p-2 whitespace-nowrap">
                            <div className="text-center">{post.status}</div>
                          </td>
                          <td className="p-2 whitespace-nowrap">
                            <div className="text-center">{post.likeCount}</div>
                          </td>
                          <td className="p-2 whitespace-nowrap">
                            <div className="text-center">
                              {post.commentCount}
                            </div>
                          </td>
                          <td className="p-2 whitespace-nowrap">
                            <div className="text-center">{post.time}</div>
                          </td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
    </>
  )
})

export default PostTable