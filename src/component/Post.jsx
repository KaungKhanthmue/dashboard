import React, { useState } from "react";
import { Link } from "react-router-dom";
import Api from "./../Api/ApiGet";
import useApiPost from "./../Api/ApiPost";

const url = "http://127.0.0.1:8000/api/post-list";
const createUrl = "http://127.0.0.1:8000/api/user-create";

export default function Post() {
  const [createModelBox, setCreateModelBox] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const { loading: apiLoading, data, refetch } = Api(url);

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

  const createUser = (e) => {
    e.preventDefault();
    if (form.password !== form.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    fetchData(form).then(() => {
      setForm({ name: "", email: "", password: "", confirmPassword: "" });
      refetch();
    });
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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };

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
                           image
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
                        <td colSpan="4" className="p-2 text-center">
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
                                  src={"https://imgs.search.brave.com/7g0K3OD6Bd1ICqg8M2B55fdctUYI_OAq-SGouvxBgro/rs:fit:500:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzA3LzUyLzEzLzM3/LzM2MF9GXzc1MjEz/MzcyOV9kejRHWURr/YUtaNnZSQ05hZFQ1/UHoyRUJlNDNTaFJv/cy5qcGc"
                                      }
                                  width="40"
                                  height="40"
                                  alt={post.user.profile_image}
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
                                      img.path === null
                                        ? "https://imgs.search.brave.com/7g0K3OD6Bd1ICqg8M2B55fdctUYI_OAq-SGouvxBgro/rs:fit:500:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzA3LzUyLzEzLzM3/LzM2MF9GXzc1MjEz/MzcyOV9kejRHWURr/YUtaNnZSQ05hZFQ1/UHoyRUJlNDNTaFJv/cy5qcGc"
                                        : img.path
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
                            <div className="text-center">40</div>
                          </td>
                          <td className="p-2 whitespace-nowrap">
                            <div className="text-center">5</div>
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
            </div>
          </div>
        </div>
      </section>
      <div className={createModelBox ? "w-full" : "hidden w-full"}>
        <div
          className="w-full h-[1500px] z-20 absolute top-[90px] left-0  rounded-md"
          onClick={createClickOff}
        ></div>
        <div className="bg-gray-100 bg-opacity-25 pt-[100px] z-30 absolute top-[15%] left-[30%] w-[40%]">
          <form
            className="w-full max-w-xl mx-auto bg-gray-100  rounded-md shadow-md p-5"
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
                value={form.name}
                onChange={handleChange}
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
                value={form.email}
                onChange={handleChange}
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
                value={form.password}
                onChange={handleChange}
                name="password"
                placeholder="********"
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="confirmPassword"
              >
                Confirm Password
              </label>
              <input
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
                type="password"
                id="confirmPassword"
                value={form.confirmPassword}
                onChange={handleChange}
                name="confirmPassword"
                placeholder="********"
              />
            </div>
            <button
              className="w-full bg-indigo-500 text-white text-sm font-bold py-2 px-4 rounded-md hover:bg-indigo-600 transition duration-300"
              type="submit"
              disabled={postLoading}
            >
              {postLoading ? "Registering..." : "Register"}
            </button>
            {error && (
              <p className="text-red-500 text-xs mt-2">{error.message}</p>
            )}
            {dataform && (
              <p className="text-green-500 text-xs mt-2">
                User created successfully!
              </p>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}
