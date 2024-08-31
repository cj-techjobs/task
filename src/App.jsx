import "./App.css";
import { Home } from "./pages/Home";
import { Cart } from "./pages/Cart";
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="*" element={<Home />} />
         </Routes>
    </>
  );
}

export default App;
