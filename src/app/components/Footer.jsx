import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="w-full h-[max-content] px-4 flex flex-wrap items-center justify-start sm:justify-evenly lg:justify-evenly gap-8 lg:px-20 py-8 relative">
      <section className="w-[max-content] h-full flex flex-col items-center justify-center gap-4 px-16 py-4">
        Logo
      </section>
      <section className="w-[max-content] h-full flex flex-col items-center justify-center gap-8 px-8 lg:px-16 py-4">
        <h2>Quick Links</h2>
        <ul className="w-[max-content] h-full flex flex-col items-center justify-center gap-2">
          <Link
            href={"/"}
            className="hover:text-blue-500 hover:tracking-widest"
          >
            Link
          </Link>
          <Link
            href={"/"}
            className="hover:text-blue-500 hover:tracking-widest"
          >
            Link
          </Link>
          <Link
            href={"/"}
            className="hover:text-blue-500 hover:tracking-widest"
          >
            Link
          </Link>
          <Link
            href={"/"}
            className="hover:text-blue-500 hover:tracking-widest"
          >
            Link
          </Link>
        </ul>
      </section>
      <section className="w-[max-content] h-full flex flex-col items-center justify-center gap-8 px-8 lg:px-16 py-4">
        <h2>Socials</h2>
        <ul className="w-[max-content] h-full flex flex-col items-center justify-center gap-2">
          <Link
            href={"/"}
            className="hover:text-blue-500 hover:tracking-widest"
          >
            Link
          </Link>
          <Link
            href={"/"}
            className="hover:text-blue-500 hover:tracking-widest"
          >
            Link
          </Link>
          <Link
            href={"/"}
            className="hover:text-blue-500 hover:tracking-widest"
          >
            Link
          </Link>
          <Link
            href={"/"}
            className="hover:text-blue-500 hover:tracking-widest"
          >
            Link
          </Link>
        </ul>
      </section>
    </footer>
  );
};

export default Footer;
