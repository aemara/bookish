import React from "react";

export default function Header() {
  return (
    <header>
      <div className="bg-gray-200 text-gray-700 py-2">
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
    </header>
  );
}
