
import { columns} from "./columns"
import { DataTable } from "./data-table"
import { createClient } from "@/utils/supabase/server";


import {Work} from '../../../types'

export default async function Instruments() {
  const supabase = await createClient();
  const { data: works } = await supabase.from<"Works", Work>("Works").select();

  if (!works || works.length === 0) return <div>Ошибка на сервере</div>;

  return (
  <div className="container mx-auto py-10">
      <DataTable columns={columns} data={works} />
    </div>)
    ;
}
