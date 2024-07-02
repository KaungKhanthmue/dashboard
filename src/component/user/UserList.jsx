import React, {  useState } from "react";
import { Link } from "react-router-dom";
import Api from "./../../Api/ApiGet"; 
import useApiPost from "./../../Api/ApiPost";
import UserTable from "./UserTable"

const url = "http://127.0.0.1:8000/api/user-list";
const createUrl = "http://127.0.0.1:8000/api/user-create";

export default function UserList() {
  const [createModelBox, setCreateModelBox] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [page, setPage] = useState(1);
  const { loading: apiLoading, data, refetch } = Api(`${url}?page=${page}`);
  const { fetchData, dataform, error, loading: postLoading } = useApiPost(createUrl);

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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
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
            className={`px-4 py-2 rounded-md mx-1 ${
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
          className="px-4 py-2  bg-gray-200 text-gray-700 rounded-md"
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
      <div className="w-full h-[70px] flex justify-end items-center container mx-auto pr-[130px]">
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
              <h2 className="font-semibold text-gray-800">User List</h2>
            </header>
            <div className="p-3">
              <div className="overflow-x-auto">
                <UserTable apiLoading={apiLoading} data={data}/>
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
              {postLoading ? "Creating..." : "Create"}
            </button>
            {error && <p className="text-red-500 text-xs mt-2">{error.message}</p>}
            {dataform && <p className="text-green-500 text-xs mt-2">User created successfully!</p>}
          </form>
        </div>
      </div>
    </div>
  );
}
