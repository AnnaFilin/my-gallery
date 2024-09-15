"use client";
import { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import LightGallery from "lightgallery/react";
import lgZoom from "lightgallery/plugins/zoom";
import lgShare from "lightgallery/plugins/share";
import lgHash from "lightgallery/plugins/hash";
import "lightgallery/css/lightgallery.css"; // Core LightGallery styles
import "lightgallery/css/lg-zoom.css"; // Zoom plugin styles
import "lightgallery/css/lg-thumbnail.css"; // Thumbnail plugin styles
import SlideImage from "./SlideImage";

// Next Arrow Component
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

// Prev Arrow Component
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

// Slider Component
const ArtSlider = ({ artworks }) => {
  const lightGallery = useRef(null); // Ref for LightGallery

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000, // Set to 4 seconds for quicker transition
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
      {/* LightGallery */}
      <LightGallery
        onInit={(detail) => {
          lightGallery.current = detail.instance;
        }}
        plugins={[lgZoom, lgShare, lgHash]}
        speed={500}
        selector="a" // Use "a" selector for LightGallery
      >
        {/* Slider */}
        <Slider {...settings}>
          {artworks.map((item) => (
            <SlideImage item={item} key={item.id} />
          ))}
        </Slider>
      </LightGallery>
    </div>
  );
};

export default ArtSlider;
