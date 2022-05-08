import React from 'react';
import { Fragment } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/solid";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { BellIcon, MenuIcon, XIcon } from "@heroicons/react/outline";
import logo from "../../Image/Logo.png"
import { Link } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { signOut } from 'firebase/auth';

const Header = () => {
  
    function classNames(...classes) {
      return classes.filter(Boolean).join(" ");
    }

      const [user] = useAuthState(auth);

    return (
      <div>
        <Disclosure as="nav" className="bg-gray-800">
          {({ open }) => (
            <>
              <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                <div className="relative flex items-center justify-between h-16">
                  <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                    {/* Mobile menu button*/}
                    <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                      <span className="sr-only">Open main menu</span>
                      {open ? (
                        <XIcon className="block h-6 w-6" aria-hidden="true" />
                      ) : (
                        <MenuIcon
                          className="block h-6 w-6"
                          aria-hidden="true"
                        />
                      )}
                    </Disclosure.Button>
                  </div>
                  <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                    <div className="flex-shrink-0 flex items-center">
                      <img
                        className=" lg:block h-8 w-auto"
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQD3ZnZYHk_51eXAx0ppLx1nO2HFfmYDhiPS1ZGgNvRX0P9xf_dlqQDsOhliYS5iKyJFcs&usqp=CAU"
                        alt="Workflow"
                      />
                    </div>
                    <div className="hidden sm:block sm:ml-auto">
                      <div className="flex space-x-4">
                        <Link to="/">
                          <span
                            className="text-gray-300 hover:bg-gray-700 hover:text-white block
                    px-3 py-2 rounded-md text-base font-medium"
                          >
                            Home
                          </span>
                        </Link>
                        <Link to="/blog">
                          <span
                            className="text-gray-300 hover:bg-gray-700 hover:text-white block
                    px-3 py-2 rounded-md text-base font-medium"
                          >
                            Blog
                          </span>
                        </Link>

                        {user ? (
                          <Link to="/manageinventory">
                            <span
                              className="text-gray-300 hover:bg-gray-700 hover:text-white block
                    px-3 py-2 rounded-md text-base font-medium"
                            >
                              Manage-Inventory
                            </span>
                          </Link>
                        ) : (
                          <span></span>
                        )}
                        {user ? (
                          <Link to="/myitems">
                            <span
                              className="text-gray-300 hover:bg-gray-700 hover:text-white block
                    px-3 py-2 rounded-md text-base font-medium"
                            >
                              MyItems
                            </span>
                          </Link>
                        ) : (
                          <span></span>
                        )}

                        {!user ? (
                          <Link to="/register">
                            <span
                              className="text-gray-300 hover:bg-gray-700 hover:text-white block
                    px-3 py-2 rounded-md text-base font-medium"
                            >
                              Register
                            </span>
                          </Link>
                        ) : (
                          <span></span>
                        )}

                        {!user ? (
                          <Link to="/login">
                            <span
                              className="text-gray-300 hover:bg-gray-700 hover:text-white block
                    px-3 py-2 rounded-md text-base font-medium"
                            >
                              Login
                            </span>
                          </Link>
                        ) : (
                          <button
                            className="text-gray-300 hover:bg-gray-700 hover:text-white block
                    px-3 py-2 rounded-md text-base font-medium"
                            onClick={() => signOut(auth)}
                          >
                            Logout
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <Disclosure.Panel className="sm:hidden">
                <div className="px-2 pt-2 pb-3 space-y-1">
                  <Disclosure.Button>
                    {/* "text-gray-300 hover:bg-gray-700 hover:text-white", "block
                    px-3 py-2 rounded-md text-base font-medium" */}
                    <Link to="/">
                      <span
                        className="text-gray-300 hover:bg-gray-700 hover:text-white block
                    px-3 py-2 rounded-md text-base font-medium"
                      >
                        Home
                      </span>
                    </Link>
                    <Link to="/blog">
                      <span
                        className="text-gray-300 hover:bg-gray-700 hover:text-white block
                    px-3 py-2 rounded-md text-base font-medium"
                      >
                        Blog
                      </span>
                    </Link>

                    {user ? (
                      <Link to="/manageinventory">
                        <span
                          className="text-gray-300 hover:bg-gray-700 hover:text-white block
                    px-3 py-2 rounded-md text-base font-medium"
                        >
                          Manage-Inventory
                        </span>
                      </Link>
                    ) : (
                      <span></span>
                    )}
                    {user ? (
                      <Link to="/myitems">
                        <span
                          className="text-gray-300 hover:bg-gray-700 hover:text-white block
                    px-3 py-2 rounded-md text-base font-medium"
                        >
                          MyItems
                        </span>
                      </Link>
                    ) : (
                      <span></span>
                    )}

                    {!user ? (
                      <Link to="/register">
                        <span
                          className="text-gray-300 hover:bg-gray-700 hover:text-white block
                    px-3 py-2 rounded-md text-base font-medium"
                        >
                          Register
                        </span>
                      </Link>
                    ) : (
                      <span></span>
                    )}

                    {!user ? (
                      <Link to="/login">
                        <span
                          className="text-gray-300 hover:bg-gray-700 hover:text-white block
                    px-3 py-2 rounded-md text-base font-medium"
                        >
                          Login
                        </span>
                      </Link>
                    ) : (
                      <button
                        className=" text-gray-300 hover:bg-gray-700 hover:text-white "
                        onClick={() => signOut(auth)}
                      >
                        Logout
                      </button>
                    )}
                  </Disclosure.Button>
                </div>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      </div>
    );
};

export default Header;