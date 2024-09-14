"use client";
import Link from "next/link";
import Image from "next/image";
import bg from "@/public/bg.jpg";

const Page = () => {
  return (
    <div className=" flex flex-nowrap">
      <Image
        src={bg}
        fill
        // placeholder="blur"
        quality={80}
        alt="image"
        className="object-cover w-full h-full "
        // sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />

      <div className="relative z-10 text-center">
        <h1 className="text-8xl text-primary-50 mb-10 tracking-tight font-normal">
          Welcome to Filin Art.
        </h1>
        <Link
          href="/gallery"
          className=" px-8 py-6 text-primary-800 text-5xl font-semibold "
        >
          Gallery
        </Link>
      </div>
    </div>
  );
};
export default Page;
