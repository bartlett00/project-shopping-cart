import Home from "./Components/Homepage/Home";
import Store from "./Components/Storepage/Store";
import Cart from "./Components/Cart/Cart";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
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

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
