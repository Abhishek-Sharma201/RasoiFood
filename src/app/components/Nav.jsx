"use client";
import React from "react";

const Nav = () => {
  const [smallScreen, setSmallScreen] = React.useState(false);
  React.useEffect(() => {
    window.addEventListener("resize", () =>
      setSmallScreen(window.innerWidth <= 768 ? true : false)
    );
  }, []);

  return (
    <nav className="w-full h-[10dvh] flex items-center justify-between px-28 bg-zinc-950">
      <div className="w-[max-content] h-full flex items-center justify-center cursor-pointer">
        Logo
      </div>
      {smallScreen ? (
        ""
      ) : (
        <ul className="w-[max-content] h-full p-3 gap-8 flex items-center justify-between">
          <li className="w-[max-content] h-full p-2 flex items-center justify-center cursor-pointer">
            Home
          </li>
          <li className="w-[max-content] h-full p-2 flex items-center justify-center cursor-pointer">
            About
          </li>
          <li className="w-[max-content] h-full p-2 flex items-center justify-center cursor-pointer">
            Login
          </li>
          <li className="w-[max-content] h-full p-2 flex items-center justify-center cursor-pointer">
            Dashboard
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Nav;
