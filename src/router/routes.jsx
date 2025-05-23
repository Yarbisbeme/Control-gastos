
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, Login } from "../index";
export function MyRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}