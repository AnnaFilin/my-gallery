"use client";
import Image from "next/image";
import Link from "next/link";

const SlideImage = ({ item }) => {
  return (
    <div
      key={item.id}
      className="relative w-full h-[70vh] sm:h-[50vh] overflow-hidden"
    >
      <Link href={`/gallery/${item.genre}`} className="block w-full h-full">
        <div className="relative w-full h-full border border-2 border-primary-300   rounded-md">
          <Image
            src={item.image_urls.large || item.image_urls.test}
            alt={item.genre}
            fill
            className="object-contain w-full h-full "
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            quality={80}
          />
          {/* /// */}
          <div className="relative z-10 flex flex-col justify-center items-center h-full">
            <h3 className="text-4xl text-center px-4 capitalize text-primary-50 mb-10 tracking-tight font-normal">
              {item.genre}
            </h3>
          </div>
        </div>
      </Link>
    </div>
  );
};
export default SlideImage;
