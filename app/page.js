"use client";
import Link from "next/link";
import Image from "next/image";
import bg from "@/public/bg.jpg";

const Page = () => {
  return (
    <div className="relative w-full h-screen">
      <Image
        src={bg}
        fill
        quality={80}
        alt="background image"
        className="object-cover w-full h-full z-0"
      />

      <div className="relative z-10 flex flex-col justify-center items-center h-full">
        <h1 className="text-7xl text-center px-4 text-primary-50 mb-10 tracking-tight font-normal">
          Welcome to Filin Art.
        </h1>
        <Link
          href="/gallery"
          className="px-8 py-6 text-primary-50 text-5xl font-semibold hover:font-bold"
        >
          Gallery
        </Link>
      </div>
    </div>
  );
};
export default Page;
