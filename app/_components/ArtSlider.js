"use client";
import Image from "next/image";
import Link from "next/link";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const NextArrow = (props) => {
  const { onClick } = props;
  return (
    <div
      className="absolute top-1/2 right-4 transform -translate-y-1/2 cursor-pointer text-xl"
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
      className="absolute top-1/2 left-4 transform -translate-y-1/2 cursor-pointer text-xl"
      onClick={onClick}
    >
      ◀
    </div>
  );
};

const ArtSlider = ({ artworks }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
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
  };

  return (
    <div className="w-full max-w-screen-lg mx-auto relative">
      <Slider {...settings}>
        {artworks.map((item) => (
          <div
            key={item.id}
            className="relative w-full h-[70vh] sm:h-[50vh] overflow-hidden"
          >
            <Link
              href={`/gallery/${item.genre}`}
              className="block w-full h-full"
            >
              <div className="relative w-full h-full">
                <Image
                  src={item.image_urls.large || item.image_urls.test}
                  alt={item.genre}
                  fill
                  className="object-contain w-full h-full"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  quality={80}
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
