"use client";
import Link from "next/link";
import { useState } from "react";

const GenreTabs = ({ active }) => {
  const [nav, setNav] = useState(active);
  const links = [
    {
      id: 1,
      link: "portrait",
    },
    {
      id: 2,
      link: "landscape",
    },
    {
      id: 3,
      link: "nature",
    },
    {
      id: 4,
      link: "urban",
    },
    {
      id: 5,
      link: "gouache",
    },
  ];

  return (
    <div className="flex justify-between items-center w-full h-30 px-0 text-primary-100 bg-primary-900 fixed  z-50">
      <ul className="flex flex-row sm:flex-col">
        {links.map(({ id, link }) => (
          <li
            key={id}
            className="text-3xl  text-center  mb-6 px-4 cursor-pointer capitalize font-medium text-primary-100 hover:scale-105 hover:text-primary-100 duration-200 link-underline"
          >
            <Link onClick={() => setNav(!nav)} href={link}>
              {link}
            </Link>
          </li>
        ))}
      </ul>
      {/* <h1 className="text-3xl font-bold text-center capitalize mb-6">
        {params.genre}
      </h1> */}
    </div>
  );
};

export default GenreTabs;
