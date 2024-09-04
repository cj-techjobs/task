import { useState } from "react";
import viteLogo from "/vite.svg";
import "./App.css";
import { Provider } from "react-redux";
import store from "./store";
import MainContent from "./MainContent";

function App() {
  return (
    <Provider store={store}>
      <MainContent />
    </Provider>
  );
}

export default App;
