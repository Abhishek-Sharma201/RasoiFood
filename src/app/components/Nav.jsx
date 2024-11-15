"use client";
import Link from "next/link";
import React from "react";

const Nav = () => {
  const [smallScreen, setSmallScreen] = React.useState(false);
  React.useEffect(() => {
    window.addEventListener("resize", () =>
      setSmallScreen(window.innerWidth <= 768 ? true : false)
    );
  }, [smallScreen]);

  return (
    <nav className="text-white w-full h-[10dvh] lg:px-28 flex items-center justify-between px-12 bg-zinc-950">
      <div className="w-[max-content] h-full flex items-center justify-center cursor-pointer">
        Logo
      </div>
      {smallScreen ? (
        <span>Menu</span>
      ) : (
        <ul className="w-[max-content] h-full p-3 gap-8 flex items-center justify-between">
          <li className="w-[max-content] h-full p-2 flex items-center justify-center cursor-pointer">
            <Link
              href={"/"}
              className="text-[.9rem] hover:border-b-1 hover:border-b-blue-500 hover:border-b-2"
            >
              Home
            </Link>
          </li>
          <li className="w-[max-content] h-full p-2 flex items-center justify-center cursor-pointer">
            <Link
              href={"/about"}
              className="text-[.9rem] hover:border-b-1 hover:border-b-blue-500 hover:border-b-2"
            >
              About
            </Link>
          </li>
          <li className="w-[max-content] h-full p-2 flex items-center justify-center cursor-pointer">
            <Link
              href={"/login"}
              className="text-[.9rem] hover:border-b-1 hover:border-b-blue-500 hover:border-b-2"
            >
              Login
            </Link>
          </li>
          <li className="w-[max-content] h-full p-2 flex items-center justify-center cursor-pointer">
            <Link
              href={"/dashboard"}
              className="text-[.9rem] hover:border-b-1 hover:border-b-blue-500 hover:border-b-2"
            >
              Dashboard
            </Link>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Nav;
