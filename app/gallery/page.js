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
    <>
      <div>
        <h1 className="text-4xl text-primary-100 font-medium">
          Wellcome To My Gallery
        </h1>
      </div>
      <ArtSlider artworks={data} />
    </>
  );
};
export default Page;
