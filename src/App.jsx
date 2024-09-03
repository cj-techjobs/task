import { Routes, Route } from 'react-router-dom';
import { Provider } from "react-redux";
import store from "./store";
import "./App.css";
import Header from "./Components/Header";
import ProductDetails from "./Components/ProductDetails/ProductDetails";
import { Home } from "./pages/Home";
import { Cart } from "./pages/Cart";

function App() {
  return (
    <Provider store={store}>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<Home />} />
      </Routes>
      <ProductDetails />
    </Provider>
  );
}

export default App;
