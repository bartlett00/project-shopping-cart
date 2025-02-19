import Home from "./Components/Homepage/Home";
import Store from "./Components/Storepage/Store";
import Cart from "./Components/Cart/Cart";
import Error from "./Components/Error";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import PageWrapper from "./Components/PageWrapper/PageWrapper";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <Error />,
  },
  {
    path: "store",
    element: <Store />,
  },
  {
    path: "cart",
    element: <Cart />,
  },
]);

const newRouter = createBrowserRouter([
  {
    path: "/",
    element: <PageWrapper />,
    errorElement: <Error />,
    children: [
      { path: "home", element: <Home /> },
      { path: "store", element: <Store /> },
      { path: "cart", element: <Cart /> },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={newRouter} />
    </>
  );
}

export default App;
