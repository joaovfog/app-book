import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useBooksContext } from "../../../context/book.context";
import { IBook } from "../../../interfaces/IBook";

const bookSchema = z.object({
  name: z.string().min(1, "Nome é obrigatório"),
  author_id: z.string().min(1, "Autor é obrigatório"),
  pages: z.number(),
});

type BookFormData = z.infer<typeof bookSchema>;

export const useBook = () => {
  const { books, addBook } = useBooksContext();

  const form = useForm<BookFormData>({
    resolver: zodResolver(bookSchema),
    defaultValues: {
      name: "",
      author_id: "João Vitor Fogaça",
      pages: 0,
    },
  });

  const handleSubmit = (data: BookFormData) => {
    const bookId = books.length
      ? Math.max(...books.map((book) => book.id)) + 1
      : 1;

    const bookToAdd: IBook = {
      ...data,
      id: bookId,
    };

    addBook(bookToAdd);
    form.reset();
  };

  return {
    form,
    handleSubmit,
  };
};
