import React, { useState } from 'react'
import CategoryTable from './CategoryTable'
import Api from './../../Api/ApiGet'
function CategoryList() {

    const [page, setPage] = useState(1);

    const url = `http://127.0.0.1:8000/api/category-list`;

    const { loading: apiLoading, data, refetch } = Api(`${url}?page=${page}`);

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
    <div className="w-full h-[70px] flex justify-end items-center container mx-auto pr-[130px]">
      <div
        className="w-[130px] h-[40px] bg-cyan-600 rounded-xl px-9 py-1 font-semibold text-xl text-white cursor-pointer"
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
            <CategoryTable apiLoading={apiLoading} data={data}/>
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
    </div>
  )
}

export default CategoryList