import Header from "./header/Header";
import Home from "./Home";
import BookDetails from "./BookDetails";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "books/:bookId",
    element: <BookDetails />,
  },
]);

export default function App() {
  return (
    <div>
      <Header />
      <RouterProvider router={router} />
    </div>
  );
}
