"use client";
import Link from "next/link";
import { useState } from "react";

const GenreTabs = ({ active }) => {
  const [nav, setNav] = useState(active); // Manage active link state

  const links = [
    { id: 1, link: "portrait" },
    { id: 2, link: "landscape" },
    { id: 3, link: "nature" },
    { id: 4, link: "urban" },
    // { id: 5, link: "gouache" },
  ];

  return (
    <div className="w-full bg-primary-900 z-50">
      <div className="flex justify-center items-center overflow-x-auto whitespace-nowrap px-4 py-5 scrollbar-hide">
        <ul className="flex space-x-6">
          {links.map(({ id, link }) => (
            <li
              key={id}
              className="text-3xl capitalize text-primary-100 hover:scale-105 transition-transform duration-200"
            >
              <Link href={link} className="block px-4 py-2">
                {link}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default GenreTabs;
