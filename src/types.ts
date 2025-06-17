// import type { Database } from "@/utils/supabase/supabase";

// export type Work = Database["public"]["Tables"]["Works"]["Row"];

export type Work = {
    author: string | null;
    created_at: string;
    id: number;
    images: string[];
    title: string | null;
    type: string | null;
    year: number | null;
}