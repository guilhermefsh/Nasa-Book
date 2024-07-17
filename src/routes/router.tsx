import { Routes, Route } from "react-router-dom";
import { DefaultLayout } from '../Layouts';
import { Home } from "../pages/Home";
import { Gallery } from "../pages/Gallery";
import { About } from "../pages/About";
import { PageNotFound } from "../pages/404";
import { MarsRover } from "../pages/MarsRover";
import { InfoGallery } from "../pages/InfoGallery";

export const Router = () => (
  <Routes>
    <Route path='/' element={<DefaultLayout />}>
      <Route index element={<Home />} />
      <Route path='gallery' element={<Gallery />} />
      <Route path='about' element={<About />} />
      <Route path='marsrover' element={<MarsRover />} />
      <Route path='gallery/infogallery/:nasa_id' element={<InfoGallery />} />
      <Route path='*' element={<PageNotFound />} />
    </Route>
  </Routes>
);
