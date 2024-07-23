import { useState } from "react";
import Form from "../Sellerportal/Form";
import Home from "../Home";
import { Routes } from "react-router-dom/dist";
import { Link } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [menuOne, setMenuOne] = useState(false);

  return (
    <section className="  ">
      <nav className=" sticky top-0 font-inter mx-auto h-auto w-full max-w-screen-2xl lg:relative lg:top-0 shadow-lg">
        <div className="flex flex-col px-6 py-6 lg:flex-row lg:items-center lg:justify-between lg:px-10 lg:py-4 xl:px-20">
          <Link href to="/" className="font-bold text-green">
           
            {`VIRTUAL FARMER'S MARKET`} 
          </Link>
          
          <div
            className={`mt-14 flex flex-col space-y-8 lg:mt-0 lg:flex lg:flex-row lg:space-x-1 lg:space-y-0 ${
              isOpen ? "" : "hidden"
            }`}
          >
            <div className="relative flex flex-col">
              <Link
                href
                to="/Marketplace"
                className={`flex flex-row rounded-lg lg:px-6 lg:py-4 lg: lg:hover:text-gray-800 ${
                  menuOne
                    ? "text-gray-800 lg:border lg:border-gray-600 lg:bg-gray-50"
                    : "text-green lg:border lg:border-white"
                }`}
              >
                Market Place
              </Link>
             
            </div>
            <Link
              href
              to="/Create"
              className="font-inter rounded-lg lg:px-6 lg:py-4 lg: lg:hover:text-gray-800 text-green"
            >
              {`Seller's Portal`}
            </Link>
            <a
              href="#"
              className="font-inter rounded-lg lg:px-6 lg:py-4 lg: lg:hover:text-gray-800 text-green"
            >
              Contact Us
            </a>
          </div>
          <div
            className={`flex flex-col space-y-8 lg:flex lg:flex-row lg:space-x-3 lg:space-y-0 ${
              isOpen ? "" : "hidden"
            }`}
          >
            <a
              href="#"
              className="font-inter rounded-lg lg:px-6 lg:py-4 lg: lg:hover:text-gray-800 text-green"
            >
              Sign Up
            </a>
            <a
              className="font-inter rounded-lg bg-green px-8 py-4 text-center text-white hover:bg-gray-800"
              href="#"
            >
              Login
            </a>
          </div>
          <button
            className="absolute right-5 lg:hidden"
            onClick={() => {
              setIsOpen(!isOpen);
            }}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3.75 12H20.25"
                stroke="#160042"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
              <path
                d="M3.75 6H20.25"
                stroke="#160042"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
              <path
                d="M3.75 18H20.25"
                stroke="#160042"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </svg>
          </button>
        </div>
      </nav>
    </section>
  );
}

export default Navbar;
