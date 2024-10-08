"use client";
import Link from "next/link";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Logo from "./Logo";

const Navigation = () => {
  const [nav, setNav] = useState(false);
  const links = [
    {
      id: 1,
      link: "home",
      path: "/",
    },
    {
      id: 2,
      link: "gallery",
      path: "/gallery",
    },
    {
      id: 3,
      link: "about",
      path: "/about",
    },
    {
      id: 4,
      link: "contact",
      path: "/contact",
    },
  ];

  return (
    <div className="flex justify-between items-center w-full  px-0 text-primary-100 bg-primary-900 fixed nav z-50">
      <div>
        <Logo />
      </div>

      <ul className="hidden md:flex">
        {links.map(({ id, link, path }) => (
          <li
            key={id}
            className="nav-links px-4 cursor-pointer capitalize font-medium text-primary-100 hover:scale-105 hover:text-primary-100 duration-200 link-underline"
          >
            <Link onClick={() => setNav(!nav)} href={path}>
              {link}
            </Link>
          </li>
        ))}
      </ul>

      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 z-10 text-primary-100 md:hidden"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-primary-900 text-primary-100">
          {links.map(({ id, link, path }) => (
            <li
              key={id}
              className="px-4 cursor-pointer capitalize py-6 text-4xl"
            >
              <Link onClick={() => setNav(!nav)} href={path}>
                {link}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Navigation;
