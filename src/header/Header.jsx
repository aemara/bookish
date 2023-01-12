import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import "./Header.css";

export default function Header() {
  return (
    <header className="border-b-2 pb-4">
      <div className="bg-slate-300 text-slate-800 py-2">
        <div className="w-5/6 text-sm tracking-wider mx-auto flex gap-x-3">
          <a href="/" className="font-light uppercase">
            sign in
          </a>
          <span>|</span>
          <a href="/" className="font-light uppercase">
            sign up
          </a>
        </div>
      </div>

      <div className="text-slate-800 py-3">
        <div className="w-5/6 mx-auto flex justify-between items-center">
          <h1 className="text-white bg-slate-800 p-2  text-5xl tracking-wider font-black">
            bookish
          </h1>
          <div className="">
            <input
              type="text"
              placeholder="Search our books"
              className="border
            border-slate-500 hover:border-slate-900 focus:outline-none focus:border-slate-900 active:border-slate-900 px-2 py-2 mr-1"
            />
            <button class="bg-slate-900 p-2 hover:bg-slate-600"><FontAwesomeIcon icon={faMagnifyingGlass} size="xl" color="white"/></button>
          </div>
        </div>
      </div>

      <nav className="w-5/6 mx-auto mt-2">
        <ul className="flex justify-between text-slate-900 font-medium text-l">
          <li className="hover:text-slate-500 hover:cursor-pointer">shop books</li>
          <li className="hover:text-slate-500 hover:cursor-pointer">NYT best sellers</li>
          <li className="hover:text-slate-500 hover:cursor-pointer">project gutenberg</li>
          <li className="hover:text-slate-500 hover:cursor-pointer">open library</li>
        </ul>
      </nav>
    </header>
  );
}
