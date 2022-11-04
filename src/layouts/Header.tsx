import React, { MouseEvent, useState } from "react";
import { Link } from "react-router-dom";

interface IHeaderProps {
  header: string;
}
interface IMenuItemProps {
  current: string;
  name: string;
  path: string;
  isMobile?: boolean;
}

const menuName = new Map<string, string>([["home", "HOME"]]);

const MenuItem = ({ current, name, path, isMobile }: IMenuItemProps) => {
  return (
    <Link
      to={path}
      className={`${
        current === name
          ? "bg-teal-800 text-white"
          : "text-gray-300 hover:bg-teal-800 hover:text-white"
      } px-3 py-2 rounded-md font-medium ${
        isMobile ? "text-base block" : "text-sm"
      }`}
      aria-current={`${current === name ? "page" : "false"}`}
    >
      {menuName.get(name)}
    </Link>
  );
};

const Header: React.FC<IHeaderProps> = ({ header }) => {
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const preventFocusOut = (event: MouseEvent) => {
    event.preventDefault();
  };

  return (
    <nav className="bg-teal-900">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center p-1 rounded-md text-gray-400 hover:text-white hover:bg-teal-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded={mobileMenuOpen}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="block h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
            <span className="text-gray-300 px-3 py-2 rounded-md text-sm font-medium">
              REACT-TS-TAILWIND
            </span>
          </div>
          <div className="flex place-items-start justify-self-start sm:items-stretch sm:justify-start">
            <div className="hidden sm:block sm:ml-1">
              <Link
                to="/"
                className="text-gray-300 px-3 py-2 rounded-md text-md font-medium whitespace-nowrap"
                aria-current="page"
              >
                REACT-TS-TAILWIND
              </Link>
            </div>
          </div>
          <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
            <div className="hidden sm:block sm:ml-6">
              <div className="flex space-x-4">
                <MenuItem current={header} name="home" path="/" />
              </div>
            </div>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <div className="ml-3 relative">
              <div>
                <button
                  type="button"
                  className="bg-teal-900 flex text-sm rounded-full focus:outline-none "
                  id="header-login-button"
                  // onClick={signIn}
                >
                  <span className="text-gray-300 hover:bg-teal-800 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                    Login
                  </span>
                </button>
              </div>
              {userMenuOpen && (
                <div
                  className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="user-menu-button"
                  tabIndex={0}
                  onMouseDown={(event) => preventFocusOut(event)}
                >
                  <div
                    className="block rounded-md px-4 py-2 text-sm text-gray-700 hover:bg-teal-700 hover:cursor-pointer"
                    role="menuitem"
                    id="user-menu-item-0"
                    // onClick={signOut}
                  >
                    Sign Out
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      {mobileMenuOpen && (
        <div className="sm:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <MenuItem current={header} name="home" path="/" isMobile />
          </div>
        </div>
      )}
    </nav>
  );
};
export default Header;
