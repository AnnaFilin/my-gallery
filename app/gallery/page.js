// import { useEffect, useState } from "react";
import { supabase } from "../supabase";
import ArtSlider from "../_components/ArtSlider";

const Page = async () => {
  // useEffect(() => {
  // const artworks = async () => {
  const { data, error } = await supabase.from("artworks").select("*");

  // if (error) {
  //   console.error("Error fetching artworks:", error);
  // } else {
  //   setArtworks(data);
  // }
  // };

  //   fetchArtworks();
  // }, []);
  // console.log(artworks);

  return (
    <div>
      <h1 className="text-4xl text-accent-400 font-medium">
        Wellcome To My Gallery
      </h1>
      {data.length > 0 && <ArtSlider artworks={data} />}
    </div>
  );
};
export default Page;
