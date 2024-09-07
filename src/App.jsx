import { Routes, Route } from 'react-router-dom';
import "./App.css";
import MainContent from "./MainContent";
import { Home } from "./pages/Home";
import { Cart } from "./pages/Cart";
import Giftcard from './giftcard/Giftcard';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<MainContent />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/giftcard" element={<Giftcard />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
