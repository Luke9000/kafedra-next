export type Work = {
  id: number;
  created_at: string;
  title: string | null;
  type: string | null;
  author: string | null;
  titleImage: string | null;
  images: string[];
  year: number | null;
};
