import { Routes, Route } from "react-router-dom";
import { DefaultLayout } from '../Layouts';
import { Home } from "../pages/Home";
import { Gallery } from "../pages/Gallery";
import { About } from "../pages/About";
import { PageNotFound } from "../pages/404";

export const Router = () => (
  <Routes>
    <Route path='/' element={<DefaultLayout />}>
      <Route index element={<Home />} />
      <Route path='gallery' element={<Gallery />} />
      <Route path='about' element={<About />} />
      <Route path='*' element={<PageNotFound />} />
    </Route>
  </Routes>
);
