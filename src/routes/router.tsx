import { Routes, Route } from "react-router-dom";
import { DefaultLayout } from '../Layouts';
import { Home } from "../pages/Home";

export const Router = () => (
  <Routes>
    <Route path="/" element={<DefaultLayout />}>
      <Route index element={<Home />} />
    </Route>
  </Routes>
);
