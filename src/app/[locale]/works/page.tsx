import { createClient } from "@/utils/supabase/server";
import type { Work } from '../../../types';
import Ui from "./Ui";


export default async function Instruments() {
  const supabase = await createClient();
  const { data: works } = await supabase.from<"Works", Work>("Works").select();

  if (!works || works.length === 0) return <div>Перезагрузите страницу</div>;

  return <Ui works={works}></Ui>;
}
