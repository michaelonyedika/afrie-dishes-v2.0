import React, { useState } from "react";
import bitter_leaf from "../assets/bitter leaf.jpeg";
import abacha from "../assets/abacha.jpg";
import egusi from "../assets/egusi.jpg";
import ewedu from "../assets/ewedu.webp";
import nkwobi from "../assets/nkwobi.jpg";
import okra from "../assets/okra.jpg";

import SideBarApp from "./SideBarApp_2";
import { GiKnifeFork } from "react-icons/gi";

const Home = () => {
  const [ismenuOpen, setIsmenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsmenuOpen(!ismenuOpen);
  };

  return (
    <div>
      <div className="font-body text-gray-600 md:flex md:relative md:w-full">
        {/* <!-- Content Wrapper --> */}
        <div className="md:fixed md:h-full md:w-20 lg:w-72">
          {/* <!-- Nav  --> */}

          {/* SideBar */}
          <SideBarApp />
          <nav className="">
            <div className="flex justify-between items-center md:hidden">
              {/* <!-- Logo  --> */}
              <h1 className="font-bold uppercase p-4 border-b border-gray-100">
                <GiKnifeFork
                  className={`bg-amber-300 text-2xl rounded 
                  cursor-pointer duration-500 block float-left 
                   mr-2 text-dark-purple`}
                />
                <a href="#" className="hover:text-gray-700 tracking-widest">
                  <span>Afrie Dishes</span>
                </a>
              </h1>
              <div
                className="px-4 md:hidden cursor-pointer"
                id="burger"
                onClick={handleMenuToggle}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-6 w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              </div>
            </div>

            <ul
              className={`text-sm mt-6  ${
                ismenuOpen ? "" : "hidden"
              } md:hidden`}
            >
              <li className="text-gray-700 font-bold py-1">
                <a
                  href="#"
                  className="px-4 flex justify-end items-center border-r-4 border-primary"
                >
                  <span>Home</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-6 w-5 ml-2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                    />
                  </svg>
                </a>
              </li>
              <li className="py-1">
                <a
                  href="#"
                  className="px-4 flex justify-end items-center border-r-2 border-white"
                >
                  <span>About</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-6 w-5 ml-2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 18v-5.25m0 0a6.01 6.01 0 0 0 1.5-.189m-1.5.189a6.01 6.01 0 0 1-1.5-.189m3.75 7.478a12.06 12.06 0 0 1-4.5 0m3.75 2.383a14.406 14.406 0 0 1-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 1 0-7.517 0c.85.493 1.509 1.333 1.509 2.316V18"
                    />
                  </svg>
                </a>
              </li>
              <li className="py-1">
                <a
                  href="#"
                  className="px-4 flex justify-end items-center border-r-2 border-white"
                >
                  <span>Contact</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-6 w-5 ml-2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                    />
                  </svg>
                </a>
              </li>
            </ul>
          </nav>
          {/* <!-- Nav bar endes here --> */}
        </div>

        <main
          className="bg-gray-100 px-16 py-6 md:flex-1 md:absolute w-full md:w-sidebar-main-md 
          lg:w-sidebar-main-lg md:left-20 lg:left-72"
        >
          {/* <!-- Main content --> */}
          <div className="flex justify-center md:justify-end">
            {/* <!-- Login --> */}
            <a
              href="#"
              className="btn_2 text-primary md:border-2 md:border-primary hover:bg-primary hover:text-white"
            >
              Log in
            </a>
            <a
              href="#"
              className="btn_2 text-primary md:border-2 md:border-primary ml-2 hover:bg-primary hover:text-white"
            >
              Sign up
            </a>
          </div>

          <header className="mt-4">
            <h1 className="text-gray-700 text-4xl md:text-5xl lg:text-6xl font-semibold leading-none tracking-wider">
              Recipes
            </h1>
            <h3 className="text-2xl font-semibold tracking-wider">
              For Chef's
            </h3>
          </header>

          <div>
            <h4 className="font-bold pb-2 mt-12 border-b border-gray-200">
              Latest Recipes
            </h4>

            <div className="mt-8 grid gap-10 md:grid-cols-2 lg:grid-cols-3">
              {/* <!-- card  --> */}
              <div className="card_2">
                <img
                  className="h-32 sm:h-48 w-full object-cover"
                  src={egusi}
                  alt="egusi"
                />
                <div className="m-4">
                  <span className="font-bold">Egusi Soup</span>
                  <span className="block text-gray-500 text-sm">
                    Recipe by Aku
                  </span>
                </div>

                <div className="badge_2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-6 inline-block w-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                    />
                  </svg>
                  <span>25 mins</span>
                </div>
              </div>

              <div className="card_2">
                <img
                  className="h-32 sm:h-48 w-full object-cover"
                  src={abacha}
                  alt="abacha"
                />
                <div className="m-4">
                  <span className="font-bold">Abacha</span>
                  <span className="block text-gray-500 text-sm">
                    Recipe by Aku
                  </span>
                </div>

                <div className="badge_2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-6 inline-block w-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                    />
                  </svg>
                  <span>6 mins</span>
                </div>
              </div>

              <div className="card_2">
                <img
                  className="h-32 sm:h-48 w-full object-cover"
                  src={okra}
                  alt="okra"
                />
                <div className="m-4">
                  <span className="font-bold">Okra Soup</span>
                  <span className="block text-gray-500 text-sm">
                    Recipe by Aku
                  </span>
                </div>

                <div className="badge_2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-6 inline-block w-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                    />
                  </svg>
                  <span>18 mins</span>
                </div>
              </div>
            </div>

            <h4 className="font-bold pb-2 mt-12 border-b border-gray-200">
              Most Popular
            </h4>

            <div className="mt-8 grid gap-10 md:grid-cols-2 lg:grid-cols-3">
              {/* <!-- card  --> */}
              <div className="card_2">
                <img
                  className="h-32 sm:h-48 w-full object-cover"
                  src={ewedu}
                  alt="ewedu"
                />
                <div className="m-4">
                  <span className="font-bold">Ewedu Food</span>
                  <span className="block text-gray-500 text-sm">
                    Recipe by Aku
                  </span>
                </div>

                <div className="badge_2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-6 inline-block w-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                    />
                  </svg>
                  <span>15 mins</span>
                </div>
              </div>

              <div className="card_2">
                <img
                  className="h-32 sm:h-48 w-full object-cover"
                  src={nkwobi}
                  alt="nkwobi"
                />
                <div className="m-4">
                  <span className="font-bold">Nkwobi Goat Head</span>
                  <span className="block text-gray-500 text-sm">
                    Recipe by Aku
                  </span>
                </div>

                <div className="badge_2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-6 inline-block w-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                    />
                  </svg>
                  <span>12 mins</span>
                </div>
              </div>

              <div className="card_2">
                <img
                  className="h-32 sm:h-48 w-full object-cover"
                  src={bitter_leaf}
                  alt="bitter_leaf"
                />
                <div className="m-4">
                  <span className="font-bold">Bitter Leaf</span>
                  <span className="block text-gray-500 text-sm">
                    Recipe by Aku
                  </span>
                </div>

                <div className="badge_2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-6 inline-block w-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                    />
                  </svg>
                  <span>19 mins</span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 flex justify-center">
            <div className="btn_2 bg-secondary-100 text-secondary-200 inline-block hover:shadow-inner transform hover:scale-125 hover:bg-opacity-50 ease-out duration-300">
              Load More
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Home;
