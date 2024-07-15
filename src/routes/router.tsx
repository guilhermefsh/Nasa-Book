import { Routes, Route } from "react-router-dom";
import { DefaultLayout } from '../Layouts';
import { Home } from "../pages/Home";
import { Gallery } from "../pages/Gallery";

export const Router = () => (
  <Routes>
    <Route path='/' element={<DefaultLayout />}>
      <Route index element={<Home />} />
      <Route path='gallery' element={<Gallery />} />
      <Route path='about' element={<Home />} />
    </Route>
  </Routes>
);
