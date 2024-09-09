import Image from "next/image";
import women4 from "@/public/images/women4.jpg";
import "lightgallery/css/lightgallery.css"; // Core LightGallery styles
import "lightgallery/css/lg-zoom.css"; // Zoom plugin styles
import "lightgallery/css/lg-thumbnail.css"; // Thumbnail plugin styles
// Import LightGallery plugins
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";

const Painting = () => {
  return (
    <div className="painting-container bg-white shadow-md rounded-lg p-4">
      <Image
        src={women4}
        placeholder="blur"
        quality={80}
        layout="responsive" // Use responsive layout
        width={600}
        height={400}
        className="object-cover"
        alt="Expressionism painting detail"
      />
      <h2 className="text-2xl  text-gray-600  font-bold mb-2"> title</h2>

      <ul className="details-list">
        <li className="text-sm text-gray-600 mb-1">
          <strong>Size:</strong> size
        </li>
        <li className="text-sm text-gray-600 mb-1">
          <strong>Technique/Medium:</strong> medium
        </li>
        <li className="text-sm text-gray-600 mb-1">
          <strong>Year:</strong> year
        </li>
        <li className="text-sm text-gray-600 mb-1">
          <strong>Genre:</strong> genre
        </li>
      </ul>
      {/* LightGallery for full-screen image viewing */}
      {/* <LightGallery
        plugins={[lgThumbnail, lgZoom]}
        speed={500}
        ref={lightboxRef}
      /> */}
    </div>
  );
};

export default Painting;
