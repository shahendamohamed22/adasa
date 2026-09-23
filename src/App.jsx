import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home/Home"
import Blog from "./pages/Blog/Blog"
import About from "./pages/About/About"
import NotFound from "./pages/NotFound";
import BlogDetails from "./pages/Blog/BlogDetails";

const routes = createBrowserRouter([
  {
    path: "/", element: <Layout />, children: [
      { index: true, element: <Home /> },
      { path: "/blog", element: <Blog />, },
      { path: "/blog/:articleSlug", element: <BlogDetails /> },
      { path: "/about", element: <About /> },
      { path: "*", element: <NotFound /> },
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
