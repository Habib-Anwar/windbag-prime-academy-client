import { useState } from 'react';
import logo from '../../../assets/logo.png'

function DropdownMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative lg:hidden">
      <button
        type="button"
        className="text-dark hover:text-primary focus:outline-none"
        onClick={toggleMenu}
      >
        <svg
          className="h-6 w-6 fill-current"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M3 5h18a1 1 0 0 1 0 2H3a1 1 0 1 1 0-2zm0 6h18a1 1 0 0 1 0 2H3a1 1 0 1 1 0-2zm0 6h18a1 1 0 0 1 0 2H3a1 1 0 1 1 0-2z"
          />
        </svg>
      </button>
      {isOpen && (
        <nav className="absolute right-0 mt-2 w-40 bg-white rounded-lg shadow-lg">
          <ul>
            <li>
              <a
                href="javascript:void(0)"
                className="block px-4 py-2 text-dark hover:text-primary text-lg font-medium"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="javascript:void(0)"
                className="block px-4 py-2 text-dark hover:text-primary text-lg font-medium"
              >
                Payment
              </a>
            </li>
            <li>
              <a
                href="javascript:void(0)"
                className="block px-4 py-2 text-dark hover:text-primary text-lg font-medium"
              >
                Features
              </a>
            </li>
          </ul>
        </nav>
      )}
    </div>
  );
}

function Navbar() {
  return (
    <header className="flex w-full items-center bg-white">
      <div className="container mx-auto">
        <div className="relative -mx-4 flex items-center justify-between">
          <div className="w-60 max-w-full px-4">
            <a href="javascript:void(0)" className="block w-full py-5">
              <img
                src={logo}
                alt="logo"
                className="w-full rounded-lg"
              />
            </a>
          </div>
          <div className="flex w-full items-center justify-between px-4">
            <DropdownMenu />
            <nav className="hidden lg:block ml-72">
              <ul className="flex space-x-12">
                <li>
                  <a
                    href="javascript:void(0)"
                    className="text-dark hover:text-primary text-lg font-medium "
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="javascript:void(0)"
                    className="text-dark hover:text-primary text-lg font-medium"
                  >
                    Instructors
                  </a>
                </li>
                <li>
                  <a
                    href="javascript:void(0)"
                    className="text-dark hover:text-primary text-lg font-medium"
                  >
                    Classes
                  </a>
                </li>
              </ul>
            </nav>
            <div className="hidden justify-end pr-16 sm:flex lg:pr-0">
              <a
                href="javascript:void(0)"
                className="bg-primary rounded-lg py-3 px-7 text-lg font-medium text-white hover:bg-opacity-90"
              >
                Login
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;