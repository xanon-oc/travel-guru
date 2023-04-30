import { NavLink } from "react-router-dom";
import logo from "../assets/default-monochrome.svg";
const Header = () => {
  return (
    <header aria-label="Site Header" className="shadow-sm">
      <div className="mx-auto flex h-16 max-w-screen-xl items-center justify-between px-4">
        <div className="flex w-0 flex-1 lg:hidden">
          <button
            className="rounded-full bg-white-100 p-2 text-white-600"
            type="button"
          >
            <span className="sr-only">Account</span>
            <svg
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
              ></path>
            </svg>
          </button>
        </div>

        <div className="flex items-center gap-4">
          <a href="#">
            <img src={logo} className="w-[120px] h-[56px] mr-8" alt="" />
            <span className="h-10 w-20 rounded-lg bg-white-200"></span>
          </a>

          <form className="mb-0 hidden   lg:flex">
            <div className="relative">
              <input
                className="w-[370px] h-[44px] p-4 rounded-lg border-white-200 ps-10 text-base  focus:z-10 bg-transparent border text-white  placeholder-slate-100"
                placeholder="Search your Destination..."
                style={{ backgroundColor: "rgba(255, 255, 255, 0.2)" }}
                type="search"
              />

              <button
                type="submit"
                className="absolute inset-y-0 left-0  rounded-r-lg p-3 text-white-600"
              >
                <span className="sr-only">Submit Search</span>
                <svg
                  className="h-5 w-5"
                  fill="white"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    clipRule="evenodd"
                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                    fillRule="evenodd"
                  ></path>
                </svg>
              </button>
            </div>
          </form>
        </div>

        <div className="flex w-0 flex-1 justify-end lg:hidden">
          <button
            className="rounded-full bg-white-100 p-2 text-white-500"
            type="button"
          >
            <span className="sr-only">Menu</span>
            <svg
              className="h-5 w-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                clipRule="evenodd"
                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                fillRule="evenodd"
              ></path>
            </svg>
          </button>
        </div>

        <nav
          aria-label="Site Nav"
          className="hidden items-center justify-center gap-8 text-base font-medium lg:flex lg:w-0 lg:flex-1"
        >
          <a className="text-white" href="">
            News
          </a>
          <a className="text-white" href="">
            Destination
          </a>
          <a className="text-white" href="">
            Blog
          </a>
          <a className="text-white" href="">
            Contact
          </a>
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <a
            href="#"
            className="rounded-lg bg-[#F9A51A] px-5 py-2 text-base  font-medium text-white-600"
          >
            Log in
          </a>
        </div>
      </div>

      <div className="border-t border-white-100 lg:hidden">
        <nav className="flex items-center justify-center overflow-x-auto p-4 text-sm font-medium">
          <NavLink to="/"> News</NavLink>
          <NavLink to="/">Destination</NavLink>
          <NavLink to="/">Blog</NavLink>
          <NavLink to="/">Contact</NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Header;
