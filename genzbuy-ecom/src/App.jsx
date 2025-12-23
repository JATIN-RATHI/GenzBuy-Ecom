import { BrowserRouter, Routes, Route } from "react-router-dom";
import AllProducts from "./pages/AllProducts";
import Home from "./components/Home";
import TopWear from "./pages/TopWear";
import BottomWear from "./pages/BottomWear";
import Footwear from "./pages/Footwear";
import FreshArrivals from "./pages/FreshArrivals";
import Essentials from "./pages/Essentials";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/AllProducts" element={<AllProducts />} />
        <Route path="/TopWear" element={<TopWear />} />
        <Route path="/BottomWear" element={<BottomWear />} />
        <Route path="/Footwear" element={<Footwear />} />
        <Route path="/FreshArrivals" element={<FreshArrivals />} />
        <Route path="/Essentials" element={<Essentials />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;