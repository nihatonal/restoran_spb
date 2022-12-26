import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';

import MainNavigation from "./shared/navigation/MainNavigation";
import Main from "./Main/page/Main";
function App() {
  return (
    <BrowserRouter>
      <MainNavigation />
      <Routes>
        <Route exact path="/" element={<Main />} />
      </Routes>
      {/* <Footer /> */}
    </BrowserRouter>
  );
}

export default App;
