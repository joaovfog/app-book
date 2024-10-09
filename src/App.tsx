import { RouterProvider } from "react-router-dom";

import { router } from "./router";

import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from "react-toastify";

import { BookProvider } from "./context/book.context";
import { AuthorProvider } from "./context/author.context";

export const App = () => {
  return (
    <>
      <ToastContainer />
      <AuthorProvider>
        <BookProvider>
          <RouterProvider router={router} />
        </BookProvider>
      </AuthorProvider>
    </>
  );
};
