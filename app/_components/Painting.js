import Image from "next/image";
import "lightgallery/css/lightgallery.css"; // Core LightGallery styles
import "lightgallery/css/lg-zoom.css"; // Zoom plugin styles
import "lightgallery/css/lg-thumbnail.css"; // Thumbnail plugin styles
// Import LightGallery plugins
// import lgThumbnail from "lightgallery/plugins/thumbnail";
// import lgZoom from "lightgallery/plugins/zoom";
const imageStyle = {
  borderRadius: "1%",
  border: "1px solid #fff",
};

const Painting = ({ painting }) => {
  console.log("painting width : ", painting);
  return (
    <div className="painting-container flex justify-center flex-col bg-white shadow-md rounded-lg sm:p-4">
      {/* <Image
        src={painting.image_urls.test}
        placeholder="blur"
        blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAAQABAAD/2wBDAAUDBAQEAwUEBAQFBQUGBwwIBwcHBw8LCwkMEQ8SEhEPERETFhwXExQaFRERGCEYGh0dHx8fExciJCIeJBweHx7/2wBDAQUFBQcGBw4ICA4eFBEUHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh7/wAARCAAKAAoDASIAAhEBAxEB/8QAFwAAAwEAAAAAAAAAAAAAAAAAAwUGB//EACYQAAIABQMCBwAAAAAAAAAAAAECAwQFESEABhIHExQVIiMxUbL/xAAVAQEBAAAAAAAAAAAAAAAAAAAABv/EABwRAAEEAwEAAAAAAAAAAAAAAAEAAgMEESFBsf/aAAwDAQACEQMRAD8ALQ6I+59iqkFg8xLRZiUhszDhA5uj921r3FvkZwPvSvcG6KJ59UOUFHPiol2MIZ9Zzql6Jm1Eq1se+v5XWCzDu0eIzMzMWJJJyTfQbyp51h8NOAt6PF//2Q=="
        quality={80}
        width={painting.width}
        height={painting.height}
        objectFit="contain"
        style={imageStyle}
        alt="Expressionism painting detail"
      /> */}
      <div className="relative w-full h-[70vh] sm:h-[50vh]">
        <Image
          src={painting.image_urls.large || painting.image_urls.test}
          alt={painting.genre || "Painting"}
          fill
          className="object-contain"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          quality={80}
        />
      </div>
      <div className="flex justify-center flex-col">
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
      </div>
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
