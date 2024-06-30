import React, { useState } from "react";
import { Link } from "react-router-dom";
import Api from "./../Api/ApiGet";
import useApiPost from "./../Api/ApiPost";

const url = "http://127.0.0.1:8000/api/post-list";
const createUrl = "http://127.0.0.1:8000/api/post-create";

export default function Post() {
  const [createModelBox, setCreateModelBox] = useState(false);
  const [form, setForm] = useState({
    title: "",
    description: "",
    user_id: "",
    category_id: "",
    image: null,
  });
  const [page, setPage] = useState(1);

  const { loading: apiLoading, data, refetch } = Api(`${url}?page=${page}`);

  const {
    fetchData,
    dataform,
    error,
    loading: postLoading,
  } = useApiPost(createUrl);

  const createClick = () => {
    setCreateModelBox(true);
  };

  const createClickOff = () => {
    setCreateModelBox(false);
  };

  const createPost = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", form.title);
    formData.append("description", form.description);
    formData.append("user_id", form.user_id);
    formData.append("category_id", form.category_id);
    formData.append("image", form.image);

    fetchData(formData).then(() => {
      setForm({
        title: "",
        description: "",
        user_id: "",
        category_id: "",
        image: null,
      });
      refetch();
    });
  };

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    if (name === "image") {
      setForm((prevForm) => ({
        ...prevForm,
        image: files[0],
      }));
    } else {
      setForm((prevForm) => ({
        ...prevForm,
        [name]: value,
      }));
    }
  };

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

  const handlePagination = (newPage) => {
    if (newPage > 0 && newPage <= data.meta.last_page) {
      setPage(newPage);
      refetch();
    }
  };

  const renderPageNumbers = () => {
    const pageNumbers = [];
    for (let i = page - 2; i <= page + 2; i++) {
      if (i > 0 && i <= data.meta.last_page) {
        pageNumbers.push(i);
      }
    }
    return (
      <>
        <button
          className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md"
          onClick={() => handlePagination(page - 1)}
          disabled={data.meta.current_page === 1}
        >
          Previous
        </button>
        {pageNumbers.map((pageNumber) => (
          <button
            key={pageNumber}
            className={`px-4 py-2 rounded-md ${
              pageNumber === page
                ? "bg-cyan-600 text-white"
                : "bg-gray-200 text-gray-700"
            }`}
            onClick={() => handlePagination(pageNumber)}
          >
            {pageNumber}
          </button>
        ))}
        <button
          className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md"
          onClick={() => handlePagination(page + 1)}
          disabled={data.meta.current_page === data.meta.last_page}
        >
          Next
        </button>
      </>
    );
  };
  

  return (
    <div className="w-[100%]">
      <div className="w-full h-[100px] flex justify-end items-center container mx-auto pr-[130px]">
        <div
          className="w-[130px] h-[40px] bg-cyan-600 rounded-xl px-9 py-1 font-semibold text-xl text-white cursor-pointer"
          onClick={createClick}
        >
          Create
        </div>
      </div>
      <section className="antialiased text-gray-600 px-4 min-w-full">
        <div className="flex flex-col h-full">
          <div className="w-full max-w-7xl mx-auto bg-white shadow-lg rounded-sm border border-gray-200">
            <header className="px-5 py-4 border-b border-gray-100">
              <h2 className="font-semibold text-gray-800">Post List</h2>
            </header>
            <div className="p-3">
              <div className="overflow-x-auto">
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
              </div>
              {data && data.meta && (
                <div className="flex justify-end mt-4">
                  {renderPageNumbers()}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
      {createModelBox && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg">
            <button
              className="bg-red-500 text-white px-4 py-2 rounded-md mb-4"
              onClick={createClickOff}
            >
              Close
            </button>
            <form onSubmit={createPost}>
              <div>
                <label htmlFor="title" className="block mb-2">
                  Title:
                </label>
                <input
                  type="text"
                  name="title"
                  id="title"
                  className="border border-gray-300 p-2 rounded-md w-full mb-4"
                  value={form.title}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label htmlFor="description" className="block mb-2">
                  Description:
                </label>
                <input
                  type="text"
                  name="description"
                  id="description"
                  className="border border-gray-300 p-2 rounded-md w-full mb-4"
                  value={form.description}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label htmlFor="user_id" className="block mb-2">
                  User ID:
                </label>
                <input
                  type="text"
                  name="user_id"
                  id="user_id"
                  className="border border-gray-300 p-2 rounded-md w-full mb-4"
                  value={form.user_id}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label htmlFor="category_id" className="block mb-2">
                  Category ID:
                </label>
                <input
                  type="text"
                  name="category_id"
                  id="category_id"
                  className="border border-gray-300 p-2 rounded-md w-full mb-4"
                  value={form.category_id}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label htmlFor="image" className="block mb-2">
                  Image:
                </label>
                <input
                  type="file"
                  name="image"
                  id="image"
                  className="border border-gray-300 p-2 rounded-md w-full mb-4"
                  onChange={handleChange}
                />
              </div>
              <button
                type="submit"
                className="bg-cyan-600 text-white px-4 py-2 rounded-md"
              >
                {postLoading ? "Creating..." : "Create"}
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
