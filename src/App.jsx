import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home/Home"
import Blog from "./pages/Blog/Blog"
import About from "./pages/About/About"
import NotFoundPage from "./pages/NotFoundPage";

const routes = createBrowserRouter([
  {
    path: "/", element: <Layout />, children: [
      { index: true, element: <Home /> },
      { path: "/blog", element: <Blog /> },
      { path: "/about", element: <About /> },
      { path: "*", element: <NotFoundPage /> },
    ]
  },
])

function App() {

  return (
    <>
      <RouterProvider router={routes}></RouterProvider>
    </>
  )
};

export default App;
