import { createBrowserRouter } from "react-router-dom";

import { Author, Book, NotFound } from "./pages";
import { Layout } from "./layout/layout";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: "/books",
                element: <Book />,
            },
            {
                path: "/authors",
                element: <Author />,
            },
        ]
    },
    {
        path: '*',
        element: <NotFound />,
    },
])