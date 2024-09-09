"use client";
import React, { useRef, useEffect, useState } from "react";
import Image from "next/image";
import "lightgallery/css/lightgallery.css"; // Core LightGallery styles
import "lightgallery/css/lg-zoom.css"; // Zoom plugin styles
import "lightgallery/css/lg-thumbnail.css"; // Thumbnail plugin styles

import Masonry from "react-masonry-css"; // Import Masonry for layout

import Link from "next/link";
import { supabase } from "@/app/supabase";

const GenrePage = () => {
  const [artworks, setArtworks] = useState([]);

  useEffect(() => {
    const fetchArtworks = async () => {
      const { data, error } = await supabase.from("artworks").select("*");

      if (error) {
        console.error("Error fetching artworks:", error);
      } else {
        setArtworks(data);
      }
    };

    fetchArtworks();
  }, []);

  // useEffect(() => {
  //   if (lightboxRef.current) {
  //     lightboxRef.current.refresh();
  //   }
  // }, [images]);

  const masonryBreakpoints = {
    default: 4, // 3 columns by default
    1100: 3, // 2 columns at screen width <= 1100px
    700: 2, // 1 column at screen width <= 700px
    600: 1,
  };

  return (
    <div className="container mx-auto ">
      <h1 className="text-3xl font-bold text-center ">{}</h1>

      <Masonry
        breakpointCols={masonryBreakpoints}
        className="masonry-grid"
        columnClassName="masonry-grid-column"
      >
        {artworks.map((image) => (
          <Link
            key={image.id}
            href={`/painting/${image.id}`}
            className="    text-2xl"
          >
            <Image
              src={image.image_urls.test}
              alt={image.title}
              width={300}
              priority
              height={400}
              className="rounded-lg hover:opacity-75 cursor-pointer"
            />
            <p className="text-center ">{image.title}</p>

            {image.title}
          </Link>
        ))}
      </Masonry>

      {/* LightGallery for full-screen image viewing */}
      {/* <LightGallery
        plugins={[lgThumbnail, lgZoom]}
        speed={500}
        ref={lightboxRef}
      /> */}
    </div>
  );
};

export default GenrePage;
