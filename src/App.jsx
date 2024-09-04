import "./App.css";
import { Home } from "./pages/Home";
import { MyCart } from "./pages/MyCart";
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<MyCart />} />
            <Route path="*" element={<Home />} />
         </Routes>
    </>
  );
}

export default App;
