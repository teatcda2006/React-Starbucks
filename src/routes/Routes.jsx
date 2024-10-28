import { Route, Routes } from "react-router-dom";

import Main from "../pages/Main";
import Menu from "../pages/Menu";
import Delivery from "../pages/Delivery";

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/menu" element={<Menu />} />
      <Route path="/delivery" element={<Delivery />} />
    </Routes>
  );
}
