
import './App.css';
// import { createBrowserRouter, RouterProvider, createHashRouter } from "react-router-dom";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from '../src/views/Home/Home';
import NotFound from '../src/views/NotFound/NotFound';
import Game from '../src/views/Game/Game';

const basename = process.env.PUBLIC_URL;
const routes = [
  {
    path: "/",
    element: <Home />

  },
  {
    path: "/game",
    element: <Game />
  },
  {
    path: "/*",
    element: <NotFound />
  },

];
const router = createBrowserRouter(routes
  , {basename}
);
function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
