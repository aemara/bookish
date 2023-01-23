import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Tooltip } from "@mui/material";
import {
  faMagnifyingGlass,
  faHeart,
  faCartShopping,
} from "@fortawesome/free-solid-svg-icons";
import "./Header.css";

export default function Header() {
  return (
    <header className="border-b-2 pb-4">
      <div className="bg-zinc-200 text-slate-800 py-2">
        <div className="max-w-7xl w-5/6 text-sm tracking-wider mx-auto flex gap-x-3">
          <a
            href="/"
            className="font-light uppercase hover:text-slate-500 transition"
          >
            sign in
          </a>
          <span>|</span>
          <a
            href="/"
            className="font-light uppercase hover:text-slate-500 transition"
          >
            sign up
          </a>
        </div>
      </div>

      <div className="text-neutral-900 py-3">
        <div className=" max-w-7xl w-5/6 mx-auto flex justify-between items-center">
          <h1 className="text-white bg-slate-800 p-2  text-5xl tracking-wider font-black">
            bookish
          </h1>
          <div className="flex justify-between items-center">
            <div className="mr-7 flex">
              <input
                type="text"
                placeholder="Search our books"
                className="border-y border-l border-slate-400
             hover:border-slate-900 focus:outline-none focus:border-slate-900 active:border-slate-900 transition px-2 py-2"
              />
              <div className="bg-slate-900 p-2 hover:bg-slate-600 transition hover:cursor-pointer w-fit">
                <button>
                  <FontAwesomeIcon
                    icon={faMagnifyingGlass}
                    size="xl"
                    color="white"
                  />
                </button>
              </div>
            </div>

            <Tooltip title="Wishlist">
              <button className="mr-5">
                <FontAwesomeIcon icon={faHeart} size="2xl" />
              </button>
            </Tooltip>
            <Tooltip title="Cart">
              <button>
                <FontAwesomeIcon icon={faCartShopping} size="2xl" />
              </button>
            </Tooltip>
          </div>
        </div>
      </div>

      <nav className="max-w-7xl w-5/6 mx-auto mt-2">
        <ul className="flex justify-between text-slate-900 font-medium text-l">
          <li className="hover:text-slate-500 hover:cursor-pointer transition">
            shop books
          </li>
          <li className="hover:text-slate-500 hover:cursor-pointer transition">
            NY Times bestsellers
          </li>
          <li className="hover:text-slate-500 hover:cursor-pointer transition">
            project gutenberg
          </li>
          <li className="hover:text-slate-500 hover:cursor-pointer transition">
            open library
          </li>
        </ul>
      </nav>
    </header>
  );
}
