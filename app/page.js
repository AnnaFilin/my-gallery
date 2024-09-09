"use client";
import Link from "next/link";
import Image from "next/image";
import bg from "@/public/bg.jpg";

const Page = () => {
  return (
    <div className="mt-24 relative">
      <Image
        src={bg}
        fill
        placeholder="blur"
        quality={80}
        alt="image"
        className="object-cover"
      />

      <div className="relative z-10 text-center">
        <h1 className="text-8xl text-primary-50 mb-10 tracking-tight font-normal">
          Welcome to Filin Art.
        </h1>
        <Link
          href="/gallery"
          className="bg-accent-500 px-8 py-6 text-primary-800 text-5xl font-semibold hover:bg-accent-600 transition-all focus:outline-none focus-visible:outline-none"
        >
          Gallery
        </Link>
      </div>
    </div>
  );
};
export default Page;
