"use client";
import Image from "next/image";
import Link from "next/link";
import Slider from "react-slick"; // Import React-Slick
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const NextArrow = (props) => {
  const { onClick } = props;
  return (
    <div
      className="absolute top-1/2 right-4 transform -translate-y-1/2 cursor-pointer text-xl outline-none border-none shadow-none focus-visible:outline-none"
      onClick={onClick}
    >
      ▶
    </div>
  );
};

const PrevArrow = (props) => {
  const { onClick } = props;
  return (
    <div
      className="absolute top-1/2 left-4 transform translate-y-1/2 cursor-pointer text-xl outline-none border-none shadow-none hover:outline-none focus-visible:outline-none"
      onClick={onClick}
    >
      ◀
    </div>
  );
};

const ArtSlider = ({ artworks }) => {
  console.log("ar", artworks);
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <div>
      <Slider {...settings}>
        {artworks.map((item) => (
          <div
            key={item.id}
            className="  border-none shadow-none hover:shadow-none focus-visible:outline-none"
          >
            {/* // {" "}
        // Remove borders/shadows */}
            {/* px-8 py-6 */}
            <Link
              href={`/gallery/${item.genre}`}
              key={item.id}
              className=" text-primary-800 text-5xl font-semibold hover:bg-accent-600 transition-all focus:outline-none focus-visible:outline-none"
            >
              <div className="block text-center text-xl font-semibold hover:text-accent-400 transition-colors capitalize outline-none border-none shadow-none focus-visible:outline-none hover:outline-none">
                {item.genre}
                <Image
                  src={item.image_urls.test}
                  alt={item.genre}
                  quality={80}
                  layout="responsive" // Use responsive layout
                  width={600}
                  height={400}
                  className="object-cover"
                />
              </div>
            </Link>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ArtSlider;
