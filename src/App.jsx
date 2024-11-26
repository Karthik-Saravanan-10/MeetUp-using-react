import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Header from "./pages/Header";
import Favorites from "./components/Favorites";
import Meet, { dataSender } from "./components/Meet";
import Meetupview from "./pages/Meetupview";
import {Favoritestore} from "./store/Favoritestore";

let routers = createBrowserRouter([
  {
    path: "/",
    element: <Header />,
    children: [
      {
        path: "/",
        element: <Meetupview />,
      },
      { path: "/favorite", element: <Favorites /> },
      { path: "/meet", element: <Meet />, action: dataSender },
    ],
  },
]);

function App() {
  return (
    <>
      <Favoritestore>
        <RouterProvider router={routers} />
      </Favoritestore>
    </>
  );
}

export default App;
