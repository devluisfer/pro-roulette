
import './App.css';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from '../src/views/Home/Home';
import NotFound from '../src/views/NotFound/NotFound';

const basename = process.env.PUBLIC_URL;
const routes = [
  {
    path: "/",
    element: <Home />

  },
  {
    path: "/*",
    element: <NotFound />
  },

];
const router = createBrowserRouter(routes, {basename});
function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
