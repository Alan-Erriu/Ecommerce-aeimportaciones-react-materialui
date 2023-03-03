import Navbar from "./components/Navbar";
import KeyboardsPage from "./components/KeyboardsPage";
import { StateProvider } from "./components/contex/CartContex";
import CheckoutPage from "./components/CheckoutPage";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Home from "./components/Home";
import MousesPage from "./components/MousesPage";
import AccessoriesPage from "./components/AccessoriesPage";

function App() {
  return (
    <div>
      <StateProvider>
        <Navbar />

        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/teclados" element={<KeyboardsPage />} />
          <Route path="/mouses" element={<MousesPage />} />
          <Route path="/accesorios" element={<AccessoriesPage />} />
          <Route path="/carrito" element={<CheckoutPage />} />
        </Routes>
        <Footer />
      </StateProvider>
    </div>
  );
}

export default App;
