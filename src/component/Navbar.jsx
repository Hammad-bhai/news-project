import React, { useState } from 'react';

const Navbar = ({ setCategory }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState()

  return (
    <nav className="sticky h-[80px] top-0 z-10 select-none bg-white shadow dark:bg-gray-800">
      <div className="container px-6 py-3 mx-auto lg:flex">
        <div className="flex items-center justify-between">
          <img className="h-14" src="bglogo.png" alt="Logo" />

          <div className="flex lg:hidden">
            <button onClick={() => setIsOpen(!isOpen)} type="button" className="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400" aria-label="toggle menu">
              {isOpen ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 8h16M4 16h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        <div className={`absolute inset-x-0 z-20 w-full px-6 py-4 transition-all duration-300 ease-in-out bg-white dark:bg-gray-800 lg:mt-0 lg:p-0 lg:top-0 lg:relative lg:opacity-100 lg:translate-x-0 lg:flex lg:items-center lg:justify-between ${isOpen ? 'translate-x-0 opacity-100' : 'opacity-0 -translate-x-full'}`}>
          <div className="flex flex-col px-2 -mx-4 lg:flex-row lg:mx-10 lg:py-0">
            <button onClick={() => {
              setCategory("general")
              setIsOpen(!isOpen)
            }} className="px-2.5 py-2 text-gray-700 transition-colors transform rounded-lg dark:text-gray-200 max-lg:hover:bg-gray-600 lg:hover:text-red-600 lg:mx-2">
              General
            </button>
            <button onClick={() => {
              setCategory("health")
              setIsOpen(!isOpen)
            }} className="px-2.5 py-2 text-gray-700 transition-colors transform rounded-lg dark:text-gray-200 max-lg:hover:bg-gray-600 lg:hover:text-red-600 lg:mx-2">
              Health
            </button>
            <button onClick={() => {
              setCategory("science")
              setIsOpen(!isOpen)
            }} className="px-2.5 py-2 text-gray-700 transition-colors transform rounded-lg dark:text-gray-200 max-lg:hover:bg-gray-600 lg:hover:text-red-600 lg:mx-2">
              Science
            </button>
            <button onClick={() => {
              setCategory("technology")
              setIsOpen(!isOpen)
            }} className="px-2.5 py-2 text-gray-700 transition-colors transform rounded-lg dark:text-gray-200 max-lg:hover:bg-gray-600 lg:hover:text-red-600 lg:mx-2">
              Technology
            </button>
            <button onClick={() => {
              setCategory("sports")
              setIsOpen(!isOpen)
            }} className="px-2.5 py-2 text-gray-700 transition-colors transform rounded-lg dark:text-gray-200 max-lg:hover:bg-gray-600 lg:hover:text-red-600 lg:mx-2">
              Sports
            </button>
          </div>

          <div className="relative mt-4 lg:mt-0">
            <input type="text" maxLength={18} onChange={(e) => setSearch(e.target.value)} className="w-full py-2 pl-5 pr-4 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-opacity-40 focus:ring-blue-300" placeholder="Search" />

            <span onClick={() => {if(search && search.trim() !== ""){setCategory(search.trim())}setIsOpen(!isOpen)}} className="absolute inset-y-0 right-3 cursor-pointer flex items-center pl-3">
              <svg className="w-5 h-5 text-gray-400" viewBox="0 0 24 24" fill="none">
                <path d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
