import { createBrowserRouter } from "react-router-dom";
import { DefaultLayout } from '../Layouts';
import { Home } from "../pages/Home";
import { Gallery } from "../pages/Gallery";
import { About } from "../pages/About";
import { PageNotFound } from "../pages/404";
import { MarsRover } from "../pages/MarsRover";
import { InfoGallery } from "../pages/InfoGallery";

export const Router = createBrowserRouter([
  {
    element: <DefaultLayout />,
    errorElement: <PageNotFound />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: 'gallery/infogallery/:nasa_id',
        element: <InfoGallery />
      },
      {
        path: "/marsrover",
        element: <MarsRover />
      },
      {
        path: '/gallery',
        element: <Gallery />
      },
      {
        path: '/about',
        element: <About />
      }
    ]
  }
]);
