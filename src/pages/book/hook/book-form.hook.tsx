import { useForm } from "react-hook-form";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { useBooksContext } from "../../../context/book.context";
import { useAuthorsContext } from "../../../context/author.context";
import { IBook } from "../../../interfaces/IBook";

const bookSchema = z.object({
  name: z.string().min(1, "Nome é obrigatório"),
  author_id: z.number().min(1, "Autor é obrigatório"),
  pages: z.string(),
});

type BookFormData = z.infer<typeof bookSchema>;

export const useBook = () => {
  const { books, addBook } = useBooksContext();
  const { authors } = useAuthorsContext()

  const form = useForm<BookFormData>({
    resolver: zodResolver(bookSchema),
    defaultValues: {
      pages: "",
      author_id: 0,
    },
  });

  const handleSubmit = (data: BookFormData) => {
    const bookId = books.length
      ? Math.max(...books.map((book) => book.id)) + 1
      : 1;

    const selectedAuthor = authors.find((author) => author.id === Number(data.author_id))

    const bookToAdd: IBook = {
      ...data,
      id: bookId,
      author_id: Number(data.author_id),
      author_name: selectedAuthor ? selectedAuthor.name : "Autor desconhecido",
      pages: data.pages || "0",
    };

    addBook(bookToAdd);
    form.reset();
  };

  return {
    form,
    handleSubmit,
  };
};
