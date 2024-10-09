import { RouterProvider } from "react-router-dom";

import { router } from "./router";

import { BookProvider } from "./context/book.context";
import { AuthorProvider } from "./context/author.context";

export const App = () => {
  return (
    <AuthorProvider>
      <BookProvider>
        <RouterProvider router={router} />
      </BookProvider>
    </AuthorProvider>
  );
};
