"use client";
import Painting from "@/app/_components/Painting";
import { supabase } from "@/app/supabase";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Page({ params }) {
  // const router = useRouter();
  const [paintingData, setPaintingData] = useState(null);
  const [error, setError] = useState(null);

  // Ensure params and params.id exist before using them
  useEffect(() => {
    if (!params || !params.id) {
      setError("Invalid painting ID");
      return;
    }

    // Fetch painting data
    const fetchPainting = async () => {
      const { data, error } = await supabase
        .from("artworks")
        .select("*")
        .eq("id", params.id)
        .single();

      if (error) {
        setError(error.message);
      } else {
        console.log(data);
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
