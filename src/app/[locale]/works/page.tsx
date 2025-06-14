import { createClient } from "@/utils/supabase/server";
import type { Database } from "@/utils/supabase/supabase";
import Ui from "./Ui";

type Work = Database["public"]["Tables"]["Works"]["Row"];

export default async function Instruments() {
  const supabase = await createClient();
  const { data: works } = await supabase.from<"Works", Work>("Works").select();

  if (!works || works.length === 0) return <div>Ошибка на сервере</div>;
  const bucket = supabase.storage.from("works-images");

  const worksWithFullUrls: Work[] = works.map((work) => {
    const fullImageUrls = work.images.map(
      (filename: string) => bucket.getPublicUrl(filename).data.publicUrl
    );

    return {
      ...work,
      titleImage: fullImageUrls[0] ?? work.titleImage,
      images: fullImageUrls,
    };
  });
  // const imageFilename = works[0].titleImage;
  // const {
  //   data: { publicUrl },
  // } = supabase.storage.from("works-images").getPublicUrl(imageFilename);

  return <Ui works={worksWithFullUrls}></Ui>;
}
