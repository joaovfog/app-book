import { createContext, ReactNode, useContext, useState } from "react";

import { toast } from "react-toastify";

import { IAuthor } from "../interfaces/IAuthor";

interface AuthorContextType {
  authors: IAuthor[];
  addAuthor: (newAuthor: IAuthor) => void;
  removeAuthor: (authorId: number) => void;
}

const AuthorContext = createContext<AuthorContextType | undefined>(undefined);

export const AuthorProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [authors, setAuthors] = useState<IAuthor[]>(() => {
    const storedAuthors = localStorage.getItem("authors");

    return storedAuthors ? JSON.parse(storedAuthors) : [];
  });

  const addAuthor = (newAuthor: IAuthor) => {
    const updateAuthors = [...authors, newAuthor];

    setAuthors(updateAuthors);
    localStorage.setItem("authors", JSON.stringify(updateAuthors));

    toast.success("Autor cadastrado com sucesso!");
  };

  const removeAuthor = (authorId: number) => {
    const updatedAuthors = authors.filter((author) => author.id !== authorId);

    setAuthors(updatedAuthors);
    localStorage.setItem("authors", JSON.stringify(updatedAuthors));

    toast.success("Autor excluído com sucesso!");
  };

  return (
    <AuthorContext.Provider value={{ authors, addAuthor, removeAuthor }}>
      {children}
    </AuthorContext.Provider>
  );
};

export const useAuthorsContext = (): AuthorContextType => {
  const context = useContext(AuthorContext);

  if (!context) {
    throw new Error("useAuthors must be used within a AuthorProvider");
  }

  return context;
};
