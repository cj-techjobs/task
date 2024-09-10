import { Routes, Route } from 'react-router-dom';
import "./App.css";
import MainContent from "./MainContent";
import { Home } from "./pages/Home";
import { Cart } from "./pages/Cart";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<MainContent />} />
        <Route path=APIS.CART element={<Cart />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
