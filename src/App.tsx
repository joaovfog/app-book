import { RouterProvider } from "react-router-dom";

import { router } from "./router";

import { BookProvider } from "./context/book.context";

export const App = () => {
  return (
    <BookProvider>
      <RouterProvider router={router} />
    </BookProvider>
  );
};
