import { supabase } from "@/app/supabase";
import ArtSlider from "../_components/ArtSlider";

async function getData() {
  const { data, error } = await supabase.from("artworks").select("*");
  if (error) {
    throw new Error("Failed to fetch data");
  }
  return data;
}

const Page = async () => {
  const data = await getData();
  console.log("data ", data);
  return (
    <div>
      <div>
        <h1 className="text-4xl text-primary-100 text-center mb-2font-medium">
          Gallery
        </h1>
      </div>
      <ArtSlider artworks={data} />
    </div>
  );
};
export default Page;
