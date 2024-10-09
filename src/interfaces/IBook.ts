export interface IBook {
  id: number;
  name: string;
  author_id: number;
  author_name?: string;
  pages: string | null;
}
