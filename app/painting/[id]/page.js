"use client";
import Painting from "@/app/_components/Painting";
import { supabase } from "@/app/supabase";
import { useEffect, useState } from "react";

export default function Page({ params }) {
  const [paintingData, setPaintingData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!params || !params.id) {
      setError("Invalid painting ID");
      return;
    }

    const fetchPainting = async () => {
      const { data, error } = await supabase
        .from("artworks")
        .select("*")
        .eq("id", params.id)
        .single();

      if (error) {
        setError(error.message);
      } else {
        setPaintingData(data);
      }
    };

    fetchPainting();
  }, [params]);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!paintingData) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Painting painting={paintingData} />
    </div>
  );
}
