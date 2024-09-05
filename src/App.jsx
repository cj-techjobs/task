import { Routes, Route } from 'react-router-dom';
import { Provider } from "react-redux";
import store from "./store";
import "./App.css";
import store from "./store";
import MainContent from "./MainContent";
import Header from "./Components/Header";
import { Home } from "./pages/Home";
import { Cart } from "./pages/Cart";

function App() {
  return (
    <Provider store={store}>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
         <Route path="/product/:id" element={<MainContent />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </Provider>
  );
}

export default App;
