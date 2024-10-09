import { createContext, ReactNode, useContext, useState } from "react";

import { IBook } from "../interfaces/IBook";

interface BookContextType {
  books: IBook[];
  addBook: (newBook: IBook) => void;
  removeBook: (bookId: number) => void;
}

const BookContext = createContext<BookContextType | undefined>(undefined);

export const BookProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [books, setBooks] = useState<IBook[]>(() => {
    const storedBooks = localStorage.getItem("books");

    return storedBooks ? JSON.parse(storedBooks) : [];
  });

  const addBook = (newBook: IBook) => {
    const updateBooks = [...books, newBook];

    setBooks(updateBooks);
    localStorage.setItem("books", JSON.stringify(updateBooks));
  };

  const removeBook = (bookId: number) => {
    const updatedBooks = books.filter((book) => book.id !== bookId);

    setBooks(updatedBooks);
    localStorage.setItem("books", JSON.stringify(updatedBooks));
  };

  return (
    <BookContext.Provider value={{ books, addBook, removeBook }}>
      {children}
    </BookContext.Provider>
  );
};

export const useBooksContext = (): BookContextType => {
  const context = useContext(BookContext);

  if (!context) {
    throw new Error("useBooks must be used within a BookProvider");
  }

  return context;
};
