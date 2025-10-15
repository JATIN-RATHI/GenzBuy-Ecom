import { BrowserRouter, Routes, Route } from "react-router-dom";
import AllProducts from "./pages/AllProducts";
import Home from "./components/Home";
import ReactDOM from 'react-dom/client';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/AllProducts" element={<AllProducts />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;