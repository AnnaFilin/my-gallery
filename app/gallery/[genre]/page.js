"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import "lightgallery/css/lightgallery.css"; // Core LightGallery styles
import "lightgallery/css/lg-zoom.css"; // Zoom plugin styles
import "lightgallery/css/lg-thumbnail.css"; // Thumbnail plugin styles

import Masonry from "react-masonry-css"; // Import Masonry for layout

import Link from "next/link";
import { supabase } from "@/app/supabase";

const GenrePage = ({ params }) => {
  const [artworks, setArtworks] = useState([]);

  useEffect(() => {
    const fetchArtworks = async () => {
      const { data, error } = await supabase
        .from("artworks")
        .select("*")
        .eq("genre", params.genre);

      if (error) {
        console.error("Error fetching artworks:", error);
      } else {
        setArtworks(data);
      }
    };

    fetchArtworks();
  }, []);

  const masonryBreakpoints = {
    default: 4,
    1100: 3, // 3 columns at screen width <= 1100px
    700: 2, // 2 columns at screen width <= 700px
    600: 1, // 1 column at screen width <= 600px
  };

  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold text-center capitalize mb-6">
        {params.genre}
      </h1>

      <Masonry
        breakpointCols={masonryBreakpoints}
        className="masonry-grid"
        columnClassName="masonry-grid-column gap-1 "
      >
        {artworks.map((image) => (
          <div
            key={image.id}
            className="bg-white border my-2 border-gray-200 rounded-lg p-1 shadow-md overflow-hidden"
          >
            <Link href={`/painting/${image.id}`}>
              {/* Image with hover effect */}
              <Image
                src={image.image_urls.test || image.image_urls.large}
                alt={image.title}
                priority
                layout="responsive"
                width={500}
                height={500}
                sizes="(min-width: 60em) 24vw,
                     (min-width: 28em) 45vw,
                     100vw"
                className="hover:opacity-90 cursor-pointer"
              />
              <p className="text-primary-700 text-md font-semibold p-1">
                {image.title}
              </p>
            </Link>
          </div>
        ))}
      </Masonry>
    </div>
  );
};

export default GenrePage;
