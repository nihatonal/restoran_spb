import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';


import MainNavigation from "./shared/navigation/MainNavigation";
import Main from "./Main/page/Main";
import CartProvider from './shared/context/CartContext';
import Footer from "./shared/footer/Footer";
import Contact from "./shared/components/Contact";
import Store from "./Cart/page/Store";

import './App.css'
function App() {


  return (
    <div className="root-wrapper">
      <CartProvider>
        <BrowserRouter>
          <MainNavigation />
          <Routes>
            <Route exact path="/" element={<Main />} />
            <Route exact path="/delivery" element={<Store />} />
            <Route exact path="/delivery/product/:pname" element={<Store />} />
          </Routes>
          <Contact />
          <Footer />
        </BrowserRouter>
      </CartProvider>
    </div>
  );
}

export default App;
