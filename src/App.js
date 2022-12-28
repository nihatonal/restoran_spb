import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';

import MainNavigation from "./shared/navigation/MainNavigation";
import Main from "./Main/page/Main";
import CartProvider from './shared/context/CartContext';
import Footer from "./shared/footer/Footer";

import Store from "./Cart/page/Store";

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <MainNavigation />
        <Routes>
          <Route exact path="/" element={<Main />} />
          <Route exact path="/store" element={<Store />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
