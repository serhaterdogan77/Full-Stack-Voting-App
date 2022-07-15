import React from 'react'
import { Link } from "react-router-dom"

function Footer() {
  return (
    <div className='p-4 bg-white rounded-lg shadow md:px-6 md:py-8 dark:bg-[#150E21]'>
        <div className="sm:flex sm:items-center sm:justify-between mx-28">
            <Link to="/" className="flex items-center mb-4 sm:mb-0">
                <img src="https://flowbite.com/docs/images/logo.svg" className="mr-3 h-8" alt="Flowbite Logo" />
                <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Sepoll</span>
            </Link>
            <ul className="flex flex-wrap items-center mb-6 text-sm text-white sm:mb-0 dark:text-white font-normal">
                <li>
                    <Link to="/" className="mr-4 hover:underline md:mr-6">Questions</Link>
                </li>
                <li>
                    <Link to="/" className="mr-4 hover:underline md:mr-6">New Question</Link>
                </li>
                
            </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm text-white sm:text-center dark:text-white">© 2022 <Link to="/" className="hover:underline">Sepoll</Link>. All Rights Reserved.
        </span>
    </div>
  )
}

export default Footer