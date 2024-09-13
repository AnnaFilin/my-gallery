"use client";
import { FaArrowLeftLong } from "react-icons/fa6";
import { useRouter } from "next/navigation";
import Image from "next/image";
import "lightgallery/css/lightgallery.css"; // Core LightGallery styles
import "lightgallery/css/lg-zoom.css"; // Zoom plugin styles
import "lightgallery/css/lg-thumbnail.css"; // Thumbnail plugin styles

const Painting = ({ painting }) => {
  const router = useRouter();
  const isLandscape = painting.width > painting.height;

  return (
    <div className="painting-container flex justify-center flex-col bg-white shadow-md rounded-lg sm:p-4">
      <div className="flex justify-between p-2">
        <h2 className="text-2xl text-gray-600 font-bold ">{painting.title}</h2>
        <button onClick={router.back} className="text-primary-600 text-3xl">
          <FaArrowLeftLong />
        </button>
      </div>

      <div className={`relative w-full ${isLandscape ? "h-auto" : "h-auto"}`}>
        {/* Frame effect with subtle border and shadow */}
        <div className="border-4 border-grey-200 p-2 rounded-lg shadow-lg">
          <Image
            src={painting.image_urls.large || painting.image_urls.test}
            alt={painting.genre || "Painting"}
            layout="responsive"
            width={painting.width}
            height={painting.height}
            className="rounded-md"
            quality={80}
          />
        </div>
      </div>

      <div className="flex justify-center flex-col mt-4 p-2">
        <ul className="details-list">
          <li className="text-md text-gray-600 mb-1">
            <strong>Size:</strong> {painting.size}
          </li>
          <li className="text-md text-gray-600 mb-1">
            <strong>Technique/Medium:</strong> {painting.technique}
          </li>
          <li className="text-md text-gray-600 mb-1">
            <strong>Year:</strong> {painting.year}
          </li>
          <li className="text-md text-gray-600 mb-1">
            <strong>Genre:</strong> {painting.genre}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Painting;
