import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Blue from "./Blue";
import Red from "./Red";

export default function MainSection() {
  return (
    <div id="main-section">
      <Routes>
        <Route index element={<Home />} />
        <Route path="/blue" element={<Blue />} />
        <Route path="/red" element={<Red />} />
      </Routes>
    </div>
  );
}
